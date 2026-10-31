import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, HeartPulse, Search, Wrench, Monitor, BookOpen, Laptop, Braces, Sparkles } from 'lucide-react';

type Lang = 'en' | 'fr';
const content = {
  en: {
    nav: ['Work', 'About', 'Skills', 'Journey', 'Contact'],
    eyebrow: 'DEVELOPER IN PROGRESS · CAMEROON',
    title: 'Building useful things for', accent: 'real life.',
    intro: 'I’m Franck, an emerging developer focused on JavaScript and practical digital products. I enjoy starting with real problems, researching what people need, and turning those insights into clear, approachable experiences.',
    explore: 'Explore my work', aboutBtn: 'A little about me', focus: 'AREAS I CARE ABOUT',
    areas: ['Human-centred health tech', 'Solving everyday problems', 'Thoughtful web experiences'],
    workKicker: 'SELECTED WORK & IDEAS', workTitle: 'Problems worth', workAccent: 'working on.',
    workIntro: 'A mix of concepts, research and learning builds. Each one is a chance to understand a problem better and practise turning it into a useful digital experience.',
    filters: ['All work', 'Product concepts', 'Web projects', 'Professional projects'],
    exploreProject: 'Explore project', note: 'Project stages are labelled honestly: concepts and research are not presented as completed products.',
    aboutKicker: 'A LITTLE ABOUT ME', aboutTitle: 'Technology should make life', aboutAccent: 'easier to navigate.',
    quote: '“Build around people first. Let the code serve the idea.”',
    aboutText: 'I’m a young developer in Cameroon growing my skills by working on projects that connect technology with everyday needs. I’m especially interested in understanding the problem before writing code, comparing existing solutions and designing experiences people can use without a manual.',
    skillsKicker: 'TOOLS & APPROACH', skillsTitle: 'Growing skills.', skillsAccent: 'Solid foundations.',
    learning: 'CURRENT LEARNING PRIORITY', learningText: 'JavaScript, problem-solving and building complete small projects.',
    journeyKicker: 'WHAT COMES NEXT', journeyTitle: 'Learn it. Build it.', journeyAccent: 'Make it better.',
    journeyIntro: 'My path is hands-on: strengthen the fundamentals, keep asking better questions and use every project to learn something that carries into the next one.',
    journey: [
      ['FOUNDATION', 'Get the fundamentals right', 'Practise JavaScript, web foundations, Git and clear coding habits through small builds.'],
      ['BUILD & TEST', 'Turn ideas into working prototypes', 'Use research and simple user flows to decide what to build, then test whether it makes sense.'],
      ['NEXT CHAPTER', 'Grow through real collaboration', 'Keep improving the portfolio, learn from feedback and work toward practical internship and project opportunities.']
    ],
    contactKicker: 'HAVE A GOOD PROBLEM IN MIND?', contactTitle: 'Let’s make something', contactAccent: 'useful.',
    contactIntro: 'I’m interested in thoughtful projects, learning opportunities and conversations about building better digital experiences.',
    name: 'Your name', email: 'Your email', message: 'What would you like to discuss?', send: 'Send by email',
    footer: 'Built with curiosity in Cameroon.', back: 'Back to top', details: 'Project details', problem: 'The problem', approach: 'My approach', next: 'Next step', close: 'Close'
  },
  fr: {
    nav: ['Projets', 'À propos', 'Compétences', 'Parcours', 'Contact'],
    eyebrow: 'DÉVELOPPEUR EN DEVENIR · CAMEROUN',
    title: 'Créer des solutions utiles pour', accent: 'la vie réelle.',
    intro: 'Je suis Franck, un développeur en devenir qui se concentre sur JavaScript et les produits numériques pratiques. J’aime partir de problèmes réels, comprendre les besoins des utilisateurs et transformer ces idées en expériences simples et accessibles.',
    explore: 'Découvrir mes projets', aboutBtn: 'À propos de moi', focus: 'MES DOMAINES D’INTÉRÊT',
    areas: ['Technologies de santé centrées sur l’humain', 'Résoudre les problèmes du quotidien', 'Expériences web bien pensées'],
    workKicker: 'PROJETS ET IDÉES', workTitle: 'Des problèmes qui méritent', workAccent: 'qu’on s’y attaque.',
    workIntro: 'Un mélange de concepts, de recherches et de projets d’apprentissage. Chacun permet de mieux comprendre un problème et de le transformer en une expérience numérique utile.',
    filters: ['Tous les projets', 'Concepts de produits', 'Projets web', 'Projets professionnels'],
    exploreProject: 'Découvrir le projet', note: 'Les étapes sont indiquées honnêtement : les concepts et recherches ne sont pas présentés comme des produits terminés.',
    aboutKicker: 'À PROPOS DE MOI', aboutTitle: 'La technologie doit rendre la vie', aboutAccent: 'plus simple.',
    quote: '« Mettre les personnes au premier plan. Que le code serve l’idée. »',
    aboutText: 'Je suis un jeune développeur au Cameroun et je développe mes compétences à travers des projets qui relient la technologie aux besoins quotidiens. Je m’intéresse particulièrement à la compréhension des problèmes avant le code, à la comparaison des solutions et à la création d’expériences simples.',
    skillsKicker: 'OUTILS ET APPROCHE', skillsTitle: 'Développer mes compétences.', skillsAccent: 'Des bases solides.',
    learning: 'PRIORITÉ D’APPRENTISSAGE ACTUELLE', learningText: 'JavaScript, résolution de problèmes et création de petits projets complets.',
    journeyKicker: 'LA SUITE', journeyTitle: 'Apprendre. Construire.', journeyAccent: 'Améliorer.',
    journeyIntro: 'Mon parcours est pratique : renforcer les bases, poser de meilleures questions et tirer de chaque projet des enseignements utiles pour le suivant.',
    journey: [
      ['FONDATIONS', 'Maîtriser les fondamentaux', 'Pratiquer JavaScript, les bases du web, Git et de bonnes habitudes de programmation.'],
      ['CONSTRUIRE ET TESTER', 'Transformer les idées en prototypes', 'Utiliser la recherche et des parcours simples pour choisir quoi créer, puis tester la solution.'],
      ['PROCHAINE ÉTAPE', 'Progresser grâce à la collaboration', 'Améliorer le portfolio, apprendre des retours et rechercher des opportunités de stage et de projet.']
    ],
    contactKicker: 'VOUS AVEZ UN PROJET EN TÊTE ?', contactTitle: 'Créons quelque chose de', contactAccent: 'utile.',
    contactIntro: 'Je m’intéresse aux projets réfléchis, aux opportunités d’apprentissage et aux échanges pour créer de meilleures expériences numériques.',
    name: 'Votre nom', email: 'Votre adresse e-mail', message: 'De quoi souhaitez-vous discuter ?', send: 'Envoyer par e-mail',
    footer: 'Créé avec curiosité au Cameroun.', back: 'Retour en haut', details: 'Détails du projet', problem: 'Le problème', approach: 'Mon approche', next: 'Prochaine étape', close: 'Fermer'
  }
};

const projects = [
  { title:'First-Aid & Care Companion', category:1, icon:HeartPulse, stage:'Concept & planning', description:'A healthcare support app concept designed to make first-aid guidance easier to understand while professional help is on the way.', problem:'In an emergency, people may not know what to do first or how to find trusted help quickly.', approach:'Plan a mobile-first experience with straightforward instructions, voice support and an offline-ready core.', next:'Validate priority needs with potential users and health professionals.' },
  { title:'FINDIT', category:1, icon:Search, stage:'Research & requirements', description:'A lost-and-found platform concept focused on helping people report, discover and safely return misplaced belongings.', problem:'Lost belongings are difficult to recover when reports are scattered across groups and conversations.', approach:'Research existing services and shape requirements around discoverability, trust and simple reporting.', next:'Turn the requirements into clickable flows and test them with users.' },
  { title:'REPAIRNET', category:1, icon:Wrench, stage:'Market exploration', description:'A service-platform concept exploring how people can find repair help and understand the service they are requesting.', problem:'Finding the right repair provider can involve uncertainty about skills and reliability.', approach:'Compare existing options, study complaints and prioritize useful product opportunities.', next:'Narrow the strongest use case before coding.' },
  { title:'MINPOSTEL SMART DISPLAY', category:3, icon:Monitor, stage:'In progress', description:'A smart-display interface for presenting ministry announcements and meeting information clearly.', problem:'Visitors need to understand announcements and meeting details quickly from a shared screen.', approach:'Create a display-first layout with clear hierarchy, consistent spacing and readable typography.', next:'Validate readability and confirm how meeting information will be updated.' },
  { title:'Library Management MVP', category:2, icon:BookOpen, stage:'Learning project', description:'A library-management project planned around account access, book lending, returns and administration.', problem:'Manual workflows make it harder to track book availability, borrowers and returns.', approach:'Practise connecting interface screens with server-side logic and relational data.', next:'Review validation, permissions and data consistency.' },
  { title:'University Information Website', category:2, icon:Laptop, stage:'Frontend learning project', description:'A university website concept with clear navigation for departments, services and contact details.', problem:'School information is harder to use when navigation is unclear.', approach:'Organize content into familiar sections and practise responsive layouts.', next:'Polish mobile navigation and accessibility.' }
];

const skillGroups = [
  ['01','Web foundations','The building blocks I use while creating web interfaces',['HTML','CSS','JavaScript'],Braces],
  ['02','Back-end & data basics','Tools explored through practical application projects.',['PHP','MySQL','XAMPP'],Laptop],
  ['03','Product thinking','Understanding the problem before choosing what to build.',['Problem research','Competitor analysis','Requirements planning'],Search],
  ['04','Design mindset','Keeping interfaces easy to understand and use.',['Responsive UI','Clear navigation','Accessibility awareness'],Sparkles]
] as const;

export default function App() {
  const [lang,setLang] = useState<Lang>('en');
  const [filter,setFilter] = useState(0);
  const [active,setActive] = useState<number|null>(null);
  const [menu,setMenu] = useState(false);
  const t = content[lang];
  const shown = projects.filter(p => filter===0 || p.category===filter);
  const sectionIds = ['work','about','skills','journey','contact'];
  return <div className="app">
    <header className="header"><a className="brand" href="#home"><span className="brand-mark">FT<span>.</span></span><b>Franck Tambo</b></a>
      <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
      <nav className={menu?'nav open':'nav'}><button className="lang" onClick={()=>setLang(lang==='en'?'fr':'en')} aria-label="Switch language">{lang==='en'?'EN / FR':'FR / EN'}</button>
        {t.nav.map((n,i)=><a key={n} href={'#'+sectionIds[i]} onClick={()=>setMenu(false)}>{n}</a>)}
      </nav>
    </header>
    <main>
      <section className="hero wrap" id="home"><div><p className="eyebrow"><i/> {t.eyebrow}</p><p className="person-name">Tambo Nde Franck</p><p className="role">Developer · Digital product builder</p><h1>{t.title} <em>{t.accent}</em></h1><p className="lead">{t.intro}</p>
        <div className="actions"><a className="primary" href="#work">{t.explore} <ArrowUpRight size={17}/></a><a className="secondary" href="#about">{t.aboutBtn}</a></div><p className="location"><MapPin size={15}/> Yaoundé, Cameroon · Curious, user-first, always learning.</p>
      </div><div className="portrait"><div className="portrait-ring"/><img src="/resources/franck-profile.png" alt="Portrait of Franck Tambo" onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/><div className="portrait-fallback">FT<span>.</span><small>Developer · Cameroon</small></div></div></section>
      <section className="focus"><div className="wrap focus-inner"><span>{t.focus}</span>{t.areas.map((a,i)=><b key={a}>{['✳','⌕','⌘'][i]} {a}</b>)}</div></section>
      <section className="wrap section" id="work"><div className="section-head"><div><p className="kicker">{t.workKicker} <small>01 / 04</small></p><h2>{t.workTitle} <em>{t.workAccent}</em></h2></div><p>{t.workIntro}</p></div>
        <div className="filters">{t.filters.map((f,i)=><button className={filter===i?'selected':''} key={f} onClick={()=>setFilter(i)}>{f}</button>)}</div>
        <div className="projects">{shown.map(p=>{const Icon=p.icon;return <article className="project" key={p.title}><div className="project-top"><span className="project-icon"><Icon/></span><small>{p.stage}</small></div><p className="kicker">{p.category===1?'PRODUCT CONCEPT':p.category===2?'WEB PROJECT':'PROFESSIONAL PROJECT'}</p><h3>{p.title}</h3><p className="description">{p.description}</p><button className="text-button" onClick={()=>setActive(projects.indexOf(p))}>{t.exploreProject} <ArrowUpRight size={16}/></button></article>})}</div><p className="note">● {t.note}</p>
      </section>
      <section className="about section" id="about"><div className="wrap about-grid"><div><p className="kicker">{t.aboutKicker} <small>02 / 04</small></p><h2>{t.aboutTitle} <em>{t.aboutAccent}</em></h2><blockquote>{t.quote}</blockquote></div><div><p>{t.aboutText}</p><div className="values"><b>01　Practical over flashy</b><b>02　Clear over complicated</b><b>03　Progress through practice</b></div></div></div></section>
      <section className="wrap section" id="skills"><div className="section-head"><div><p className="kicker">{t.skillsKicker} <small>03 / 04</small></p><h2>{t.skillsTitle} <em>{t.skillsAccent}</em></h2></div><p>{t.aboutText}</p></div><div className="skills">{skillGroups.map(([n,title,desc,items,Icon])=><article className="skill" key={n}><span>{n}</span><Icon/><h3>{title}</h3><p>{desc}</p><div>{items.map(x=><small key={x}>{x}</small>)}</div></article>)}</div><div className="learning"><Braces/><div><small>{t.learning}</small><b>{t.learningText}</b></div></div></section>
      <section className="journey section" id="journey"><div className="wrap journey-grid"><div><p className="kicker">{t.journeyKicker} <small>04 / 04</small></p><h2>{t.journeyTitle} <em>{t.journeyAccent}</em></h2><p>{t.journeyIntro}</p></div><div>{t.journey.map((j,i)=><article className="step" key={j[0]}><span>0{i+1}</span><div><small>{j[0]}</small><h3>{j[1]}</h3><p>{j[2]}</p></div></article>)}</div></div></section>
      <section className="wrap contact-section" id="contact"><div className="contact"><div><p className="kicker">{t.contactKicker}</p><h2>{t.contactTitle} <em>{t.contactAccent}</em></h2><p>{t.contactIntro}</p><div className="contact-links"><a href="mailto:francktambo720@gmail.com"><Mail/> francktambo720@gmail.com</a><a href="https://wa.me/237674256040" target="_blank" rel="noreferrer">WhatsApp · +237 674 256 040</a><a href="https://github.com/franck-tambo" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/tambo-franck-ba7948383/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></div><form onSubmit={e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent('Portfolio message from '+d.get('name'));const body=encodeURIComponent(String(d.get('message'))+'\\nReply to: '+d.get('email'));window.location.href=`mailto:francktambo720@gmail.com?subject=${subject}&body=${body}`}}><label>{t.name}<input name="name" required placeholder="Franck"/></label><label>{t.email}<input name="email" type="email" required placeholder="you@example.com"/></label><label>{t.message}<textarea name="message" rows={4} required/></label><button className="primary">{t.send} <Mail size={16}/></button></form></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">FT<span>.</span></span><b>Franck Tambo</b></a><p>{t.footer} © {new Date().getFullYear()}</p><a href="#home">{t.back} ↑</a></footer>
    {active!==null&&<div className="overlay" onClick={()=>setActive(null)}><section className="modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActive(null)} aria-label={t.close}><X/></button><p className="kicker">{t.details}</p><h2>{projects[active].title}</h2><h3>{t.problem}</h3><p>{projects[active].problem}</p><h3>{t.approach}</h3><p>{projects[active].approach}</p><h3>{t.next}</h3><p>{projects[active].next}</p></section></div>}
  </div>;
}