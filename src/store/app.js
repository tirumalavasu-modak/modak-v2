// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    scrollY: 0
  }),
  actions: {
    setScrollY (value) {
      this.scrollY = value
    }
  }
});
