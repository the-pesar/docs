import { h } from 'vue'
import { VPTheme, VTBadge } from '@vue/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import { preferComposition, preferSFC } from './components/preferences'
import NewsletterSection from './components/NewsletterSection.vue'
import './styles/inline-demo.css'
import './styles/options-boxes.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {
      'sidebar-top': () => h(PreferenceSwitch),
      'footer-before': () => h(NewsletterSection)
    })
  },
  enhanceApp({ app }) {
    app.component('Badge', VTBadge)
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
  }
})