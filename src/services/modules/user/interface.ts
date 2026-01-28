export interface UserInfo {
    /** 用户ID */
    id?: number;
    /** 手机号 */
    phone?: string;
    /** 用户昵称 */
    nickname?: string;
    /** 用户头像（后端返回字段名为 avatar） */
    avatar?: string | null;
    /** 用户角色 */
    role?: string;
    /** 是否激活 */
    is_active?: boolean;
    /** 创建时间 */
    created_at?: string;
    /** 更新时间 */
    updated_at?: string;
}

export interface LoginParams {
    /** 手机号 */
    phone: string;
    /** 密码 */
    password: string;
}

export interface LoginResponse {
    /** 访问令牌 */
    access_token: string;
    /** 令牌类型 */
    token_type: string;
    /** 用户信息 */
    user: UserInfo;
}
