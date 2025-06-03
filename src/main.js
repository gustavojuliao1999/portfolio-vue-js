import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './style.css';
import ptMessages from './locales/pt.json';
import enMessages from './locales/en.json';

// Detecta idioma
const savedLanguage = localStorage.getItem('userLanguage');
const browserLanguage = navigator.language.split('-')[0];
let initialLocale = 'pt';

if (savedLanguage === 'pt' || savedLanguage === 'en') {
  initialLocale = savedLanguage;
} else if (browserLanguage === 'en') {
  initialLocale = 'en';
}

console.log('Idioma inicial:', initialLocale);
console.log('Mensagens carregadas:', { pt: ptMessages, en: enMessages });

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: ptMessages,
    en: enMessages,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');