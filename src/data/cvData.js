export const cvData = {
  personal: {
    name: "Ayoub",
    surname: "Rekik",
    fullName: "Rekik Ayoub",
    title: "Ingénierie des Systèmes Informatiques (IoT / Embarqué)",
    tagline: "Spécialiste en Ingénierie des Systèmes Informatiques (IoT / Embarqué), IA embarquée (Edge AI), développement Web & Mobile et étudiant en cycle ingénieur Data & IA à l'IIT.",
    status: "Disponible pour de nouvelles opportunités professionnelles (Cours du Soir)",
    location: "Sfax, Tunisie (Route Menzel Chaker 1.5 km) / Remote",
    email: "ayoubrekik15@gmail.com",
    phone: "+216 54 385 249",
    avatar: `${import.meta.env.BASE_URL}images/profile.jpg`,
    languages: ["Arabe (Natif)", "Français (Courant)", "Anglais (Professionnel)"],
    bio: "Titulaire d'une Licence en Ingénierie des Systèmes Informatiques, spécialité Internet des Objets (IoT) obtenue à la Faculté des Sciences de Sfax, je poursuis actuellement mon cycle d'ingénieur en cours du soir en Data Science & Intelligence Artificielle (IA) à l'IIT (International Institute of Technology - North American Private University). Passionné par l'informatique, les technologies embarquées, l'IA et le développement de solutions innovantes matérielles et logicielles, je recherche des opportunités stimulantes me permettant d'allier expertise pratique et formation académique d'excellence.",
    github: "https://github.com/rekik-ayoub",
    linkedin: "https://linkedin.com",
  },
  
  highlights: [
    { label: "Spécialité", value: "IoT & IA", icon: "Cpu" },
    { label: "Cycle Ingénieur", value: "Data & IA (IIT)", icon: "GraduationCap" },
    { label: "Hardware & Software", value: "100% Full-Stack", icon: "Layers" },
    { label: "Disponibilité", value: "Temps Plein / Jour", icon: "Clock" },
  ],

  skills: {
    iotEmbedded: [
      { name: "IA Embarquée (Edge Impulse / YOLO)", level: 92, icon: "Cpu" },
      { name: "Conception de Cartes PCB & Hardware", level: 88, icon: "CircuitBoard" },
      { name: "BLE (Bluetooth Low Energy) & Beacons", level: 95, icon: "Radio" },
      { name: "Protocoles IoT (MQTT, HTTP, WebSockets)", level: 94, icon: "Network" },
      { name: "Capteurs & Fusion de Données", level: 90, icon: "Activity" }
    ],
    webMobile: [
      { name: "Applications Wear OS & Android (Java/XML)", level: 92, icon: "Smartphone" },
      { name: "Développement Web (Laravel / PHP / JS)", level: 90, icon: "Globe" },
      { name: "React / Modern Frontend & UI/UX", level: 86, icon: "Atom" },
      { name: "Supervision & Dashboard Temps Réel", level: 92, icon: "LayoutDashboard" },
      { name: "Bases de Données & APIs REST", level: 88, icon: "Database" }
    ],
    methodologies: [
      { name: "Vibe Coding & Ingénierie Assistée par IA", level: 98, icon: "Sparkles" },
      { name: "Méthodes Agiles (Scrum / Kanban)", level: 95, icon: "Kanban" },
      { name: "Git & Contrôle de Version", level: 92, icon: "GitBranch" },
      { name: "Modélisation & Prototypage Rapide", level: 90, icon: "Layers" },
      { name: "Tests & Débogage Matériel/Logiciel", level: 88, icon: "CheckCircle2" }
    ]
  },

  experiences: [
    {
      role: "Développeur de Projet IoT",
      company: "CompyTechnologie",
      period: "2026 (3 mois)",
      location: "Sfax, Tunisie",
      badge: "Stage Professionnel / PFE",
      description: "Projet de Fin d'Études (PFE) : Conception et réalisation d'un écosystème intelligent et complet de monitoring de l'hygiène des mains basé sur BLE pour les environnements hospitaliers.",
      achievements: [
        "Développement d'une application Wear OS intégrant un modèle d'IA embarquée (Edge Impulse) pour la reconnaissance locale en temps réel des gestes de lavage des mains via accéléromètre et gyroscope.",
        "Transmission automatique des informations et alertes par BLE vers les passerelles / stations connectées.",
        "Déploiement de balises BLE au niveau des chambres et services de malades pour assurer la géolocalisation et le suivi de l'hygiène des mains à proximité du patient.",
        "Conception et réalisation intégrale du distributeur de gel hydroalcoolique connecté à base d'ESP32 (choix des composants, circuit PCB et firmware).",
        "Développement de la plateforme web centralisée React & Laravel assurant la réception des données télémétriques des devices ESP32, l'affichage de l'historique de chaque soignant et le real-time tracking hospitalier."
      ],
      tags: ["IoT", "Edge Impulse", "Wear OS", "BLE", "React", "Laravel", "ESP32", "PCB"]
    }
  ],

  projects: [
    {
      id: "wearos-ai-gesture",
      title: "Wear OS AI – Détection Gestuelle IA Locale",
      category: "IoT & IA Embarquée",
      featured: true,
      description: "Application Wear OS dédiée au personnel médical intégrant un modèle d'IA local (Edge AI) pour la reconnaissance en direct des gestes de lavage des mains et transmission BLE.",
      image: `${import.meta.env.BASE_URL}images/wearos_hygiene.jpg`,
      tags: ["Wear OS", "Edge Impulse", "IA Locale", "BLE", "Java/Kotlin", "Accéléromètre/Gyro"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "Inférence IA Locale Embarquée",
      details: "Application pour montres connectées Wear OS exécutant un réseau de neurones directement en local sur la montre via Edge Impulse. Analyse en temps réel les flux inertiels (accéléromètre + gyroscope) pour valider la conformité des protocoles de friction hydroalcoolique du personnel soignant, puis diffuse les logs d'observance via Bluetooth Low Energy (BLE) sans latence."
    },
    {
      id: "iot-realtime-dashboard",
      title: "Plateforme Web React & Laravel – Supervision ESP32 & Real-Time Tracking",
      category: "Web & Full Stack",
      featured: true,
      description: "Plateforme hospitalière de supervision centralisée recevant en direct les données télémétriques des modules connectés ESP32, avec tracking en temps réel et historique soignant.",
      image: `${import.meta.env.BASE_URL}images/iot_dashboard.jpg`,
      tags: ["React", "Laravel", "ESP32", "WebSockets", "MQTT", "REST API", "PostgreSQL"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "Real-Time Tracking & ESP32 Hub",
      details: "Architecture full-stack combinant une API robuste Laravel avec une interface interactive React. Reçoit les flux de télémétrie émis par les microcontrôleurs ESP32 (distributeurs connectés et balises de chambres), gère la cartographie hospitalière dynamique, le suivi en temps réel de chaque membre du personnel soignant et l'historique complet des scores d'hygiène."
    },
    {
      id: "pfe-hygiene-system",
      title: "Hand Hygiene Monitoring System – Écosystème Global (PFE)",
      category: "IoT & IA Embarquée",
      featured: true,
      description: "Système hospitalier IoT & IA interconnecté : distributeurs de gel connectés sur PCB/ESP32, balises BLE de géolocalisation patient, montres Wear OS et plateforme cloud.",
      image: `${import.meta.env.BASE_URL}images/ecosystem_pfe.jpg`,
      tags: ["ESP32", "PCB Design", "BLE Beacons", "Firmware C++", "Laravel", "Wear OS"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "Écosystème IoT Matériel & Logiciel",
      details: "Solution hospitalière complète de bout en bout comprenant la conception électronique matérielle (schéma et routage PCB du distributeur avec ESP32), le firmware basse consommation, le réseau de balises BLE pour la détection de proximité au lit du malade et l'interfaçage avec les montres et la plateforme de supervision."
    },
    {
      id: "smart-glasses",
      title: "Smart Glasses – Système d'Assistance Intelligent",
      category: "IoT & IA Embarquée",
      featured: false,
      description: "Lunettes intelligentes d'assistance pour personnes malvoyantes avec détection d'obstacles en temps réel par modèle YOLO et fusion de capteurs ultrasoniques.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop",
      tags: ["YOLO", "IA Embarquée", "Capteurs Ultrasoniques", "Synthèse Vocale", "Python"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "3 mois de R&D",
      details: "Intégration d'un système IA embarqué ultra-rapide traitant le flux vidéo de la caméra combiné aux capteurs ultrasons. Fournit des retours instantanés à l'utilisateur par vibrations haptiques et synthèse vocale."
    },
    {
      id: "interphone-intelligent",
      title: "Interphone Intelligent Connecté Cloud",
      category: "IoT & Cloud",
      featured: false,
      description: "Système domotique d'interphonie connecté au Cloud avec transmission de flux et commandes via le protocole temps réel MQTT.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
      tags: ["MQTT", "Cloud IoT", "ESP32", "Supervision Web"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "Protocole MQTT Temps Réel",
      details: "Permet la supervision, la notification instantanée et le déverrouillage sécurisé à distance depuis n'importe où via une infrastructure Cloud moderne."
    },
    {
      id: "data-volley",
      title: "Data Volley – Analyse Statistique Android",
      category: "Mobile",
      featured: false,
      description: "Application mobile native Android pour la gestion, l'enregistrement et l'analyse avancée des performances et statistiques de volley-ball.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop",
      tags: ["Android", "Java", "XML", "Data Analytics", "SQLite"],
      liveUrl: "https://github.com/rekik-ayoub",
      githubUrl: "https://github.com/rekik-ayoub",
      metrics: "Gestion Matchs & Joueurs",
      details: "Développée en Java/XML natif avec calcul en direct de ratios d'efficacité, gestion d'effectifs et génération de rapports statistiques de match."
    }
  ],

  education: [
    {
      degree: "Diplôme National d'Ingénieur en Génie Informatique – Spécialité Data Science & Intelligence Artificielle (IA)",
      school: "IIT (International Institute of Technology) – North American Private University, Sfax",
      period: "2026 - En cours (Cours du Soir)",
      honors: "Cycle Ingénieur en Cours du Soir (Soir & Weekend)",
      badge: "Formation Actuelle",
      description: "Poursuite du cycle d'ingénieur en régime cours du soir, axé sur l'Intelligence Artificielle avancée, le Big Data, le Deep Learning, les architectures de données massives et la modélisation prédictive, tout en restant 100% disponible pour une activité professionnelle en journée."
    },
    {
      degree: "Licence en Ingénierie des Systèmes Informatiques, spécialité Internet des Objets (IoT)",
      school: "Faculté des Sciences de Sfax (FSS)",
      period: "2023 - 2026",
      honors: "Spécialisation IoT & Systèmes Embarqués",
      badge: "Diplôme Obtenu",
      description: "Formation approfondie en systèmes embarqués, programmation réseau et IoT, intelligence artificielle, microcontrôleurs, architectures distribuées et sécurité des systèmes informatiques."
    },
    {
      degree: "Baccalauréat en Sciences Expérimentales",
      school: "Lycée Mahmoud Magdich, Sfax",
      period: "2022 - 2023",
      honors: "Diplôme National du Baccalauréat",
      badge: "Diplôme Obtenu",
      description: "Formation scientifique rigoureuse axée sur les sciences physiques, sciences de la vie, mathématiques et méthodologie analytique."
    }
  ]
};
