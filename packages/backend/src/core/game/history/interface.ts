import type { IVote } from '@/core/game/history/vote';
import type { IMissionAction } from '@/core/game/history/mission';
import type { IPlayerInGame, Game } from '@/core/game';
import type {
  TAssassinateResult,
  TMissionResult,
  MissionSettings,
  TVoteOption,
  THistoryVote,
  THistoryMission,
  HistoryAssassinate,
  SwitchResult,
  SwitchLancelots,
  TLoyalty,
  CheckLoyalty,
  TAssassinateType,
  TeamMember,
  TRoles,
} from '@avalon/types';

export type THistoryData = {
  vote: {
    index: number;
    result?: TVoteOption;
    forced: boolean;
    leader: IPlayerInGame;
    team: TeamMember[];
    votes: IVote[];
  };
  mission: {
    index: number;
    result?: TMissionResult;
    settings: MissionSettings;
    leader?: IPlayerInGame;
    actions: IMissionAction[];
    fails?: number;
    hidden?: boolean;
  };
  assassinate: {
    result?: TAssassinateResult;
    assassin: IPlayerInGame;
    assassinateType: TAssassinateType;
    killed?: IPlayerInGame[];
  };
  checkLoyalty: {
    validator: IPlayerInGame;
    inspected: IPlayerInGame;
    result: TLoyalty | TRoles;
    visibleLoyalty: TLoyalty | TRoles;
  };
  switchResult: {
    switcher: IPlayerInGame;
    target?: IPlayerInGame;
    result?: TMissionResult;
  };
  switchLancelots: {
    lancelotsIDs: {
      evil: string;
      good: string;
    };
    pointer: number;
    result: boolean;
    switches: Array<boolean>;
  };
  hidden: Record<string, never>;
};

export type THistoryDataForManager = {
  vote: THistoryVote;
  mission: THistoryMission;
  assassinate: HistoryAssassinate;
  checkLoyalty: CheckLoyalty;
  switchResult: SwitchResult;
  switchLancelots: SwitchLancelots;
};

export type TDataForManagerOptions = {
  game: Game;
  userID?: string;
};
