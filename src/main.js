
import { createApp } from 'vue'
import App from './App.vue' // Assumindo que seu componente principal está em App.vue
                           // Se o template que você forneceu é o App.vue, então está correto.
                           // Se for outro componente, ajuste o nome.
import "./style.css"
import { createI18n } from 'vue-i18n'
import ptMessages from './locales/pt.json'
import enMessages from './locales/en.json'

// Tenta carregar o idioma salvo ou detectar o idioma do navegador
const savedLanguage = localStorage.getItem('userLanguage');
const browserLanguage = navigator.language.split('-')[0]; // 'pt', 'en', etc.
let initialLocale = 'pt'; // Idioma padrão

if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
  initialLocale = savedLanguage;
} else if (browserLanguage === 'en') {
  initialLocale = 'en';
} // Caso contrário, mantém 'pt'

const i18n = createI18n({
  legacy: false, // Necessário para Composition API
  locale: initialLocale, // Define o idioma inicial
  fallbackLocale: 'en', // Idioma de fallback se uma tradução não for encontrada
  messages: {
    pt: ptMessages,
    en: enMessages
  }
})

const app = createApp(App) // Use o componente raiz correto aqui
app.use(i18n)
app.mount('#app')