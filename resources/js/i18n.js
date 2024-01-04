import {createI18n} from 'vue-i18n'
import en from '../lang/en.json'
import ar from '../lang/ar.json'

async function getLocaleFromSessionOrCookie() {
    try {
        const response = await axios.get('/language')
        return response.data.locale || 'ar'
    } catch (error) {
        console.log(error.response.data.message)
        return 'en'
    }
}

const i18n = createI18n({
    locale: await getLocaleFromSessionOrCookie(), // استدعاء الدالة للحصول على اللغة الحالية
    fallbackLocale: 'ar',
    messages: {
        en,
        ar,
    },
})

export default i18n
