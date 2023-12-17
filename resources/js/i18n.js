import {createI18n} from 'vue-i18n'
import en from '../lang/en.json'
import ar from '../lang/ar.json'

const i18n = createI18n({
    locale: 'en', // استدعاء الدالة للحصول على اللغة الحالية
    fallbackLocale: 'en',
    messages: {
        en,
        ar,
    },
})

export default i18n
