document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const langText = document.getElementById('langText');

    const translations = {
        ar: {
            name: '🌍 اللغة',
            headerName: 'أنس حسام',
            headerSub: 'أبني مواقع حديثة، سريعة ومتجاوبة',
            headerBadge: '🚀 متاح للعمل الحر',
            aboutTitle: 'من أنا',
            aboutText: 'أنا مطور ويب شغوف بحب إنشاء مواقع جميلة وسريعة ومتجاوبة. أستخدم <strong>HTML & CSS</strong> لتحويل الأفكار إلى تجارب رقمية حقيقية. هدفي هو الاستمرار في التعلم، وبناء مشاريع رائعة، والنمو كمطور حر. أحمل شهادة في <strong>ريادة الأعمال</strong>، مما يمنحني رؤية استراتيجية في تطوير المشاريع الرقمية.',
            skillsTitle: 'مهاراتي',
            skill1Name: 'تطوير الويب',
            skill2Name: 'UI/UX Design',
            skill3Name: 'إدخال البيانات',
            skill4Name: 'تطوير الواجهات الأمامية',
            skill5Name: 'أساسيات الخلفية (Back-End)',
            certTitle: '🎓 شهادة ريادة الأعمال',
            certDesc: 'معتمدة في إدارة المشاريع والابتكار وبناء الفرق',
            servicesTitle: 'خدماتي',
            service1Title: 'تصميم مواقع',
            service1Desc: 'مواقع عصرية متجاوبة لكل الأجهزة',
            service2Title: 'تحديث المواقع',
            service2Desc: 'تطوير وتحسين المواقع الحالية',
            service3Title: 'تحسين الأداء',
            service3Desc: 'تسريع المواقع وتحسين تجربة المستخدم',
            projectsTitle: 'مشاريعي',
            project1Name: 'شركة RSM',
            project1Desc: 'تصميم Glassmorphism لشركة تطوير ويب',
            project2Name: 'معرض أعمال',
            project2Desc: 'موقع شخصي يعرض أعمالي',
            project3Name: 'متجر صغير',
            project3Desc: 'صفحة منتجات بتصميم نظيف',
            contactTitle: 'تواصل معي',
            contactSub: 'عندك سؤال أو مشروع؟ تواصل معي الآن وسأرد عليك في أقرب وقت',
            infoLocation: '📍 الموقع',
            infoLocationVal: 'مصر، القاهرة',
            infoEmail: '📧 البريد الإلكتروني',
            infoPhone: '📞 الهاتف / واتساب',
            infoHours: '🕒 أوقات العمل',
            infoHoursVal: 'السبت - الخميس: 10 ص - 10 م',
            socialWhatsapp: 'واتساب',
            socialEmail: 'إيميل',
            socialInstagram: 'إنستجرام',
            namePlace: 'الاسم',
            emailPlace: 'البريد الإلكتروني',
            subjectPlace: 'الموضوع',
            messagePlace: 'رسالتك...',
            sendBtn: '🚀 إرسال الرسالة',
            footer: '© 2026 أنس حسام · صنع بكل ❤️',
            direction: 'rtl'
        },
        en: {
            name: '🌍 Language',
            headerName: 'Anas Hossam',
            headerSub: 'Building modern, fast & responsive websites',
            headerBadge: '🚀 Available for Freelance',
            aboutTitle: 'About Me',
            aboutText: "I'm a passionate web developer who loves creating beautiful, fast, and responsive websites. I use <strong>HTML & CSS</strong> to turn ideas into real digital experiences. My goal is to keep learning, build amazing projects, and grow as a freelancer. I hold a certificate in <strong>Entrepreneurship</strong>, which gives me a strategic vision in developing digital projects.",
            skillsTitle: 'My Skills',
            skill1Name: 'Web Development',
            skill2Name: 'UI/UX Design',
            skill3Name: 'Data Entry',
            skill4Name: 'Front-End Development',
            skill5Name: 'Back-End Basics',
            certTitle: '🎓 Entrepreneurship Certificate',
            certDesc: 'Certified in project management, innovation, and team building',
            servicesTitle: 'My Services',
            service1Title: 'Web Design',
            service1Desc: 'Modern, responsive websites for all devices',
            service2Title: 'Website Updates',
            service2Desc: 'Improve and update existing websites',
            service3Title: 'Performance',
            service3Desc: 'Speed optimization & better user experience',
            projectsTitle: 'My Projects',
            project1Name: 'RSM Company',
            project1Desc: 'Glassmorphism design for a web dev agency',
            project2Name: 'Portfolio',
            project2Desc: 'Personal portfolio website',
            project3Name: 'Mini Store',
            project3Desc: 'Simple product page with clean design',
            contactTitle: 'Contact Me',
            contactSub: 'Have a question or project? Contact me now and I\'ll get back to you soon',
            infoLocation: '📍 Location',
            infoLocationVal: 'Egypt, Cairo',
            infoEmail: '📧 Email',
            infoPhone: '📞 Phone / WhatsApp',
            infoHours: '🕒 Working Hours',
            infoHoursVal: 'Sat - Thu: 10 AM - 10 PM',
            socialWhatsapp: 'WhatsApp',
            socialEmail: 'Email',
            socialInstagram: 'Instagram',
            namePlace: 'Your Name',
            emailPlace: 'Your Email',
            subjectPlace: 'Subject',
            messagePlace: 'Your Message...',
            sendBtn: '🚀 Send Message',
            footer: '© 2026 Anas Hossam · Built with ❤️',
            direction: 'ltr'
        },
        fr: {
            name: '🌍 Langue',
            headerName: 'Anas Hossam',
            headerSub: 'Créer des sites web modernes, rapides et responsives',
            headerBadge: '🚀 Disponible pour freelance',
            aboutTitle: 'À propos de moi',
            aboutText: "Je suis un développeur web passionné qui aime créer des sites web beaux, rapides et responsives. J'utilise <strong>HTML & CSS</strong> pour transformer les idées en expériences numériques réelles. Je suis titulaire d'un certificat en <strong>Entrepreneuriat</strong>, ce qui me donne une vision stratégique dans le développement de projets numériques.",
            skillsTitle: 'Mes compétences',
            skill1Name: 'Développement Web',
            skill2Name: 'UI/UX Design',
            skill3Name: 'Saisie de données',
            skill4Name: 'Développement Front-End',
            skill5Name: 'Bases Back-End',
            certTitle: '🎓 Certificat d\'entrepreneuriat',
            certDesc: 'Certifié en gestion de projet, innovation et constitution d\'équipes',
            servicesTitle: 'Mes services',
            service1Title: 'Conception web',
            service1Desc: 'Sites web modernes et responsives pour tous les appareils',
            service2Title: 'Mises à jour',
            service2Desc: 'Améliorer et mettre à jour les sites existants',
            service3Title: 'Performance',
            service3Desc: 'Optimisation de la vitesse et meilleure expérience utilisateur',
            projectsTitle: 'Mes projets',
            project1Name: 'Société RSM',
            project1Desc: 'Design Glassmorphism pour une agence web',
            project2Name: 'Portfolio',
            project2Desc: 'Site portfolio personnel',
            project3Name: 'Mini boutique',
            project3Desc: 'Page produit avec design épuré',
            contactTitle: 'Contactez-moi',
            contactSub: 'Une question ou un projet ? Contactez-moi maintenant et je vous répondrai rapidement',
            infoLocation: '📍 Lieu',
            infoLocationVal: 'Égypte, Le Caire',
            infoEmail: '📧 E-mail',
            infoPhone: '📞 Téléphone / WhatsApp',
            infoHours: '🕒 Horaires',
            infoHoursVal: 'Sam - Jeu: 10h - 22h',
            socialWhatsapp: 'WhatsApp',
            socialEmail: 'E-mail',
            socialInstagram: 'Instagram',
            namePlace: 'Votre nom',
            emailPlace: 'Votre email',
            subjectPlace: 'Sujet',
            messagePlace: 'Votre message...',
            sendBtn: '🚀 Envoyer',
            footer: '© 2026 Anas Hossam · Fait avec ❤️',
            direction: 'ltr'
        },
        de: {
            name: '🌍 Sprache',
            headerName: 'Anas Hossam',
            headerSub: 'Moderne, schnelle und responsive Websites erstellen',
            headerBadge: '🚀 Verfügbar für Freelance',
            aboutTitle: 'Über mich',
            aboutText: "Ich bin ein leidenschaftlicher Webentwickler, der schöne, schnelle und responsive Websites erstellt. Ich verwende <strong>HTML & CSS</strong>, um Ideen in echte digitale Erlebnisse zu verwandeln. Ich besitze ein Zertifikat in <strong>Entrepreneurship</strong>, was mir eine strategische Vision bei der Entwicklung digitaler Projekte verleiht.",
            skillsTitle: 'Meine Fähigkeiten',
            skill1Name: 'Webentwicklung',
            skill2Name: 'UI/UX Design',
            skill3Name: 'Dateneingabe',
            skill4Name: 'Front-End-Entwicklung',
            skill5Name: 'Back-End-Grundlagen',
            certTitle: '🎓 Entrepreneurship-Zertifikat',
            certDesc: 'Zertifiziert in Projektmanagement, Innovation und Teambuilding',
            servicesTitle: 'Meine Dienstleistungen',
            service1Title: 'Webdesign',
            service1Desc: 'Moderne, responsive Websites für alle Geräte',
            service2Title: 'Website-Updates',
            service2Desc: 'Vorhandene Websites verbessern und aktualisieren',
            service3Title: 'Leistung',
            service3Desc: 'Geschwindigkeitsoptimierung & bessere Benutzererfahrung',
            projectsTitle: 'Meine Projekte',
            project1Name: 'RSM Unternehmen',
            project1Desc: 'Glassmorphism-Design für eine Webagentur',
            project2Name: 'Portfolio',
            project2Desc: 'Persönliche Portfolio-Website',
            project3Name: 'Ministore',
            project3Desc: 'Einfache Produktseite mit sauberem Design',
            contactTitle: 'Kontaktieren Sie mich',
            contactSub: 'Haben Sie eine Frage oder ein Projekt? Kontaktieren Sie mich jetzt und ich melde mich bald bei Ihnen.',
            infoLocation: '📍 Standort',
            infoLocationVal: 'Ägypten, Kairo',
            infoEmail: '📧 E-Mail',
            infoPhone: '📞 Telefon / WhatsApp',
            infoHours: '🕒 Arbeitszeiten',
            infoHoursVal: 'Sa - Do: 10:00 - 22:00',
            socialWhatsapp: 'WhatsApp',
            socialEmail: 'E-Mail',
            socialInstagram: 'Instagram',
            namePlace: 'Ihr Name',
            emailPlace: 'Ihre E-Mail',
            subjectPlace: 'Betreff',
            messagePlace: 'Ihre Nachricht...',
            sendBtn: '🚀 Senden',
            footer: '© 2026 Anas Hossam · Mit ❤️ gemacht',
            direction: 'ltr'
        },
        es: {
            name: '🌍 Idioma',
            headerName: 'Anas Hossam',
            headerSub: 'Crear sitios web modernos, rápidos y responsivos',
            headerBadge: '🚀 Disponible para freelance',
            aboutTitle: 'Sobre mí',
            aboutText: "Soy un desarrollador web apasionado que ama crear sitios web hermosos, rápidos y responsivos. Utilizo <strong>HTML & CSS</strong> para convertir ideas en experiencias digitales reales. Tengo un certificado en <strong>Emprendimiento</strong>, lo que me da una visión estratégica en el desarrollo de proyectos digitales.",
            skillsTitle: 'Mis habilidades',
            skill1Name: 'Desarrollo Web',
            skill2Name: 'UI/UX Design',
            skill3Name: 'Ingreso de datos',
            skill4Name: 'Desarrollo Front-End',
            skill5Name: 'Conceptos básicos de Back-End',
            certTitle: '🎓 Certificado de Emprendimiento',
            certDesc: 'Certificado en gestión de proyectos, innovación y formación de equipos',
            servicesTitle: 'Mis servicios',
            service1Title: 'Diseño web',
            service1Desc: 'Sitios web modernos y responsivos para todos los dispositivos',
            service2Title: 'Actualizaciones',
            service2Desc: 'Mejorar y actualizar sitios web existentes',
            service3Title: 'Rendimiento',
            service3Desc: 'Optimización de velocidad y mejor experiencia de usuario',
            projectsTitle: 'Mis proyectos',
            project1Name: 'Empresa RSM',
            project1Desc: 'Diseño Glassmorphism para una agencia web',
            project2Name: 'Portfolio',
            project2Desc: 'Sitio web de portafolio personal',
            project3Name: 'Mini tienda',
            project3Desc: 'Página de producto con diseño limpio',
            contactTitle: 'Contáctame',
            contactSub: '¿Tienes una pregunta o proyecto? Contáctame ahora y te responderé pronto.',
            infoLocation: '📍 Ubicación',
            infoLocationVal: 'Egipto, El Cairo',
            infoEmail: '📧 Correo',
            infoPhone: '📞 Teléfono / WhatsApp',
            infoHours: '🕒 Horario',
            infoHoursVal: 'Sáb - Jue: 10am - 10pm',
            socialWhatsapp: 'WhatsApp',
            socialEmail: 'Correo',
            socialInstagram: 'Instagram',
            namePlace: 'Tu nombre',
            emailPlace: 'Tu correo',
            subjectPlace: 'Asunto',
            messagePlace: 'Tu mensaje...',
            sendBtn: '🚀 Enviar',
            footer: '© 2026 Anas Hossam · Hecho con ❤️',
            direction: 'ltr'
        }
    };

    function translate(lang) {
        const t = translations[lang];
        if (!t) return;
        langText.textContent = t.name;
        const container = document.querySelector('.card');
        if (t.direction === 'rtl') {
            container.closest('.container').classList.add('rtl');
        } else {
            container.closest('.container').classList.remove('rtl');
        }
        document.getElementById('headerName').textContent = t.headerName;
        document.getElementById('headerSub').textContent = t.headerSub;
        document.getElementById('headerBadge').textContent = t.headerBadge;
        document.getElementById('aboutTitle').textContent = t.aboutTitle;
        document.getElementById('aboutText').innerHTML = t.aboutText;
        document.getElementById('skillsTitle').textContent = t.skillsTitle;
        document.getElementById('skill1Name').textContent = t.skill1Name;
        document.getElementById('skill2Name').textContent = t.skill2Name;
        document.getElementById('skill3Name').textContent = t.skill3Name;
        document.getElementById('skill4Name').textContent = t.skill4Name;
        document.getElementById('skill5Name').textContent = t.skill5Name;
        document.getElementById('certTitle').textContent = t.certTitle;
        document.getElementById('certDesc').textContent = t.certDesc;
        document.getElementById('servicesTitle').textContent = t.servicesTitle;
        document.getElementById('service1Title').textContent = t.service1Title;
        document.getElementById('service1Desc').textContent = t.service1Desc;
        document.getElementById('service2Title').textContent = t.service2Title;
        document.getElementById('service2Desc').textContent = t.service2Desc;
        document.getElementById('service3Title').textContent = t.service3Title;
        document.getElementById('service3Desc').textContent = t.service3Desc;
        document.getElementById('projectsTitle').textContent = t.projectsTitle;
        document.getElementById('project1Name').textContent = t.project1Name;
        document.getElementById('project1Desc').textContent = t.project1Desc;
        document.getElementById('project2Name').textContent = t.project2Name;
        document.getElementById('project2Desc').textContent = t.project2Desc;
        document.getElementById('project3Name').textContent = t.project3Name;
        document.getElementById('project3Desc').textContent = t.project3Desc;
        document.getElementById('contactTitle').textContent = t.contactTitle;
        document.getElementById('contactSub').textContent = t.contactSub;
        document.getElementById('infoLocation').textContent = t.infoLocation;
        document.getElementById('infoLocationVal').textContent = t.infoLocationVal;
        document.getElementById('infoEmail').textContent = t.infoEmail;
        document.getElementById('infoPhone').textContent = t.infoPhone;
        document.getElementById('infoHours').textContent = t.infoHours;
        document.getElementById('infoHoursVal').textContent = t.infoHoursVal;
        document.getElementById('socialWhatsapp').textContent = t.socialWhatsapp;
        document.getElementById('socialEmail').textContent = t.socialEmail;
        document.getElementById('socialInstagram').textContent = t.socialInstagram;
        document.getElementById('name').placeholder = t.namePlace;
        document.getElementById('email').placeholder = t.emailPlace;
        document.getElementById('subject').placeholder = t.subjectPlace;
        document.getElementById('message').placeholder = t.messagePlace;
        document.getElementById('sendBtn').innerHTML = t.sendBtn;
        document.getElementById('footerText').textContent = t.footer;
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.lang === lang) link.classList.add('active');
        });
    }

    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            translate(this.dataset.lang);
            dropdownMenu.classList.remove('show');
        });
    });
    document.addEventListener('click', function() { dropdownMenu.classList.remove('show'); });

    // ===== CONTACT FORM (English messages) =====
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (!name || !email || !message) {
                status.textContent = '⚠️ Please fill in all required fields.';
                status.style.color = '#f39c12';
                return;
            }
            status.textContent = '⏳ Sending...';
            status.style.color = '#a78bfa';
            const formData = new FormData(form);
            fetch('https://formspree.io/f/mbgrnopd', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';
                    status.style.color = '#2ecc71';
                    form.reset();
                } else {
                    status.textContent = '❌ Something went wrong. Please try again.';
                    status.style.color = '#e74c3c';
                }
            }).catch(error => {
                status.textContent = '❌ Network error. Please check your connection.';
                status.style.color = '#e74c3c';
            });
        });
    }

    // ===== اللغة الافتراضية: الإنجليزية =====
    translate('en');
});