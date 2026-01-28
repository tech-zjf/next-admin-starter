import common from './messages/zh/common.json';
import theme from './messages/zh/theme.json';
import nav from './messages/zh/nav.json';
import header from './messages/zh/header.json';
import sidebar from './messages/zh/sidebar.json';
import dashboard from './messages/zh/dashboard.json';
import users from './messages/zh/users.json';
import settings from './messages/zh/settings.json';

type Messages = {
    common: typeof common;
    theme: typeof theme;
    nav: typeof nav;
    header: typeof header;
    sidebar: typeof sidebar;
    dashboard: typeof dashboard;
    users: typeof users;
    settings: typeof settings;
};

declare global {
    interface IntlMessages extends Messages {}
}
