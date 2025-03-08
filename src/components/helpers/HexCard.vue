<template>
  <div class="hex-card" @click="flipCard">
    <div class="hex-inner" :class="{ flipped: isFlipped }">
      <!-- Front Side -->
      <div class="hex-front">
        <img :src="project.logo" :alt="project.name" class="hex-image" />
        <div class="hex-title">
          <h2 class="text-lg font-bold">{{ project.name }}</h2>
        </div>
      </div>

      <!-- Back Side -->
      <div class="hex-back">
        <p class="hex-description">{{ project.description }}</p>
        <a :href="project.file" download class="download-link">Télécharger ici</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isFlipped = ref(false)
    const flipCard = () => {
      isFlipped.value = !isFlipped.value
    }
    return { isFlipped, flipCard }
  },
})
</script>

<style scoped>
.hex-card {
  width: 200px;
  height: 250px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}

.hex-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped {
  transform: rotateY(180deg);
}

.hex-front,
.hex-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.hex-front {
  background: #fff;
  padding: 10px;
}

.hex-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.hex-title h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.hex-back {
  background: #333;
  color: white;
  transform: rotateY(180deg);
  padding: 15px;
  text-align: center;
}

.hex-description {
  font-size: 1rem;
  margin-bottom: 10px;
}

.download-link {
  color: #00f;
  text-decoration: underline;
}
</style>
