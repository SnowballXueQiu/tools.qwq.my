<template>
  <NConfigProvider inline-theme-disabled :theme-overrides="themeOverrides">
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <Provided />
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useMessage
} from 'naive-ui'
import Provided from './Provided.vue'

const themeOverrides = {
  common: {
    borderRadius: '10px',
    borderRadiusSmall: '8px',
  },
}

</script>

<style>
body {
  padding: 16px !important;
}
</style>
