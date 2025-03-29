import pages from '@/i18n/langs/pages';

export const zh_TW = {
  menu: {
    menu: '選單',
    home: '主頁',
    profile: '設定',
    wiki: '維基',
    about: '關於',
    stats: '統計',
  },
  room: {
    errorNotFound: '這是錯誤的uuid',
    backToLobby: '返回大廳',
    restartGame: '重開遊戲',
  },
  mainPage: {
    header: '歡迎來到《阿瓦隆》線上棋盤遊戲網站！',
    createRoom: '創建房間',
    watch: '觀戰',
    join: '加入',
    gamesList: '遊戲列表',
    players: '位玩家',
    loading: '加載中...',
    online: '線上: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      '想找人一起探索《阿瓦隆》嗎？加入我們的 <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b> 社區！',
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
    'check loyalty': '檢查忠誠度',
    'witch loyalty': '女巫的忠誠',
    'announce loyalty': '宣布忠誠',
    'give card': '給卡',
    'lead to victory': '引領勝利',
    'restore honor': '恢復榮譽',
    ambush: '埋伏',
    witch: '巫婆',
    end: '完結',
    lancelots: '蘭斯洛特',
    assassinate: '暗殺',
    hidden: '隱藏',
    historyMode: '記錄階段',
    gameIsEnded: '遊戲結束',
    rolesAndAddons: '角色與插件',
  },
  endReason: {
    manualy: '遊戲已手動完成',
    evilTeamMissions: '壞人方3次任務失敗',
    goodTeamMissions: '好人方3次任務成功',
    missMerlin: '壞人方暗殺梅林失敗',
    missGuinevere: '壞人方暗殺女皇失敗',
    missLovers: '壞人方暗殺戀人失敗',
    missCleric: '邪惡團隊嘗試殺死牧師 + 1 但失敗了',
    killCleric: '邪惡團隊殺死了牧師 + 1',
    killGuinevere: '壞人方暗殺女皇成功',
    killLovers: '壞人方暗殺戀人成功',
    killMerlin: '壞人方暗殺梅林成功',
  },
  roles: {
    merlin: '梅林',
    merlinPure: '終極梅林',
    guinevere: '女皇',
    percival: '派西維爾',
    tristan: '特里斯坦',
    isolde: '伊索德',
    troublemaker: '麻煩友',
    servant: '僕人',
    goodLancelot: '正義-蘭斯洛特',
    evilLancelot: '邪惡-蘭斯洛特',
    lancelots: '蘭斯洛特',
    mordred: '莫德雷德',
    trickster: '騙子',
    morgana: '莫甘娜',
    oberon: '奧伯倫',
    lunatic: '瘋子',
    brute: '野蠻人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧師',
    revealer: '被揭示者',
    role: '角色',
  },
  breadCrumbs: {
    merlin: '梅林',
    merlin_pure: '終極梅林',
    guinevere: '女皇',
    percival: '派西維爾',
    lovers: '戀人',
    troublemaker: '麻煩友',
    servant: '僕人',
    lancelots: '蘭斯洛特',
    mordred: '莫德雷德',
    trickster: '騙子',
    revealer: '被揭示者',
    morgana: '莫甘娜',
    oberon: '奧伯倫',
    lunatic: '瘋子',
    brute: '野蠻人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧師',
    wiki: '維基',
    expansions: '插件',
    roles: '角色',
    lady: '湖中仙女',
    lady_sea: '海中仙女',
    plot_cards: '情節卡',
    excalibur: '神劍',
    rules: '規則',
  },
  addons: {
    ladyOfLake: '湖中仙女',
    ladyOfSea: '海中仙女',
    excalibur: '神劍',
    plotCards: '情節卡',
  },
  ladyModule: {
    announceGood: '宣告好人方',
    announceEvil: '宣告壞人方',
    announce: '公告',
  },
  options: {
    roles: '角色',
    coreRoles: '核心',
    extraRoles: '額外',
    experimentalRoles: '實驗性',
    addons: '插件',
    features: '功能',
    ladyHint: '湖中仙女可以讓你了解其他玩家的忠誠度',
    plotCardsHint: '在遊戲中加入情節卡',
    ladySeaHint: '湖中仙女的類似角色，但如果你檢查邪惡力量的玩家，你將看到他的角色。',
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
  onlineStatus: {
    connecting: '連線中...',
    connected: '上線',
    error: '連線失敗',
  },
  errors: {
    wrongPassword: '密碼錯誤',
    emailNotExist: '找不到使用此電子郵件的用戶',
    emailAlreadyExist: '此電子郵件已被註冊',
    loginNotExist: '找不到使用此账号的用户',
    loginAlreadyExist: '此账号已被注册',
    avatarNotExist: '頭像不存在',
    avatarNotAvailable: '此頭像對您不可用',
  },
  profile: {
    username: '使用者名稱',
    stats: '統計',
    logout: '登出',
    language: '語言',
    hideSpoilersHint: '隱藏劇透',
    hideIndexHint: '隱藏歷史索引',
    animeMode: '動漫模式',
    update: '更新',
    colorTheme: '色彩主題',
    darkTheme: '深色主題',
    lightTheme: '淺色主題',
    profile: '個人資料',
    change: '更改',
    changePassword: '更改密碼',
    settings: '設定',
  },
  validators: {
    requiredField: '必填欄位',
    minCharacters: '最少{count}個字元',
    spacesForbidden: '禁止使用空格',
    loginSymbols: '允許符號：a-z、0-9、_ . -',
  },
  modal: {
    username: '使用者名稱',
    usernameHint: '選擇您的遊戲名稱',
    loginTab: '登入',
    registrationTab: '註冊',
    loginButton: '登入',
    registrationButton: '註冊',
    loginHint: '將用於身份驗證',
    password: '密碼',
    email: '電子郵件',
    login: '帳號',
    changeButton: '更改',
    changeemail: '更改電子郵件',
    changepassword: '更改密碼',
    changelogin: '更改帳號',
    newPassword: '新密碼',
    newEmail: '新電子郵件',
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
    useWitchAbility: '隱藏任務',
    skipWitchAbility: '跳過',
    giveCard: '給卡',
    takeLead: '成為領袖',
    skip: '跳過',
    useCard: '使用{cardName}',
    skipCard: '跳過{cardName}',
  },
  assassinate: {
    lovers: '戀人',
    assassinate: '暗殺',
    shot: '{killerName} 暗殺 {killedName}',
    shotResultHit: '{killedName} 是 {roleName}',
    shotResultMiss: '{killedName} 不是 {roleName}',
  },
  giveCard: {
    toPlayer: '<b>{leaderName}</b> 將卡牌 «{cardName}» 給了 <b>{cardOwner}</b>',
    toSelf: '<b>{leaderName}</b> 自己收到了卡牌 «{cardName}»',
  },
  restoreHonor: {
    transfer: '<b>{newOwnerName}</b> 從 <b>{prevOwnerName}</b> 那裡拿走了卡牌 «{cardName}»',
  },
  ambush: {
    history: '<b>{ownerName}</b> 對 <b>{targetName}</b> 使用了伏擊卡並看到了他們的行動: {result}',
    resultHidden: '隱藏',
  },
  leadToVictory: {
    history: '<b>{cardOwner}</b> 使用了卡牌 «{cardName}» 並從 <b>{prevLeaderName}</b> 接過了領導權',
  },
  preVote: {
    title: '初步投票',
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
    witchInfo: '可以隱藏一次任務的結果，但這會給一個隨機玩家忠誠檢測',
    revealerInfo: '在第二次任務失敗後揭露自己',
    clericInfo: '知道第一次任務領導者的效忠情況。必須保持隱藏',
    unknownInfo: '未知角色',
    mysteryWizardInfo: '兩個玩家之一是好人方的(梅林)還是壞人的(莫甘娜)',
    unknownLancelotInfo: '蘭斯洛特,誰的忠誠無人知曉',
  },
  cardsInfo: {
    cards: '卡牌',
    usedCards: '已使用的卡牌',
    remainingCards: '剩餘卡牌',
    leadToVictory: '引領勝利',
    leadToVictoryHint: '在隊伍選擇前成為領袖',
    ambush: '埋伏',
    ambushHint: '揭示一張任務卡的結果',
    kingReturns: '王者歸來',
    kingReturnsHint: '取消最後一次批准並更換領導權',
    restoreHonor: '恢復榮譽',
    restoreHonorHint: '從任意玩家處拿取情節卡',
    charge: '指控',
    chargeHint: '強制玩家公開投票',
    showNature: '展現真我',
    showNatureHint: '向另一玩家展示你的忠誠',
    areYouTheOne: '天命之人',
    areYouTheOneHint: '檢查相鄰玩家的忠誠',
    weFoundYou: '找到你了',
    weFoundYouHint: '強制一名玩家正面打出任務卡',
    showStrength: '展示力量',
    showStrengthHint: '領袖向玩家揭示其忠誠',
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
    live: '現況',
    vote: '投票',
    checkLoyalty: '檢查',
    mission: '任務',
    assassinate: '暗殺',
    switchResult: '神劍',
    switchLancelots: '蘭斯洛特',
    hidden: '隱藏',
  },
  mission: {
    players: '玩家',
    fails: '失敗',
    indexMission: '{index} 任務',
    failsCount: '失敗 {count}',
    hidden: '由巫婆隱藏',
    team: '團隊：',
  },
  chat: {
    message: '訊息',
  },
  infoMessage: {
    loginToMessage: '登入發送訊息',
    disableSpoilers: '停用「隱藏劇透」選項才能查看內容',
    waitForAction: '遊戲更新了!我們正在等待您的行動',
    loginToJoin: '登入加入遊戲',
    linkCopied: '連結已複製到剪貼簿',
    loginToCreate: '登入創建遊戲',
    close: '關閉',
    secretAvatar: '秘密頭像已解鎖',
    loginChanged: '帳號已更改',
    emailChanged: '電子郵件已更改',
    passwordChanged: '密碼已更改',
  },
  votes: {
    yes: '是',
    no: '否',
    endGame: '投票結束遊戲',
    endAndRestartGame: '投票結束遊戲並開始新的遊戲',
  },
  notFound: {
    error: '哎呀!抱歉,找不到頁面',
    switch: '切換路線',
  },
  previewLink: {
    'Minions of Mordred(*)': '莫德雷德的爪牙(*)',
    Minions: '士兵',
  },
  spoiler: {
    spoiler: '劇透',
    spoilerHint: '該內容隱藏在劇透下方,因為它包含其他玩家不知道的訊息',
  },
  vote: {
    forcedVote: '強制投票',
    voteIndex: '{index} 投票',
    teamSelected: '團隊選擇者',
    team: '團隊',
    excaliburOwner: '(神劍)',
    approve: '同意:',
    reject: '拒絕:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> 檢查了 <b>{ladyTarget}</b> 的忠誠',
    declareInfo: '並宣稱他的忠誠為',
  },
  lancelotsHistory: {
    becameEvil: '變成了邪惡',
    becameGood: '變成了善良',
    lancelotSaveLoyalty: '保持忠誠',
    lancelotsLoyal: '保持忠誠',
    lancelotsSwap: '改變了忠誠',
    cards: '卡牌：',
  },
  switch: {
    skip: '決定不使用 神劍',
    switchInfo: '<b>{switcher}</b> 使用 神劍 將 <b>{target}</b> 的動作更改為',
  },
  chartStats: {
    countPlayer: '{playerCount} 名玩家',
    evilWinrate: '黑暗陣營勝率',
    goodWinrate: '光明陣營勝率',
    winrateByTeamSize: '根據隊伍規模的勝率',
    halfWinrate: '50% 勝率',
  },
  avatars: {
    modalHeader: '選擇頭像',
    servantHint: '預設頭像',
    lady_of_lakeHint: '頒發給2025年註冊的用戶',
    merlin_pureHint: '頒發給幫助項目反饋/幫助尋找錯誤的用戶',
    'anime/merlin_pureHint': '頒發給在GitHub上對項目代碼做出任何貢獻的用戶',
    mysteryHint: '授予發現網站上秘密的用戶',
  },
  ...pages['zh-TW'],
};
