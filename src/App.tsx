import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  Compass,
  Facebook,
  Github,
  HeartPulse,
  Instagram,
  Laptop,
  Lightbulb,
  Linkedin,
  Mail,
  Music2,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Search,
  Send,
  Sparkles,
  Wrench,
  X,
  Youtube,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Project = {
  title: string;
  label: string;
  description: string;
  category: 'Product concepts' | 'Web projects' | 'Professional projects';
  stage: string;
  icon: LucideIcon;
  technologies: string[];
  highlights: string[];
  problem: string;
  approach: string;
  nextStep: string;
};

const projects: Project[] = [
  {
    title: 'First-Aid & Care Companion',
    label: 'Health technology · Cameroon',
    description:
      'A healthcare support app concept designed to make first-aid guidance easier to understand while professional help is on the way.',
    category: 'Product concepts',
    stage: 'Concept & planning',
    icon: HeartPulse,
    technologies: [
      'Product research',
      'Offline-first thinking',
      'Accessible UX',
    ],
    highlights: [
      'Step-by-step emergency guidance with clear, simple language',
      'Offline and voice-guided support for different literacy levels',
      'Maternal, baby and child care learning journeys',
      'Nearby health services and appointment discovery as planned features',
    ],
    problem:
      'In an emergency, people may not know what to do first or how to find trusted help quickly. Language, connectivity and literacy can make the experience harder.',
    approach:
      'Plan a mobile-first experience with straightforward instructions, voice support and an offline-ready core. The concept prioritizes safe guidance and encourages professional care rather than replacing it.',
    nextStep:
      'Validate the highest-priority needs with potential users and health professionals before defining the first build.',
  },
  {
    title: 'FINDIT',
    label: 'Community platform · Lost & found',
    description:
      'A lost-and-found platform concept focused on helping people report, discover and safely return misplaced belongings.',
    category: 'Product concepts',
    stage: 'Research & requirements',
    icon: Search,
    technologies: ['Market research', 'Product specification', 'UX planning'],
    highlights: [
      'Simple lost-item and found-item reporting flows',
      'Useful search and location context',
      'A safer claim and return process',
      'A clear product plan shaped by competitor and user-complaint research',
    ],
    problem:
      'Lost belongings are difficult to recover when reports are scattered across separate groups, posts and conversations.',
    approach:
      'Start by researching existing services and recurring user frustrations, then shape a focused requirements document around discoverability, trust and a low-friction reporting experience.',
    nextStep:
      'Turn the requirements into clickable flows and test the reporting journey with a small group of users.',
  },
  {
    title: 'REPAIRNET',
    label: 'Service discovery · Research',
    description:
      'A service-platform concept exploring how people can find repair help and understand the service they are requesting.',
    category: 'Product concepts',
    stage: 'Market exploration',
    icon: Wrench,
    technologies: ['Competitor analysis', 'Service design', 'Research'],
    highlights: [
      'Explore ways to discover relevant repair providers',
      'Make the repair request easier to explain',
      'Investigate trust, communication and service transparency',
      'Identify gaps before committing to a technical build',
    ],
    problem:
      'Finding the right repair provider can involve uncertainty about skills, reliability and the next steps.',
    approach:
      'Compare existing options, study complaints and prioritize the gaps that could make a future product more useful and dependable.',
    nextStep:
      'Narrow the strongest use case and document a realistic first version before coding.',
  },
  {
    title: 'MINPOSTEL SMART DISPLAY',
    label: 'MINPOSTEL · Digital signage',
    description:
      'A smart-display interface for presenting ministry announcements and meeting information clearly, including current or upcoming sessions, time, room, building and floor details.',
    category: 'Professional projects',
    stage: 'In progress',
    icon: Monitor,
    technologies: [
      'Digital signage UI',
      'Information hierarchy',
      'Figma layout iteration',
      'Visual consistency',
    ],
    highlights: [
      'Make current and upcoming meeting information easy to scan',
      'Give date, time, room, building and floor details a clear visual hierarchy',
      'Refine alignment, spacing and typography for a shared display',
      'Keep the screen professional, readable and focused on essential information',
    ],
    problem:
      'People entering a public building need to understand important announcements and meeting details quickly, often from a shared screen viewed at a distance.',
    approach:
      'Shape a display-first layout that separates the most important information, uses consistent spacing and typography, and makes meeting details immediately recognizable.',
    nextStep:
      'Validate readability at the intended viewing distance and confirm how meeting information will be updated in the final implementation.',
  },
  {
    title: 'Library Management MVP',
    label: 'Web development · Learning build',
    description:
      'A library-management project planned around common workflows such as account access, book lending, returns and administrative overview.',
    category: 'Web projects',
    stage: 'Learning project',
    icon: BookOpen,
    technologies: ['HTML & CSS', 'PHP', 'MySQL', 'XAMPP'],
    highlights: [
      'Registration and login flows',
      'A dashboard for borrowing and returning books',
      'Admin views and basic statistics',
      'Practice with database structure and CRUD workflows',
    ],
    problem:
      'Manual library workflows can make it harder to keep track of book availability, borrowers and returns.',
    approach:
      'Use a small, understandable web application to practise connecting interface screens with server-side logic and relational data.',
    nextStep:
      'Review validation, permissions and data consistency, then test each workflow end to end.',
  },
  {
    title: 'University Information Website',
    label: 'Frontend · Interface practice',
    description:
      'A university website concept with clear navigation for information about the institution, departments, services and contact details.',
    category: 'Web projects',
    stage: 'Frontend learning project',
    icon: Laptop,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    highlights: [
      'Multi-section university information pages',
      'Navigation with a dashboard-style menu',
      'Contact, services and department content areas',
      'A focus on readable layout and simple interactions',
    ],
    problem:
      'Important school information becomes harder to use when pages feel inconsistent or navigation is unclear.',
    approach:
      'Organize content into familiar sections, keep navigation predictable and practise responsive layouts across screen sizes.',
    nextStep:
      'Polish mobile navigation and accessibility, then gather feedback on the information architecture.',
  },
];

const filters = ['All work', 'Product concepts', 'Web projects', 'Professional projects'] as const;

const skillGroups = [
  {
    number: '01',
    title: 'Web foundations',
    icon: Braces,
    description:
      'The building blocks I use while creating and improving web interfaces.',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Back-end & data basics',
    icon: Laptop,
    description:
      'Tools explored through small, practical application projects.',
    items: ['PHP', 'MySQL', 'XAMPP'],
  },
  {
    number: '03',
    title: 'Product thinking',
    icon: Compass,
    description: 'Understanding the problem before choosing what to build.',
    items: ['Problem research', 'Competitor analysis', 'Requirements planning'],
  },
  {
    number: '04',
    title: 'Design mindset',
    icon: Sparkles,
    description:
      'Keeping interfaces easy to understand and comfortable to use.',
    items: ['Responsive UI', 'Clear navigation', 'Accessibility awareness'],
  },
  {
    number: '05',
    title: 'Smart display UI',
    icon: Monitor,
    description:
      'Skills practised while shaping the MINPOSTEL SMART DISPLAY experience.',
    items: [
      'Information hierarchy',
      'Meeting-detail layout',
      'Figma layout iteration',
      'Visual consistency',
    ],
  },
];

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const isFr = language === 'fr';
  const tr = (en: string, fr: string) => isFr ? fr : en;
  const tx = (value: string) => {
    if (!isFr) return value;
    const translations: Record<string, string> = {
      'All work': 'Tous les projets', 'Product concepts': 'Concepts de produits', 'Web projects': 'Projets web', 'Professional projects': 'Projets professionnels',
      'First-Aid & Care Companion': 'Assistant de premiers secours et de soins', 'Health technology · Cameroon': 'Technologie de santé · Cameroun',
      'A healthcare support app concept designed to make first-aid guidance easier to understand while professional help is on the way.': 'Concept d’application de soutien en santé conçu pour rendre les gestes de premiers secours plus faciles à comprendre en attendant les professionnels.',
      'Concept & planning': 'Concept et planification', 'Product research': 'Recherche produit', 'Offline-first thinking': 'Conception pensée pour le mode hors ligne', 'Accessible UX': 'Expérience utilisateur accessible',
      'Step-by-step emergency guidance with clear, simple language': 'Conseils d’urgence étape par étape, dans un langage simple et clair', 'Offline and voice-guided support for different literacy levels': 'Assistance vocale et hors ligne adaptée à différents niveaux de lecture', 'Maternal, baby and child care learning journeys': 'Parcours d’apprentissage sur la santé maternelle, du bébé et de l’enfant', 'Nearby health services and appointment discovery as planned features': 'Recherche de services de santé proches et de rendez-vous parmi les fonctions prévues',
      'In an emergency, people may not know what to do first or how to find trusted help quickly. Language, connectivity and literacy can make the experience harder.': 'En situation d’urgence, il peut être difficile de savoir quoi faire en premier ou de trouver rapidement une aide fiable. La langue, la connexion et le niveau de lecture peuvent compliquer la situation.',
      'Plan a mobile-first experience with straightforward instructions, voice support and an offline-ready core. The concept prioritizes safe guidance and encourages professional care rather than replacing it.': 'Prévoir une expérience mobile avec des instructions simples, une assistance vocale et des fonctions essentielles hors ligne. Le concept privilégie des conseils sûrs et encourage le recours aux professionnels sans les remplacer.',
      'Validate the highest-priority needs with potential users and health professionals before defining the first build.': 'Valider les besoins prioritaires auprès d’utilisateurs potentiels et de professionnels de santé avant de définir la première version.',
      'FINDIT': 'FINDIT', 'Community platform · Lost & found': 'Plateforme communautaire · Objets perdus et trouvés', 'A lost-and-found platform concept focused on helping people report, discover and safely return misplaced belongings.': 'Concept de plateforme d’objets perdus et trouvés pour signaler, retrouver et restituer des biens en toute sécurité.', 'Research & requirements': 'Recherche et exigences', 'Market research': 'Étude de marché', 'Product specification': 'Spécifications produit', 'UX planning': 'Planification UX',
      'Simple lost-item and found-item reporting flows': 'Parcours simples pour signaler un objet perdu ou trouvé', 'Useful search and location context': 'Recherche utile et informations de localisation', 'A safer claim and return process': 'Processus de réclamation et de restitution plus sûr', 'A clear product plan shaped by competitor and user-complaint research': 'Plan produit clair fondé sur l’analyse des concurrents et des retours utilisateurs', 'Lost belongings are difficult to recover when reports are scattered across separate groups, posts and conversations.': 'Il est difficile de retrouver des objets lorsque les signalements sont dispersés entre différents groupes, publications et conversations.', 'Start by researching existing services and recurring user frustrations, then shape a focused requirements document around discoverability, trust and a low-friction reporting experience.': 'Commencer par étudier les services existants et les frustrations récurrentes, puis définir des exigences centrées sur la visibilité, la confiance et un signalement simple.', 'Turn the requirements into clickable flows and test the reporting journey with a small group of users.': 'Transformer les exigences en parcours interactifs et tester le signalement avec un petit groupe d’utilisateurs.',
      'REPAIRNET': 'REPAIRNET', 'Service discovery · Research': 'Recherche de services · Étude', 'A service-platform concept exploring how people can find repair help and understand the service they are requesting.': 'Concept de plateforme de services explorant comment trouver un réparateur et mieux comprendre le service demandé.', 'Market exploration': 'Exploration du marché', 'Competitor analysis': 'Analyse des concurrents', 'Service design': 'Conception de services', 'Research': 'Recherche', 'Explore ways to discover relevant repair providers': 'Explorer des moyens de trouver des réparateurs adaptés', 'Make the repair request easier to explain': 'Faciliter la description du besoin de réparation', 'Investigate trust, communication and service transparency': 'Étudier la confiance, la communication et la transparence des services', 'Identify gaps before committing to a technical build': 'Identifier les lacunes avant de commencer le développement', 'Finding the right repair provider can involve uncertainty about skills, reliability and the next steps.': 'Trouver le bon réparateur peut susciter des doutes sur ses compétences, sa fiabilité et les étapes suivantes.', 'Compare existing options, study complaints and prioritize the gaps that could make a future product more useful and dependable.': 'Comparer les solutions existantes, étudier les plaintes et prioriser les lacunes qu’un futur produit pourrait mieux combler.', 'Narrow the strongest use case and document a realistic first version before coding.': 'Choisir le cas d’usage le plus pertinent et documenter une première version réaliste avant de coder.',
      'MINPOSTEL SMART DISPLAY': 'MINPOSTEL SMART DISPLAY', 'MINPOSTEL · Digital signage': 'MINPOSTEL · Affichage numérique', 'A smart-display interface for presenting ministry announcements and meeting information clearly, including current or upcoming sessions, time, room, building and floor details.': 'Interface d’affichage intelligent présentant clairement les annonces du ministère et les réunions en cours ou à venir, avec horaires, salle, bâtiment et étage.', 'In progress': 'En cours', 'Digital signage UI': 'Interface d’affichage numérique', 'Information hierarchy': 'Hiérarchie de l’information', 'Figma layout iteration': 'Itérations de mise en page sur Figma', 'Visual consistency': 'Cohérence visuelle', 'Make current and upcoming meeting information easy to scan': 'Rendre les informations sur les réunions faciles à parcourir', 'Give date, time, room, building and floor details a clear visual hierarchy': 'Hiérarchiser clairement la date, l’heure, la salle, le bâtiment et l’étage', 'Refine alignment, spacing and typography for a shared display': 'Affiner l’alignement, les espacements et la typographie pour un écran partagé', 'Keep the screen professional, readable and focused on essential information': 'Garder un écran professionnel, lisible et centré sur l’essentiel', 'People entering a public building need to understand important announcements and meeting details quickly, often from a shared screen viewed at a distance.': 'Les visiteurs d’un bâtiment public doivent comprendre rapidement les annonces et les détails des réunions, souvent depuis un écran partagé vu à distance.', 'Shape a display-first layout that separates the most important information, uses consistent spacing and typography, and makes meeting details immediately recognizable.': 'Créer une mise en page conçue pour l’affichage, qui distingue les informations importantes et utilise des espacements et une typographie cohérents.', 'Validate readability at the intended viewing distance and confirm how meeting information will be updated in the final implementation.': 'Vérifier la lisibilité à la distance prévue et définir comment les informations de réunion seront mises à jour.',
      'Library Management MVP': 'MVP de gestion de bibliothèque', 'Web development · Learning build': 'Développement web · Projet d’apprentissage', 'A library-management project planned around common workflows such as account access, book lending, returns and administrative overview.': 'Projet de gestion de bibliothèque couvrant les parcours courants : accès au compte, emprunts, retours et tableau de bord administratif.', 'Learning project': 'Projet d’apprentissage', 'HTML & CSS': 'HTML et CSS', 'Registration and login flows': 'Parcours d’inscription et de connexion', 'A dashboard for borrowing and returning books': 'Tableau de bord pour emprunter et retourner des livres', 'Admin views and basic statistics': 'Vues administrateur et statistiques de base', 'Practice with database structure and CRUD workflows': 'Pratique de la structure de base de données et des opérations CRUD', 'Manual library workflows can make it harder to keep track of book availability, borrowers and returns.': 'La gestion manuelle peut compliquer le suivi des disponibilités, des emprunteurs et des retours.', 'Use a small, understandable web application to practise connecting interface screens with server-side logic and relational data.': 'Utiliser une petite application web pour s’exercer à relier les écrans à la logique serveur et aux données relationnelles.', 'Review validation, permissions and data consistency, then test each workflow end to end.': 'Vérifier la validation, les autorisations et la cohérence des données, puis tester chaque parcours de bout en bout.',
      'University Information Website': 'Site d’information universitaire', 'Frontend · Interface practice': 'Frontend · Pratique d’interface', 'A university website concept with clear navigation for information about the institution, departments, services and contact details.': 'Concept de site universitaire avec une navigation claire vers les informations sur l’établissement, les départements, les services et les contacts.', 'Frontend learning project': 'Projet d’apprentissage frontend', 'Responsive UI': 'Interface adaptative', 'Multi-section university information pages': 'Pages d’information universitaire en plusieurs sections', 'Navigation with a dashboard-style menu': 'Navigation avec un menu de type tableau de bord', 'Contact, services and department content areas': 'Sections contacts, services et départements', 'A focus on readable layout and simple interactions': 'Priorité à une mise en page lisible et à des interactions simples', 'Important school information becomes harder to use when pages feel inconsistent or navigation is unclear.': 'Les informations scolaires sont plus difficiles à utiliser lorsque les pages manquent de cohérence ou que la navigation est confuse.', 'Organize content into familiar sections, keep navigation predictable and practise responsive layouts across screen sizes.': 'Organiser le contenu en sections familières, garder une navigation prévisible et pratiquer les mises en page adaptatives.', 'Polish mobile navigation and accessibility, then gather feedback on the information architecture.': 'Améliorer la navigation mobile et l’accessibilité, puis recueillir des retours sur l’organisation des informations.',
      'The building blocks I use while creating and improving web interfaces.': 'Les bases que j’utilise pour créer et améliorer des interfaces web.', 'Web foundations': 'Bases du web', 'Back-end & data basics': 'Bases du back-end et des données', 'Tools explored through small, practical application projects.': 'Outils explorés à travers de petits projets pratiques.', 'Product thinking': 'Esprit produit', 'Understanding the problem before choosing what to build.': 'Comprendre le problème avant de choisir quoi créer.', 'Problem research': 'Étude du problème', 'Requirements planning': 'Planification des exigences', 'Design mindset': 'Approche design', 'Keeping interfaces easy to understand and comfortable to use.': 'Créer des interfaces faciles à comprendre et agréables à utiliser.', 'Clear navigation': 'Navigation claire', 'Accessibility awareness': 'Sensibilisation à l’accessibilité', 'Smart display UI': 'Interface d’affichage intelligent', 'Skills practised while shaping the MINPOSTEL SMART DISPLAY experience.': 'Compétences pratiquées pendant la conception de MINPOSTEL SMART DISPLAY.', 'Meeting-detail layout': 'Mise en page des détails de réunion',
      'CURRENT LEARNING PRIORITY': 'PRIORITÉ D’APPRENTISSAGE ACTUELLE', 'JavaScript, problem-solving and building complete small projects.': 'JavaScript, résolution de problèmes et création de petits projets complets.', 'See my learning journey': 'Voir mon parcours d’apprentissage', 'Learn it. Build it. Make it better.': 'Apprendre. Construire. Améliorer.', 'My path is hands-on: strengthen the fundamentals, keep asking better questions and use every project to learn something that carries into the next one.': 'Mon parcours est pratique : renforcer les bases, poser de meilleures questions et tirer de chaque projet des enseignements utiles pour le suivant.', 'FOUNDATION': 'FONDATIONS', 'Get the fundamentals right': 'Maîtriser les fondamentaux', 'Practise JavaScript, web foundations, Git and clear coding habits through small builds.': 'Pratiquer JavaScript, les bases du web, Git et de bonnes habitudes de programmation avec de petits projets.', 'BUILD & TEST': 'CONSTRUIRE ET TESTER', 'Turn ideas into working prototypes': 'Transformer les idées en prototypes fonctionnels', 'Use research and simple user flows to decide what to build, then test whether it makes sense.': 'Utiliser la recherche et des parcours utilisateurs simples pour choisir quoi créer, puis vérifier que la solution est pertinente.', 'NEXT CHAPTER': 'PROCHAINE ÉTAPE', 'Grow through real collaboration': 'Progresser grâce à la collaboration', 'Keep improving the portfolio, learn from feedback and work toward practical internship and project opportunities.': 'Continuer à améliorer le portfolio, apprendre des retours et rechercher des opportunités concrètes de stage et de projet.',
      'I’m honest about where I am in the journey: learning by building, strengthening fundamentals and choosing tools that fit the project.': 'Je suis transparent sur mon niveau : j’apprends en construisant, je renforce mes bases et je choisis des outils adaptés au projet.', 'I’m a young developer in Cameroon growing my skills by working on projects that connect technology with everyday needs. My interests range from community platforms and service discovery to accessible health-support ideas.': 'Je suis un jeune développeur au Cameroun et je développe mes compétences à travers des projets qui relient la technologie aux besoins quotidiens. Je m’intéresse aux plateformes communautaires, à la recherche de services et aux solutions de santé accessibles.', 'I’m especially interested in the work before the code: listening to a problem, comparing existing solutions, deciding what matters most, and designing a flow people can understand without needing a manual.': 'Je m’intéresse particulièrement au travail qui précède le code : écouter les besoins, comparer les solutions existantes, définir les priorités et concevoir un parcours compréhensible sans mode d’emploi.', 'I’m building my foundation one project at a time, with JavaScript as my main learning focus and a long-term goal of shipping products that are both useful and thoughtfully made.': 'Je construis mes bases projet après projet, avec JavaScript comme priorité d’apprentissage et l’objectif à long terme de lancer des produits utiles et bien conçus.', 'My current professional project, MINPOSTEL SMART DISPLAY, is helping me practise public-facing screen layout, clear meeting information hierarchy, visual consistency and iterative UI refinement.': 'Mon projet professionnel actuel, MINPOSTEL SMART DISPLAY, me permet de pratiquer la mise en page d’écrans publics, la hiérarchie des informations de réunion, la cohérence visuelle et l’amélioration progressive des interfaces.', 'Practical over flashy': 'L’utile avant le spectaculaire', 'Clear over complicated': 'La clarté avant la complexité', 'Progress through practice': 'Progresser par la pratique',
      'Project stages are labelled honestly:': 'Les étapes des projets sont indiquées honnêtement :', 'concepts and research are not presented as completed products.': 'les concepts et les recherches ne sont pas présentés comme des produits terminés.', 'Explore project': 'Découvrir le projet', 'The problem': 'Le problème', 'My approach': 'Mon approche', 'What I’m exploring': 'Ce que j’explore', 'NEXT STEP': 'PROCHAINE ÉTAPE', 'Back to portfolio': 'Retour au portfolio', 'Close project details': 'Fermer les détails du projet', 'PHONE 1': 'TÉLÉPHONE 1', 'PHONE 2': 'TÉLÉPHONE 2', 'EMAIL': 'E-MAIL', 'WHATSAPP': 'WHATSAPP', 'Connect professionally': 'Me contacter professionnellement', 'Choose email or WhatsApp to open a message with your details filled in. Review it and press Send in your chosen app.': 'Choisissez l’e-mail ou WhatsApp pour ouvrir un message prérempli. Vérifiez-le puis appuyez sur Envoyer dans l’application choisie.', 'Open to learning, feedback and': 'Ouvert à l’apprentissage, aux retours et à la', 'collaboration': 'collaboration', 'Social media profiles': 'Profils sur les réseaux sociaux'
    };
    return translations[value] ?? value;
  };
  const [filter, setFilter] = useState<(typeof filters)[number]>('All work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const SelectedProjectIcon = selectedProject?.icon;

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${progress}%`,
      );
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.hero-copy, .hero-visual, .trust-strip-inner > div, .section-heading, .project-card, .about-grid, .skill-card, .learning-banner, .journey-item, .contact-card',
      ),
    );

    document.documentElement.classList.add('motion-ready');
    let observer: IntersectionObserver | undefined;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
      );

      revealTargets.forEach(target => {
        target.classList.add('scroll-reveal');
        observer?.observe(target);
      });
    } else {
      revealTargets.forEach(target =>
        target.classList.add('scroll-reveal', 'is-visible'),
      );
    }

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      observer?.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  const visibleProjects = useMemo(
    () =>
      filter === 'All work'
        ? projects
        : projects.filter(project => project.category === filter),
    [filter]
  );

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderName = String(formData.get('name') || '').trim();
    const senderEmail = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio connection from ${senderName}`);
    const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    setFormStatus(tr('Opening your email app with your message prepared. You can also use the WhatsApp button to send it directly.', 'Ouverture de votre application e-mail avec le message préparé. Vous pouvez aussi utiliser le bouton WhatsApp pour l’envoyer directement.'));
    window.location.href = `mailto:francktambo720@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    const form = document.querySelector<HTMLFormElement>('.contact-form');
    if (!form?.reportValidity()) return;
    const formData = new FormData(form);
    const senderName = String(formData.get('name') || '').trim();
    const senderEmail = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const text = encodeURIComponent(`Hello Franck, my name is ${senderName}.\nMy email: ${senderEmail}\n\n${message}`);
    window.open(`https://wa.me/237674256040?text=${text}`, '_blank', 'noopener,noreferrer');
    setFormStatus(tr('WhatsApp opened with your message prepared. Press Send in WhatsApp to deliver it.', 'WhatsApp s’est ouvert avec votre message préparé. Appuyez sur Envoyer dans WhatsApp pour le transmettre.'));
  };

  return (
    <div className="app">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Franck Tambo, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            FT<span>.</span>
          </span>
          <span className="brand-name">Franck Tambo</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          aria-label={tr('Main navigation', 'Navigation principale')}
        >
          <button className="language-toggle" type="button" onClick={() => setLanguage(isFr ? 'en' : 'fr')} aria-label={tr('Switch portfolio language to French', 'Passer le portfolio en anglais')} aria-pressed={isFr}><span className={isFr ? '' : 'language-active'}>EN</span><span className="language-divider">/</span><span className={isFr ? 'language-active' : ''}>FR</span></button>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            {tr('Work', 'Projets')}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {tr('About', 'À propos')}
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            {tr('Skills', 'Compétences')}
          </a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            {tr('Journey', 'Parcours')}
          </a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {tr("Let's connect", 'Me contacter')} <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> {tr('DEVELOPER IN PROGRESS · CAMEROON', 'DÉVELOPPEUR EN DEVENIR · CAMEROUN')}
            </div>
            <div className="profile-intro">
              <div>
                <span className="profile-name">Tambo Nde Franck</span>
                <span className="profile-caption">{tr('Developer · Digital product builder', 'Développeur · Créateur de produits numériques')}</span>
              </div>
            </div>
            <h1>
              {tr('Building useful things for', 'Créer des solutions utiles pour la')} <span>{tr('real life.', 'vie réelle.')}</span>
            </h1>
            <p className="hero-lead">
              {tr('I’m Franck, an emerging developer focused on JavaScript and practical digital products. I enjoy starting with real problems, researching what people need, and turning those insights into clear, approachable experiences.', 'Je suis Franck, un développeur en devenir qui se concentre sur JavaScript et les produits numériques pratiques. J’aime partir de problèmes réels, comprendre les besoins des utilisateurs et transformer ces idées en expériences simples et accessibles.')}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {tr('Explore my work', 'Découvrir mes projets')} <ArrowRight size={17} />
              </a>
              <a className="button button-quiet" href="#about">
                {tr('A little about me', 'À propos de moi')} <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> {tr('Cameroon', 'Cameroun')}
              </span>
              <span className="meta-divider" />
              <span>{tr('Curiosity-led. User-first. Always learning.', 'Guidé par la curiosité. Centré sur l’utilisateur. Toujours en apprentissage.')}</span>
            </div>
          </div>

          <div className="hero-visual hero-portrait-visual">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img
                className="hero-portrait"
                src="/resources/franck-profile.png"
                alt="Portrait of Franck Tambo in a black suit beside a lake"
                fetchPriority="high"
              />
              <div className="portrait-shade" />
              <div className="portrait-label">
                <span className="portrait-label-dot" />
                <div>
                  <strong>Tambo Nde Franck</strong>
                  <span>{tr('Developer · Digital product builder', 'Développeur · Créateur de produits numériques')}</span>
                </div>
              </div>
            </div>
            <div className="portrait-float-card">
              <span className="portrait-card-icon"><Check size={17} /></span>
              <span><strong>{tr('Curiosity-led', 'Guidé par la curiosité')}</strong><small>{tr('Always learning. Building with purpose.', 'Toujours apprendre. Construire avec un objectif.')}</small></span>
            </div>
            <div className="visual-caption">{tr('RESEARCH', 'RECHERCHE')} <span>→</span> {tr('DESIGN', 'CONCEPTION')} <span>→</span> {tr('BUILD', 'CONSTRUCTION')}</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Portfolio focus areas">
          <div className="section-wrap trust-strip-inner">
            <span>{tr('AREAS I CARE ABOUT', 'MES DOMAINES D’INTÉRÊT')}</span>
            <div>
              <HeartPulse size={17} /> {tr('Human-centred health tech', 'Technologies de santé centrées sur l’humain')}
            </div>
            <div>
              <Search size={17} /> {tr('Solving everyday problems', 'Résoudre les problèmes du quotidien')}
            </div>
            <div>
              <Braces size={17} /> {tr('Thoughtful web experiences', 'Expériences web bien pensées')}
            </div>
          </div>
        </section>

        <section className="section-wrap work-section section-block" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                {tr('SELECTED WORK & IDEAS', 'PROJETS ET IDÉES')} <span>01 / 04</span>
              </p>              <h2>
                {tr('Problems worth', 'Des problèmes qui méritent')} <span>{tr('working on.', 'qu’on s’y attaque.')}</span>
              </h2>
            </div>
            <p className="section-intro">
              {tr('A mix of concepts, research and learning builds. Each one is a chance to understand a problem better and practise turning it into a useful digital experience.', 'Un mélange de concepts, de recherches et de projets d’apprentissage. Chacun permet de mieux comprendre un problème et de le transformer en une expérience numérique utile.')}
            </p>
          </div>

          <div
            className="project-filters"
            role="group"
            aria-label={tr('Filter projects', 'Filtrer les projets')}
          >
            {filters.map(item => (
              <button
                key={item}
                className={
                  filter === item ? 'filter-button is-active' : 'filter-button'
                }
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {tx(item)}
                {item === 'All work' && (
                  <span className="filter-count">{projects.length}</span>
                )}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <article
                  className={'project-card project-card-' + (index + 1)}
                  key={project.title}
                >
                  <div className="project-card-top">
                    <div className="project-icon">
                      <ProjectIcon size={22} strokeWidth={1.7} />
                    </div>
                    <span className="project-stage">{tx(project.stage)}</span>
                  </div>
                  <p className="project-label">{tx(project.label)}</p>
                  <h3>{tx(project.title)}</h3>
                  <p className="project-description">{tx(project.description)}</p>
                  <div className="tag-row">
                    {project.technologies.slice(0, 3).map(technology => (
                      <span className="tag" key={technology}>
                        {tx(technology)}
                      </span>
                    ))}
                  </div>
                  <button
                    className="text-link"
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    {tr('Explore project', 'Découvrir le projet')} <ArrowUpRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
          <p className="project-note">
            <span className="note-dot" /> {tr('Project stages are labelled honestly: concepts and research are not presented as completed products.', 'Les étapes des projets sont indiquées honnêtement : les concepts et les recherches ne sont pas présentés comme des produits terminés.')}
          </p>
        </section>

        <section className="about-section section-block" id="about">
          <div className="section-wrap about-grid">
            <div className="about-left">
              <p className="section-kicker">
                {tr('A LITTLE ABOUT ME', 'À PROPOS DE MOI')} <span>02 / 04</span>
              </p>
              <h2>
                {tr('Technology should make life', 'La technologie doit rendre la vie')} <span>{tr('easier to navigate.', 'plus simple à parcourir.')}</span>
              </h2>
              <div className="about-emphasis">
                {tr('“Build around people first. Let the code serve the idea.”', '« Mettre les personnes au premier plan. Que le code serve l’idée. »')}
              </div>
            </div>
            <div className="about-right">
              <p>{tr('I’m a young developer in Cameroon growing my skills by working on projects that connect technology with everyday needs. My interests range from community platforms and service discovery to accessible health-support ideas.', 'Je suis un jeune développeur au Cameroun et je développe mes compétences à travers des projets qui relient la technologie aux besoins quotidiens. Je m’intéresse aux plateformes communautaires, à la recherche de services et aux solutions de santé accessibles.')}</p>
              <p>{tr('I’m especially interested in the work before the code: listening to a problem, comparing existing solutions, deciding what matters most, and designing a flow people can understand without needing a manual.', 'Je m’intéresse particulièrement au travail qui précède le code : écouter les besoins, comparer les solutions existantes, définir les priorités et concevoir un parcours compréhensible sans mode d’emploi.')}</p>
              <p>{tr('I’m building my foundation one project at a time, with JavaScript as my main learning focus and a long-term goal of shipping products that are both useful and thoughtfully made.', 'Je construis mes bases projet après projet, avec JavaScript comme priorité d’apprentissage et l’objectif à long terme de lancer des produits utiles et bien conçus.')}</p>
              <p>{tr('My current professional project, MINPOSTEL SMART DISPLAY, is helping me practise public-facing screen layout, clear meeting information hierarchy, visual consistency and iterative UI refinement.', 'Mon projet professionnel actuel, MINPOSTEL SMART DISPLAY, me permet de pratiquer la mise en page d’écrans publics, la hiérarchie des informations de réunion, la cohérence visuelle et l’amélioration progressive des interfaces.')}</p>
              <div className="about-values">
                <div>
                  <span>01</span>
                  <b>{tr('Practical over flashy', 'L’utile avant le spectaculaire')}</b>
                </div>
                <div>
                  <span>02</span>
                  <b>{tr('Clear over complicated', 'La clarté avant la complexité')}</b>
                </div>
                <div>
                  <span>03</span>
                  <b>{tr('Progress through practice', 'Progresser par la pratique')}</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-wrap skills-section section-block"
          id="skills"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                {tr('TOOLS & APPROACH', 'OUTILS ET APPROCHE')} <span>03 / 04</span>
              </p>
              <h2>
                {tr('Growing skills.', 'Développer mes compétences.')} <span>{tr('Solid foundations.', 'Des bases solides.')}</span>
              </h2>
            </div>
            <p className="section-intro">{tr('I’m honest about where I am in the journey: learning by building, strengthening fundamentals and choosing tools that fit the project.', 'Je suis transparent sur mon niveau : j’apprends en construisant, je renforce mes bases et je choisis des outils adaptés au projet.')}</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(group => {
              const SkillIcon = group.icon;
              return (
                <article className="skill-card" key={group.number}>
                  <div className="skill-card-top">
                    <span>{group.number}</span>
                    <SkillIcon size={21} />
                  </div>
                  <h3>{tx(group.title)}</h3>
                  <p>{tx(group.description)}</p>
                  <div className="skill-tags">
                    {group.items.map(item => (
                      <span key={item}>{tx(item)}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="learning-banner">
            <div className="learning-icon">
              <Braces size={21} />
            </div>
            <div>
              <span className="learning-label">{tr('CURRENT LEARNING PRIORITY', 'PRIORITÉ D’APPRENTISSAGE ACTUELLE')}</span>
              <h3>{tr('JavaScript, problem-solving and building complete small projects.', 'JavaScript, résolution de problèmes et création de petits projets complets.')}</h3>
            </div>
            <a href="#journey" aria-label={tr('See my learning journey', 'Voir mon parcours d’apprentissage')}>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>

        <section className="journey-section section-block" id="journey">
          <div className="section-wrap journey-grid">
            <div>
              <p className="section-kicker">
                {tr('WHAT COMES NEXT', 'LA SUITE')} <span>04 / 04</span>
              </p>
              <h2>
                {tr('Learn it. Build it.', 'Apprendre. Construire.')} <span>{tr('Make it better.', 'Améliorer.')}</span>
              </h2>
              <p className="journey-intro">{tr('My path is hands-on: strengthen the fundamentals, keep asking better questions and use every project to learn something that carries into the next one.', 'Mon parcours est pratique : renforcer les bases, poser de meilleures questions et tirer de chaque projet des enseignements utiles pour le suivant.')}</p>
            </div>
            <div className="journey-list">
              <div className="journey-item">
                <div className="journey-marker">
                  <span>01</span>
                </div>
                <div>
                  <span className="journey-status">{tr('FOUNDATION', 'FONDATIONS')}</span>
                  <h3>{tr('Get the fundamentals right', 'Maîtriser les fondamentaux')}</h3>
                  <p>{tr('Practise JavaScript, web foundations, Git and clear coding habits through small builds.', 'Pratiquer JavaScript, les bases du web, Git et de bonnes habitudes de programmation avec de petits projets.')}</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-marker">
                  <span>02</span>
                </div>
                <div>
                  <span className="journey-status">{tr('BUILD & TEST', 'CONSTRUIRE ET TESTER')}</span>
                  <h3>{tr('Turn ideas into working prototypes', 'Transformer les idées en prototypes fonctionnels')}</h3>
                  <p>{tr('Use research and simple user flows to decide what to build, then test whether it makes sense.', 'Utiliser la recherche et des parcours utilisateurs simples pour choisir quoi créer, puis vérifier que la solution est pertinente.')}</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-marker">
                  <span>03</span>
                </div>
                <div>
                  <span className="journey-status">{tr('NEXT CHAPTER', 'PROCHAINE ÉTAPE')}</span>
                  <h3>{tr('Grow through real collaboration', 'Progresser grâce à la collaboration')}</h3>
                  <p>{tr('Keep improving the portfolio, learn from feedback and work toward practical internship and project opportunities.', 'Continuer à améliorer le portfolio, apprendre des retours et rechercher des opportunités concrètes de stage et de projet.')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-shape shape-one" />
            <div className="contact-shape shape-two" />
            <div className="contact-copy">
              <p className="section-kicker">{tr('HAVE A GOOD PROBLEM IN MIND?', 'VOUS AVEZ UN PROJET EN TÊTE ?')}</p>
              <h2>
                {tr('Let’s make something', 'Créons quelque chose de')} <span>{tr('useful.', 'utile.')}</span>
              </h2>
              <p>{tr('I’m interested in thoughtful projects, learning opportunities and conversations about building better digital experiences.', 'Je m’intéresse aux projets réfléchis, aux opportunités d’apprentissage et aux échanges pour créer de meilleures expériences numériques.')}</p>
              <div className="contact-signoff">
                <span className="eyebrow-dot" /> {tr('Open to learning, feedback and collaboration', 'Ouvert à l’apprentissage, aux retours et à la collaboration')}
              </div>
              <div className="contact-methods" aria-label="Contact details">
                <a className="contact-method" href="tel:+237674256040">
                  <Phone size={17} />
                  <span>
                    <small>PHONE 1</small>
                    <b>+237 674 256 040</b>
                  </span>
                </a>
                <a className="contact-method" href="tel:+237656028795">
                  <Phone size={17} />
                  <span>
                    <small>PHONE 2</small>
                    <b>+237 656 028 795</b>
                  </span>
                </a>
                <a className="contact-method" href="mailto:francktambo720@gmail.com">
                  <Mail size={17} />
                  <span>
                    <small>EMAIL</small>
                    <b>francktambo720@gmail.com</b>
                  </span>
                </a>
                <a className="contact-method whatsapp-method" href="https://wa.me/237674256040" target="_blank" rel="noreferrer">
                  <svg className="whatsapp-logo" viewBox="0 0 32 32" role="img" aria-label="WhatsApp" focusable="false">
                    <path fill="currentColor" d="M16.04 3.2A12.68 12.68 0 0 0 5.2 22.47L3.5 28.7l6.4-1.68A12.7 12.7 0 1 0 16.04 3.2Zm0 23.1a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.8 1 .99-3.7-.25-.4a10.38 10.38 0 1 1 8.74 4.78Zm5.7-7.78c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.15.2 2.17 3.31 5.25 4.64.73.32 1.3.5 1.75.64.74.24 1.42.2 1.95.12.6-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
                  </svg>
                  <span>
                    <small>WHATSAPP</small>
                    <b>+237 674 256 040</b>
                  </span>
                </a>
                <a className="contact-method" href="https://www.linkedin.com/in/tambo-franck-ba7948383?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
                  <Linkedin size={17} />
                  <span>
                    <small>LINKEDIN</small>
                    <b>{tr('Connect professionally', 'Me contacter professionnellement')}</b>
                  </span>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">{tr('Your name', 'Votre nom')}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder={tr('How should I address you?', 'Comment dois-je vous appeler ?')}
                required
              />
              <label htmlFor="contact-email">{tr('Your email', 'Votre adresse e-mail')}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <label htmlFor="contact-message">
                {tr('What would you like to discuss?', 'De quoi souhaitez-vous discuter ?')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder={tr('Tell me a little about the idea...', 'Parlez-moi un peu de votre idée...')}
                required
              />
              <div className="contact-form-actions">
                <button className="button button-primary form-submit" type="submit">
                  {tr('Send by email', 'Envoyer par e-mail')} <Mail size={16} />
                </button>
                <button className="button button-whatsapp form-submit" type="button" onClick={handleWhatsAppSubmit}>
                  <svg className="whatsapp-logo" viewBox="0 0 32 32" role="img" aria-label="WhatsApp" focusable="false">
                    <path fill="currentColor" d="M16.04 3.2A12.68 12.68 0 0 0 5.2 22.47L3.5 28.7l6.4-1.68A12.7 12.7 0 1 0 16.04 3.2Zm0 23.1a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.8 1 .99-3.7-.25-.4a10.38 10.38 0 1 1 8.74 4.78Zm5.7-7.78c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.15.2 2.17 3.31 5.25 4.64.73.32 1.3.5 1.75.64.74.24 1.42.2 1.95.12.6-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
                  </svg>
                  {tr('Send on WhatsApp', 'Envoyer sur WhatsApp')}
                </button>
              </div>
              {formStatus && (
                <p className="form-status" role="status">
                  {formStatus}
                </p>
              )}
              <p className="form-note">{tr('Choose email or WhatsApp to open a message with your details filled in. Review it and press Send in your chosen app.', 'Choisissez l’e-mail ou WhatsApp pour ouvrir un message prérempli. Vérifiez-le puis appuyez sur Envoyer dans l’application choisie.')}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              FT<span>.</span>
            </span>
            <span className="brand-name">Franck Tambo</span>
          </a>
          <div className="footer-center">
            <p>
              {tr('Built with curiosity in Cameroon.', 'Créé avec curiosité au Cameroun.')} {' '}
              <span>© {new Date().getFullYear()} Franck Tambo</span>
            </p>
            <nav className="social-links" aria-label={tr('Social media profiles', 'Profils sur les réseaux sociaux')}>
              <a className="social-icon" href="https://github.com/franck-tambo" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={19} strokeWidth={1.8} /></a>
              <a className="social-icon" href="https://www.linkedin.com/in/tambo-franck-ba7948383?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={19} strokeWidth={1.8} /></a>
              <a className="social-icon" href="https://x.com/FranckTambo" target="_blank" rel="noreferrer" aria-label="X" title="X"><X size={19} strokeWidth={2} /></a>
              <a className="social-icon" href="https://youtube.com/@francktambo?si=pPo8dIGG1uxu9KaG" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube"><Youtube size={20} strokeWidth={1.8} /></a>
              <a className="social-icon" href="https://www.facebook.com/share/1EbEfkkZDs/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><Facebook size={19} strokeWidth={1.8} /></a>
              <a className="social-icon" href="https://www.instagram.com/franck._.tambo/?utm_source=qr&r=nametag" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram size={19} strokeWidth={1.8} /></a>
              <a className="social-icon" href="https://www.tiktok.com/@francky._.jr?_r=1&_t=ZS-9AwP47Yby6B" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok"><Music2 size={19} strokeWidth={1.8} /></a>
              <a className="social-icon whatsapp-social" href="https://wa.me/237674256040" target="_blank" rel="noreferrer" aria-label="WhatsApp: +237 674 256 040" title="WhatsApp: +237 674 256 040"><svg className="whatsapp-logo" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3.2A12.68 12.68 0 0 0 5.2 22.47L3.5 28.7l6.4-1.68A12.7 12.7 0 1 0 16.04 3.2Zm0 23.1a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.8 1 .99-3.7-.25-.4a10.38 10.38 0 1 1 8.74 4.78Zm5.7-7.78c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.15.2 2.17 3.31 5.25 4.64.73.32 1.3.5 1.75.64.74.24 1.42.2 1.95.12.6-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" /></svg></a>

            </nav>
          </div>
          <a className="back-to-top" href="#home">
            {tr('Back to top', 'Retour en haut')} <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={event => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              type="button"
              aria-label={tr('Close project details', 'Fermer les détails du projet')}
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
            <div className="modal-icon">
              {SelectedProjectIcon && <SelectedProjectIcon size={24} />}
            </div>
            <p className="project-label">{tx(selectedProject.label)}</p>
            <h2 id="modal-title">{tx(selectedProject.title)}</h2>
            <span className="project-stage modal-stage">{tx(selectedProject.stage)}</span>
            <div className="modal-copy-block">
              <h3>{tr('The problem', 'Le problème')}</h3>
              <p>{tx(selectedProject.problem)}</p>
            </div>
            <div className="modal-copy-block">
              <h3>{tr('My approach', 'Mon approche')}</h3>
              <p>{tx(selectedProject.approach)}</p>
            </div>
            <div className="modal-copy-block">
              <h3>{tr('What I’m exploring', 'Ce que j’explore')}</h3>
              <ul>
                {selectedProject.highlights.map(highlight => (
                  <li key={highlight}>{tx(highlight)}</li>
                ))}
              </ul>
            </div>
            <div className="modal-next">
              <span>{tr('NEXT STEP', 'PROCHAINE ÉTAPE')}</span>
              <p>{tx(selectedProject.nextStep)}</p>
            </div>
            <div className="tag-row modal-tags">
              {selectedProject.technologies.map(technology => (
                <span className="tag" key={technology}>
                  {tx(technology)}
                </span>
              ))}
            </div>
            <button
              className="button button-primary modal-done"
              type="button"
              onClick={() => setSelectedProject(null)}
            >
              {tr('Back to portfolio', 'Retour au portfolio')} <ArrowRight size={16} />
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
