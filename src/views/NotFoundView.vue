<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Rediriger vers la page d'accueil
function goToHome() {
  router.push('/');
}

// Animation
onMounted(() => {
  document.body.classList.add('not-found-page');
  
  return () => {
    document.body.classList.remove('not-found-page');
  };
});
</script>

<template>
  <main class="flex-grow pt-20 pb-16 flex items-center justify-center">
    <div class="container mx-auto px-4 text-center">
      <div class="error-container">
        <div class="error-code">404</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Page Non Trouvée</h1>
        <p class="text-xl mb-10 max-w-2xl mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Peut-être avez-vous mal saisi l'adresse ou la page a été supprimée.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            @click="goToHome"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-colors"
          >
            Retour à l'accueil
          </button>
          <button 
            @click="() => window.history.back()"
            class="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow-lg transition-colors"
          >
            Page précédente
          </button>
        </div>
        
        <!-- Illustration -->
        <div class="mt-16 max-w-lg mx-auto">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="w-full h-auto">
              <circle cx="250" cy="250" r="200" fill="#f3f4f6" class="dark:fill-gray-800" />
              <path d="M250 50C139.543 50 50 139.543 50 250s89.543 200 200 200 200-89.543 200-200S360.457 50 250 50zm0 380c-99.411 0-180-80.589-180-180S150.589 70 250 70s180 80.589 180 180-80.589 180-180 180z" fill="#e5e7eb" class="dark:fill-gray-700" />
              
              <!-- Oeil gauche triste -->
              <circle cx="175" cy="220" r="25" fill="#3b82f6" />
              <path d="M175 245c-13.807 0-25-11.193-25-25s11.193-25 25-25" stroke="#3b82f6" stroke-width="2" fill="none" />
              
              <!-- Oeil droit triste -->
              <circle cx="325" cy="220" r="25" fill="#3b82f6" />
              <path d="M325 245c-13.807 0-25-11.193-25-25s11.193-25 25-25" stroke="#3b82f6" stroke-width="2" fill="none" />
              
              <!-- Bouche triste -->
              <path d="M175 320c25-30 125-30 150 0" stroke="#3b82f6" stroke-width="8" fill="none" stroke-linecap="round" />
            </svg>
            
            <!-- Éléments animés -->
            <div class="absolute top-0 left-0 w-full h-full">
              <div class="floating-element floating-1"></div>
              <div class="floating-element floating-2"></div>
              <div class="floating-element floating-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.error-container {
  animation: fadeInUp 0.8s ease-out forwards;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.error-code::after {
  content: '';
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  filter: blur(15px);
  opacity: 0.7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Éléments flottants animés */
.floating-element {
  position: absolute;
  background-color: #3b82f6;
  border-radius: 50%;
  opacity: 0.3;
}

.floating-1 {
  width: 20px;
  height: 20px;
  top: 20%;
  left: 20%;
  animation: float 8s ease-in-out infinite;
}

.floating-2 {
  width: 15px;
  height: 15px;
  top: 30%;
  right: 25%;
  animation: float 6s ease-in-out infinite;
  animation-delay: 1s;
}

.floating-3 {
  width: 25px;
  height: 25px;
  bottom: 20%;
  right: 30%;
  animation: float 10s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

/* Mode sombre */
:deep(.dark) .error-code {
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:deep(.dark) .error-code::after {
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
}

:deep(.dark) .floating-element {
  background-color: #60a5fa;
}
</style>