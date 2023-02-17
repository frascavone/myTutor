<template>
  <BaseCard>
    <h2>Trova il tuo Tutor</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        id="italiano"
        checked
        @change="$emit('setFilters', event)"
      />
      <label for="italiano">Ita</label>
    </span>
    <span>
      <input
        type="checkbox"
        id="storia"
        checked
        @change="$emit('setFilters', event)"
      />
      <label for="storia">Sto</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="geografia"
        checked
        @change="$emit('setFilters', event)"
      />
      <label for="geografia">Geo</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="matematica"
        checked
        @change="$emit('setFilters', event)"
      />
      <label for="matematica">Mat</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="scienze"
        checked
        @change="$emit('setFilters', event)"
      />
      <label for="scienze">Sci</label>
    </span>
  </BaseCard>
</template>

<script setup>
import BaseCard from './UI/BaseCard.vue';

const emit = defineEmits(['setFilters']);
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: center;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
