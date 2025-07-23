// widget.js
(function(){
  const s = document.currentScript;
  const src    = s.getAttribute('data-src')    || 'https://samuel260400.github.io/marcador-futbol/index.html';
  const width  = s.getAttribute('data-width')  || '100%';
  const height = s.getAttribute('data-height') || '432';
  const border = s.getAttribute('data-border') || '0';
  const targetId = s.getAttribute('data-target');

  let target = targetId ? document.getElementById(targetId) : null;
  if(!target){
    target = document.createElement('div');
    s.parentNode.insertBefore(target, s.nextSibling);
  }

  const ifr = document.createElement('iframe');
  ifr.src = src;
  ifr.style.width  = width;
  ifr.style.height = /^\d+$/.test(height) ? (height + 'px') : height;
  ifr.style.border = border;
  ifr.setAttribute('scrolling','no');
  target.appendChild(ifr);

  // Auto-resize opcional (necesita el postMessage en index.html)
  window.addEventListener('message', e=>{
    if(!e.data || e.data.type!=='marcador:height') return;
    ifr.style.height = e.data.value + 'px';
  });
})();
