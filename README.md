<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Twitch Chat</h1>
<h3 align="center">
  Twitch Chat App for Open Web Desktop.
</h3>

<br />

## Overview

This app for Open Web Desktop implements Twitch livestreams chat.

## Installation

```bash
owd install-app @owdproject/app-twitch-chat
```

## Usage

#### Configuration

```ts
export default defineDesktopConfig({
  apps: [
    '@owdproject/app-twitch-chat'
  ],
  twitchChat: {
    username: 'dxlliv',
    dark: true,
  }
})
```

## License

The application is released under the [MIT License](LICENSE).
