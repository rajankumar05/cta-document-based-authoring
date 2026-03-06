// add delayed functionality here
import { loadScript } from './aem.js';

function AdobeLaunch() {
  this.loadGTM = () => {
  await loadScript('https://assets.adobedtm.com/7c9efc5b1aec/67289d24beda/launch-139ab5a4b298.min.js');
  };
}
if (!window.location.hostname.includes('localhost') && !document.location.hostname.includes('.hlx.page')) {
  new AdobeLauch().loadGTM();
}
