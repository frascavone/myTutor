<template>
  <h4 v-if="tutorsStore.tutorAdded">Registrazione completata correttamente</h4>
  <section>
    <TutorFilter @change="tutorsStore.setFilters"></TutorFilter>
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Aggiorna</BaseButton>
        <BaseButton
          v-if="!tutorsStore.isTutor"
          mode="tutor-login"
          link
          to="register"
          >Accedi come Tutor</BaseButton
        >
      </div>

      <ul v-if="tutorsStore.hasTutors">
        <TutorItem
          v-for="tutor in tutorsStore.filteredTutors"
          :key="tutor.id"
          :id="tutor.id"
          :firstName="tutor.firstName"
          :lastName="tutor.lastName"
          :rate="tutor.hourlyRate"
          :areas="tutor.areas"
        ></TutorItem>
      </ul>
      <h3 v-else>Nessun tutor trovato.</h3>
    </BaseCard>
  </section>
</template>

<script setup>
import TutorItem from '../../components/TutorItem.vue';
import TutorFilter from '../../components/TutorFilter.vue';
import BaseButton from '../../components/UI/BaseButton.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import { useTutorsStore } from '../../stores';

const tutorsStore = useTutorsStore();
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

h4 {
  margin-top: 0;
  padding: 1rem;
  background-color: green;
  color: white;
}
</style>
