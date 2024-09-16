<script lang="ts" setup>
import Center from '~/components/Center.vue'
import {
  NButton,
  NH1
} from 'naive-ui'

const tools = ['codeSniper']

</script>

<template>
  <Center>
    <NH1>
      {{ $t('modules.title') }}
    </NH1>
  </Center>
  <Center>
    <ToolCard
      v-for="tool in tools"
      :title='`module.${tool}.title`'
      :description='`module.${tool}.description`'
      :introduction='`module.${tool}.introduction`'
      link="/sniper" />
  </Center>
</template>

<style scoped>
</style>
