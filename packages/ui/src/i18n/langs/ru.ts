import pages from '@/i18n/langs/pages';

export const ru = {
  menu: {
    menu: 'Меню',
    home: 'Главная',
    profile: 'Профиль',
    wiki: 'Вики',
    about: 'О сайте',
    stats: 'Статистика',
  },
  room: {
    errorNotFound: 'Такой игры не существует',
    backToLobby: 'Вернутся в лобби',
    restartGame: 'Перезапустить игру',
  },
  mainPage: {
    header: 'Приветствуем на сайте для онлайн игры в настольную игру "Авалон"!',
    createRoom: 'Создать комнату',
    watch: 'Смотреть',
    join: 'Присоединиться',
    gamesList: 'Список игр',
    players: 'игроков',
    loading: 'Загрузка...',
    online: 'Онлайн: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      'Ищете товарищей для игры в \'Авалон\'? Присоединяйтесь к нашему сообществу в <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b>!',
    titleregistration: 'Регистрация и личная статистика',
    contentregistration:
      'На сайте добавлена авторизация/регистрация — это позволит отображать вашу личную статистику с победами в разных ролях и общим процентом побед',
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
    'check loyalty': 'проверка верности',
    'witch loyalty': 'верность ведьмы',
    'announce loyalty': 'объявить верность',
    witch: 'ведьма',
    end: 'конец',
    lancelots: 'ланселоты',
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
    missCleric: 'Команда сил тьмы попыталась убить Клирика + 1, но промахнулась',
    killCleric: 'Команда сил тьмы убила Клирика + 1',
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
    lancelots: 'Ланселоты',
    mordred: 'Мордред',
    trickster: 'Трикстер',
    morgana: 'Моргана',
    oberon: 'Оберон',
    lunatic: 'Лунатик',
    brute: 'Брут',
    witch: 'Ведьма',
    minion: 'Миньон',
    cleric: 'Клирик',
    revealer: 'Разоблаченная',
    role: 'Роль',
  },
  breadCrumbs: {
    merlin: 'Мерлин',
    merlin_pure: 'Белый Мерлин',
    guinevere: 'Гвиневра',
    percival: 'Персиваль',
    lovers: 'Любовники',
    troublemaker: 'Траблмейкер',
    servant: 'Сервант',
    lancelots: 'Ланселоты',
    mordred: 'Мордред',
    trickster: 'Трикстер',
    revealer: 'Разоблаченная',
    morgana: 'Моргана',
    oberon: 'Оберон',
    lunatic: 'Лунатик',
    brute: 'Брут',
    witch: 'Ведьма',
    minion: 'Миньон',
    cleric: 'Клирик',
    wiki: 'Вики',
    expansions: 'Дополнения',
    roles: 'Роли',
    lady: 'Леди озера',
    lady_sea: 'Леди моря',
    excalibur: 'Экскалибур',
    rules: 'Правила',
  },
  addons: {
    ladyOfLake: 'Леди озера',
    ladyOfSea: 'Леди моря',
    excalibur: 'Экскалибур',
  },
  ladyModule: {
    announceGood: 'Объявить добром',
    announceEvil: 'Объявить злом',
    announce: 'Объявить',
  },
  options: {
    roles: 'Роли',
    coreRoles: 'Основные',
    extraRoles: 'Дополнительные',
    experimentalRoles: 'Экспериментальные',
    addons: 'Дополнения',
    features: 'Опции',
    ladyHint: 'Леди позволяет проверить сторону другого игрока',
    ladySeaHint: 'Аналог Леди озера, но если вы проверите игрока сил зла, вы увидите его роль.',
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
  onlineStatus: {
    connecting: 'Подключение...',
    connected: 'Онлайн',
    error: 'Ошибка',
  },
  errors: {
    loginNotExist: 'Пользователь с таким логином не найден',
    loginAlreadyExist: 'Пользователь с таким логином уже зарегистрирован',
    emailNotExist: 'Пользователь с таким email не найден',
    emailAlreadyExist: 'Пользователь с таким email уже зарегистрирован',
    wrongPassword: 'Неверный пароль',
  },
  profile: {
    username: 'Имя пользователя',
    stats: 'Статистика',
    logout: 'Выйти',
    language: 'Язык',
    hideSpoilersHint: 'Скрыть спойлеры',
    hideIndexHint: 'Скрывать индексы в истории',
    animeMode: 'Аниме-режим',
    update: 'Обновить',
    colorTheme: 'Цветовая тема',
    darkTheme: 'Тёмная тема',
    lightTheme: 'Светлая тема',
    profile: 'Профиль',
    settings: 'Настройки',
    updatePassword: 'Обновить пароль',
  },
  validators: {
    requiredField: 'Обязательное поле',
    minCharacters: 'Минимум {count} символов',
    spacesForbidden: 'Пробелы запрещены',
  },
  modal: {
    username: 'Имя пользователя',
    usernameHint: 'Выберите игровое имя',
    loginTab: 'Вход',
    login: 'Логин',
    registrationTab: 'Регистрация',
    loginButton: 'Войти',
    registrationButton: 'Зарегистрироваться',
    loginHint: 'Будет использоваться для авторизации',
    password: 'Пароль',
    updateButton: 'Обновить',
    newPassword: 'Новый пароль',
    email: 'Email',
    newEmail: 'Новый email',
  },
  inGame: {
    sendTeam: 'Отправить поход',
    approve: 'За',
    reject: 'Против',
    success: 'Успех',
    fail: 'Провал',
    checkLoyalty: 'Проверить лояльность',
    giveExcalibur: 'Дать Экскалибур',
    skipExcalibur: 'Пропустить Экскалибур',
    useExcalibur: 'Применить Экскалибур',
    useWitchAbility: 'Скрыть поход',
    skipWitchAbility: 'Пропустить',
  },
  assassinate: {
    lovers: 'Любовники',
    assassinate: 'Убить',
    shot: '{killerName} убил {killedName}',
    shotResultHit: '{killedName} был {roleName}',
    shotResultMiss: '{killedName} не был {roleName}',
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
    witchInfo: 'Может скрыть результат одной миссии, но это даст проверку лояльности случайному игроку',
    revealerInfo: 'Раскрывает себя после второй проваленной миссии',
    clericInfo: 'Знает лояльность лидера первой миссии. Должен оставаться скрытым',
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
    checkLoyalty: 'Проверка',
    mission: 'Поход',
    assassinate: 'Убийство',
    switchResult: 'Экскалибур',
    switchLancelots: 'Ланселоты',
    hidden: 'Скрыто',
  },
  mission: {
    players: 'Игроков',
    fails: 'Провалов',
    indexMission: '{index} поход',
    failsCount: 'провалов {count}',
    hidden: 'поход скрыт Ведьмой',
    team: 'Команда:',
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
  notFound: {
    error: 'Упс! Извините, страница не найдена.',
    switch: 'Сменить путь',
  },
  previewLink: {
    'Minions of Mordred(*)': 'Приспешники Мордреда(*)',
    Minions: 'Приспешники',
  },
  spoiler: {
    spoiler: 'Спойлер',
    spoilerHint: 'Контент скрыт под спойлером, так как содержит информацию, неизвестную другим игрокам',
  },
  vote: {
    forcedVote: 'Принудительное голосование',
    voteIndex: '{index} голосование',
    teamSelected: 'команда собрана',
    team: 'Команда:',
    excaliburOwner: '(Экскалибур)',
    approve: 'За:',
    reject: 'Против:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> проверил лояльность <b>{ladyTarget}</b>',
    declareInfo: 'и сказал что его лояльность -',
  },
  lancelotsHistory: {
    becameEvil: 'стал темным',
    becameGood: 'стал светлым',
    lancelotSaveLoyalty: 'сохранил лояльность',
    lancelotsLoyal: 'сохранили лояльность',
    lancelotsSwap: 'сменили лояльность',
    cards: 'Карты:',
  },
  switch: {
    skip: 'решил не использовать Экскалибур',
    switchInfo: '<b>{switcher}</b> использовал Экскалибур и изменил решение <b>{target}</b> на',
  },
  chartStats: {
    countPlayer: '{playerCount} игроков',
    evilWinrate: 'Процент побед Сил Тьмы',
    goodWinrate: 'Процент побед Сил Света',
    winrateByTeamSize: 'Процент побед в зависимости от размера команды',
    halfWinrate: '50% побед',
  },
  ...pages.ru,
};
