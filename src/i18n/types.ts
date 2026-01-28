import common from './messages/zh/common.json';

type Messages = {
    common: typeof common;
};

declare global {
    interface IntlMessages extends Messages {}
}
