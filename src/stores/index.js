import { defineStore } from 'pinia';
import { router } from '../router';

export const useTutorsStore = defineStore('tutorslist', {
  state: () => ({
    tutors: [
      // {
      //   id: 't1',
      //   firstName: 'Mario',
      //   lastName: 'Rossi',
      //   areas: ['italiano', 'storia', 'geografia'],
      //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
      //   blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
      //   exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
      //   ea atque! Saepe`,
      //   hourlyRate: 25,
      // },
      // {
      //   id: 't2',
      //   firstName: 'Laura',
      //   lastName: 'Bianchi',
      //   areas: ['italiano'],
      //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
      //   blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
      //   exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
      //   ea atque! Saepe`,
      //   hourlyRate: 30,
      // },
      // {
      //   id: 't3',
      //   firstName: 'Giulia',
      //   lastName: 'Bonini',
      //   areas: ['matematica', 'scienze'],
      //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
      //   blanditiis animi dignissimos magnam laborum nesciunt natus nobis,
      //   exercitationem rem labore cumque aspernatur voluptate possimus, voluptas quia
      //   ea atque! Saepe`,
      //   hourlyRate: 20,
      // },
    ],
    userId: 't4',
    isLoading: false,
    tutorAdded: false,
    activeFilters: {
      italiano: true,
      storia: true,
      geografia: true,
      matematica: true,
      scienze: true,
    },
    requests: [
      {
        id: '2023-02-27T15:49:24.288Z',
        coachId: 't1',
        userEmail: 'test@test.it',
        userMessage: 'qwerty',
      },
    ],
  }),
  actions: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = { ...this.activeFilters, [inputId]: isActive };
      this.activeFilters = updatedFilters;
    },
    async addTutor(formData) {
      const tutorsList = this.$state.tutors;
      const userId = `t${this.$state.tutors.length + 1}`;
      const tutorData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        description: formData.description,
        hourlyRate: formData.hourlyRate,
        areas: formData.areas,
      };

      const res = await fetch(
        `https://vue-mytutor-demo-default-rtdb.europe-west1.firebasedatabase.app/tutors/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(tutorData),
        }
      );
      if (!res.ok) return;

      tutorsList.push({ ...tutorData, id: userId });

      router.replace('/tutors');
    },
    async loadTutors() {
      this.$state.isLoading = true;
      const res = await fetch(
        `https://vue-mytutor-demo-default-rtdb.europe-west1.firebasedatabase.app/tutors.json`
      );
      const data = await res.json();
      this.$state.isLoading = false;

      if (!res.ok) return;

      const tutors = [];

      for (const key in data) {
        const tutor = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
          areas: data[key].areas,
        };
        tutors.push(tutor);
      }

      this.$state.tutors = tutors;
    },
    addRequest(formData) {
      this.$state.requests.push(formData);
    },
  },
  getters: {
    hasTutors: (state) =>
      !state.isLoading && state.tutors && state.tutors.length > 0,
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
