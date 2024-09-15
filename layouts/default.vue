<template>
  <NConfigProvider inline-theme-disabled :theme-overrides="themeOverrides">
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <div style="padding: 16px">
              <slot />
            </div>
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
} from 'naive-ui'

const themeOverrides = {
  common: {
    borderRadius: '10px',
    borderRadiusSmall: '8px',
  },
}

</script>

<style scoped>
</style>
