<template>
  <div class="progress-bar">
    <div class="image-wrapper">
      <img :src="imageUrl" alt="Image" class="image" />
      <div class="progress-overlay">
        <div class="progress" :style="{ strokeDashoffset: progressOffset }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const progressOffset = computed(() => {
      const circumference = 2 * Math.PI * 50; // Assuming a radius of 50
      return circumference - (props.progress / 100) * circumference;
    });

    return {
      progressOffset,
    };
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  display: inline-block;
}

.image-wrapper {
  position: relative;
}

.image {
  display: block;
  width: 200px; /* Adjust the size of the image as needed */
  height: 200px;
  border-radius: 50%; /* Creates a circular image */
}

.progress-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.progress {
  stroke: #007bff; /* Change the color of the progress bar as desired */
  stroke-width: 5;
  // stroke-dasharray: (2 * Math.PI * 50);
  stroke-dashoffset: 0;
  fill: none;
  transition: stroke-dashoffset 0.3s ease;
}
</style>
