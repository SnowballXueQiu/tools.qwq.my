<script setup lang="ts">
import Center from '~/components/Center.vue'
import { NButton, NCard, NFlex, NH1, NInput, NModal, NSpace, NUpload } from 'naive-ui'

const route = useRoute()

const code = ref(route.query.code || '')
const token = ref('')
const showCreateModal = ref(false)

</script>

<template>
  <Center>
    <NH1>{{ $t('module.codeSniper.title') }}</NH1>
  </Center>
  <Center>
    <NSpace>
      <NInput v-model:value="code" placeholder="code" />
      <NButton @click="console.log(code)">Submit</NButton>
      <NButton @click="showCreateModal = true" tertiary>Upload</NButton>
    </NSpace>
  </Center>
  <NModal v-model:show="showCreateModal" preset="dialog" title="Upload Sniper">
    <NCard
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true">
      <NFlex vertical>
        <Center>
          <NInput
            placeholder="Your Token"
            v-model:value="token"
            type="password"
            show-password-on="click" />
        </Center>
        <NSpace>
          <div>
            Input your content or
          </div>
          <NUpload :default-upload="false" :showFileList="false">
            <NButton size="tiny" dashed>Use File</NButton>
          </NUpload>
        </NSpace>
        <NInput
          v-model:value="value"
          type="textarea"
          placeholder="基本的 Textarea"
        />
      </NFlex>

      <template #footer>
        <NButton type="primary">Submit</NButton>
      </template>
    </NCard>
  </NModal>
</template>

<style scoped>

</style>
