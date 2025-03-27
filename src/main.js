import './css/style.css'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css'
import store from "@/store"
import generateRouter from '@/router'
import {usePassThrough} from "primevue/passthrough";
import PassThrough from "@/pass_through/index.js";

//Components
import Button from "primevue/button"
import Badge from "primevue/badge"
import OverlayBadge from "primevue/overlaybadge"
import InputText from "primevue/inputtext"
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import Card from "primevue/card"
import ScrollTop from 'primevue/scrolltop'
import Avatar from 'primevue/avatar'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import ProgressBar from 'primevue/progressbar'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Step from 'primevue/step'
import TextArea from 'primevue/textarea'
import Drawer from 'primevue/drawer'

const customPass = usePassThrough(
    PassThrough,
    {
        merge: true,
        useMergeProps: true,
    }
)

const app = createApp(App);
app.use(PrimeVue, {
    pt: customPass,
    theme: {
        preset: Material,
        options: {
            darkModeSelector: false,
        }
    }
})
app.use(store);
app.use(generateRouter(store));
app.component('Button', Button);
app.component('Badge', Badge);
app.component('OverlayBadge', OverlayBadge);
app.component('InputText', InputText);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Card', Card);
app.component('ScrollTop', ScrollTop);
app.component('Avatar', Avatar);
app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.component('Dialog', Dialog);
app.component('ProgressBar', ProgressBar);
app.component('Stepper', Stepper);
app.component('StepList', StepList);
app.component('StepPanels', StepPanels);
app.component('StepItem', StepItem);
app.component('Step', Step);
app.component('StepPanel', StepPanel);
app.component('TextArea', TextArea);
app.component('Drawer', Drawer);

app.mount('#app');
