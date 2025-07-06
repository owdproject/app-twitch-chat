import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit'
import { registerTailwindPath } from '@owdproject/core'

export default defineNuxtModule({
  meta: {
    name: 'owd-app-twitch-chat',
    configKey: 'twitchChat'
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.desktop.twitchChat = {
      username: options.username,
      dark: !!options.dark
    }

    // add components

    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    // add plugins

    addPlugin(resolve('./runtime/plugin'))

    // configure tailwind

    registerTailwindPath(
      nuxt,
      resolve('./runtime/components/**/*.{vue,mjs,ts}'),
    )
  },
})
