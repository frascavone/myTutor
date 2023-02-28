<template>
  <span class="badge" :class="type">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;

  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.italiano {
  color: #8d0026;
}

.storia {
  color: #4b0000;
}

.geografia {
  color: #008d59;
}

.matematica {
  color: blue;
}

.scienze {
  color: yellow;
}
</style>
