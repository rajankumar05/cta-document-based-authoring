// add delayed functionality here
import { loadScript } from './aem.js';

  await loadScript('https://assets.adobedtm.com/7c9efc5b1aec/67289d24beda/launch-139ab5a4b298.min.js');
export async function addCookieBanner() {
  const cookieBanner = document.createElement('div');
  cookieBanner.classList.add('cookie-banner');
  cookieBanner.innerHTML = `<
  <div id="teconsent"></div>
</div>`;
  document.querySelector('main').append(cookieBanner);
}
addCookieBanner();
