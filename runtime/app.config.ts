export default {
  id: 'tv.twitch.chat',
  title: 'Stream Chat',
  singleton: true,
  icon: 'simple-icons:twitch',
  windows: {
    main: {
      component: () => import('./components/Window/WindowTwitchChat.vue'),
      resizable: true,
      size: {
        width: 360,
        height: 560,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    twitchChat: {
      command: 'twitch-chat',
    },
  },
  commands: {
    'twitch-chat': (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
