<template>
  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Inserisci la tua email..."
          v-model.trim:value="email"
        />
      </div>
      <div class="form-control">
        <label for="message"></label>
        <textarea
          name="message"
          id="message"
          rows="5"
          v-model.trim:value="message"
          placeholder="Inserisci il tuo messagio..."
        ></textarea>
      </div>
      <p class="errors" v-if="!formIsValid.val">
        Inserire una email valida e un messaggio che non sia vuoto.
      </p>
      <div class="actions">
        <BaseButton>Invia Messaggio</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script setup>
import BaseButton from '../../components/UI/BaseButton.vue';
import BaseCard from '../../components/UI/BaseCard.vue';
import { ref, reactive } from 'vue';
import { useTutorsStore } from '../../stores';
import { useRoute } from 'vue-router';
import { router } from '../../router';

const tutorsStore = useTutorsStore();

const route = useRoute();

const email = ref('');
const message = ref('');
let formIsValid = reactive({ val: true });

const submitForm = () => {
  console.log(email.value, message.value);
  formIsValid.val = true;
  if (
    email.value === '' ||
    !email.value.includes('@') ||
    message.value === ''
  ) {
    formIsValid.val = false;
    return;
  }
  const newRequest = {
    id: new Date().toISOString(),
    coachId: route.params.id,
    userEmail: email.value,
    userMessage: message.value,
  };
  console.log(newRequest);
  tutorsStore.addRequest(newRequest);
  console.log('Richiesta inviata');
  console.log(...tutorsStore.requests);
  console.log('Richiesta aggiunta');
  router.replace('/tutors');
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
