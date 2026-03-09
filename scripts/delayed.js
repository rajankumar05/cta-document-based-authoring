// add delayed functionality here
import { loadScript } from './aem.js';

loadScript('https://consent.trustarc.com/v2/notice/jwqzim');
export async function addCookieBanner() {
  const cookieBanner = document.createElement('div');
  cookieBanner.id = 'consent-banner';
  cookieBanner.innerHTML = `<div id="teconsent"></div>
</div>`;
  document.querySelector('main').append(cookieBanner);
}
addCookieBanner();
