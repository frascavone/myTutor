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
      <header>
        <h3>Ti interessa? Chiama ora!</h3>
        <BaseButton @click="messageFormIsVisible.val = true"
          >Contatta</BaseButton
        >
      </header>
    </BaseCard>
  </section>
  <section>
    <router-view>
      <ContactTutor v-if="messageFormIsVisible.val"></ContactTutor>
    </router-view>
  </section>
</template>

<script setup>
import BaseBadge from '../../components/UI/BaseBadge.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import BaseButton from '../../components/UI/BaseButton.vue';

import { useTutorsStore } from '../../stores';
import ContactTutor from '../requests/ContactTutor.vue';
import { reactive } from 'vue';

const tutorsStore = useTutorsStore();
const selectedTutor = tutorsStore.tutors.find((tutor) => tutor.id === props.id);

const messageFormIsVisible = reactive({ val: false });

const props = defineProps({ id: String });
const tutorFullName = `${selectedTutor.firstName} ${selectedTutor.lastName}`;
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
