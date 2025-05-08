let notificationInterval = null;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'startNotifications') {
    if (!notificationInterval) {
      notificationInterval = setInterval(() => {
        self.registration.showNotification('FLGC Alert', {
          body: 'Here is your scheduled notification!',
          icon: 'icon.png'
        });
      }, 20000);
    }
  }
});
