// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

const greetingAPI: GreetingsAPI = (window as unknown as ApiWindow).GreetingsAPI;

document.getElementById('greeting-button')
  ?.addEventListener('click',
    /**
     * greeting-button クリック。
     *
     * @param ev イベントデータ。
     */
    (ev: MouseEvent) => {
      const greetingTo: HTMLInputElement = document.getElementById('greeting-to') as HTMLInputElement;
      const greeting: HTMLElement = document.getElementById('greeting') as HTMLElement;

      void greetingAPI.greeting(greetingTo.value)
        .then((value: string) => {
          greeting.innerText = value;
        });
    });
