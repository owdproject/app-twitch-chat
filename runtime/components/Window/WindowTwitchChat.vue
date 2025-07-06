<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'

const runtimeConfig = useRuntimeConfig()

const hostname = ref('')

const twitchEmbedUrl = computed(() => {
  if (!hostname.value || !runtimeConfig.public.desktop.twitchChat?.username) {
    return ''
  }

  const baseUrl = 'https://www.twitch.tv/embed'
  const username = runtimeConfig.public.desktop.twitchChat.username
  const darkMode = runtimeConfig.public.desktop.twitchChat.dark ? '&darkpopout' : ''

  return `${baseUrl}/${username}/chat?parent=${hostname.value}${darkMode}`
})

onMounted(() => {
  hostname.value = window.location.hostname
})
</script>

<template>
  <WindowIframe
    :src="twitchEmbedUrl"
  />
</template>

<style scoped lang="scss">
:deep(iframe) {
  height: calc(100% + 60px);
  margin-top: -60px;
}
</style>
