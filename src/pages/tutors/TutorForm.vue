<template>
  <form
    @submit.prevent="
      submitForm({
        id: userId,
        firstName: firstName.val,
        lastName: lastName.val,
        description: description.val,
        hourlyRate: rate.val,
        areas: areas.val,
      })
    "
  >
    <h2>Registrati come Tutor</h2>
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Nome</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @focus="clearValidity(firstName)"
      />
      <p v-if="!firstName.isValid">Questo campo non può essere vuoto</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Cognome</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @focus="clearValidity(lastName)"
      />
    </div>
    <p v-if="!lastName.isValid">Questo campo non può essere vuoto</p>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Descrizione</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description.val"
        @focus="clearValidity(description)"
      ></textarea>
      <p v-if="!description.isValid">Questo campo non può essere vuoto</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Tariffa</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @focus="clearValidity(rate)"
      />
      <p v-if="!rate.isValid">
        Questo campo non può essere vuoto o minore di 0
      </p>
    </div>
    <div class="form-control" id="areas" :class="{ invalid: !areas.isValid }">
      <label for="areas">Materie</label>
      <div>
        <input
          type="checkbox"
          id="italiano"
          value="italiano"
          v-model="areas.val"
          @focus="clearValidity(areas)"
        />
        <label for="italiano">Italiano</label>
      </div>
      <div>
        <input type="checkbox" id="storia" value="storia" v-model="areas.val" />
        <label for="storia">Storia</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="geografia"
          value="geografia"
          v-model="areas.val"
        />
        <label for="geografia">Geografia</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="matematica"
          value="matematica"
          v-model="areas.val"
        />
        <label for="matematica">Matematica</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="scienze"
          value="scienze"
          v-model="areas.val"
        />
        <label for="scienze">Scienze</label>
      </div>
      <p v-if="!areas.isValid">Selezionare almeno una materia</p>
    </div>
    <span v-if="!formIsValid.val">
      Per favore correggi gli errori e ricompila il modulo
    </span>
    <BaseButton>Registrati</BaseButton>
  </form>
</template>

<script setup>
import BaseButton from '../../components/UI/BaseButton.vue';
import { useTutorsStore } from '../../stores';
import { reactive } from 'vue';
const tutorsStore = useTutorsStore();

const userId = tutorsStore.userId;
const firstName = reactive({ val: '', isValid: true });
const lastName = reactive({ val: '', isValid: true });
const description = reactive({ val: '', isValid: true });
const rate = reactive({ val: null, isValid: true });
const areas = reactive({ val: [], isValid: true });

let formIsValid = reactive({ val: true });

const clearValidity = (input) => {
  input.isValid = true;
};

const validateForm = (data) => {
  if (data.firstName === '') {
    firstName.isValid = false;
    formIsValid.val = false;
  }
  if (data.lastName === '') {
    lastName.isValid = false;
    formIsValid.val = false;
  }
  if (data.description === '') {
    description.isValid = false;
    formIsValid.val = false;
  }
  if (!data.hourlyRate || data.hourlyRate < 0) {
    rate.isValid = false;
    formIsValid.val = false;
  }
  if (data.areas.length === 0) {
    areas.isValid = false;
    formIsValid.val = false;
  }
  return true;
};

const submitForm = (data) => {
  validateForm(data);
  if (!formIsValid.val) return;
  tutorsStore.addTutor(data);
  tutorsStore.tutorAdded = true;
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
  background-color: rgb(255, 200, 194);
}
p {
  color: red;
}
</style>
