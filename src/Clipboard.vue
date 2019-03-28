<template>
  <div>
    <p>{{ text.beforeAuthor }}{{ authorName || text.author }}{{ text.afterAuthor }}<a :href="location">{{ location }}</a></p>
    &#10;<div v-html="html"/>
  </div>
</template>

<script>

import i18n from './i18n'
import options from '@dynamic/copyright-options'

export default {
  props: {
    html: String,
    lang: String,
  },

  created() {
    this.authorName = options.authorName
    this.text = this.lang in i18n ? i18n[this.lang] : i18n['en-US']
    this.location = window.location
  },
}

</script>
