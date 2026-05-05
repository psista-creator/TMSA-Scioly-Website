const menuButton = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

menuButton?.addEventListener('click', () => {
  links?.classList.toggle('open');
});

const giscusScript = document.createElement('script');
giscusScript.src = 'https://giscus.app/client.js';
giscusScript.async = true;
giscusScript.crossOrigin = 'anonymous';
giscusScript.setAttribute('data-repo', 'psista-creator/TMSA-Scioly-Website');
giscusScript.setAttribute('data-repo-id', 'REPLACE_REPO_ID');
giscusScript.setAttribute('data-category', 'Q&A');
giscusScript.setAttribute('data-category-id', 'REPLACE_CATEGORY_ID');
giscusScript.setAttribute('data-mapping', 'pathname');
giscusScript.setAttribute('data-strict', '0');
giscusScript.setAttribute('data-reactions-enabled', '1');
giscusScript.setAttribute('data-emit-metadata', '0');
giscusScript.setAttribute('data-input-position', 'top');
giscusScript.setAttribute('data-theme', 'dark_dimmed');
giscusScript.setAttribute('data-lang', 'en');

document.getElementById('giscus_thread')?.appendChild(giscusScript);
