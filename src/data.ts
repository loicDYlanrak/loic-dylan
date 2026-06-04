/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, TimelineItem, SkillGroup, CounterStat } from './types';

export const PERSONAL_INFO = {
  fullName: "Fehizoro Loïc Dylan RAKOTOARIVONY",
  shortName: "Loïc Dylan",
  title: "Concepteur Développeur & Expert Bases de Données",
  subtitle: "Licence Informatique — ITU University",
  location: "Antananarivo, Madagascar",
  email: "loicrakotoarivony07@gmail.com",
  phone: "+261 38 89 013 38",
  github: "https://github.com/Dylan-Loic", // Fallback standard
  linkedin: "https://linkedin.com",
  bio: "Je suis un futur Ingénieur Logiciel passionné par la conception robuste de systèmes d'information, les mathématiques algorithmiques et la création de bases de données hautement optimisées. Mon parcours universitaire à l'ITU m'a forgé une grande rigueur, une méthodologie de modélisation fiable (MERISE, UML), et une capacité d'adaptation pour développer des solutions fiables, évolutives et performantes (ERP, Moteurs SGBD customisés). \n\nJe reste focalisé sur la création d'architectures saines (orientées 3NF, avec des temps de latence minimisés) mais je maîtrise également les rouages de la création d'interfaces utilisateurs claires en React et Tailwind CSS, offrant ainsi une expertise Full-Stack complète.",
  targetStage: "Je recherche activement un stage ou une mission orientée conception logicielle, administration de bases de données complexes, ou analyse backend pour exprimer mon potentiel d'architecte de systèmes."
};

export const COUNTER_STATS: CounterStat[] = [
  {
    id: "projects",
    targetNumber: 12,
    suffix: "+",
    label: "Projets Développés",
    subtitle: "Du SGBD personnalisé aux ERP modulaires"
  },
  {
    id: "db-skills",
    targetNumber: 95,
    suffix: "%",
    label: "Optimisation de requêtes",
    subtitle: "Calculs matriciels, indexation & UML"
  },
  {
    id: "academic-years",
    targetNumber: 3,
    suffix: "e",
    label: "Année de Licence",
    subtitle: "ITU University Andoharanofotsy (23-26)"
  },
  {
    id: "competitions",
    targetNumber: 100,
    suffix: "%",
    label: "Rigueur Informatique",
    subtitle: "Analyse métier & conformité MERISE"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Bases de Données (Expertise)",
    iconName: "Database",
    skills: [
      { name: "Conception MERISE & Modélisation UML", level: 98 },
      { name: "Normalisation relationnelle (1NF, 2NF, 3NF)", level: 95 },
      { name: "Optimisation de requêtes SQL & Indexation", level: 92 },
      { name: "PostgreSQL & Procédures stockées", level: 90 },
      { name: "MySQL & Administration de serveurs", level: 85 },
      { name: "MongoDB (NoSQL) & Access", level: 80 }
    ]
  },
  {
    category: "Langages de Programmation",
    iconName: "Code",
    skills: [
      { name: "Java (SE, EE, JDBC, Sockets)", level: 92 },
      { name: "Python (Automatisation, Scripting)", level: 88 },
      { name: "SQL (Avancé, Transactions)", level: 94 },
      { name: "JavaScript / ES6+", level: 80 },
      { name: "PHP (Orienté Objet)", level: 78 },
      { name: "C / C++ (Algorithmique SFML)", level: 75 }
    ]
  },
  {
    category: "Développement Web & Frameworks",
    iconName: "Layers",
    skills: [
      { name: "HTML5 / CSS3 / Tailwind CSS", level: 90 },
      { name: "React (Éco-système SPA)", level: 82 },
      { name: "Spring Boot & architectures microservices", level: 78 },
      { name: "Laravel & Symfony (MVC)", level: 75 },
      { name: "FastAPI / Flask (Python)", level: 72 },
      { name: "Vue.js (UI réactives)", level: 70 }
    ]
  },
  {
    category: "Outils & Méthodologies",
    iconName: "Wrench",
    skills: [
      { name: "Git / GitHub / Versioning collaboratif", level: 88 },
      { name: "Analyse Métier & Cahier des charges", level: 85 },
      { name: "Figma (Conception UI/UX & Wireframes)", level: 78 },
      { name: "Photoshop (Création de ressources)", level: 70 },
      { name: "Génie Logiciel & Agilité", level: 80 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "erp-enterprise",
    title: "ERP Modulaire de Gestion d'Entreprise",
    description: "Solution logicielle d'entreprise centralisant les flux d'achats, ventes, finances et rapports comptables complexes.",
    longDescription: "Un Système de Planification des Ressources de l'Entreprise (ERP) robuste et adaptatif. Développé pour répondre aux enjeux de gestion moderne, il offre une automatisation complète des cycles de passation des commandes d'achat, des fiches de ventes, de la synchronisation comptable en direct, et de l'administration des utilisateurs via des habilitations par rôles.",
    categories: ["Applications d'Entreprise", "Bases de Données (SQL/NoSQL)"],
    year: "2025",
    features: [
      "Gestion Achat/Vente & Génération de devis",
      "Module financier d'analyse des marges opérationnelles",
      "Comptabilité générale intégrée avec suivi de trésorerie",
      "Édition automatique de reportings PDF",
      "Conception de base de données ultra-stricte validée en 3NF"
    ],
    tags: ["Java SE/EE", "PostgreSQL", "UML", "MERISE", "JDBC", "Architecture MVC"],
    metrics: [
      { label: "Modèles de Données", value: "3NF Stricte" },
      { label: "Délais de calcul", value: "< 10ms" }
    ],
    isPremium: true
  },
  {
    id: "sgbd-socket",
    title: "SGBD Client/Serveur JDBC en Java",
    description: "Moteur de base de données fait maison intégrant des sockets TCP, une interface graphique JDBC et un parser de requêtes SQL customisé.",
    longDescription: "Ce projet académique majeur consistait à recréer un SGBD complet de A à Z. Comprenant un serveur Socket multi-renommé gérant les verrous de transactions et un client graphique se branchant en JDBC, il permet d'analyser et d'exécuter des formules logiques de requêtes personnalisées.",
    categories: ["Bases de Données (SQL/NoSQL)", "Algorithmes & Jeux"],
    year: "2025",
    features: [
      "Serveur Socket Java multi-threadé supportant des connexions concourantes",
      "Protocole de sérialisation et transfert de jeux de résultats",
      "Console graphique utilisateur intuitive",
      "Exécution de expressions relationnelles personnalisées",
      "Passerelle d'administration PostgreSQL"
    ],
    tags: ["Java 8", "Sockets TCP", "Multi-threading", "JDBC", "RegEx Parsing", "Swing UI"],
    metrics: [
      { label: "Latence TCP", value: "Sub-milliseconde" },
      { label: "Coût SGBD", value: "0€ (Lightweight)" }
    ],
    isPremium: true
  },
  {
    id: "tsena-tana",
    title: "Tsena Tana — Gestion de Marchés Municipaux",
    description: "Application cartographique et financière de perception des loyers de stands municipaux avec gestion intelligente des impayés.",
    longDescription: "Conçue pour numériser le recouvrement municipal, 'Tsena Tana' offre une cartographie interactive des emplacements de marché dans la capitale. La puissance de l'outil réside dans son algorithme d'historisation des baux, générant une file d'attente automatisée de priorisation des impayés pour maximiser l'efficience des collecteurs.",
    categories: ["Applications d'Entreprise", "Web & SIG"],
    year: "2024",
    features: [
      "Visualisation à l'échelle des secteurs de stands",
      "Paiement automatique et relance intelligente des loyers",
      "Grille analytique et tableau de bord des redevances par mois",
      "Gestion dynamique de la file de priorité des impayés chroniques"
    ],
    tags: ["Python", "Microsoft Access", "UML Modeling", "Algorithme de Queue", "Figma UI/UX"],
    metrics: [
      { label: "Precision", value: "Recouvrement 100%" },
      { label: "Vitesse d'accès", value: "Immédiate" }
    ]
  },
  {
    id: "sig-mineral",
    title: "SIG Web — Ressources Minières de Madagascar",
    description: "Plateforme de cartographie interactive de géolocalisation des ressources géologiques de la Grande Île.",
    longDescription: "Un système d'information géographique (SIG) complet conçu pour l'analyse de l'exploitation minière à Madagascar. Les régisseurs peuvent naviguer sur une carte interactive, appliquer des filtres par types de minéraux (pierres précieuses, métaux industriels, terres rares), et consulter des fiches géologiques exhaustives.",
    categories: ["Web & SIG"],
    year: "2025",
    features: [
      "Cartographie interactive dynamique multicouches",
      "Indexation performante et recherche croisée de gisements",
      "Génération automatique d'analyses de densité géographique",
      "Interface utilisateur moderne responsive avec animations fluides"
    ],
    tags: ["SIG / Web Mapping", "PostgreSQL / PostGIS", "Python", "JavaScript ES6", "Figma Design"],
    metrics: [
      { label: "Points de données", value: "500+ Sites" },
      { label: "Technologie SIG", value: "Web Mapping" }
    ],
    isPremium: true
  },
  {
    id: "ecom-laravel",
    title: "Plateforme E-commerce & Suivi de Stock",
    description: "Site marchand performant intégrant des paniers persistants, une facturation instantanée et une gestion des stocks automatisée.",
    longDescription: "Développement complet d'un portail de vente en ligne. Ce système d'information gère en temps réel les fluctuations de stock lors des commandes, sécurise les tunnels de paiement fictifs et propose une interface administrative claire pour charger d'importants catalogues produits.",
    categories: ["Web & SIG", "Applications d'Entreprise"],
    year: "2025",
    features: [
      "Catalogue dynamique avec filtres multicritères instantanés",
      "Mécanismes de mise de côté et de paniers persistants",
      "Gestion en direct des entrées/sorties de stocks avec alertes d'approvisionnement",
      "Console d'administration intuitive d'analyse des ventes"
    ],
    tags: ["Laravel / MVC", "PHP", "MySQL", "JavaScript ES6", "CSS3 / Tailwind", "Bootstrap"],
    metrics: [
      { label: "Optimisation de stock", value: "Automatique" },
      { label: "Chargement de page", value: "< 1.2s" }
    ]
  },
  {
    id: "swim-game",
    title: "Swim Championship & Simulator Engine",
    description: "Simulateur de tournoi olympique de natation modélisé en C++ avec interface graphique 2D SFML.",
    longDescription: "Une expérience interactive reproduisant fidèlement les sessions éliminatoires, quarts de finale, demi-finales et grandes finales d'un tournoi de natation d'élite. L'application charge des volumes de fiches athlètes via des fichiers CSV de performance, simule les couloirs et chronomètres de nage, puis dresse un classement de médailles précis.",
    categories: ["Algorithmes & Jeux"],
    year: "2026",
    features: [
      "Simulation physique réaliste ou basée sur des probabilités athlétiques",
      "Moteur graphique interactif en 2D avec SFML",
      "Gestionnaire de flux d'importation dynamique de bases d'athlètes en CSV",
      "Tableau d'affichage des scores en temps réel"
    ],
    tags: ["C++", "SFML Graphics", "CSV Streaming", "Algorithmes de classement", "Game Loop Architecture"]
  },
  {
    id: "simplex-solver",
    title: "Solveur Simplexe Programmation Linéaire",
    description: "Calculateur scientifique résolvant les problèmes d'optimisation linéaire avec affichage pas-à-pas des tableaux intermédiaires.",
    longDescription: "Application d'aide à la décision logistique. Développée pour résoudre des systèmes de contraintes complexes avec la méthode mathématique du Simplexe. Le moteur de calcul contourne les erreurs d'arrondis des flottants en manipulant nativement des classes de Fractions auto-réductibles, rendant le calcul 100% exact.",
    categories: ["Algorithmes & Jeux", "Applications d'Entreprise"],
    year: "2024",
    features: [
      "Résolution de tous types de contraintes (inférieur, supérieur, égal)",
      "Gestion sémantique exacte des Fractions mathématiques",
      "Visualisation détaillée étape par étape des tableurs du simplexe",
      "Garantie de convergence et avertissement en cas d'impossibilité de solution"
    ],
    tags: ["Java SE", "Algorithmique linéaire", "Classe Fraction Custom", "Swing UI"]
  },
  {
    id: "library-mgr",
    title: "Système SGBD de Bibliothèque Publique",
    description: "Logiciel de gestion de prêts, de réservations et de pénalités financières automatisées branché sur MySQL.",
    longDescription: "Un outil indispensable pour fluidifier les opérations d'une bibliothèque. Conçu autour d'une base relationnelle hautement normalisée sous MySQL, l'utilitaire automatise le calcul des pénalités de retard à chaque restitution d'ouvrage et évalue la priorité d'affectation des réservations libres.",
    categories: ["Bases de Données (SQL/NoSQL)", "Applications d'Entreprise"],
    year: "2024",
    features: [
      "Suivi des profils d'adhérents avec détection d'infractions",
      "Module d'enregistrement rapide emprunts/retours",
      "Processus intelligent de régulation des files d'attente sur les livres populaires",
      "Statistiques détaillées des lectures favorites par trimestre"
    ],
    tags: ["Java SE", "MySQL Database", "MERISE Design", "Transactions SQL", "Relational mapping"]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "it-edu-1",
    period: "2023 – Présent (Licence 2026)",
    title: "Licence en Informatique",
    subtitle: "ITU University (Andoharanofotsy)",
    description: "Cursus d'excellence académique centré sur l'ingénierie du logiciel et la systématisation d'entreprise.",
    type: "academic",
    details: [
      "Conception critique de Bases de Données Avancées (Modélisation, Intégrité, Procédures stockées)",
      "Apprentissage d'architectures logicielles modernes (MVC, Microservices, Sockets Client/Serveur)",
      "Maîtrise du Génie Logiciel, modélisations UML et démarche MERISE pour l'évaluation métier",
      "Pratique approfondie des structures de données fondamentales et théorie des graphes"
    ],
    tags: ["Bases de Données", "Génie Logiciel", "Développement Web", "Réseaux & IHM"]
  },
  {
    id: "nat-op-1",
    period: "2026 (Projet Sportif)",
    title: "Opérateur de Saisie de Données Sportives",
    subtitle: "Championnat & Compétition de Natation",
    description: "Mission clé de confiance assurant l'archivage et l'intégrité de chronomètres de nage compétitifs.",
    type: "professional",
    details: [
      "Saisie et double vérification à chaud des résultats de chaque série",
      "Conception d'une base de classement temporaire pour trier les phases finales",
      "Contrôle d'intégrité et de cohérence des données transmises par les jurys",
      "Traitement analytique pour export de rapports PDF officiels"
    ],
    tags: ["Gestion de Données", "Vérification", "Contrôle Qualité", "Optimisation Excel"]
  },
  {
    id: "web-dev-laravel-1",
    period: "2025 (Projet Pratique)",
    title: "Développeur Web Full-Stack",
    subtitle: "Plateforme de Commerce Électronique",
    description: "Création intégrale d'un système d'information de vente en ligne et de coordination des livraisons.",
    type: "professional",
    details: [
      "Création d'un catalogue produit interactif avec gestion avancée des paniers",
      "Mise en place de triggers d'ajustement automatique de stock et gestion des paiements virtuels",
      "Expérience utilisateur réactive (Tailwind CSR) et administration backend centralisée",
      "Élaboration de schémas de bases de données SQL robustes et normalisés (3NF)"
    ],
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Conception UI/UX"]
  },
  {
    id: "tester-ketrika-1",
    period: "2025 (Collaboration)",
    title: "Testeur d'Applications Web",
    subtitle: "Plateforme Ketrika.com",
    description: "Identification de failles logiques, tests de charge et audit UX pour l'amélioration globale de la plateforme.",
    type: "professional",
    details: [
      "Rédaction de scénarios utilisateurs complexes et réalisation de tests exploratoires",
      "Remontée d'anomalies de rendu (responsive design, lenteurs DOM)",
      "Correction et ajustements d'ergonomie interfaces",
      "Création de recommandations ergonomiques d'amélioration client"
    ],
    tags: ["Assurance Qualité", "Détection d'anomalies", "Audit UX", "Mobile Responsiveness"]
  },
  {
    id: "bac-sci-1",
    period: "2022 – 2023",
    title: "Baccalauréat Scientifique",
    subtitle: "Lycée Privé Gallo Junior",
    description: "Formation fondamentale rigoureuse spécialisée en sciences exactes.",
    type: "academic",
    details: [
      "Mention très honorable",
      "Bases rigoureuses en mathématiques algorithmiques et physique-chimie"
    ],
    tags: ["Sciences Exactes", "Mathématiques", "Logique Formelle"]
  }
];
