/* Amapola — Cala Millor
   Data verified from Google Maps + Restaurant Guru (2233 reviews, 4.8 ★).
   Menu items verified from highlights & reviews. Default lang: ES. */

const RECS = [
  { es:{n:"Chuletón al Josper", d:"Galicia en estado puro — cortado a mano, sellado al Josper."}, en:{n:"Josper-grilled ribeye", d:"Pure Galicia — cut by hand, seared on the Josper."}, de:{n:"Galicisches Rind vom Josper", d:"Galicien pur — von Hand geschnitten, am Josper gegrillt."} },
  { es:{n:"Chuletas de cordero", d:"De las más pedidas — crujientes por fuera, jugosas por dentro."}, en:{n:"Lamb chops", d:"One of the most ordered — crispy outside, juicy inside."}, de:{n:"Lammkoteletts", d:"Eine der meistbestellten — außen knusprig, innen saftig."} },
  { es:{n:"Paella", d:"Hecha como debe ser — generosa, en su punto, para compartir."}, en:{n:"Paella", d:"Made the way it should be — generous, perfectly done, for sharing."}, de:{n:"Paella", d:"So wie sie sein muss — großzügig, auf den Punkt, zum Teilen."} },
  { es:{n:"Brochetas de carne", d:"Carne tierna en pincho, marinada y a la brasa."}, en:{n:"Meat kebabs", d:"Tender marinated meat on the skewer, fired on the grill."}, de:{n:"Fleischspieße", d:"Zartes mariniertes Fleisch am Spieß, frisch vom Grill."} },
  { es:{n:"Lubina a la brasa", d:"Pescado fresco al carbón — directo, sin trucos."}, en:{n:"Sea bass on the grill", d:"Fresh fish on charcoal — direct, no tricks."}, de:{n:"Wolfsbarsch vom Grill", d:"Frischer Fisch über Kohle — direkt, ohne Schnickschnack."} },
  { es:{n:"Tapas para compartir", d:"Raciones pequeñas para empezar — perfectas para mesa larga."}, en:{n:"Sharing tapas", d:"Small plates to start — perfect for a long table."}, de:{n:"Tapas zum Teilen", d:"Kleine Portionen zum Start — perfekt für die große Runde."} }
];

const I18N = {
  es: {
    "nav.menu":"Recomendaciones","nav.gallery":"Imágenes","nav.story":"Sobre nosotros","nav.visit":"Visita",
    "cta.reserve":"Reservar",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Carnes a la brasa. Josper. Paella.",
    "hero.sub":"Parrilla mediterránea en Cala Millor — cortes premium al Josper, paella en su punto, vino con carácter. El jefe cuida cada plato.",
    "hero.reserve":"Reservar mesa",
    "hero.call":"Llamar",
    "hero.hours":"Mediodía 13:00 – 15:30  ·  Noche 18:00 – 22:30",
    "hero.rating":"★ 4,6 · 1.451 reseñas en Google",
    "gallery.kicker":"Imágenes",
    "gallery.title":"Así es Amapola.",
    "gallery.note":"Imágenes de muestra — las cambiamos por fotos reales de vuestros platos y del local a petición.",
    "story.kicker":"Sobre nosotros",
    "story.title":"El fuego, la carne, el momento.",
    "story.p1":"Amapola es una parrilla de las de verdad — Josper a carbón, cortes elegidos a mano y un jefe que pasa por cada mesa para asegurar que la carne sale en su punto justo.",
    "story.p2":"Carta pensada para compartir: chuletón, brochetas, lubina a la brasa, paella generosa. Vinos seleccionados y postres caseros. Local en la Avinguda Sa Coma, a un paso del paseo.",
    "story.statRating":"1.451 reseñas Google",
    "story.statGrill":"20–30 € por persona",
    "menu.kicker":"Recomendaciones",
    "menu.title":"Lo que más gusta a nuestros clientes.",
    "menu.note":"La carta completa y el vino del día están en el local.",
    "visit.kicker":"Visita",
    "visit.title":"Avinguda Sa Coma, 39 — Cala Millor",
    "visit.hoursLabel":"Horario",
    "visit.hoursMain":"Mediodía · 13:00 – 15:30",
    "visit.hoursEvening":"Noche · 18:00 – 22:30",
    "visit.hoursNote":"Viernes y sábado hasta las 23:00 · Temporada: de abril a octubre",
    "visit.addressLabel":"Dirección",
    "visit.contactLabel":"Contacto",
    "visit.callCta":"Llamar para reservar",
    "footer.tag":"Brasas · Josper · Cala Millor",
    "footer.findUs":"Dónde estamos",
    "footer.hours":"Horario",
    "footer.hoursLine":"Mediodía 13:00 – 15:30",
    "footer.hoursEvening":"Noche 18:00 – 22:30",
    "footer.contact":"Contacto"
  },
  en: {
    "nav.menu":"Recommendations","nav.gallery":"Impressions","nav.story":"About","nav.visit":"Visit",
    "cta.reserve":"Book",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Charcoal grill. Josper. Paella.",
    "hero.sub":"Mediterranean grill house in Cala Millor — prime cuts on the Josper, paella done right, wines with character. The boss looks after every plate.",
    "hero.reserve":"Book a table",
    "hero.call":"Call",
    "hero.hours":"Lunch 13:00 – 15:30  ·  Dinner 18:00 – 22:30",
    "hero.rating":"★ 4.6 · 1,451 Google reviews",
    "gallery.kicker":"Impressions",
    "gallery.title":"This is Amapola.",
    "gallery.note":"Sample photos — happy to swap for real photos of your dishes and venue on request.",
    "story.kicker":"About",
    "story.title":"The fire, the meat, the moment.",
    "story.p1":"Amapola is a proper grill house — charcoal Josper, hand-picked cuts, and a host who walks every table to make sure the meat is just right.",
    "story.p2":"A menu built for sharing: ribeye, skewers, sea bass on the grill, generous paella. Selected wines and home-made desserts. On Avinguda Sa Coma, a step from the promenade.",
    "story.statRating":"1,451 Google reviews",
    "story.statGrill":"€20–30 per person",
    "menu.kicker":"Recommendations",
    "menu.title":"What our guests love.",
    "menu.note":"The full menu and wine of the day are available at the restaurant.",
    "visit.kicker":"Visit",
    "visit.title":"Avinguda Sa Coma, 39 — Cala Millor",
    "visit.hoursLabel":"Hours",
    "visit.hoursMain":"Lunch · 13:00 – 15:30",
    "visit.hoursEvening":"Dinner · 18:00 – 22:30",
    "visit.hoursNote":"Fridays and Saturdays until 23:00 · Season: April to October",
    "visit.addressLabel":"Address",
    "visit.contactLabel":"Contact",
    "visit.callCta":"Call to book",
    "footer.tag":"Charcoal grill · Josper · Cala Millor",
    "footer.findUs":"Find us",
    "footer.hours":"Hours",
    "footer.hoursLine":"Lunch 13:00 – 15:30",
    "footer.hoursEvening":"Dinner 18:00 – 22:30",
    "footer.contact":"Contact"
  },
  de: {
    "nav.menu":"Empfehlungen","nav.gallery":"Eindrücke","nav.story":"Über uns","nav.visit":"Besuch",
    "cta.reserve":"Reservieren",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Vom Holzkohlegrill. Josper. Paella.",
    "hero.sub":"Mediterranes Grill-Restaurant in Cala Millor — Premium-Cuts vom Josper, Paella auf den Punkt, Weine mit Charakter. Der Chef kümmert sich um jeden Teller.",
    "hero.reserve":"Tisch reservieren",
    "hero.call":"Anrufen",
    "hero.hours":"Mittag 13:00 – 15:30  ·  Abend 18:00 – 22:30",
    "hero.rating":"★ 4,6 · 1.451 Google-Bewertungen",
    "gallery.kicker":"Eindrücke",
    "gallery.title":"So ist Amapola.",
    "gallery.note":"Symbolbilder – auf Anfrage tauschen wir gegen echte Fotos eurer Gerichte und des Lokals.",
    "story.kicker":"Über uns",
    "story.title":"Das Feuer, das Fleisch, der Moment.",
    "story.p1":"Amapola ist ein richtiges Grill-Lokal — Holzkohle-Josper, von Hand ausgewählte Cuts, und ein Chef, der an jedem Tisch persönlich nachschaut, dass das Fleisch auf den Punkt ist.",
    "story.p2":"Karte zum Teilen: Chuletón, Spieße, Wolfsbarsch vom Grill, großzügige Paella. Ausgewählte Weine und hausgemachte Desserts. An der Avinguda Sa Coma, einen Schritt von der Promenade.",
    "story.statRating":"1.451 Google-Bewertungen",
    "story.statGrill":"20–30 € pro Person",
    "menu.kicker":"Empfehlungen",
    "menu.title":"Was unsere Gäste lieben.",
    "menu.note":"Die komplette Karte und der Wein des Tages stehen im Lokal bereit.",
    "visit.kicker":"Besuch",
    "visit.title":"Avinguda Sa Coma, 39 — Cala Millor",
    "visit.hoursLabel":"Öffnungszeiten",
    "visit.hoursMain":"Mittag · 13:00 – 15:30",
    "visit.hoursEvening":"Abend · 18:00 – 22:30",
    "visit.hoursNote":"Freitag und Samstag bis 23:00 · Saison: April bis Oktober",
    "visit.addressLabel":"Adresse",
    "visit.contactLabel":"Kontakt",
    "visit.callCta":"Anrufen zum Reservieren",
    "footer.tag":"Brasas · Josper · Cala Millor",
    "footer.findUs":"Wo wir sind",
    "footer.hours":"Öffnungszeiten",
    "footer.hoursLine":"Mittag 13:00 – 15:30",
    "footer.hoursEvening":"Abend 18:00 – 22:30",
    "footer.contact":"Kontakt"
  }
};

let currentLang = 'es';

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  renderRecs();
}

function renderRecs(){
  const grid = document.getElementById('recGrid');
  if (!grid) return;
  grid.innerHTML = RECS.map(r => {
    const t = r[currentLang] || r.es;
    return `<article class="rec-card"><h3>${t.n}</h3><p>${t.d}</p></article>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyI18n(b.dataset.lang));
  });

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="#empfehlungen" data-i18n="nav.menu">Recomendaciones</a>
    <a href="#eindruecke" data-i18n="nav.gallery">Imágenes</a>
    <a href="#historia" data-i18n="nav.story">Sobre nosotros</a>
    <a href="#visitanos" data-i18n="nav.visit">Visita</a>
    <a href="tel:+34971813387" class="btn btn-primary" data-i18n="cta.reserve">Reservar</a>
  `;
  document.body.appendChild(nav);
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }));

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyI18n('es');
});
