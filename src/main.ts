import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/'
import router from './routes';

const app = createApp(App);
app.use(router);

app.mount('#app');
