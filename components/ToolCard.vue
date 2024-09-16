<template>
  <NCard hoverable @click="locate(link)" class="toolsCard">
    <NThing>
      <template #avatar>
        <NAvatar>
          <NIcon>
            <CashIcon />
          </NIcon>
        </NAvatar>
      </template>
      <template #header> {{title}} </template>
      <template #description> {{description}} </template>
      {{introduction}}
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
import { NCard, NThing, NAvatar, NIcon, NButton } from 'naive-ui'
import { CashOutline as CashIcon } from "@vicons/ionicons5";
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
})
</script>
