<template>
  <div
    class="p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl bg-opacity-80"
    :class="{ 'bg-white text-black': !nightMode, 'bg-gray-800 text-white': nightMode }"
  >
    <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mx-auto mb-4" />
    <h2 class="text-xl font-semibold font-poppins text-center">{{ skill.name }}</h2>
    <p class="text-sm mt-2 font-poppins text-center">{{ skill.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  icon: string
  name: string
  description: string
}

defineProps<{
  skill: Skill
  nightMode?: boolean
}>()
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap';

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
