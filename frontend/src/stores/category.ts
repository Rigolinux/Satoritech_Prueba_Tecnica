import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Category } from '@/types/objects';
import { getCategories } from '@/api/category';


export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  const selectedCategory = ref<Category | null>(null)

  function setCategories(newCategories: Category[]) {
    categories.value = newCategories
  }

  function setSelectedCategory(category: Category | null) {
    selectedCategory.value = category
  }

  // gettdbCategories
  function fetchCategories() {
    getCategories().then((response) => {
      setCategories(response.data)
    })

  }

  return { categories, selectedCategory, setCategories, setSelectedCategory }
})
