(()=>{'use strict';
const IMAGE_ROOT='https://raw.githubusercontent.com/Vociferix/ptcgp-images/master/';
const pi=id=>document.getElementById('pocketImmersive'+id);
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const WIKI_FILES={
  "A3a|buzzwole ex": "Animación carta inmersiva Buzzwole ex (Crisis Dimensional 88 TCG Pocket).webm",
  "A2|dialga ex": "Animación carta inmersiva Dialga ex (Pugna Espaciotemporal 207 TCG Pocket).webm",
  "A3b|eevee ex": "Animación carta inmersiva Eevee ex (Arboleda de Eevee 92 TCG Pocket).webm",
  "A3|guzma": "Animación carta inmersiva Guzmán (Guardianes Celestiales 208 TCG Pocket).webm",
  "A3|guzman": "Animación carta inmersiva Guzmán (Guardianes Celestiales 208 TCG Pocket).webm",
  "A2|palkia ex": "Animación carta inmersiva Palkia ex (Pugna Espaciotemporal 204 TCG Pocket).webm",
  "B4a|team rocket s master plan": "Animación carta inmersiva Plan Maestro del Team Rocket (La Ambición del Team Rocket 94 TCG Pocket).webm"
};
const YOUTUBE_IDS={
  "C1|185": "uEOx-9cILqk",
  "P-B|103": "cVALVDJsKXA",
  "C1|183": "Z-T2OfFJRrE",
  "C1|186": "SL7v4zRM6mk",
  "C1|184": "OpoTLSqGlRM",
  "A4b|376": "9NMsDlXg_Fw",
  "B4b|425": "7llS1A27FKs",
  "B4a|094": "pezWQvqEJmc",
  "B4|203": "aawuhktZW1g",
  "B4|202": "gFClcEpjKGw",
  "B3b|090": "fxYGj4amPuE",
  "B3a|093": "g4iUP3BrLvs",
  "B3|204": "Vwz4FAtIt-c",
  "B3|203": "e4ZRrggr_KI",
  "B2b|085": "Vz-a26hvCp0",
  "B2b|086": "TwizIZ2_eyQ",
  "B2a|115": "TOkf4olKNoo",
  "B2|204": "uX04UdRAslA",
  "B2|203": "wRgdW1zK7SE",
  "B1a|087": "NObDDSnrT_s",
  "B1|285": "3N3InCni1GQ",
  "B1|284": "KqCDLPpPgf8",
  "B1|286": "Opys9LjKQjw",
  "A4a|090": "W40ntBSgMjs",
  "A4|211": "orwZMovlkDQ",
  "A4|210": "TiNKIZaHNwM",
  "A3b|092": "YMyOQq7vAb4",
  "A3a|088": "G4oecvhjfgY",
  "A3|208": "szjqmjxh2xA",
  "A3|209": "PLWOYjejSrI",
  "A2b|096": "MTG80f2fAic",
  "A2a|095": "5uCZbrQziJg",
  "A1a|085": "T-1z8cGZsNM",
  "A2|204": "Y_UUIpLqlEg",
  "A2|205": "hLC3DL8JcR4",
  "A1|283": "S-7g0e8y2A4",
  "A1|280": "kGcG1xx5nf4",
  "A1|281": "Fxbqn42OQjM",
  "A1|282": "VCNdzN6INCQ"
};
const SET_ALIASES={
 A1:['genetic apex','genes formidables'],
 A1a:['mythical island','la isla singular'],
 A2:['space-time smackdown','pugna espaciotemporal'],
 A2a:['triumphant light','luz triunfal'],
 A2b:['shining revelry','festival brillante'],
 A3:['celestial guardians','guardianes celestiales'],
 A3a:['extradimensional crisis','crisis dimensional'],
 A3b:['eevee grove','arboleda de eevee'],
 A4:['wisdom of sea and sky','sabiduria del cielo y el mar'],
 A4a:['secluded springs','manantial oculto'],
 A4b:['deluxe pack ex','deluxe pack ex'],
 B1:['mega rising'],
 B1a:['crimson blaze'],
 B2:['fantastical parade'],
 B2a:['paldean wonders'],
 B2b:['mega shine'],
 B3:['pulsing aura'],
 B3a:['paradox drive'],
 B3b:['everyday wonders'],
 B4:['ruler of the skies'],
 B4a:["team rocket's ambition",'la ambicion del team rocket'],
 B4b:['deluxe pack mega'],
 C1:['mega evolution','mega evolutions'],
 'P-B':['promo b','promo-b']
};
const WIKI_DIRECT={
 'A1|mew':'https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20241031212809/Animaci%C3%B3n_carta_inmersiva_Mew_%28Genes_Formidables_TCG_Pocket%29.webm',
 'A1|mewtwo ex':'https://images.wikidexcdn.net/mwuploads/wikidex/2/2a/latest/20241029182818/Animaci%C3%B3n_carta_inmersiva_Mewtwo_ex_%28Genes_Formidables_282_TCG_Pocket%29.webm',
 'A1|pikachu ex':'https://images.wikidexcdn.net/mwuploads/wikidex/6/66/latest/20241029175324/Animaci%C3%B3n_carta_inmersiva_Pikachu_ex_%28Genes_Formidables_281_TCG_Pocket%29.webm',
 'A1|charizard ex':'https://images.wikidexcdn.net/mwuploads/wikidex/a/a3/latest/20241028173507/Animaci%C3%B3n_carta_inmersiva_Charizard_ex_%28Genes_Formidables_280_TCG_Pocket%29.webm',
 'A1a|celebi ex':'https://images.wikidexcdn.net/mwuploads/wikidex/b/b3/latest/20241217075445/Animaci%C3%B3n_carta_inmersiva_Celebi_ex_%28La_Isla_Singular_85_TCG_Pocket%29.webm',
 'A2a|arceus ex':'https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20260302064755/Animaci%C3%B3n_carta_inmersiva_Arceus_ex_%28Luz_Triunfal_95_TCG_Pocket%29.webm',
 'A2b|giratina ex':'https://images.wikidexcdn.net/mwuploads/wikidex/7/70/latest/20260302070106/Animaci%C3%B3n_carta_inmersiva_Giratina_ex_%28Festival_Brillante_96_TCG_Pocket%29.webm',
 'A3|lillie':'https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20260302074428/Animaci%C3%B3n_carta_inmersiva_Lylia_%28Guardianes_Celestiales_209_TCG_Pocket%29.webm',
 'A3|lylia':'https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20260302074428/Animaci%C3%B3n_carta_inmersiva_Lylia_%28Guardianes_Celestiales_209_TCG_Pocket%29.webm',
 'A4a|suicune ex':'https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20260302154457/Animaci%C3%B3n_carta_inmersiva_Suicune_ex_%28Manantial_Oculto_90_TCG_Pocket%29.webm'
};
const WIKI_NAME_ALIASES={'A3|lillie':['lillie','lylia'],'A3|guzma':['guzma','guzman']};
const wikiUrlCache=new Map();
function setCode(c){
 const values=[];
 for(const k of ['set','set_code','set_id','set_name','expansion']){const v=c?.[k];if(v&&typeof v==='object')values.push(v.code,v.id,v.name,v.abbreviation);else values.push(v)}
 for(const v of values){const raw=String(v??'').trim(),mixed=raw.match(/^([AB])(\d+)([a-z])$/i);if(mixed)return mixed[1].toUpperCase()+mixed[2]+mixed[3].toLowerCase();const m=raw.toUpperCase().match(/^(A\d+|B\d+|C\d+|P-B)$/);if(m)return m[1]}
 const text=values.map(norm).filter(Boolean).join(' ');for(const [code,items] of Object.entries(SET_ALIASES))if(items.some(a=>text.includes(norm(a))))return code;return '';
}
function cardKey(c){const raw=String(c.number??c.card_number??c.number_label??''),digits=(raw.match(/\d{1,3}/)||[])[0]||'';return setCode(c)+'|'+digits.padStart(3,'0')}
function wikiNameKey(c){return setCode(c)+'|'+norm(c.name||c.card_name||'')}
async function wikiUrlForCard(c){
 const key=wikiNameKey(c);if(WIKI_DIRECT[key])return WIKI_DIRECT[key];
 const aliases=WIKI_NAME_ALIASES[key]||[],name=norm(c.name||c.card_name||'');let file=WIKI_FILES[setCode(c)+'|'+name];
 if(!file&&aliases.length){const prefix=setCode(c)+'|';file=Object.entries(WIKI_FILES).find(([k])=>k.startsWith(prefix)&&aliases.some(a=>norm(k.slice(prefix.length))===norm(a)))?.[1]}
 if(!file)return '';if(wikiUrlCache.has(file))return wikiUrlCache.get(file);
 const params=new URLSearchParams({action:'query',titles:'File:'+file,prop:'imageinfo',iiprop:'url',format:'json',origin:'*'});
 const response=await fetch('https://www.wikidex.net/api.php?'+params.toString());if(!response.ok)throw Error('WikiDex lookup failed ('+response.status+')');
 const data=await response.json(),url=Object.values(data.query?.pages||{})[0]?.imageinfo?.[0]?.url||'';wikiUrlCache.set(file,url);return url;
}
function getCard(id){return cards.find(c=>String(c.id)===String(id))||null}
function isImmersive(c){return !!c&&(String(c.rarity||'').trim().toUpperCase()==='IM'||/immersive/i.test(String(c.rarity_name||'')))}
const css=`
#pocketImmersiveTransition{position:fixed;inset:0;z-index:100000;display:none;place-items:center;overflow:hidden;isolation:isolate;background:radial-gradient(circle,#4b2c68 0,#090d18 72%);opacity:0}
#pocketImmersiveTransition.show{display:grid;animation:pocketFadeIn .22s forwards}
#pocketImmersiveTransition .fx-layer{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1}
#pocketImmersiveTransition .ball{width:100px;height:100px;border-radius:50%;position:relative;overflow:hidden;border:5px solid #e9efff;box-shadow:0 0 35px #8b5cf6aa,0 0 100px #5ee7ed44;animation:pocketSpinBall 1.05s cubic-bezier(.2,.7,.2,1) forwards;z-index:2}
#pocketImmersiveTransition .ball:before,#pocketImmersiveTransition .ball:after{content:"";position:absolute;left:0;right:0}
#pocketImmersiveTransition .ball:before{top:0;height:50%;background:linear-gradient(145deg,#ff6b73,#d91f42)}
#pocketImmersiveTransition .ball:after{bottom:0;height:50%;background:linear-gradient(145deg,#fff,#cbd5e1)}
#pocketImmersiveTransition .ball-line{position:absolute;z-index:2;left:0;right:0;top:calc(50% - 5px);height:10px;background:#172033;border-block:2px solid #e9efff}
#pocketImmersiveTransition .ball-center{position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;transform:translate(-50%,-50%);border:5px solid #172033;background:#fff;border-radius:50%;box-shadow:0 0 0 3px #e9efff}
#pocketImmersiveTransition .transition-label{position:absolute;top:calc(50% + 85px);font-size:10px;letter-spacing:.2em;color:#dbeafe;font-weight:800;z-index:2}
#pocketImmersiveTransition .fx-particle{position:absolute;left:50%;top:50%;opacity:0;will-change:transform,opacity}
#pocketImmersiveTransition .fx-particle.fly{animation:pocketFxFly var(--dur,1.25s) cubic-bezier(.12,.68,.2,1) var(--delay,0s) both}
#pocketImmersiveTransition .fx-particle.spark{color:#fff4bd;text-shadow:0 0 10px currentColor;font-size:var(--size,22px)}
#pocketImmersivePlayer{position:fixed;inset:0;width:100vw;height:100vh;height:100dvh;min-height:100dvh;z-index:100001;background:#03050a;display:none;align-items:center;justify-content:center;overflow:hidden;touch-action:manipulation}
#pocketImmersivePlayer.show{display:flex}
#pocketImmersivePlayer .video-wrap{position:absolute;inset:0;width:100vw;height:100vh;height:100dvh;display:grid;place-items:center;background:#03050a}
#pocketImmersivePlayer video{width:100%;height:100%;object-fit:contain;background:#03050a}
#pocketImmersivePlayer iframe{display:none;position:absolute;left:50%;top:50%;width:100vw;height:100vh;height:100dvh;max-width:none;aspect-ratio:auto;transform:translate(-50%,-50%);border:0;border-radius:0;z-index:1;background:#000}
#pocketImmersivePlayer iframe.full{display:block}
#pocketImmersivePlayer .tap-shield{position:absolute;inset:0;z-index:2;background:transparent;cursor:pointer}
#pocketImmersivePlayer .player-top,#pocketImmersivePlayer .player-bottom{position:absolute;left:0;right:0;z-index:3;opacity:0;visibility:hidden;transition:opacity .18s,visibility .18s}
#pocketImmersivePlayer.controls-visible .player-top,#pocketImmersivePlayer.controls-visible .player-bottom{opacity:1;visibility:visible}
#pocketImmersivePlayer .player-top{top:0;padding:max(14px,env(safe-area-inset-top)) 16px 45px;display:flex;align-items:center;justify-content:space-between;gap:12px;background:linear-gradient(#000c,transparent);pointer-events:none}
#pocketImmersivePlayer .player-title{font-size:12px;font-weight:850;color:#fff;text-shadow:0 2px 8px #000;position:relative;z-index:3}
#pocketImmersivePlayer .player-actions{display:flex;gap:8px;pointer-events:auto}
#pocketImmersivePlayer .control{border:1px solid #ffffff55;background:#101827dd;color:white;border-radius:999px;padding:10px 15px;font-size:12px;font-weight:800;backdrop-filter:blur(12px);cursor:pointer}
#pocketImmersivePlayer .control.exit{background:#7f1d1ddd;border-color:#fca5a5}
#pocketImmersivePlayer .player-bottom{bottom:0;padding:45px 16px max(14px,env(safe-area-inset-bottom));background:linear-gradient(transparent,#000d);display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:auto}
#pocketImmersivePlayer .source-caption{font-size:11px;color:#dbeafe;text-align:center;margin-top:6px;max-width:760px}
#pocketImmersivePlayer .player-message{font-size:12px;color:#e5e7eb;text-align:center;text-shadow:0 2px 8px #000;max-width:500px;display:none}
#pocketImmersivePlayer .source-switch{display:flex;justify-content:center;gap:7px;margin-top:8px;pointer-events:auto}
#pocketImmersivePlayer .source-switch button{border:1px solid #ffffff66;background:#101827dd;color:#fff;border-radius:999px;padding:7px 11px;font-size:10px;font-weight:800}
#pocketImmersivePlayer .source-switch button[aria-pressed=true]{border-color:#5ee7ed;color:#5ee7ed}
#pocketImmersivePlayer .still-card{max-height:84vh;max-width:min(80vw,480px);object-fit:contain;display:none}
#pocketImmersivePlayer .player-top>*{pointer-events:auto}
@media (orientation:portrait) and (max-width:700px){#pocketImmersivePlayer iframe.full{width:100vw;height:177.78vw;max-height:none;left:50%;top:50%;transform:translate(-50%,-50%)}}
body.pocket-immersive-open{overflow:hidden;position:fixed;width:100%;height:100%;inset:0}
@keyframes pocketFadeIn{to{opacity:1}}
@keyframes pocketSpinBall{0%{transform:scale(.35) rotate(-220deg)}55%{transform:scale(1.18) rotate(420deg)}100%{transform:scale(1) rotate(720deg)}}
@keyframes pocketFxFly{0%{opacity:0;transform:translate(-50%,-50%) scale(.15) rotate(0)}12%{opacity:1}78%{opacity:1}100%{opacity:0;transform:translate(calc(-50% + var(--tx)),calc(-50% + var(--ty))) scale(var(--end,.15)) rotate(var(--rot,180deg))}}
`;
const style=document.createElement('style');style.id='pocket-immersive-style';style.textContent=css;document.head.append(style);
const host=document.createElement('div');host.innerHTML=`
<div id="pocketImmersiveTransition" aria-hidden="true"><div class="fx-layer" id="pocketImmersiveFx"></div><div class="ball"><span class="ball-line"></span><span class="ball-center"></span></div><div class="transition-label">✦ FIREWORKS ✦</div></div>
<section id="pocketImmersivePlayer" aria-label="Immersive card player" aria-hidden="true">
 <div class="video-wrap"><video id="pocketImmersiveVideo" playsinline preload="metadata"></video><iframe id="pocketImmersiveYoutube" title="YouTube immersive video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe><img class="still-card" id="pocketImmersiveStill" alt="Selected immersive card"></div>
 <div class="tap-shield" id="pocketImmersiveTap" aria-label="Tap to show or hide playback controls"></div>
 <div class="player-top"><div class="player-title" id="pocketImmersiveTitle">IMMERSIVE</div><div class="player-actions"><button class="control" id="pocketImmersivePause" type="button">Ⅱ Pause</button><button class="control exit" id="pocketImmersiveExit" type="button">✕ Exit</button></div></div>
 <div class="player-bottom"><div class="player-message" id="pocketImmersiveMessage"></div><div class="source-caption" id="pocketImmersiveCaption"></div><div class="source-switch" id="pocketImmersiveSwitch"></div></div>
</section>`;
document.body.append(host);
let holdState=null,holdTimer=null,longSuppress=null,controlsTimer=null,transitionTimer=null,youtubeActive=false,youtubePaused=false;
function clearHold(){clearTimeout(holdTimer);holdTimer=null;holdState=null}
function stopSources(){const v=pi('Video'),f=pi('Youtube');v.pause();v.removeAttribute('src');v.load();f.removeAttribute('src');f.className='';f.style.display='none';youtubeActive=false;youtubePaused=false}
function embedYoutube(id){const f=pi('Youtube'),origin=encodeURIComponent(location.origin);f.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&autohide=1&showinfo=0&enablejsapi=1&origin='+origin;f.className='full';f.style.display='block';youtubeActive=true;youtubePaused=false}
function showComingSoon(imageUrl){stopSources();pi('Caption').textContent='No playable WikiDex or YouTube video is currently available for this card.';pi('Switch').innerHTML='';pi('Video').style.display='none';pi('Still').src=imageUrl;pi('Still').style.display='block';pi('Pause').style.display='none';pi('Message').textContent='Immersive video coming soon for this card.'}
function requestFullscreen(){const target=document.documentElement;if(!document.fullscreenElement&&target.requestFullscreen){target.requestFullscreen({navigationUI:'hide'}).then(()=>{try{screen.orientation?.lock?.('portrait').catch(()=>{})}catch(_){}}).catch(()=>{})}}
function playEffect(){const layer=pi('Fx');layer.innerHTML='';for(let i=0;i<42;i++){const el=document.createElement('span');el.className='fx-particle spark';const angle=(Math.PI*2*i/42)+(Math.random()-.5)*.24,distance=130+Math.random()*Math.max(innerWidth,innerHeight)*.48;el.style.setProperty('--tx',Math.cos(angle)*distance+'px');el.style.setProperty('--ty',Math.sin(angle)*distance+'px');el.style.setProperty('--delay',Math.random()*.22+'s');el.style.setProperty('--dur',1.05+Math.random()*.5+'s');el.style.setProperty('--size',14+Math.random()*22+'px');el.style.setProperty('--end',.15+Math.random()*.5);el.style.setProperty('--rot',(Math.random()*720-360)+'deg');el.textContent=['✦','✧','⋆','✴'][i%4];layer.append(el);requestAnimationFrame(()=>el.classList.add('fly'))}const ball=host.querySelector('#pocketImmersiveTransition .ball');ball.style.animation='none';void ball.offsetWidth;ball.style.animation=''}
async function showPlayer(c,imageUrl){
 activeCard=c;pi('Title').textContent=((c.name||'Pokémon')+' · '+(c.set_name||c.set||'Pokémon TCG Pocket')+' · '+(c.number_label||c.number||'')).toUpperCase();
 pi('Pause').textContent='Ⅱ Pause';pi('Pause').style.display='';pi('Message').textContent='';pi('Caption').textContent='';pi('Switch').innerHTML='';
 const player=pi('Player');player.classList.remove('controls-visible');player.classList.add('show');player.setAttribute('aria-hidden','false');document.body.classList.add('pocket-immersive-open');stopSources();pi('Still').style.display='none';
 const key=cardKey(c);
 try{
  let wiki='';try{wiki=await wikiUrlForCard(c)}catch(err){console.warn('WikiDex lookup failed; trying YouTube',err)}
  if(wiki){
   const v=pi('Video');v.style.display='block';v.muted=false;
   v.onerror=()=>{const fallback=YOUTUBE_IDS[key];if(fallback){v.onerror=null;stopSources();embedYoutube(fallback)}else showComingSoon(imageUrl)};
   v.controls=false;v.src=wiki;v.load();v.play().catch(()=>{});
   pi('Caption').textContent='Process used: WikiDex — original video with its own audio.';return;
  }
  const yt=YOUTUBE_IDS[key];if(yt){embedYoutube(yt);pi('Caption').textContent='Process used: YouTube Short embedded directly in portrait/full-screen mode, with its original audio.';return}
  showComingSoon(imageUrl);
 }catch(err){console.error('Immersive playback failed',err);const yt=YOUTUBE_IDS[key];if(yt)embedYoutube(yt);else showComingSoon(imageUrl)}
}
function exitPlayer(){clearTimeout(controlsTimer);clearTimeout(transitionTimer);stopSources();activeCard=null;const p=pi('Player');p.classList.remove('show','controls-visible');p.setAttribute('aria-hidden','true');document.body.classList.remove('pocket-immersive-open');pi('Pause').style.display='';pi('Still').style.display='none';if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})}
function openCard(c){requestFullscreen();const t=pi('Transition');t.className='';t.classList.add('show');t.setAttribute('aria-hidden','false');playEffect();clearTimeout(transitionTimer);transitionTimer=setTimeout(()=>{t.classList.remove('show');t.setAttribute('aria-hidden','true');showPlayer(c,IMAGE_ROOT+String(c.image||'').replace(/^\//,''))},1550)}
function togglePause(){if(youtubeActive){const f=pi('Youtube'),func=youtubePaused?'playVideo':'pauseVideo';f.contentWindow?.postMessage(JSON.stringify({event:'command',func,args:[]}),'*');youtubePaused=!youtubePaused;pi('Pause').textContent=youtubePaused?'▶ Play':'Ⅱ Pause';return}const v=pi('Video');if(!v.src)return;if(v.paused){v.play().then(()=>pi('Pause').textContent='Ⅱ Pause').catch(()=>{})}else{v.pause();pi('Pause').textContent='▶ Play'}}
function showControls(){const p=pi('Player');p.classList.add('controls-visible');clearTimeout(controlsTimer);controlsTimer=setTimeout(()=>p.classList.remove('controls-visible'),2600)}
pi('Pause').addEventListener('click',togglePause);pi('Exit').addEventListener('click',exitPlayer);
pi('Tap').addEventListener('click',()=>{const p=pi('Player');if(p.classList.contains('controls-visible')){p.classList.remove('controls-visible');clearTimeout(controlsTimer)}else showControls()});
pi('Player').addEventListener('click',e=>{if(e.target.closest('.player-actions'))clearTimeout(controlsTimer)});
document.addEventListener('keydown',e=>{if(!pi('Player').classList.contains('show'))return;if(e.key==='Escape')exitPlayer();if(e.code==='Space'){e.preventDefault();togglePause()}});
function cardFromTarget(target){const el=target.closest('.card[data-card-id],.binder-view-slot[data-card-id],.kanto-card[data-id]');if(!el)return null;const id=el.dataset.cardId||el.dataset.id,c=getCard(id);return c&&isImmersive(c)?{el,c,id}:null}
document.addEventListener('pointerdown',e=>{
 const hit=cardFromTarget(e.target);if(!hit)return;
 if(e.target.closest('button,input,select,a')&&e.target!==hit.el&&!hit.el.classList.contains('kanto-card'))return;
 if(hit.el.classList.contains('card')&&e.target.closest('.card-controls'))return;
 clearHold();holdState={...hit,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,ready:false};
 holdTimer=setTimeout(()=>{if(holdState&&holdState.pointerId===e.pointerId)holdState.ready=true},2000);
});
document.addEventListener('pointermove',e=>{if(!holdState||e.pointerId!==holdState.pointerId)return;if(Math.hypot(e.clientX-holdState.startX,e.clientY-holdState.startY)>14)clearHold()},{passive:true});
document.addEventListener('pointerup',e=>{
 if(!holdState||e.pointerId!==holdState.pointerId)return;const h=holdState;clearHold();if(!h.ready||!h.el.isConnected)return;
 if(h.el.classList.contains('kanto-card'))longSuppress={id:h.id,until:Date.now()+900};
 openCard(h.c);
});
document.addEventListener('pointercancel',e=>{if(holdState&&e.pointerId===holdState.pointerId)clearHold()});
document.addEventListener('contextmenu',e=>{if(cardFromTarget(e.target))e.preventDefault()});
document.addEventListener('click',e=>{if(!longSuppress||Date.now()>longSuppress.until)return;const hit=e.target.closest('.kanto-card[data-id]');if(hit&&hit.dataset.id===longSuppress.id){e.preventDefault();e.stopImmediatePropagation();longSuppress=null}},true);
})();