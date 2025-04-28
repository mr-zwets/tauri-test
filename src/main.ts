import { createApp } from 'vue';
import App from './App.vue';
import { getCurrentWindow } from '@tauri-apps/api/window';

// Create the Vue app
const app = createApp(App);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Get the current window instance
    const currentWindow = getCurrentWindow();

    // Show the window and maximize it
    await currentWindow.show();
    await currentWindow.maximize();
  } catch (error) {
    console.error('Error showing or maximizing the window:', error);
  }
});

// Mount the Vue app
app.mount('#app');