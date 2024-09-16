<script lang="ts" setup>
import Center from '~/components/Center.vue'
import {
  NButton,
  NH1
} from 'naive-ui'

</script>

<template>
  <Center>
    <NH1>
      {{ $t('modules.title') }}
    </NH1>
  </Center>
  <Center>
    <ToolCard title="tools" description="This a tool" introduction="货币是为了提高交易效率而用于交换的中介商品。货币有多种形式" link="/" />
  </Center>
</template>

<style scoped>
</style>
