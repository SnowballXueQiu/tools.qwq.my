<template>
  <NCard hoverable @click="locate(link)" class="toolsCard">
    <NThing>
      <template #avatar>
        <NAvatar>
          <NIcon>
            <component :is="icon" />
          </NIcon>
        </NAvatar>
      </template>
      <template #header> {{ $t(title) }} </template>
      <template #description> {{ $t(description) }} </template>
      {{ $t(introduction) }}
    </NThing>
  </NCard>
</template>

<style scoped>
.toolsCard {
  max-width: 300px;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { NCard, NThing, NAvatar, NIcon } from 'naive-ui'
const router = useRouter();

const locate = (link) => {
  if (link.startsWith('http')) {
    window.location.href = link;
  } else {
    router.push(link);
  }
}

defineProps({
  title: String,
  description: String,
  introduction: String,
  link: String,
  icon: Object,
})
</script>
