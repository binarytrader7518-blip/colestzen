/* ColestZen site scripts: nav, reveal, bottle tilt, promo modal, info toasts, sticky bar.
   Reusable: change the CONFIG object for another product site. */
(function () {
  'use strict';
  var CONFIG = {
    product: 'ColestZen',
    modalDelay: 6000,               // ms after load
    modalCooldownHours: 24,
    toastFirst: 5000, toastShow: 6000, toastMin: 18000, toastMax: 26000,
    toasts: [
      'Compare the 2, 3 and 6-bottle <a href="/order?package=6">ColestZen packages</a> side by side.',
      'Per the seller, the 6-bottle ColestZen package ships free within the US.',
      'The seller offers a 60-day money-back guarantee on ColestZen orders.',
      'ColestZen orders are a one-time payment, with no subscription, per the seller.',
      'The 6-bottle package includes three bonus digital guides, per the seller.'
    ]
  };
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function store(type) { try { var s = window[type]; var k = '__t'; s.setItem(k, k); s.removeItem(k); return s; } catch (e) { return null; } }
  var LS = store('localStorage'), SS = store('sessionStorage');

  /* Mobile nav */
  var toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); } });
  }

  /* Scroll reveal */
  var rev = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add('in'); }); }

  /* Pointer tilt on the hero bottle */
  var stage = document.querySelector('.stage'), bottle = stage && stage.querySelector('.bottle-3d');
  if (stage && bottle && !reduce && window.matchMedia('(pointer:fine)').matches) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      bottle.style.setProperty('--ry', (x * 16).toFixed(2) + 'deg');
      bottle.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg');
    });
    stage.addEventListener('pointerleave', function () { bottle.style.setProperty('--ry', '0deg'); bottle.style.setProperty('--rx', '0deg'); });
  }

  /* Order page: highlight chosen package */
  var params = new URLSearchParams(location.search), pkg = params.get('package');
  if (pkg && /^(2|3|6)$/.test(pkg)) {
    var card = document.getElementById('pkg-' + pkg);
    if (card) { card.classList.add('selected'); setTimeout(function () { card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }, 300); }
  }

  var isOrder = document.body.classList.contains('page-order');

  /* Sticky buy bar */
  var sticky = document.querySelector('.sticky-buy');
  if (sticky && !isOrder && !(SS && SS.getItem('cz_sticky_closed'))) {
    var shown = false;
    var onScroll = function () {
      var want = window.scrollY > 600;
      if (want !== shown) { shown = want; sticky.classList.toggle('show', want); document.body.classList.toggle('has-sticky', want); }
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    var sc = sticky.querySelector('.sticky-close');
    if (sc) sc.addEventListener('click', function () { sticky.remove(); document.body.classList.remove('has-sticky'); window.removeEventListener('scroll', onScroll); if (SS) SS.setItem('cz_sticky_closed', '1'); });
  }

  /* Centered promo modal */
  var modal = document.getElementById('promo-modal'), lastFocus = null, modalOpen = false;
  function cooldownActive() {
    if (SS && SS.getItem('cz_modal_seen')) return true;
    if (LS) { var t = parseInt(LS.getItem('cz_modal_closed') || '0', 10); if (t && Date.now() - t < CONFIG.modalCooldownHours * 3600e3) return true; }
    return false;
  }
  var modalWillShow = !!modal && !isOrder && !cooldownActive();
  function focusables() { return modal.querySelectorAll('a[href],button:not([disabled])'); }
  function trap(e) {
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;
    var f = focusables(), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function openModal() {
    if (modalOpen || cooldownActive()) { startToasts(CONFIG.toastFirst); return; }
    lastFocus = document.activeElement; modalOpen = true;
    modal.hidden = false; void modal.offsetWidth; modal.classList.add('open');
    document.body.classList.add('modal-lock');
    if (SS) SS.setItem('cz_modal_seen', '1');
    document.addEventListener('keydown', trap);
    setTimeout(function () { var c = modal.querySelector('.modal-close'); if (c) c.focus(); }, 60);
    hideToast();
  }
  function closeModal() {
    if (!modalOpen) return; modalOpen = false;
    modal.classList.remove('open'); document.body.classList.remove('modal-lock');
    document.removeEventListener('keydown', trap);
    if (LS) LS.setItem('cz_modal_closed', String(Date.now()));
    setTimeout(function () { modal.hidden = true; }, reduce ? 0 : 380);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    startToasts(CONFIG.toastFirst);
  }
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
    var mcta = modal.querySelector('.btn'); if (mcta) mcta.addEventListener('click', function () { if (LS) LS.setItem('cz_modal_closed', String(Date.now())); });
  }
  function whenReady(fn) { if (document.readyState === 'complete') fn(); else window.addEventListener('load', fn); }
  whenReady(function () {
    if (modalWillShow) setTimeout(openModal, CONFIG.modalDelay);
    else startToasts(CONFIG.toastFirst);
  });

  /* Informational toasts (no fabricated purchase activity) */
  var toast = document.getElementById('info-toast'), tIdx = 0, tTimer = null, hideTimer = null, toastsStarted = false, toastsStopped = false;
  function hideToast() { if (toast) toast.classList.remove('show'); clearTimeout(hideTimer); }
  function showToast() {
    if (!toast || toastsStopped) return;
    if (modalOpen) { schedule(); return; }
    toast.querySelector('p').innerHTML = CONFIG.toasts[tIdx % CONFIG.toasts.length]; tIdx++;
    toast.classList.add('show');
    hideTimer = setTimeout(function () { toast.classList.remove('show'); schedule(); }, CONFIG.toastShow);
  }
  function schedule() { clearTimeout(tTimer); if (toastsStopped) return; tTimer = setTimeout(showToast, CONFIG.toastMin + Math.random() * (CONFIG.toastMax - CONFIG.toastMin)); }
  function startToasts(delay) {
    if (!toast || toastsStarted || (SS && SS.getItem('cz_toast_off'))) return;
    toastsStarted = true; tTimer = setTimeout(showToast, delay);
  }
  if (toast) toast.querySelector('button').addEventListener('click', function () { toastsStopped = true; hideToast(); clearTimeout(tTimer); if (SS) SS.setItem('cz_toast_off', '1'); });
})();
