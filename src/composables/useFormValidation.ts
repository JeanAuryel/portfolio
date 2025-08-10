import { ref, reactive, computed, watch } from 'vue';

// Types pour la validation
export interface ValidationRule {
  (value: any): boolean | string;
}

export interface FieldValidation {
  value: any;
  rules: ValidationRule[];
  error: string | null;
  touched: boolean;
  valid: boolean;
}

export interface FormValidation {
  [key: string]: FieldValidation;
}

// Règles de validation prédéfinies
export const validationRules = {
  required: (message = 'Ce champ est requis'): ValidationRule => {
    return (value: any) => {
      if (value === null || value === undefined || value === '') {
        return message;
      }
      if (Array.isArray(value) && value.length === 0) {
        return message;
      }
      return true;
    };
  },

  minLength: (min: number, message?: string): ValidationRule => {
    return (value: string) => {
      if (!value) return true; // Laisser required gérer les valeurs vides
      if (value.length < min) {
        return message || `Minimum ${min} caractères requis`;
      }
      return true;
    };
  },

  maxLength: (max: number, message?: string): ValidationRule => {
    return (value: string) => {
      if (!value) return true;
      if (value.length > max) {
        return message || `Maximum ${max} caractères autorisés`;
      }
      return true;
    };
  },

  email: (message = 'Adresse email invalide'): ValidationRule => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (value: string) => {
      if (!value) return true;
      if (!emailRegex.test(value)) {
        return message;
      }
      return true;
    };
  },

  phone: (message = 'Numéro de téléphone invalide'): ValidationRule => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return (value: string) => {
      if (!value) return true;
      if (!phoneRegex.test(value)) {
        return message;
      }
      return true;
    };
  },

  url: (message = 'URL invalide'): ValidationRule => {
    const urlRegex = /^https?:\/\/.+\..+/;
    return (value: string) => {
      if (!value) return true;
      if (!urlRegex.test(value)) {
        return message;
      }
      return true;
    };
  },

  numeric: (message = 'Seuls les chiffres sont autorisés'): ValidationRule => {
    return (value: string) => {
      if (!value) return true;
      if (!/^\d+$/.test(value)) {
        return message;
      }
      return true;
    };
  },

  alphaNumeric: (message = 'Seuls les lettres et chiffres sont autorisés'): ValidationRule => {
    return (value: string) => {
      if (!value) return true;
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return message;
      }
      return true;
    };
  },

  match: (targetValue: any, message = 'Les valeurs ne correspondent pas'): ValidationRule => {
    return (value: any) => {
      if (value !== targetValue) {
        return message;
      }
      return true;
    };
  },

  custom: (validator: (value: any) => boolean, message: string): ValidationRule => {
    return (value: any) => {
      if (!validator(value)) {
        return message;
      }
      return true;
    };
  }
};

export const useFormValidation = (initialFields: Record<string, any> = {}) => {
  // État du formulaire
  const fields = reactive<FormValidation>({});
  const isSubmitting = ref(false);
  const submitError = ref<string | null>(null);

  // Initialiser les champs
  const initializeFields = (fieldsConfig: Record<string, { value?: any; rules?: ValidationRule[] }>) => {
    Object.keys(fieldsConfig).forEach(fieldName => {
      const config = fieldsConfig[fieldName];
      fields[fieldName] = {
        value: config.value || '',
        rules: config.rules || [],
        error: null,
        touched: false,
        valid: true
      };
    });
  };

  // Ajouter un champ
  const addField = (name: string, value: any = '', rules: ValidationRule[] = []) => {
    fields[name] = {
      value,
      rules,
      error: null,
      touched: false,
      valid: true
    };
  };

  // Valider un champ
  const validateField = (fieldName: string): boolean => {
    const field = fields[fieldName];
    if (!field) return true;

    for (const rule of field.rules) {
      const result = rule(field.value);
      if (result !== true) {
        field.error = result;
        field.valid = false;
        return false;
      }
    }

    field.error = null;
    field.valid = true;
    return true;
  };

  // Valider tous les champs
  const validateAll = (): boolean => {
    let allValid = true;
    
    Object.keys(fields).forEach(fieldName => {
      const isValid = validateField(fieldName);
      if (!isValid) allValid = false;
    });

    return allValid;
  };

  // Mettre à jour la valeur d'un champ
  const updateField = (fieldName: string, value: any) => {
    if (fields[fieldName]) {
      fields[fieldName].value = value;
      fields[fieldName].touched = true;
      
      // Validation en temps réel pour ce champ
      validateField(fieldName);
    }
  };

  // Marquer un champ comme touché
  const touchField = (fieldName: string) => {
    if (fields[fieldName]) {
      fields[fieldName].touched = true;
      validateField(fieldName);
    }
  };

  // Réinitialiser un champ
  const resetField = (fieldName: string) => {
    if (fields[fieldName]) {
      fields[fieldName].value = '';
      fields[fieldName].error = null;
      fields[fieldName].touched = false;
      fields[fieldName].valid = true;
    }
  };

  // Réinitialiser tous les champs
  const resetForm = () => {
    Object.keys(fields).forEach(fieldName => {
      resetField(fieldName);
    });
    submitError.value = null;
  };

  // Obtenir les valeurs du formulaire
  const getFormData = () => {
    const data: Record<string, any> = {};
    Object.keys(fields).forEach(fieldName => {
      data[fieldName] = fields[fieldName].value;
    });
    return data;
  };

  // Soumettre le formulaire
  const submitForm = async (submitHandler: (data: Record<string, any>) => Promise<void>) => {
    isSubmitting.value = true;
    submitError.value = null;

    try {
      // Marquer tous les champs comme touchés
      Object.keys(fields).forEach(fieldName => {
        fields[fieldName].touched = true;
      });

      // Valider tous les champs
      const isValid = validateAll();
      
      if (!isValid) {
        isSubmitting.value = false;
        return false;
      }

      // Exécuter le handler de soumission
      await submitHandler(getFormData());
      isSubmitting.value = false;
      return true;
    } catch (error) {
      submitError.value = error instanceof Error ? error.message : 'Erreur lors de la soumission';
      isSubmitting.value = false;
      return false;
    }
  };

  // Computed properties
  const isFormValid = computed(() => {
    return Object.values(fields).every(field => field.valid);
  });

  const hasErrors = computed(() => {
    return Object.values(fields).some(field => field.error !== null);
  });

  const touchedFields = computed(() => {
    return Object.values(fields).filter(field => field.touched);
  });

  const invalidFields = computed(() => {
    return Object.entries(fields)
      .filter(([, field]) => !field.valid)
      .map(([name]) => name);
  });

  // Initialiser avec les champs initiaux si fournis
  if (Object.keys(initialFields).length > 0) {
    initializeFields(initialFields);
  }

  return {
    // État
    fields,
    isSubmitting,
    submitError,
    
    // Actions
    initializeFields,
    addField,
    updateField,
    touchField,
    validateField,
    validateAll,
    resetField,
    resetForm,
    submitForm,
    getFormData,
    
    // Computed
    isFormValid,
    hasErrors,
    touchedFields,
    invalidFields,
    
    // Utilitaires
    getValue: (fieldName: string) => fields[fieldName]?.value,
    getError: (fieldName: string) => fields[fieldName]?.error,
    isFieldValid: (fieldName: string) => fields[fieldName]?.valid ?? true,
    isFieldTouched: (fieldName: string) => fields[fieldName]?.touched ?? false
  };
};