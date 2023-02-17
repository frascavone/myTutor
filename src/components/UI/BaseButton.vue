<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: { type: String, required: false, default: null },
    link: { type: Boolean, required: false, default: false },
    to: { type: String, required: false, default: '/' },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1rem;
  font: inherit;
  background-color: #155799;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #155799;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: black;
  color: black;
}

.tutor-login {
  background-color: green;
}
.tutor-login:hover,
.tutor-login:active {
  background-color: limegreen;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #77e8ff88;
}
</style>
