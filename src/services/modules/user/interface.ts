import { OrderByEnum, OrderEnum } from '@/services/interface';

export interface UserInfo {
    /** 用户ID */
    nickname: string;
    /** 用户头像 */
    avatarUrl: string;
    /** 剩余积分 */
    totalScore: number;
    /** 积分剩余处理时长 */
    remainingTime: number;
}

export enum ScoreSoruceType {
    ALL = 0,
    /** 充值 */
    RECHARGE = 1,
    /** 消耗 */
    CONSUME = 2,
    /** 注册 */
    REGISTER = 3,
    /** 提交问卷 */
    SUBMIT_SURVEY = 4,
    /** 返还积分 */
    POINTS_REFUND = 5,
    /** 播客金句内容生成消耗 */
    QUOTE_CONSUME = 6,
    /** 策划内容生成消耗 */
    PLAN_CONSUME = 7,
    /** 章节内容生成消耗 */
    CHAPTER_CONSUME = 9,
}

export interface ScoreListParams {
    page: number;
    pageSize: number;
    orderBy: OrderByEnum;
    order: OrderEnum;
    operationType?: ScoreSoruceType;
}

export interface ScoreItem {
    id: number;
    sourceType: ScoreSoruceType;
    reason: string;
    score: number;
    restScore: number;
    createTime: string;
}

export interface ScoreResponse {
    list: ScoreItem[];
    total: number;
    totalScore: number;
    cursor: string;
}
