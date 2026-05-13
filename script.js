const menuButton = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

menuButton?.addEventListener('click', () => {
  const isOpen = links?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

links?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    links.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const giscusContainer = document.getElementById('giscus_thread');

if (giscusContainer) {
  const giscusScript = document.createElement('script');
  giscusScript.src = 'https://giscus.app/client.js';
  giscusScript.async = true;
  giscusScript.crossOrigin = 'anonymous';
  giscusScript.setAttribute('data-repo', 'psista-creator/TMSA-Scioly-Website');
  giscusScript.setAttribute('data-repo-id', 'R_kgDOSUYUjw');
  giscusScript.setAttribute('data-category', 'General');
  giscusScript.setAttribute('data-category-id', 'DIC_kwDOSUYUj84C8WNn');
  giscusScript.setAttribute('data-mapping', 'pathname');
  giscusScript.setAttribute('data-strict', '0');
  giscusScript.setAttribute('data-reactions-enabled', '1');
  giscusScript.setAttribute('data-emit-metadata', '0');
  giscusScript.setAttribute('data-input-position', 'bottom');
  giscusScript.setAttribute('data-theme', 'cobalt');
  giscusScript.setAttribute('data-lang', 'en');
  giscusScript.setAttribute('data-loading', 'lazy');

  giscusContainer.appendChild(giscusScript);
}
