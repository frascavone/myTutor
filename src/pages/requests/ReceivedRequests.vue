<template>
  <section>
    <BaseCard>
      <header>
        <h2>Richieste ricevute</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestItem
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.userMessage"
        ></RequestItem>
      </ul>
      <h3 v-else>Non hai ancora ricevuto richieste</h3>
    </BaseCard>
  </section>
</template>

<script setup>
import RequestItem from '../../components/RequestItem.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import { useTutorsStore } from '../../stores';

const tutorsStore = useTutorsStore();
const receivedRequests = tutorsStore.requests.filter(
  (req) => req.coachId === tutorsStore.userId
);
const hasRequests = receivedRequests && receivedRequests.length > 0;
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
