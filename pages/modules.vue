<script lang="ts" setup>
import Center from '~/components/Center.vue'
import { NH1 } from 'naive-ui'
import { ClipboardBulletListLtr20Regular } from '@vicons/fluent'

const tools = [{ name: 'codeSniper', icon: ClipboardBulletListLtr20Regular }]

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
      :title='`module.${tool.name}.title`'
      :description='`module.${tool.name}.description`'
      :introduction='`module.${tool.name}.introduction`'
      :icon="tool.icon"
      link="/sniper" />
  </Center>
</template>

<style scoped>
</style>
