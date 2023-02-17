import { defineStore } from 'pinia';
import { router } from '../router';

export const useTutorsStore = defineStore('tutorslist', {
  state: () => ({
    tutors: [
      {
        id: 't1',
        firstName: 'Mario',
        lastName: 'Rossi',
        areas: ['italiano', 'storia', 'geografia'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
        blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
        exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
        ea atque! Saepe`,
        hourlyRate: 25,
      },
      {
        id: 't2',
        firstName: 'Laura',
        lastName: 'Bianchi',
        areas: ['italiano'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
        blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
        exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
        ea atque! Saepe`,
        hourlyRate: 30,
      },
      {
        id: 't3',
        firstName: 'Giulia',
        lastName: 'Bonini',
        areas: ['matematica', 'scienze'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
        blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
        exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
        ea atque! Saepe`,
        hourlyRate: 20,
      },
    ],
    tutorAdded: false,
    userId: 't4',
    activeFilters: {
      italiano: true,
      storia: true,
      geografia: true,
      matematica: true,
      scienze: true,
    },
    requests: [],
  }),
  actions: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = { ...this.activeFilters, [inputId]: isActive };
      this.activeFilters = updatedFilters;
    },
    addTutor(formData) {
      const tutorsList = this.$state.tutors;
      tutorsList.push({
        id: formData.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        description: formData.description,
        hourlyRate: formData.hourlyRate,
        areas: formData.areas,
      });
      router.replace('/tutors');
    },
    addRequest(formData) {
      this.$state.requests.push(formData);
    },
  },
  getters: {
    hasTutors: (state) => state.tutors && state.tutors.length > 0,
    isTutor: (state) => state.tutors.some((tutor) => tutor.id === state.userId),
    filteredTutors: (state) =>
      state.tutors.filter((tutor) => {
        if (state.activeFilters.italiano && tutor.areas.includes('italiano'))
          return true;
        if (state.activeFilters.storia && tutor.areas.includes('storia'))
          return true;
        if (state.activeFilters.geografia && tutor.areas.includes('geografia'))
          return true;
        if (
          state.activeFilters.matematica &&
          tutor.areas.includes('matematica')
        )
          return true;
        if (state.activeFilters.scienze && tutor.areas.includes('scienze'))
          return true;
        else return false;
      }),
  },
});
