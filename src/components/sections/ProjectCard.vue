<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import Badge from '@/components/ui/Badge.vue';

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  link?: string;
}

export interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

const props = withDefaults(defineProps<ProjectCardProps>(), {
  isActive: false
});

const emits = defineEmits<{
  click: [project: Project];
  openLink: [url: string];
}>();

const handleCardClick = () => {
  emits('click', props.project);
};

const handleLinkClick = (event: MouseEvent) => {
  event.stopPropagation();
  if (props.project.link) {
    emits('openLink', props.project.link);
  }
};
</script>

<template>
  <Card 
    @click="handleCardClick"
    :hover="!isActive"
    class="project-card cursor-pointer"
    :class="{ 'ring-2 ring-blue-500': isActive }"
  >
    <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
      <img 
        :src="project.image" 
        :alt="project.name" 
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">
        {{ project.name }}
      </h3>
      <button 
        v-if="project.link"
        @click="handleLinkClick"
        class="text-blue-500 hover:text-blue-600 transition-colors"
        title="Ouvrir le projet"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </button>
    </div>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ project.description }}
    </p>
    
    <div class="flex flex-wrap gap-2 mb-3">
      <Badge 
        v-for="tech in project.technologies.slice(0, 3)" 
        :key="tech"
        size="sm"
        variant="blue"
      >
        {{ tech }}
      </Badge>
      <Badge 
        v-if="project.technologies.length > 3"
        size="sm"
        variant="gray"
      >
        +{{ project.technologies.length - 3 }}
      </Badge>
    </div>
    
    <div class="text-sm text-gray-500 dark:text-gray-400">
      {{ project.date }}
    </div>
  </Card>
</template>

<style scoped>
.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}
</style>