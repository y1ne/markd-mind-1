import Vue from 'vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMermaid from 'vue-mermaid';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMermaid)
new Vue({
    el: '#app',
    router,
    template: '<router-view />',
    data: {
	editorState: {},
    },
})
