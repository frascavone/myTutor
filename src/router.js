import { createRouter, createWebHistory } from 'vue-router';

import TutorsList from './pages/tutors/TutorsList.vue';
import TutorDetails from './pages/tutors/TutorDetails.vue';
import TutorRegistration from './pages/tutors/TutorRegistration.vue';
import ContactTutor from './pages/requests/ContactTutor.vue';
import ReceivedRequests from './pages/requests/ReceivedRequests.vue';
import NotFound from './pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/tutors' },
    { path: '/tutors', component: TutorsList },
    {
      path: '/tutors/:id',
      component: TutorDetails,
      props: true,
      children: [{ path: 'contact', component: ContactTutor }], // /tutors/t1/contact
    },
    { path: '/register', component: TutorRegistration },
    { path: '/requests', component: ReceivedRequests },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
