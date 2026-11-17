/* FUN SIMULATION — WEBSITE INTERACTIONS
   This file gracefully leaves pre-rendered HTML intact if content.js has an error.
   Edit games, descriptions, social links and contact in content.js instead. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const safeText = (s) => String(s ?? '');
  const esc = (s) => safeText(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = (v) => {
    try {
      const u=new URL(String(v),document.baseURI);
      return ['https:','http:'].includes(u.protocol) ? u.href : '#';
    } catch { return '#'; }
  };
  const imagePath = v => {
    const s=safeText(v);
    if (!s || /^\s*(javascript|data):/i.test(s)) return '';
    return s;
  };
  const htmlLines = t => esc(t).replace(/\\n/g,'<br>');
  const site = typeof SITE !== 'undefined' ? SITE : null;
  const games = site && Array.isArray(site.games) ? site.games : [];

  const titleNode=$('#hero-title');
  if (site) {
    if (site.name) { document.title = `${site.name} — Android Game Studio`; $('#footer-name').textContent=site.name; }
    if (site.heroTitle) titleNode.innerHTML=htmlLines(site.heroTitle).replace(/(<br>)(.*)$/s,'$1<em>$2</em>');
    if (site.eyebrow) $('#hero-eyebrow').textContent=site.eyebrow;
    if (site.heroDescription) $('#hero-description').textContent=site.heroDescription;
    if (site.aboutTitle) $('#about-title').innerHTML=htmlLines(site.aboutTitle).replace(/(<br>)(.*)$/s,'$1<em>$2</em>');
    if (site.aboutText) $('#about-text').textContent=site.aboutText;
    if (site.contactTitle) $('#contact-title').innerHTML=htmlLines(site.contactTitle).replace(/(<br>)(.*)$/s,'$1<em>$2</em>');
    if (site.contactText) $('#contact-text').textContent=site.contactText;
    if (site.logo) $$('.brand-logo').forEach(i => { i.src=imagePath(site.logo); });
    const email=safeText(site.email).trim();
    if(email){ const a=$('#contact-email');a.href='mailto:'+encodeURIComponent(email);a.textContent=email+' ↗'; }
    if (site.developerUrl) ['#nav-store','#hero-store','#all-store','#about-store'].forEach(s=>{const a=$(s);if(a)a.href=safeUrl(site.developerUrl);});
    if (Array.isArray(site.socials)) $('#socials').innerHTML=site.socials.filter(x=>x.name && x.url).map(x=>`<a target="_blank" rel="noopener noreferrer" href="${esc(safeUrl(x.url))}">${esc(x.name)} ↗</a>`).join('');
    if (Array.isArray(site.services)) $('#service-grid').innerHTML=site.services.map(s=>`<article><span>${esc(s.num)}</span><h3>${esc(s.title)}</h3><p>${esc(s.detail)}</p></article>`).join('');
  }

  function imageTag(g) {
    const fallback=imagePath(g.fallback) || 'assets/covers/van.svg';
    const src=imagePath(g.image)||fallback;
    return `<img src="${esc(src)}" loading="lazy" alt="${esc(g.title)} game artwork" data-fallback="${esc(fallback)}">`;
  }
  function card(g) { return `<article class="game-card" data-category="${esc(g.category)}" data-id="${esc(g.id)}"><div class="game-art">${imageTag(g)}<span class="game-category">${esc(g.category)}</span></div><div class="game-details"><div class="game-small">ANDROID <b> / </b> ${esc(g.label||g.category)}</div><h3>${esc(g.title)}</h3><p>${esc(g.description)}</p><div class="game-bottom"><button class="detail-link" type="button" data-open="${esc(g.id)}">Game details <span>↗</span></button><a class="play-button" href="${esc(safeUrl(g.link))}" target="_blank" rel="noopener noreferrer">Google Play <span>↗</span></a></div></div></article>`; }
  const grid=$('#games-grid');
  if (site && games.length) {
    grid.innerHTML=games.map(card).join('');
    $('#stat-game-count').textContent=String(games.length).padStart(2,'0');
    const featured=games.find(g=>g.featured)||games[0];
    $('#featured-image').src=imagePath(featured.image)||imagePath(featured.fallback);
    $('#featured-image').alt=featured.title+' screenshot';
    $('#featured-image').dataset.fallback=imagePath(featured.fallback);
    $('#featured-name').textContent=featured.title;
    $('#featured-category').textContent=featured.label||featured.category;
    $('#featured-link').href=safeUrl(featured.link);
  }
  // Reusable image fallback works even for new games added in content.js
  document.addEventListener('error', ev=>{
    const img=ev.target;
    if(img?.tagName==='IMG' && img.dataset.fallback && !img.dataset.fallbackUsed){img.dataset.fallbackUsed='1';img.src=img.dataset.fallback;}
  },true);
  const state={filter:'All',query:''};
  function filterGames(){
    let count=0;
    $$('.game-card').forEach(card=>{
      const matchCategory=state.filter==='All'||card.dataset.category===state.filter;
      const matchText=card.textContent.toLowerCase().includes(state.query);
      card.hidden=!(matchCategory && matchText);
      if (!card.hidden)count++;
    });
    $('#result-count').textContent=`${count} ${count===1?'GAME':'GAMES'}`;
    $('#no-games').hidden=count!==0;
  }
  const filters=$('#filters');
  filters?.addEventListener('click',e=>{
    const b=e.target.closest('button[data-filter]');if(!b)return;
    state.filter=b.dataset.filter;
    $$('#filters button').forEach(x=>{const selected=x===b;x.classList.toggle('active',selected);x.setAttribute('aria-pressed',String(selected));});
    filterGames();
  });
  $('#game-search')?.addEventListener('input',e=>{state.query=e.target.value.trim().toLowerCase();filterGames();});
  filterGames();

  const dialog=$('#game-modal');
  const close=$('#modal-close');
  let lastFocus=null;
  function openGame(g){
    if(!g || !dialog)return;
    lastFocus=document.activeElement;
    $('#modal-title').textContent=g.title;
    $('#modal-category').textContent=g.label||g.category;
    $('#modal-description').textContent=g.description;
    const im=$('#modal-art');im.src=imagePath(g.image)||imagePath(g.fallback);im.alt=g.title+' artwork';im.dataset.fallback=imagePath(g.fallback);im.dataset.fallbackUsed='';
    $('#modal-store').href=safeUrl(g.link);
    const shots=Array.isArray(g.screenshots)?g.screenshots:[];
    $('#modal-gallery').innerHTML=shots.map(u=>`<img src="${esc(imagePath(u))}" alt="${esc(g.title)} gameplay screenshot" loading="lazy" data-fallback="${esc(imagePath(g.fallback))}">`).join('');
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
    close?.focus();
  }
  grid?.addEventListener('click',e=>{
    const b=e.target.closest('[data-open]');if(!b)return;
    const g=games.find(x=>x.id===b.dataset.open);
    if (g) openGame(g); else {
      // If content.js was unavailable, the static fallback still offers Google Play links.
      const card=b.closest('.game-card');const link=card?.querySelector('.play-button');if(link)window.open(link.href,'_blank','noopener');
    }
  });
  close?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog?.addEventListener('close',()=>{if(lastFocus&&typeof lastFocus.focus==='function')lastFocus.focus();});
  $('#menu')?.addEventListener('click',()=>{const nav=$('#navigation');const open=nav.classList.toggle('open');$('#menu').setAttribute('aria-expanded',String(open));});
  $$('#navigation a').forEach(link=>link.addEventListener('click',()=>{$('#navigation').classList.remove('open');$('#menu')?.setAttribute('aria-expanded','false');}));
  $('#copyright').textContent=`© ${new Date().getFullYear()} ${(site && site.name) || 'Fun Simulation'}. All rights reserved.`;
})();
