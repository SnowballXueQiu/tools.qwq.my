import en from './lang/en.json'
import zh from './lang/zh.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    zh: zh,
    en: en
  }
}))
