<script lang="ts">
import { defineComponent } from 'vue'
import Center from '~/components/Center.vue'



export default defineComponent({
  name: 'modules',
  components: { Center },
  setup() {
    const { locale, setLocale } = useI18n()
  }
})
</script>

<template>
  <Center>
    <h1>
      {{ $t('modules.title') }}
    </h1>
  </Center>
</template>

<style scoped>
</style>
