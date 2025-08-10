<script setup lang="ts">
export interface Skill {
  name: string;
  level?: number; // Niveau de compétence de 1 à 10
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon?: string;
}

export interface SkillsListProps {
  skills: Skill[];
  showLevels?: boolean;
  displayMode?: 'grid' | 'list';
}

withDefaults(defineProps<SkillsListProps>(), {
  showLevels: false,
  displayMode: 'grid'
});

const getCategoryIcon = (category: string) => {
  const icons = {
    frontend: '🎨',
    backend: '⚙️',
    tools: '🛠️',
    soft: '💡'
  };
  return icons[category as keyof typeof icons];
};

const getCategoryColor = (category: string) => {
  const colors = {
    frontend: 'text-blue-600',
    backend: 'text-green-600',
    tools: 'text-purple-600',
    soft: 'text-orange-600'
  };
  return colors[category as keyof typeof colors];
};

const skillsByCategory = computed(() => {
  const grouped: Record<string, Skill[]> = {};
  props.skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });
  return grouped;
});
</script>

<template>
  <div v-if="displayMode === 'grid'" class="space-y-8">
    <div 
      v-for="(categorySkills, category) in skillsByCategory" 
      :key="category"
      class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
    >
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="mr-2">{{ getCategoryIcon(category) }}</span>
        <span :class="getCategoryColor(category)">
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </span>
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="skill in categorySkills" 
          :key="skill.name"
          class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
        >
          <div class="flex items-center">
            <span v-if="skill.icon" class="mr-2">{{ skill.icon }}</span>
            <span class="font-medium">{{ skill.name }}</span>
          </div>
          
          <div v-if="showLevels && skill.level" class="flex items-center">
            <div class="flex space-x-1 mr-2">
              <div 
                v-for="i in 10" 
                :key="i"
                class="w-2 h-2 rounded-full"
                :class="i <= skill.level ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'"
              ></div>
            </div>
            <span class="text-sm text-gray-500">{{ skill.level }}/10</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="space-y-4">
    <div 
      v-for="skill in skills" 
      :key="skill.name"
      class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div class="flex items-center">
        <span v-if="skill.icon" class="mr-3 text-xl">{{ skill.icon }}</span>
        <div>
          <span class="font-medium text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ getCategoryIcon(skill.category) }} {{ skill.category }}
          </div>
        </div>
      </div>
      
      <div v-if="showLevels && skill.level" class="flex items-center">
        <div class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
          <div 
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="`width: ${skill.level * 10}%`"
          ></div>
        </div>
        <span class="text-sm font-medium">{{ skill.level }}/10</span>
      </div>
    </div>
  </div>
</template>