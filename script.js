// ==========================================
/* DIZIONARIO TRADUZIONI (ITALIANO / INGLESE) */
// ==========================================
const translations = {
    it: {
        "page-title": "A casa di Gennarino | Casa Vacanza Vista Mare",
        "hero-subtitle": "La tua vacanza sul mare di Cetara",
        "hero-cta": "Prenota ora",
        
        "hero-title": "Il blu del mare dentro casa",
        "hero-desc": "<strong>A casa di Gennarino</strong> è il rifugio perfetto per vivere Cetara lentamente.<br><br>A pochi passi dalla spiaggia e dal molo dei traghetti, questo spazio è il punto di partenza ideale per scoprire Cetara e la Costiera Amalfitana. Il mare, il borgo, i ristoranti e il porto sono tutti raggiungibili a piedi.<br><br>Un piccolo appartamento accogliente dove svegliarsi con l’aria di mare e vivere il ritmo autentico del paese, tra giornate di sole, passeggiate e sapori della tradizione.",
        
        "highlight-beach-title": "A due passi dal mare",
        "highlight-beach-desc": "L'appartamento si trova a solo 30 metri dalla spiaggia e a pochi passi dal molo dei traghetti.",
        "highlight-guests-title": "Massimo 3 ospiti",
        "highlight-guests-desc": "Ideale per coppie, amici e famiglie con bambino.",
        "alt-icon-beach": "Icona spiaggia",
        "alt-icon-guests": "Icona ospiti",

        "amenities-title": "Servizi inclusi",
        "amenity-linens": "Lenzuola e asciugamani",
        "amenity-wifi": "Wifi veloce",
        "amenity-tv": "TV",
        "amenity-ac": "Aria condizionata",
        "amenity-hairdryer": "Asciugacapelli",
        "amenity-bar": "Angolo bar con macchinetta per caffè, mini frigo e bollitore",

        "gallery-title": "Esplora la struttura",
        "booking-title": "Verifica la disponibilità",
        "booking-desc": "Inviaci una richiesta non vincolante. Ti risponeremo con la nostra migliore offerta tariffaria.",
        "label-nome": "Nome",
        "placeholder-nome": "Il tuo nome",
        "label-cognome": "Cognome",
        "placeholder-cognome": "Il tuo cognome",
        "label-contatto": "Telefono o Email",
        "placeholder-contatto": "Esempio: +39 333 1234567 o nome@email.it",
        "label-ospiti": "Numero di Ospiti (Max 3)",
        "placeholder-ospiti": "Seleziona da 1 a 3 ospiti",
        "label-checkin": "Data Check-in",
        "label-checkout": "Data Check-out",
        "btn-submit": "Invia Richiesta",
        "map-title": "La posizione",
        "footer-rights": "© 2026 A casa di Gennarino. Tutti i diritti riservati.",
        "form-subject": "Nuova richiesta di prenotazione - A casa di Gennarino",
        "form-success": "Grazie per la richiesta, lo staff le risponderà al più presto.",
        "form-error": "Si è verificato un errore durante l'invio. Riprova più tardi o scrivici via email.",
        
        "alt-terrazzino": "Il terrazzino vista mare",
        "alt-camera1": "Camera da letto principale",
        "alt-camera2": "Dettaglio letto matrimoniale",
        "alt-espresso": "Angolo bar e macchina del caffè",
        "alt-bagno1": "Il bagno con maioliche blu",
        "alt-camera3": "Dettaglio arredamento camera",
        "alt-camera4": "Seconda inquadratura camera",
        "alt-bagno2": "Dettaglio lavandino e rivestimenti",
        "alt-tazze": "Le tazze colorate per la colazione"
    },
    en: {
        "page-title": "A casa di Gennarino | Sea View Vacation Home",
        "hero-subtitle": "Your vacation by the sea of Cetara",
        "hero-cta": "Book now",
        
        "hero-title": "The blue of the sea inside the house",
        "hero-desc": "<strong>A casa di Gennarino</strong> is the perfect retreat to experience Cetara at a slow pace.<br><br>Just a few steps from the beach and the ferry pier, this space is the ideal starting point to discover Cetara and the Amalfi Coast. The sea, the village, the restaurants, and the port are all within walking distance.<br><br>A cozy little apartment where you can wake up to the sea breeze and experience the authentic rhythm of the village, amidst sunny days, walks, and traditional flavors.",
        
        "highlight-beach-title": "A stone's throw from the sea",
        "highlight-beach-desc": "The apartment is located just 30 meters from the beach and a short walk from the ferry pier.",
        "highlight-guests-title": "Maximum 3 guests",
        "highlight-guests-desc": "Ideal for couples, friends, and families with a child.",
        "alt-icon-beach": "Beach icon",
        "alt-icon-guests": "Guests icon",

        "amenities-title": "What this place offers",
        "amenity-linens": "Bed linen and towels",
        "amenity-wifi": "Fast Wifi",
        "amenity-tv": "TV",
        "amenity-ac": "Air conditioning",
        "amenity-hairdryer": "Hairdryer",
        "amenity-bar": "Coffee station with coffee maker, mini fridge, and kettle",

        "gallery-title": "Explore the property",
        "booking-title": "Check Availability",
        "booking-desc": "Send us a non-binding request. We will reply with our best rate offer.",
        "label-nome": "First Name",
        "placeholder-nome": "Your first name",
        "label-cognome": "Last Name",
        "placeholder-cognome": "Your last name",
        "label-contatto": "Phone or Email",
        "placeholder-contatto": "Example: +39 333 1234567 or name@email.com",
        "label-ospiti": "Number of Guests (Max 3)",
        "placeholder-ospiti": "Select 1 to 3 guests",
        "label-checkin": "Check-in Date",
        "label-checkout": "Check-out Date",
        "btn-submit": "Send Request",
        "map-title": "The location",
        "footer-rights": "© 2026 A casa di Gennarino. All rights reserved.",
        "form-subject": "New booking request - A casa di Gennarino",
        "form-success": "Thank you for your request, our staff will reply as soon as possible.",
        "form-error": "An error occurred while sending. Please try again later or contact us via email.",
        
        "alt-terrazzino": "The private terrace with sea view",
        "alt-camera1": "Main bedroom layout",
        "alt-camera2": "Double bed setup details",
        "alt-espresso": "Coffee station with espresso machine",
        "alt-bagno1": "Bathroom with geometric blue tiles",
        "alt-camera3": "Bedroom furniture detail",
        "alt-camera4": "Secondary view of the bedroom",
        "alt-bagno2": "Sink and tiles overview",
        "alt-tazze": "Colorful coffee cups for breakfast"
    }
};

// ==========================================
/* LOGICA PER IL CAMBIO LINGUA */
// ==========================================
const langSelect = document.getElementById('langSelect');

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });

    const formSubject = document.getElementById('formSubject');
    if (formSubject) {
        formSubject.value = translations[lang]['form-subject'];
    }

    localStorage.setItem('selectedLang', lang);
    langSelect.value = lang;
}

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'it';
    setLanguage(savedLang);
});


// ==========================================
/* LOGICA DELLA GALLERIA (LIGHTBOX / SWIPE) */
// ==========================================
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

let currentIndex = 0;

function updateLightbox(index) {
    if (index < 0) {
        currentIndex = galleryImages.length - 1;
    } else if (index >= galleryImages.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].getAttribute('alt');
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        updateLightbox(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex - 1);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex + 1);
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
    else if (e.key === 'ArrowRight') updateLightbox(currentIndex + 1);
});

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) updateLightbox(currentIndex + 1);
    if (touchEndX > touchStartX + swipeThreshold) updateLightbox(currentIndex - 1);
}


// ==========================================
/* GESTIONE INVIO FORM SENZA CAMBIO PAGINA */
// ==========================================
const bookingForm = document.getElementById('bookingForm');
const formStatus = document.getElementById('formStatus');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const currentLang = localStorage.getItem('selectedLang') || 'it';
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        
        submitBtn.disabled = true;
        submitBtn.innerText = currentLang === 'it' ? 'Invio in corso...' : 'Sending...';

        const formData = new FormData(bookingForm);

        fetch(bookingForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Errore di rete');
            }
        })
        .then(data => {
            bookingForm.reset(); 
            bookingForm.style.display = 'none'; 
            
            formStatus.innerHTML = `<div class="success-msg" data-i18n="form-success">${translations[currentLang]['form-success']}</div>`;
            formStatus.style.display = 'block';
        })
        .catch(error => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
            
            formStatus.innerHTML = `<div class="error-msg" data-i18n="form-error">${translations[currentLang]['form-error']}</div>`;
            formStatus.style.display = 'block';
        });
    });
}