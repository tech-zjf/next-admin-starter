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
