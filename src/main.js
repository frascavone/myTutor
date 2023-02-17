import { createApp } from 'vue';
import { router } from './router.js';
import { createPinia } from 'pinia';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component(BaseCard);
app.component(BaseButton);
app.component(BaseBadge);

app.mount('#app');
