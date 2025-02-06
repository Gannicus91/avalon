const {
  lobby,
  wiki,
  game,
  notFound,
  roles,
  expansions,
  lancelots,
  lady,
  ladySea,
  excalibur,
  morgana,
  percival,
  rules,
  lovers,
  merlin,
  about,
  oberon,
  mordred,
  troublemaker,
  trickster,
  witch,
  brute,
  lunatic,
} = require('../../src/i18n/langs/pages/seo');

module.exports.routesSeo = {
  lobby: {
    path: '/',
    name: 'lobby',
    priority: 1,
    meta: {
      prerender: true,
      multiLanguage: {
        ...lobby,
      },
    },
  },
  about: {
    path: '/about/',
    name: 'about',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...about,
      },
    },
  },
  room: {
    path: '/room/:uuid/',
    props: true,
    name: 'room',
    meta: {
      multiLanguage: {
        ...game,
      },
      skipSiteMap: true,
    },
  },
  wiki: {
    path: '/wiki/',
    name: 'wiki',
    priority: 0.8,
    meta: {
      prerender: true,
      multiLanguage: {
        ...wiki,
      },
    },
  },
  rules: {
    path: '/wiki/rules/',
    name: 'rules',
    priority: 1,
    meta: {
      prerender: true,
      multiLanguage: {
        ...rules,
      },
    },
  },
  expansions: {
    path: '/wiki/expansions/',
    name: 'expansions',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...expansions,
      },
      image: 'features/lady_of_lake.webp',
    },
  },
  lady: {
    path: '/wiki/expansions/lady/',
    name: 'lady_of_lake',
    priority: 0.6,
    meta: {
      prerender: true,
      multiLanguage: {
        ...lady,
      },
      image: 'features/lady_of_lake.webp',
    },
  },
  ladySea: {
    path: '/wiki/expansions/lady_sea/',
    name: 'lady_of_sea',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...ladySea,
      },
      image: 'features/lady_of_sea.webp',
    },
  },
  excalibur: {
    path: '/wiki/expansions/excalibur/',
    name: 'excalibur',
    priority: 0.5,
    meta: {
      prerender: true,
      multiLanguage: {
        ...excalibur,
      },
      image: 'features/excalibur.webp',
    },
  },
  roles: {
    path: '/wiki/roles/',
    name: 'roles',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...roles,
      },
    },
  },
  merlin: {
    path: '/wiki/roles/merlin/',
    name: 'merlin',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...merlin,
      },
      image: 'roles/merlin.webp',
    },
  },
  merlin_pure: {
    path: '/wiki/roles/merlin_pure/',
    name: 'merlin_pure',
    priority: 0.2,
    meta: {
      prerender: true,
      title: 'Avalon: The Resistance | Merlin Pure',
      description: "Rules and Tips for Merlin Pure role in the board game 'Avalon: The Resistance'",
      keywords: ['Merlin Pure', 'Role', 'Rules', 'Tips'],
      image: 'roles/merlin_pure.webp',
    },
  },
  lovers: {
    path: '/wiki/roles/lovers/',
    name: 'lovers',
    priority: 0.3,
    meta: {
      prerender: true,
      multiLanguage: {
        ...lovers,
      },
      image: 'roles/isolde.webp',
    },
  },
  lancelots: {
    path: '/wiki/roles/lancelots/',
    name: 'lancelots',
    priority: 0.6,
    meta: {
      prerender: true,
      multiLanguage: {
        ...lancelots,
      },
      image: 'roles/unknown_lancelot.webp',
    },
  },
  guinevere: {
    path: '/wiki/roles/guinevere/',
    name: 'guinevere',
    priority: 0.3,
    meta: {
      prerender: true,
      title: 'Avalon: The Resistance | Guinevere',
      description: "Rules and Tips for Guinevere role in the board game 'Avalon: The Resistance'",
      keywords: ['Guinevere', 'Role', 'Rules', 'Tips'],
      image: 'roles/guinevere.webp',
    },
  },
  lunatic: {
    path: '/wiki/roles/lunatic/',
    name: 'lunatic',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...lunatic,
      },
      image: 'roles/lunatic.webp',
    },
  },
  brute: {
    path: '/wiki/roles/brute/',
    name: 'brute',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...brute,
      },
      image: 'roles/brute.webp',
    },
  },
  percival: {
    path: '/wiki/roles/percival/',
    name: 'percival',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...percival,
      },
      image: 'roles/percival.webp',
    },
  },
  servant: {
    path: '/wiki/roles/servant/',
    name: 'servant',
    priority: 0.6,
    meta: {
      prerender: true,
      title: 'Avalon: The Resistance | Servant',
      description: "Rules and Tips for Servant role in the board game 'Avalon: The Resistance'",
      keywords: ['Servant', 'Role', 'Rules', 'Tips'],
      image: 'roles/servant.webp',
    },
  },
  troublemaker: {
    path: '/wiki/roles/troublemaker/',
    name: 'troublemaker',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...troublemaker,
      },
      image: 'roles/troublemaker.webp',
    },
  },
  witch: {
    path: '/wiki/roles/witch/',
    name: 'witch',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...witch,
      },
      image: 'roles/witch.webp',
    },
  },
  mordred: {
    path: '/wiki/roles/mordred/',
    name: 'mordred',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...mordred,
      },
      image: 'roles/mordred.webp',
    },
  },
  trickster: {
    path: '/wiki/roles/trickster/',
    name: 'trickster',
    priority: 0.2,
    meta: {
      prerender: true,
      multiLanguage: {
        ...trickster,
      },
      image: 'roles/trickster.webp',
    },
  },
  oberon: {
    path: '/wiki/roles/oberon/',
    name: 'oberon',
    priority: 0.6,
    meta: {
      prerender: true,
      multiLanguage: {
        ...oberon,
      },
      image: 'roles/oberon.webp',
    },
  },
  morgana: {
    path: '/wiki/roles/morgana/',
    name: 'morgana',
    priority: 0.7,
    meta: {
      prerender: true,
      multiLanguage: {
        ...morgana,
      },
      image: 'roles/morgana.webp',
    },
  },
  minion: {
    path: '/wiki/roles/minion/',
    name: 'minion',
    priority: 0.5,
    meta: {
      prerender: true,
      title: 'Avalon: The Resistance | Minion of Mordred',
      description: "Rules and Tips for  Minion of Mordred role in the board game 'Avalon: The Resistance'",
      keywords: ['Minion of Mordred', 'Role', 'Rules', 'Tips'],
      image: 'roles/minion.webp',
    },
  },
  notFound: {
    path: '/404/',
    name: 'notFound',
    meta: {
      multiLanguage: {
        ...notFound,
      },
      skipSiteMap: true,
    },
  },
};
