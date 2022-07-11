import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'


createApp(App).directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        }
        window.addEventListener('scroll', f)
    }
}).mount('#app')