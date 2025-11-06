export class IsTools {
    /**
     * 判断是否是微信浏览器
     * @returns {boolean}
     */
    static isWeixinBrowser() {
        return /micromessenger/.test(navigator.userAgent.toLowerCase());
    }

    /** 判断是否是标点符号（包括中英文标点） */
    static isPunctuation(char: string) {
        const punctuationRegex = /^[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~，。、；：？！""''（）《》【】—…￥]+$/;
        return punctuationRegex.test(char);
    }
}
