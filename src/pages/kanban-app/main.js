import { createApp } from 'vue'
import App from './App.vue'

const els = document.querySelectorAll('.kanban-container')
els.forEach(el => {
    createApp(App).mount(el)
});
