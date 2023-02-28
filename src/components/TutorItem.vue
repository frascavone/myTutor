<template>
  <li>
    <div class="tutor">
      <span class="tutor__photo"></span>
      <span>
        <h3>{{ fullName }}</h3>
        <h4>{{ rate }} €/h</h4>
      </span>
    </div>
    <div>
      <BaseBadge v-for="area in areas" :title="area" :type="area"></BaseBadge>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="tutorDetailsLink"
        >Dettagli</BaseButton
      >
      <!-- <BaseButton link :to="tutorContactLink">Contatta</BaseButton> -->
    </div>
  </li>
</template>

<script>
import BaseBadge from './UI/BaseBadge.vue';
import BaseButton from './UI/BaseButton.vue';

export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    tutorDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
    tutorContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
  components: { BaseButton, BaseBadge },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 2rem;
}

h3,
h4 {
  margin: 0.5rem;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}
.tutor {
  display: flex;
}
.tutor__photo {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: lightgrey;
  background-image: url('../IMG/avatar.png');
  background-size: cover;
  background-position: bottom;
  margin-right: 2rem;
  font-size: 3rem;
}
</style>
