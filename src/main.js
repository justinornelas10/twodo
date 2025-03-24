import './css/style.css'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css'

//Components
import Button from "primevue/button"
import Badge from "primevue/badge"
import OverlayBadge from "primevue/overlaybadge"
import InputText from "primevue/inputtext"
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import Card from "primevue/card"
import ScrollTop from 'primevue/scrolltop'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            darkModeSelector: false,
        }
    }
})
app.component('Button', Button);
app.component('Badge', Badge);
app.component('OverlayBadge', OverlayBadge);
app.component('InputText', InputText);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Card', Card);
app.component('ScrollTop', ScrollTop);

app.mount('#app');
