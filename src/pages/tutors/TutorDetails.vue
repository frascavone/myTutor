<template>
  <section>
    <BaseCard>
      <div class="tutor">
        <span class="tutor__photo"></span>
        <span>
          <h2>{{ tutorFullName }}</h2>
          <h3>{{ selectedTutor.hourlyRate }} €/h</h3>
        </span>
      </div>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge
        v-for="area in selectedTutor.areas"
        :key="area"
        :type="area"
        :title="area"
      ></BaseBadge>
      <p>{{ selectedTutor.description }}</p>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Ti interessa? Chiama ora!</h2>
        <BaseButton link :to="contactLink">Contatta</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseBadge from '../../components/UI/BaseBadge.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import BaseButton from '../../components/UI/BaseButton.vue';

import { useTutorsStore } from '../../stores';
import { useRoute } from 'vue-router';

const tutorsStore = useTutorsStore();
const selectedTutor = tutorsStore.tutors.find((tutor) => tutor.id === props.id);

const props = defineProps({ id: String });
const tutorFullName = `${selectedTutor.firstName} ${selectedTutor.lastName}`;
const route = useRoute();
const contactLink = `${route.path}/contact`;
</script>

<style scoped>
header {
  text-align: center;
}
.tutor {
  display: flex;
}
.tutor__photo {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: lightgrey;
  background-image: url('../../IMG/avatar.png');
  background-size: cover;
  background-position: bottom;
  margin-right: 2rem;
  font-size: 3rem;
}
</style>
