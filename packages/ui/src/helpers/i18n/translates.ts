import type { TLanguage } from '@/helpers/i18n/interface';
import { Dictionary } from '@avalon/types';

export const translates: { [key in TLanguage]: Dictionary<Dictionary<string>> } = {
  en: {
    menu: {
      menu: 'Menu',
      home: 'Home',
      profile: 'Profile',
      wiki: 'Wiki',
      about: 'About',
    },
    mainPage: {
      createRoom: 'Create room',
      watch: 'Watch',
      join: 'Join',
      gamesList: 'Games list',
      players: 'Players',
    },
    game: {
      winner: 'Winner',
      evil: 'evil',
      good: 'good',
      stage: 'stage',
      voteStage: 'Vote stage',
      voting: 'voting',
      excalibur: 'excalibur',
      'team building': 'team building',
      mission: 'mission',
      initialization: 'initialization',
      'lady of lake': 'lady of lake',
      end: 'end',
      lancelots: 'lancelots',
      assassinate: 'assassinate',
      hidden: 'hidden',
      historyMode: 'History mode',
      gameIsEnded: 'Game is ended',
      rolesAndAddons: 'Roles and addons',
    },
    endReason: {
      manualy: 'The game is finished manually',
      evilTeamMissions: 'The evil team failed 3 missions',
      goodTeamMissions: 'The good team successes 3 missions',
      missMerlin: 'The evil team tried to kill Merlin but missed',
      missGuinevere: 'The evil team tried to kill Guinevere but missed',
      missLovers: 'The evil team tried to kill Lovers but missed',
      killGuinevere: 'The evil team killed Guinevere',
      killLovers: 'The evil team killed Lovers',
      killMerlin: 'The evil team killed Merlin',
    },
    roles: {
      merlin: 'Merlin',
      merlinPure: 'Merlin Pure',
      guinevere: 'Guinevere',
      percival: 'Percival',
      tristan: 'Tristan',
      isolde: 'Isolde',
      troublemaker: 'Troublemaker',
      servant: 'Servant',
      goodLancelot: 'Good Lancelot',
      evilLancelot: 'Evil Lancelot',
      mordred: 'Mordred',
      trickster: 'Trickster',
      morgana: 'Morgana',
      oberon: 'Oberon',
      lunatic: 'Lunatic',
      brute: 'Brute',
      minion: 'Minion',
    },
    addons: {
      ladyOfLake: 'Lady of the lake',
      excalibur: 'Excalibur',
    },
    lady: {
      announceGood: 'Announce Good',
      announceEvil: 'Announce Evil',
    },
    options: {
      roles: 'Roles',
      extraRoles: 'Extra roles',
      addons: 'Addons',
      features: 'Features',
      ladyHint: 'The lady allows you to find out the loyalty of another player',
      excaliburHint: 'Excalibur allows you to change the decision of one of the participants of the mission',
      anonymousVoting: 'Anonymous voting',
      anonymousVotingHint: "With anonymous voting, you don't know who approves the mission and who rejects it",
      hiddenHistory: 'Hidden history',
      hiddenHistoryHint: 'With a hidden history, past actions in the game are hidden',
      displayIndex: 'Display index',
      displayIndexHint: 'Displays the index number of each player at the table',
    },
    startPanel: {
      copyLink: 'Copy link',
      discord: 'Discord',
      leaveGame: 'Leave Game',
      joinGame: 'Join Game',
      lockGame: 'Lock Game',
      unlockGame: 'Unlock game',
      startGame: 'Start Game',
      options: 'Options',
    },
    wiki: {
      rules: 'Rules',
      roles: 'Roles',
      addons: 'Addons',
    },
    onlineStatus: {
      connecting: 'Connecting...',
      connected: 'Connected',
      error: 'Error',
    },
    settings: {
      username: 'Username',
      usernameRequired: 'You must enter a username.',
      language: 'Language',
      usernameHint: 'Select your username for game',
      hideSpoilersHint: 'Hide spoilers',
      hideIndexHint: 'Hide Indexes In History',
      animeMode: 'Anime mode',
      submit: 'Submit',
      update: 'Update',
    },
    inGame: {
      sendTeam: 'Send Team',
      approve: 'Approve',
      reject: 'Reject',
      success: 'Success',
      fail: 'Fail',
      checkLoyalty: 'Check Loyalty',
      giveExcalibur: 'Give excalibur',
      skipExcalibur: 'Skip excalibur',
      useExcalibur: 'Use excalibur',
    },
    assassinate: {
      lovers: 'Lovers',
      assassinate: 'Assassinate',
    },
    rolesInfo: {
      roles: 'Roles',
      inGameRoles: 'Roles in game',
      visibleRoles: 'Roles visible to you',
      merlinInfo: 'Knows evil, must remain hidden',
      merlinPureInfo: 'Knows evil and their roles, must remain hidden',
      percivalInfo: 'Knows two wizards (Merlin and Morgana), but does not know which of them is which',
      servantInfo: 'Loyal Servant of Arthur',
      troublemakerInfo: 'Obliged to lie about his loyalty',
      guinevereInfo: 'Knows two Lancelots but does not know their loyalty',
      goodLancelotInfo: 'Good lancelot, can switch role to evil in game',
      evilLancelotInfo: 'Evil lancelot, can switch role to good in game',
      mordredInfo: 'Unknown to Merlin',
      morganaInfo: 'Appears as Merlin for Percival',
      oberonInfo: 'Unknown to Evil',
      minionInfo: 'Minion of Mordred',
      isoldeInfo: 'Lover. Knows Tristan, must remain hidden',
      tristanInfo: 'Lover. Knows Isolde, must remain hidden',
      evilInfo: 'Evil player with an unknown role',
      goodInfo: 'Good player with an unknown role',
      tricksterInfo: 'Lying about his loyalty',
      lunaticInfo: 'Must fail on every mission',
      bruteInfo: 'May fail only first three missions',
      unknownInfo: 'Unknown role',
      mysteryWizardInfo: 'One of the two wizards is good (Merlin) or evil (Morgana)',
      unknownLancelotInfo: 'Lancelot, whose loyalty is not known',
    },
    hostMenu: {
      host: 'Host',
      hostPanel: 'Host panel',
      endRestartGameHint: 'The buttons will start voting for the end or restart of the game',
      endGame: 'End game',
      restartGame: 'Restart game',
      shuffle: 'Shuffle',
      shuffleHint: 'Shuffle players positions in lobby',
    },
    history: {
      history: 'History',
      live: 'Live',
      vote: 'Vote',
      checkLoyalty: 'Lady',
      mission: 'Mission',
      assassinate: 'Assassinate',
      switchResult: 'Excalibur',
      switchLancelots: 'Lancelots',
      hidden: 'Hidden',
    },
    mission: {
      players: 'Players',
      fails: 'Fails',
    },
    chat: {
      message: 'message',
    },
    infoMessage: {
      loginToMessage: 'Log in to send a message',
      disableSpoilers: 'Disable the "hide spoiler" option to see the content',
      waitForAction: 'The game updated! We are waiting for your action',
      loginToJoin: 'Log in to join game',
      linkCopied: 'Link has been copied to the clipboard',
      loginToCreate: 'Log in to create a game',
      close: 'Close',
    },
    votes: {
      yes: 'Yes',
      no: 'No',
      endGame: 'Voting to end the game',
      endAndRestartGame: 'Voting to end the game and start a new one',
    },
  },
  ru: {
    menu: {
      menu: 'Меню',
      home: 'Главная',
      profile: 'Профиль',
      wiki: 'Вики',
      about: 'О сайте',
    },
    mainPage: {
      createRoom: 'Создать комнату',
      watch: 'Смотреть',
      join: 'Присоединиться',
      gamesList: 'Список игр',
      players: 'игроков',
    },
    game: {
      winner: 'Победитель',
      evil: 'тьма',
      good: 'свет',
      stage: 'этап',
      voteStage: 'Этап голосования',
      voting: 'голосование',
      excalibur: 'Экскалибур',
      'team building': 'сбор команды',
      mission: 'поход',
      initialization: 'начало',
      'lady of lake': 'леди озера',
      end: 'конец',
      lancelots: 'ланцелоты',
      assassinate: 'убийство',
      hidden: 'скрыто',
      historyMode: 'Режим истории',
      gameIsEnded: 'Игра завершена',
      rolesAndAddons: 'Роли и дополнения',
    },
    endReason: {
      manualy: 'Игра завершена вручную',
      evilTeamMissions: 'Команда сил тьмы провалила 3 похода',
      goodTeamMissions: 'Команда сил света успешно выполнила 3 похода',
      missMerlin: 'Команда сил тьмы пыталась убить Мерлина, но промахнулась',
      missGuinevere: 'Команда сил тьмы пыталась убить Гвиневру, но промахнулась',
      missLovers: 'Команда сил тьмы пыталась убить Любовников, но промахнулась',
      killGuinevere: 'Команда сил тьмы убила Гвиневру',
      killLovers: 'Команда сил тьмы убила Любовников',
      killMerlin: 'Команда сил тьмы убила Мерлина',
    },
    roles: {
      merlin: 'Мерлин',
      merlinPure: 'Белый Мерлин',
      guinevere: 'Гвиневра',
      percival: 'Персиваль',
      tristan: 'Тристан',
      isolde: 'Изольда',
      troublemaker: 'Траблмейкер',
      servant: 'Сервант',
      goodLancelot: 'Светлый Ланселот',
      evilLancelot: 'Темный Ланселот',
      mordred: 'Мордред',
      trickster: 'Трикстер',
      morgana: 'Моргана',
      oberon: 'Оберон',
      lunatic: 'Лунатик',
      brute: 'Брут',
      minion: 'Миньон',
    },
    addons: {
      ladyOfLake: 'Леди озера',
      excalibur: 'Экскалибур',
    },
    lady: {
      announceGood: 'Объявить добром',
      announceEvil: 'Объявить злом',
    },
    options: {
      roles: 'Роли',
      extraRoles: 'Дополнительные роли',
      addons: 'Дополнения',
      features: 'Опции',
      ladyHint: 'Леди позволяет проверить сторону другого игрока',
      excaliburHint: 'Экскалибур позволяет изменить решение одного из участников похода',
      anonymousVoting: 'Анонимное голосование',
      anonymousVotingHint: 'При анонимном голосовании игроки не знают, кто проголосовал за, а кто против',
      hiddenHistory: 'Скрытая история',
      hiddenHistoryHint: 'В игре невозможно просмотреть предыдущие действия',
      displayIndex: 'Отобразить порядковый номер',
      displayIndexHint: 'Показывает порядковые номера игроков за столом',
    },
    startPanel: {
      copyLink: 'Ссылка',
      discord: 'Discord',
      leaveGame: 'Покинуть игру',
      joinGame: 'Присоединиться',
      lockGame: 'Закрыть игру',
      unlockGame: 'Открыть игру',
      startGame: 'Начать игру',
      options: 'Настройки',
    },
    wiki: {
      rules: 'Правила',
      roles: 'Роли',
      addons: 'Дополнения',
    },
    onlineStatus: {
      connecting: 'Подключение...',
      connected: 'Онлайн',
      error: 'Ошибка',
    },
    settings: {
      username: 'Имя пользователя',
      usernameRequired: 'Имя обязательное поле',
      language: 'Язык',
      usernameHint: 'Выберите имя для игры',
      hideSpoilersHint: 'Скрыть спойлеры',
      hideIndexHint: 'Скрыть порядковые номера в истории',
      animeMode: 'Режим аниме',
      submit: 'Отправить',
      update: 'Обновить',
    },
    inGame: {
      sendTeam: 'Отправить поход',
      approve: 'За',
      reject: 'Против',
      success: 'Успех',
      fail: 'Провал',
      checkLoyalty: 'Проверить лояльность',
      giveExcalibur: 'Дать Экскалибур',
      skipExcalibur: 'Не использовать Экскалибур',
      useExcalibur: 'Применить Экскалибур',
    },
    assassinate: {
      lovers: 'Любовники',
      assassinate: 'Убить',
    },
    rolesInfo: {
      roles: 'Роли',
      inGameRoles: 'Роли в игре',
      visibleRoles: 'Роли видимые тебе',
      merlinInfo: 'Знает силы тьмы должен оставаться скрытым',
      merlinPureInfo: 'Знает силы тьмы и их роли должен оставаться скрытым',
      percivalInfo: 'Знает двух волшебников (Мерлин и Моргана), но не знает кто из них кто',
      servantInfo: 'Верный слуга Артура',
      troublemakerInfo: 'Вынужденный лгать о своей лояльности',
      guinevereInfo: 'Знает двух Ланселотов, но не знает об их лояльности',
      goodLancelotInfo: 'Ланселот сил света, может сменить лагерь на тьму в игре',
      evilLancelotInfo: 'Ланселот сил тьмы, может сменить лагерь на свет в игре',
      mordredInfo: 'Неизвестен Мерлину',
      morganaInfo: 'Выглядит как Мерлин для Персиваля',
      oberonInfo: 'Неизвестен силам тьмы',
      minionInfo: 'Приспешник Мордреда',
      isoldeInfo: 'Любовница. Знает Тристана, должна оставаться скрытой',
      tristanInfo: 'Любовник. Знает Изольду, должен оставаться скрытым',
      evilInfo: 'Игрок сил тьмы с неизвестной ролью',
      goodInfo: 'Игрок сил света с неизвестной роль',
      tricksterInfo: 'Врет о своей лояльности',
      lunaticInfo: 'Обязан проваливать каждый поход',
      bruteInfo: 'Может провалить только три первых похода',
      unknownInfo: 'Неизвестная роль',
      mysteryWizardInfo: 'Один из двух волшебников - сил света (Мерлин) или сил тьмы (Моргана).',
      unknownLancelotInfo: 'Ланселот, чья верность не известна',
    },
    hostMenu: {
      host: 'Админ',
      hostPanel: 'Админ панель',
      endRestartGameHint: 'Кнопки используются для голосования за окончание или перезапуск игры',
      endGame: 'Закончить игру',
      restartGame: 'Перезапустить игру',
      shuffle: 'Перемешать',
      shuffleHint: 'Перемешать игроков в лобби',
    },
    history: {
      history: 'История',
      live: 'Сейчас',
      vote: 'Голосование',
      checkLoyalty: 'Леди',
      mission: 'Поход',
      assassinate: 'Убийство',
      switchResult: 'Экскалибур',
      switchLancelots: 'Ланселоты',
      hidden: 'Скрыто',
    },
    mission: {
      players: 'Количество игроков',
      fails: 'Количество провалов',
    },
    chat: {
      message: 'сообщение',
    },
    infoMessage: {
      loginToMessage: 'Войдите, чтобы отправить сообщение',
      disableSpoilers: "Отключите 'Скрыть спойлеры', чтобы видеть контент",
      waitForAction: 'Игра обновлена! Игроки ожидают твоего действия',
      loginToJoin: 'Войдите, чтобы присоединиться к игре',
      linkCopied: 'Ссылка скопирована',
      loginToCreate: 'Войдите, чтобы создать игру',
      close: 'Закрыть',
    },
    votes: {
      yes: 'За',
      no: 'Против',
      endGame: 'Голосование за окончание игры',
      endAndRestartGame: 'Голосование за окончание игры и начало новой',
    },
  },
  zh_TW: {
    menu: {
      menu: '選單',
      home: '主頁',
      profile: '設定',
      wiki: '維基',
      about: '關於',
    },
    mainPage: {
      createRoom: '創建房間',
      watch: '觀戰',
      join: '加入',
      gamesList: '遊戲列表',
      players: '???',
    },
    game: {
      winner: '勝利方',
      evil: '壞人方',
      good: '好人方',
      stage: '階段',
      voteStage: '投票階段',
      voting: '投票',
      excalibur: '神劍',
      'team building': '團隊建立',
      mission: '任務',
      initialization: '初始化',
      'lady of lake': '湖中驗人',
      end: '完結',
      lancelots: '蘭斯洛特',
      assassinate: '暗殺',
      hidden: '隱憂',
      historyMode: '記錄階段',
      gameIsEnded: '遊戲結束',
      rolesAndAddons: '角色與插件',
    },
    endReason: {
      manualy: '???',
      evilTeamMissions: '???',
      goodTeamMissions: '???',
      missMerlin: '???',
      missGuinevere: '???',
      missLovers: '???',
      killGuinevere: '???',
      killLovers: '???',
      killMerlin: '???',
    },
    roles: {
      merlin: '梅林',
      merlinPure: '終極梅林',
      guinevere: '女皇',
      percival: '派西維爾',
      tristan: '戀人-特里斯坦',
      isolde: '戀人-伊索德',
      troublemaker: '麻煩製造者',
      servant: '僕人',
      goodLancelot: '正義-蘭斯洛特',
      evilLancelot: '邪惡-蘭斯洛特',
      mordred: '莫德雷德',
      trickster: '騙子',
      morgana: '莫甘娜',
      oberon: '奧伯倫',
      lunatic: '瘋子',
      brute: '野蠻人',
      minion: '士兵',
    },
    addons: {
      ladyOfLake: '湖中仙女',
      excalibur: '神劍',
    },
    lady: {
      announceGood: '???',
      announceEvil: '???',
    },
    options: {
      roles: '角色',
      extraRoles: '額外角色',
      addons: '插件',
      features: '功能',
      ladyHint: '湖中仙女可以讓你了解其他玩家的忠誠度',
      excaliburHint: '神劍讓您改變任務參與者之一的決定',
      anonymousVoting: '匿名投票',
      anonymousVotingHint: '透過匿名投票,您不知道誰批准任務、誰拒絕任務',
      hiddenHistory: '隱藏記錄',
      hiddenHistoryHint: '透過隱藏記錄,遊戲中過去的動作被隱藏',
      displayIndex: '顯示索引',
      displayIndexHint: '顯示牌桌上每位玩家的索引號',
    },
    startPanel: {
      copyLink: '複製連結',
      discord: 'Discord',
      leaveGame: '離開遊戲',
      joinGame: '加入遊戲',
      lockGame: '鎖定遊戲',
      unlockGame: '解鎖遊戲',
      startGame: '開始遊戲',
      options: '選項',
    },
    wiki: {
      rules: '規則',
      roles: '角色',
      addons: '插件',
    },
    onlineStatus: {
      connecting: '連線中...',
      connected: '上線',
      error: '連線失敗',
    },
    settings: {
      username: '用戶名稱',
      usernameRequired: '請輸你使用者名稱',
      language: '語言',
      usernameHint: '選擇你的用戶名稱',
      hideSpoilersHint: '隱藏劇透',
      hideIndexHint: '隱藏記錄中的索引',
      animeMode: '動漫模式',
      submit: '提交',
      update: '更新',
    },
    inGame: {
      sendTeam: '發送組隊',
      approve: '同意',
      reject: '拒絕',
      success: '成功',
      fail: '失敗',
      checkLoyalty: '檢查忠誠度',
      giveExcalibur: '給予神劍',
      skipExcalibur: '跳過神劍',
      useExcalibur: '使用神劍',
    },
    assassinate: {
      lovers: '戀人',
      assassinate: '暗殺',
    },
    rolesInfo: {
      roles: '角色',
      inGameRoles: '遊戲中的角色',
      visibleRoles: '你可見的角色',
      merlinInfo: '知道誰是壞人方,必須保持隱藏',
      merlinPureInfo: '知道誰是壞人方及角色,必須保持隱藏',
      percivalInfo: '看到兩位角色(梅林/莫甘娜),但不知道誰是真正的梅林',
      servantInfo: '亞瑟王的忠實僕人',
      troublemakerInfo: '不得不對他的忠誠度撒謊',
      guinevereInfo: '看到兩位角色(蘭斯洛特),但不知道誰是真正的蘭斯洛特',
      goodLancelotInfo: '好人方的蘭斯洛特,可以從角色轉為壞人方',
      evilLancelotInfo: '壞人方的蘭斯洛特,可以從角色轉為好人方',
      mordredInfo: '梅林不知道你是壞人方',
      morganaInfo: '扮演梅林,混淆派西維爾',
      oberonInfo: '其他壞人方不知道你是壞人方',
      minionInfo: '莫德雷德的爪牙',
      isoldeInfo: '戀人,知道誰是特里斯坦,必須保持隱藏',
      tristanInfo: '戀人,知道誰是伊索德,必須保持隱藏',
      evilInfo: '角色未知的壞人方玩家',
      goodInfo: '角色未知的好人方玩家',
      tricksterInfo: '對他的忠誠撒謊',
      lunaticInfo: '每個任務都必須失敗',
      bruteInfo: '可能只會失敗前三個任務',
      unknownInfo: '未知角色',
      mysteryWizardInfo: '兩個玩家之一是好人方的(梅林)還是壞人的(莫甘娜)',
      unknownLancelotInfo: '蘭斯洛特,誰的忠誠無人知曉',
    },
    hostMenu: {
      host: '房主',
      hostPanel: '房主面板',
      endRestartGameHint: '開始投票,決定遊戲結束或重新開始',
      endGame: '遊戲結束',
      restartGame: '重新開始遊戲',
      shuffle: '隨機換位',
      shuffleHint: '隨機調整大廳中玩家的位置',
    },
    history: {
      history: '記錄',
      live: '???',
      vote: '???',
      checkLoyalty: '???',
      mission: '???',
      assassinate: '???',
      switchResult: '???',
      switchLancelots: '???',
      hidden: '???',
    },
    mission: {
      players: '玩家',
      fails: '失敗',
    },
    chat: {
      message: '訊息',
    },
    infoMessage: {
      loginToMessage: '???',
      disableSpoilers: '???',
      waitForAction: '???',
      loginToJoin: '???',
      linkCopied: '???',
      loginToCreate: '???',
      close: '???',
    },
    votes: {
      yes: '???',
      no: '???',
      endGame: '???',
      endAndRestartGame: '???',
    },
  },
  zh_CN: {
    menu: {
      menu: '选单',
      home: '主页',
      profile: '设定',
      wiki: '维基',
      about: '关于',
    },
    mainPage: {
      createRoom: '创建房间',
      watch: '观战',
      join: '加入',
      gamesList: '游戏列表',
      players: '???',
    },
    game: {
      winner: '胜利方',
      evil: '坏人方',
      good: '好人方',
      stage: '阶段',
      voteStage: '投票阶段',
      voting: '投票',
      excalibur: '神剑',
      'team building': '团队建立',
      mission: '任务',
      initialization: '初始化',
      'lady of lake': '湖中验人',
      end: '完结',
      lancelots: '兰斯洛特',
      assassinate: '暗杀',
      hidden: '隐忧',
      historyMode: '记录阶段',
      gameIsEnded: '游戏结束',
      rolesAndAddons: '角色与插件',
    },
    endReason: {
      manualy: '???',
      evilTeamMissions: '???',
      goodTeamMissions: '???',
      missMerlin: '???',
      missGuinevere: '???',
      missLovers: '???',
      killGuinevere: '???',
      killLovers: '???',
      killMerlin: '???',
    },
    roles: {
      merlin: '梅林',
      merlinPure: '终极梅林',
      guinevere: '女皇',
      percival: '派西维尔',
      tristan: '恋人-特里斯坦',
      isolde: '恋人-伊索德',
      troublemaker: '麻烦制造者',
      servant: '仆人',
      goodLancelot: '正义-兰斯洛特',
      evilLancelot: '邪恶-兰斯洛特',
      mordred: '莫德雷德',
      trickster: '骗子',
      morgana: '莫甘娜',
      oberon: '奥伯伦',
      lunatic: '疯子',
      brute: '野蛮人',
      minion: '士兵',
    },
    addons: {
      ladyOfLake: '湖中仙女',
      excalibur: '神剑',
    },
    lady: {
      announceGood: '???',
      announceEvil: '???',
    },
    options: {
      roles: '角色',
      extraRoles: '额外角色',
      addons: '插件',
      features: '功能',
      ladyHint: '湖中仙女可以让你了解其他玩家的忠诚度',
      excaliburHint: '神剑让您改变任务参与者之一的决定',
      anonymousVoting: '匿名投票',
      anonymousVotingHint: '透过匿名投票,您不知道谁批准任务、谁拒绝任务',
      hiddenHistory: '隐藏记录',
      hiddenHistoryHint: '透过隐藏记录,游戏中过去的动作被隐藏',
      displayIndex: '显示索引',
      displayIndexHint: '显示牌桌上每位玩家的索引号',
    },
    startPanel: {
      copyLink: '复制连结',
      discord: 'Discord',
      leaveGame: '离开游戏',
      joinGame: '加入游戏',
      lockGame: '锁定游戏',
      unlockGame: '解锁游戏',
      startGame: '开始游戏',
      options: '选项',
    },
    wiki: {
      rules: '规则',
      roles: '角色',
      addons: '插件',
    },
    onlineStatus: {
      connecting: '连线中...',
      connected: '上线',
      error: '连线失败',
    },
    settings: {
      username: '用户名称',
      usernameRequired: '请输你使用者名称',
      language: '语言',
      usernameHint: '选择你的用户名称',
      hideSpoilersHint: '隐藏剧透',
      hideIndexHint: '隐藏记录中的索引',
      animeMode: '动漫模式',
      submit: '提交',
      update: '更新',
    },
    inGame: {
      sendTeam: '发送组队',
      approve: '同意',
      reject: '拒绝',
      success: '成功',
      fail: '失败',
      checkLoyalty: '检查忠诚度',
      giveExcalibur: '给予神剑',
      skipExcalibur: '跳过神剑',
      useExcalibur: '使用神剑',
    },
    assassinate: {
      lovers: '恋人',
      assassinate: '暗杀',
    },
    rolesInfo: {
      roles: '角色',
      inGameRoles: '游戏中的角色',
      visibleRoles: '你可见的角色',
      merlinInfo: '知道谁是坏人方,必须保持隐藏',
      merlinPureInfo: '知道谁是坏人方及角色,必须保持隐藏',
      percivalInfo: '看到两位角色(梅林/莫甘娜),但不知道谁是真正的梅林',
      servantInfo: '亚瑟王的忠实仆人',
      troublemakerInfo: '不得不对他的忠诚度撒谎',
      guinevereInfo: '看到两位角色(兰斯洛特),但不知道谁是真正的兰斯洛特',
      goodLancelotInfo: '好人方的兰斯洛特,可以从角色转为坏人方',
      evilLancelotInfo: '坏人方的兰斯洛特,可以从角色转为好人方',
      mordredInfo: '梅林不知道你是坏人方',
      morganaInfo: '扮演梅林,混淆派西维尔',
      oberonInfo: '其他坏人方不知道你是坏人方',
      minionInfo: '莫德雷德的爪牙',
      isoldeInfo: '恋人,知道谁是特里斯坦,必须保持隐藏',
      tristanInfo: '恋人,知道谁是伊索德,必须保持隐藏',
      evilInfo: '角色未知的坏人方玩家',
      goodInfo: '角色未知的好人方玩家',
      tricksterInfo: '对他的忠诚撒谎',
      lunaticInfo: '每个任务都必须失败',
      bruteInfo: '可能只会失败前三个任务',
      unknownInfo: '未知角色',
      mysteryWizardInfo: '两个玩家之一是好人方的(梅林)还是坏人的(莫甘娜)',
      unknownLancelotInfo: '兰斯洛特,谁的忠诚无人知晓',
    },
    hostMenu: {
      host: '房主',
      hostPanel: '房主面板',
      endRestartGameHint: '开始投票,决定游戏结束或重新开始',
      endGame: '游戏结束',
      restartGame: '重新开始游戏',
      shuffle: '随机换位',
      shuffleHint: '随机调整大厅中玩家的位置',
    },
    history: {
      history: '记录',
      live: '???',
      vote: '???',
      checkLoyalty: '???',
      mission: '???',
      assassinate: '???',
      switchResult: '???',
      switchLancelots: '???',
      hidden: '???',
    },
    mission: {
      players: '玩家',
      fails: '失败',
    },
    chat: {
      message: '信息',
    },
    infoMessage: {
      loginToMessage: '???',
      disableSpoilers: '???',
      waitForAction: '???',
      loginToJoin: '???',
      linkCopied: '???',
      loginToCreate: '???',
      close: '???',
    },
    votes: {
      yes: '???',
      no: '???',
      endGame: '???',
      endAndRestartGame: '???',
    },
  },
};
