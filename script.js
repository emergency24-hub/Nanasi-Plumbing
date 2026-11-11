/* EDIT YOUR WEBSITE HERE. Leave missing details blank; they will not be displayed.
   All images must be local paths. Service IDs should remain unique. */
const BUSINESS = {
  name: 'NANASI PLUMBING & HEATING LTD', phone: '07418 358054', phoneLink: '+447418358054',
  email: 'info@nanasiplumbingandheating.co.uk', domain: 'nanasiplumbingandheating.co.uk', address: '56 Fulham High Street, London, England, SW6 3LQ', companyNumber: '13864875',
  areas: [], // Add only confirmed areas, for example: ['Fulham'].
  experience: '20+ years', emergency: '24/7 emergency line',
  about: 'Over 20 years of expertise in plumbing and heating for homes and businesses. From an urgent leak to a planned installation, we bring care, clear communication and attention to detail to every job.',
  services: [
    {id:'emergency-plumbing', name:'Emergency Plumbing', image:'assets/plumber-working.webp', alt:'Plumber working on a sink waste connection', label:'WHEN IT CANNOT WAIT', short:'Burst pipes, leaks and blockages. Practical help when your plumbing needs urgent attention.', intro:'A sudden plumbing problem can disrupt your whole day. Call our 24/7 emergency line to explain the issue and arrange the next step.', work:['Burst pipes and water leaks','Blocked sinks and plumbing connections','Urgent plumbing issues in homes and businesses'], detail:'Tell us where the problem is, when it started and your postcode. We will discuss the work and confirm attendance with you. Ask about same-day response for urgent issues.'},
    {id:'gas-boiler-servicing', name:'Gas Boiler Servicing', image:'assets/boiler-service.webp', alt:'Wall-mounted gas boiler and connected pipework', label:'LOOK AFTER YOUR HEATING', short:'Boiler servicing, repairs and installations to help keep your heating working reliably.', intro:'From routine servicing to a boiler fault or a replacement, get help with the heating system your property depends on.', work:['Routine boiler maintenance','Boiler fault assessment and repairs','Boiler replacement and installation enquiries'], detail:'Have your boiler make and model ready when you call, along with any fault code or symptoms. We will discuss your requirements and arrange the appropriate next step.'},
    {id:'pipe-installation', name:'Pipe Installation', image:'assets/sink-pipework.webp', alt:'Copper water pipes and waste connections beneath a sink', label:'BUILT INTO YOUR PLANS', short:'Carefully planned pipework for renovations, new builds and changes to your plumbing.', intro:'Good plumbing starts with the right pipework. We help homeowners and developers plan and install plumbing for their project.', work:['New plumbing systems','Pipework for renovations and new builds','Alterations to existing plumbing layouts'], detail:'Share your plans, property details and project stage. We will discuss the pipework needed, access requirements and how the installation fits with the wider work.'},
    {id:'maintenance-plans', name:'Maintenance Plans', image:'assets/boiler-controls.webp', alt:'Heating equipment and boiler controls', label:'PLAN AHEAD', short:'Preventive care for your property, with regular checks to help spot issues early.', intro:'Keep on top of your plumbing and heating with planned care for homes and businesses.', work:['Planned plumbing and heating checks','Preventive maintenance discussions','Care tailored to your property'], detail:'Call to discuss the systems at your property and the level of care you need. Plan scope, visit frequency and pricing are agreed directly; no online subscription is taken.'}
  ],
  faqs: [
    ['Can I call about an urgent plumbing problem?', 'Yes. Our emergency line is available 24/7. Call to describe the issue and confirm attendance.'],
    ['Do you work with homes and businesses?', 'Yes. We offer plumbing and heating services for homes and businesses, including planned installation and maintenance work.'],
    ['How do I check whether you cover my area?', 'Call with your postcode and a brief description of the work. We will confirm whether we can help at your location.'],
    ['How do I arrange a service or discuss a project?', 'Call with your property details and the service you need. For boiler enquiries, have the make, model and any fault code ready.']
  ]
};

const main = document.querySelector('main');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const call = (label = 'Call '+BUSINESS.phone, cls = 'button') => `<a class="call-link ${cls === 'contact-number' ? cls : ''}" href="tel:${esc(BUSINESS.phoneLink)}">${esc(label)}</a>`;
const serviceLink = s => `#service/${s.id}`;
function home(){return `
  <section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow light">NANASI PLUMBING & HEATING</p><h1>Expert hands.<br>For everything<br><em>that flows.</em></h1><p class="hero-description">Professional plumbing and gas boiler services.<br>From urgent repairs to carefully planned projects.</p><div class="actions">${call()}<a class="text-link" href="#services">Explore our services</a></div><div class="hero-notes"><span><b>${esc(BUSINESS.experience)}</b> of expertise</span><span>${esc(BUSINESS.emergency)}</span></div></div><div class="hero-visual"><img src="assets/plumber-working.webp" alt="Plumber carrying out work beneath a kitchen sink" width="1024" height="681" fetchpriority="high"><div class="photo-caption"><span>THE DETAILS MAKE THE DIFFERENCE.</span><strong>Care in every connection.</strong></div></div></div></section>
  <section class="service-strip" aria-label="Our services"><div class="strip-window" tabindex="0" aria-label="Services ribbon. Focus or hover to pause scrolling."><div class="strip-track"><div class="strip-group"><span>EMERGENCY REPAIRS</span><span>BOILER SERVICING</span><span>PIPE INSTALLATION</span><span>PLANNED MAINTENANCE</span></div><div class="strip-group" aria-hidden="true"><span>EMERGENCY REPAIRS</span><span>BOILER SERVICING</span><span>PIPE INSTALLATION</span><span>PLANNED MAINTENANCE</span></div></div></div></section>
  <section class="section wrap" id="services"><div class="section-heading"><div><p class="eyebrow">WHAT WE DO</p><h2>The right help.<br>For the job at hand.</h2></div><p>Urgent fixes or future plans.<br>Explore our plumbing and heating services.</p></div><div class="service-grid">${BUSINESS.services.map((s,i)=>`<article class="service-card reveal"><a href="${serviceLink(s)}" tabindex="-1" aria-hidden="true"><img src="${esc(s.image)}" alt="" loading="lazy" width="600" height="430"></a><div class="card-body"><span class="index">0${i+1} /</span><h3><a href="${serviceLink(s)}">${esc(s.name)}</a></h3><p>${esc(s.short)}</p><a class="service-more" href="${serviceLink(s)}" aria-label="Learn more about ${esc(s.name)}">Learn more</a></div></article>`).join('')}</div></section>
  <section class="about section" id="about"><div class="wrap about-grid"><div><p class="eyebrow">A PERSONAL APPROACH</p><h2>Good work starts<br>with listening.</h2><p class="intro">${esc(BUSINESS.about)}</p></div><div class="values"><div><span>01</span><div><h3>Professional standards</h3><p>Expert craftsmanship and meticulous attention to detail, from the first conversation to the finishing touches.</p></div></div><div><span>02</span><div><h3>Genuine partnership</h3><p>We listen, communicate openly and treat every homeowner and developer as a valued partner.</p></div></div></div></div></section>
  <section class="section wrap area-grid" id="areas"><div><p class="eyebrow">SERVICE AREAS</p><h2>Let’s check<br>your postcode.</h2><p>${BUSINESS.areas.length?'Serving '+BUSINESS.areas.map(esc).join(', ')+'. Call to confirm coverage for your address.':'Call with your postcode and the work you need. We’ll confirm coverage and discuss the next step.'}</p>${call('Check your area', 'button navy')}</div><div class="address-panel"><span class="eyebrow">REGISTERED IN LONDON</span><h3>Fulham High Street<br>SW6 3LQ</h3><p>${esc(BUSINESS.address)}</p><small>Registered office address. Please call to arrange service; this is not a confirmed walk-in location.</small></div></section>
  <section class="faq section"><div class="wrap faq-grid"><div><p class="eyebrow">BEFORE YOU CALL</p><h2>A few useful<br>answers.</h2></div><div>${BUSINESS.faqs.map(([q,a])=>`<details><summary>${esc(q)}<span aria-hidden="true">+</span></summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>
  ${contact()}`;}
function contact(){return `<section class="contact section" id="contact"><div class="wrap contact-grid"><div><p class="eyebrow light">LET’S GET IT SORTED</p><h2>A repair. A service.<br>A new project.</h2><p>Tell us what you need. We’ll take it from there.</p></div><div><span class="eyebrow light">${esc(BUSINESS.emergency)}</span>${call(BUSINESS.phone,'contact-number')}<p>For homes and businesses</p>${BUSINESS.email?`<a class="text-link" href="mailto:${esc(BUSINESS.email)}">${esc(BUSINESS.email)}</a>`:''}</div></div></section>`;}
function service(s){return `<section class="detail-hero"><div class="wrap"><a class="back" href="#services">All services</a><div class="detail-grid"><div><p class="eyebrow light">${esc(s.label)}</p><h1>${esc(s.name)}</h1><p class="hero-description">${esc(s.intro)}</p>${call('Discuss this service')}</div><img src="${esc(s.image)}" alt="${esc(s.alt)}" width="700" height="600"></div></div></section><section class="section wrap detail-content"><div><p class="eyebrow">HOW WE CAN HELP</p><h2>Work around<br>your property.</h2><ul>${s.work.map(w=>`<li>${esc(w)}</li>`).join('')}</ul></div><div><h3>Arranging the work</h3><p>${esc(s.detail)}</p><p>Call ${esc(BUSINESS.phone)} to discuss your location, requirements and pricing.</p><a class="button navy" href="#contact">Contact details</a></div></section><section class="wrap related"><h2>Other services</h2>${BUSINESS.services.filter(x=>x!==s).map(x=>`<a href="${serviceLink(x)}">${esc(x.name)}</a>`).join('')}</section>${contact()}`;}
function privacy(){return `<section class="section wrap legal"><p class="eyebrow">YOUR PRIVACY</p><h1>Privacy</h1><p>This website does not use analytics, advertising cookies, contact forms or browser storage. It does not send your details to a website backend.</p><p>If you contact ${esc(BUSINESS.name)} by telephone${BUSINESS.email?' or email':''}, the information you provide is used to respond to your enquiry and arrange the requested work. Call ${esc(BUSINESS.phone)} with questions about your information.</p><p>When hosted online, the hosting provider may process technical connection information under its own policies.</p><a class="button navy" href="#home">Return home</a></section>`;}
function route(){
 const hash=location.hash.slice(1), s=BUSINESS.services.find(x=>'service/'+x.id===hash);
 const isPage=s||hash==='privacy';
 if(isPage || !main.dataset.home){main.innerHTML=s?service(s):hash==='privacy'?privacy():home(); main.dataset.home=isPage?'':'yes';}
 document.title=(s?s.name:hash==='privacy'?'Privacy':'Plumbing & Boiler Services')+' | Nanasi Plumbing & Heating Ltd';
 document.querySelectorAll('#nav a').forEach(a=>a.removeAttribute('aria-current'));
 const active=document.querySelector(`#nav a[href="${s?'#services':'#'+hash}"]`); if(active)active.setAttribute('aria-current','page');
 closeMenu();
 requestAnimationFrame(()=>{const target=!isPage&&document.getElementById(hash); if(target)target.scrollIntoView(); else window.scrollTo(0,0); if(isPage) main.focus({preventScroll:true}); observe();});
}
function observe(){if(!('IntersectionObserver' in window))return; const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus();}});
document.querySelectorAll('[data-phone]').forEach(a=>a.href='tel:'+BUSINESS.phoneLink);
document.querySelectorAll('[data-number]').forEach(el=>el.textContent=BUSINESS.phone);
document.querySelector('[data-company]').textContent=BUSINESS.name;
document.querySelector('[data-registration]').textContent=BUSINESS.companyNumber;
document.querySelector('[data-address]').textContent=BUSINESS.address;
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('footer-services').innerHTML=BUSINESS.services.map(s=>`<a href="${serviceLink(s)}">${esc(s.name)}</a>`).join('');
window.addEventListener('hashchange',route);route();

// Keep the header available while navigating or using its menu.
const header = document.querySelector('header');
let previousScroll = Math.max(0, window.scrollY);
let scrollQueued = false;
function updateHeader() {
  const current = Math.max(0, window.scrollY);
  const change = current - previousScroll;
  const pinned = current < header.offsetHeight || menu.getAttribute('aria-expanded') === 'true' || header.contains(document.activeElement);
  if (pinned) header.classList.remove('header-hidden');
  else if (Math.abs(change) > 5) header.classList.toggle('header-hidden', change > 0);
  if (Math.abs(change) > 5 || pinned) previousScroll = current;
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateHeader); }
}, { passive: true });
header.addEventListener('focusin', () => header.classList.remove('header-hidden'));
window.addEventListener('hashchange', () => header.classList.remove('header-hidden'));


