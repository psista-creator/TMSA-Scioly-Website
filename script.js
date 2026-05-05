const menuButton = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

menuButton?.addEventListener('click', () => {
    links?.classList.toggle('open');
});

// Giscus Integration
const giscusScript = document.createElement('script');
giscusScript.src = 'https://giscus.app/client.js';
giscusScript.async = true;
giscusScript.crossOrigin = 'anonymous';

// Updated with your new IDs and settings
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

// This finds your <div id="giscus_thread"></div> and puts the script inside it
document.getElementById('giscus_thread')?.appendChild(giscusScript);
