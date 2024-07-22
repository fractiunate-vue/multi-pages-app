import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// process.env.VUE_APP_PAGES.split(',').forEach(async (page: string) => {
//     app.component(page, await import(`./components/${page}.vue`));
// });

app.mount('#app');