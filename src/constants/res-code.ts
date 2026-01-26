export enum RESPONSE_CODE {
    /** 成功 */
    SUCCESS = '00000',
    /** 未登录 */
    UNAUTHORIZED = 'A0003',
    // 积分不足
    INSUFFICIENT_POINTS = 'A00015',
    // 未支付
    NOT_PAY = 'A00016',
    // 自定义未支付
    CUSTOM_TEMPLATE_NOT_PAY = 'A00023',
    // 不是公测用户且支付
    NOT_BETA_PAYMENT_USER = 'A0034',
    // 不是公测用户且未支付
    NOT_BETA_NOT_PAYMENT_USER = 'A0035',
}
