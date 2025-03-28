import type { TLanguage } from '@/i18n/interface';
import { Dictionary } from '@avalon/types';

export const stats: { [key in TLanguage]: Dictionary<string> } = {
  en: {
    title: 'Avalon — Game Statistics',
    generalStatsTitle: 'General Statistics',
    playerCountStatsTitle: 'Player Count Statistics',
    goodRolesStatsTitle: 'Statistics for Good Roles',
    evilRolesStatsTitle: 'Statistics for Evil Roles',
    role: 'Role',
    gamesCount: 'Number of Games',
    winrateImpact: 'Winrate Impact',
    winrate: 'Winrate',
    addonsStatsTitle: 'Statistics for Expansions',
    addon: 'Expansions',
    totalGames: 'Total Games',
    goodWins: 'Good Wins',
    evilWins: 'Evil Wins',
    playerCount: 'Player Count',
    goodWinPercentage: 'Good Win Percentage',
    evilWinPercentage: 'Evil Win Percentage',
  },
  ru: {
    title: 'Avalon — статистика игр',
    generalStatsTitle: 'Общая Статистика',
    playerCountStatsTitle: 'Статистика по Количеству Игроков',
    goodRolesStatsTitle: 'Статистика по ролям Сил Света',
    evilRolesStatsTitle: 'Статистика по ролям Сил Тьмы',
    role: 'Роль',
    gamesCount: 'Кол-во игр',
    winrateImpact: 'Влияние на победу',
    winrate: '% Побед',
    addonsStatsTitle: 'Статистика по дополнениям',
    addon: 'Дополнение',
    totalGames: 'Всего игр',
    goodWins: 'Побед Сил Света',
    evilWins: 'Побед Сил Тьмы',
    playerCount: 'Кол-во Игроков',
    goodWinPercentage: '% Побед Сил Света',
    evilWinPercentage: '% Побед Сил Тьмы',
  },
  'zh-CN': {
    title: 'Avalon — 游戏统计',
    generalStatsTitle: '总体统计',
    playerCountStatsTitle: '玩家数量统计',
    goodRolesStatsTitle: '光明阵营角色统计',
    evilRolesStatsTitle: '黑暗阵营角色统计',
    role: '角色',
    gamesCount: '游戏场数',
    winrateImpact: '胜率影响',
    winrate: '胜率',
    addonsStatsTitle: '扩展统计',
    addon: '扩展',
    totalGames: '总场数',
    goodWins: '光明阵营胜利',
    evilWins: '黑暗阵营胜利',
    playerCount: '玩家数量',
    goodWinPercentage: '光明阵营胜率%',
    evilWinPercentage: '黑暗阵营胜率%',
  },
  'zh-TW': {
    title: 'Avalon — 遊戲統計',
    generalStatsTitle: '總體統計',
    playerCountStatsTitle: '玩家數量統計',
    goodRolesStatsTitle: '光明陣營角色統計',
    evilRolesStatsTitle: '黑暗陣營角色統計',
    role: '角色',
    gamesCount: '遊戲場數',
    winrateImpact: '勝率影響',
    winrate: '勝率',
    addonsStatsTitle: '擴展統計',
    addon: '擴展',
    totalGames: '場總數',
    goodWins: '光明陣營勝利',
    evilWins: '黑暗陣營勝利',
    playerCount: '玩家數量',
    goodWinPercentage: '光明陣營勝率%',
    evilWinPercentage: '黑暗陣營勝率%',
  },
  es: {
    title: 'Avalon — Estadísticas de Juegos',
    generalStatsTitle: 'Estadísticas Generales',
    playerCountStatsTitle: 'Estadísticas por Cantidad de Jugadores',
    goodRolesStatsTitle: 'Estadísticas de Roles del Lado del Bien',
    evilRolesStatsTitle: 'Estadísticas de Roles del Lado del Mal',
    role: 'Rol',
    gamesCount: 'Número de Juegos',
    winrateImpact: 'Impacto en la Tasa de Victoria',
    winrate: '% de victorias',
    addonsStatsTitle: 'Estadísticas de expansiones',
    addon: 'Expansiones',
    totalGames: 'Total de Juegos',
    goodWins: 'Victorias del Lado del Bien',
    evilWins: 'Victorias del Lado del Mal',
    playerCount: 'Cantidad de Jugadores',
    goodWinPercentage: '% de Victorias del Lado del Bien',
    evilWinPercentage: '% de Victorias del Lado del Mal',
  },
};
