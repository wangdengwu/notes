import {init} from '@waline/client';

document.addEventListener('DOMContentLoaded', () => {
  let waline = document.getElementById('waline');
  if (waline) {
    init({
      el: '#waline',
      lang: document.documentElement.lang,
      locale: {
        admin: '✎',
      },
      serverURL: 'https://waline.sayweee.net',
      dark: 'html[data-dark-mode]',
      meta: ['nick', 'mail'],
      copyright: false,
    });
  }
});
