import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
export class StringTools {
    static formatSeconds(seconds: number, { isShowEmptyHours = true } = {}) {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
        if (hours === '00' && !isShowEmptyHours) {
            return `${minutes}:${secs}`;
        }
        return `${hours}:${minutes}:${secs}`;
    }

    static formatBytes(bytes: number, decimals = 2) {
        if (bytes === 0) return '0 M';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['M', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }

    static timeToSeconds(timeStr: string) {
        const parts = timeStr.split(':').map(Number);
        let seconds = 0;
        if (parts.length === 3) {
            seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
        } else if (parts.length === 2) {
            seconds = parts[0] * 60 + parts[1];
        }
        return seconds;
    }

    static isPhone(phone: string) {
        phone = phone?.replace(/\s+/g, '');
        const phoneRegxp = /^(?:(?:\+|00)86)?1\d{10}$/;
        return phoneRegxp.test(phone);
    }

    static formattedDate(utcTime: string) {
        dayjs.extend(utc);
        dayjs.extend(timezone);
        const beijingTime = dayjs.utc(utcTime).tz('Asia/Shanghai').format('YYYY-M-D HH:mm');
        return beijingTime;
    }

    static generateUniqueHash(length = 16) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < length; i++) {
            hash += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return hash;
    }
}
