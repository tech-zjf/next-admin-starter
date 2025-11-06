export class PromiseTools {
    static sleep(ms: number) {
        return new Promise((resleve) => setTimeout(resleve, ms));
    }

    static promiseResolveThen(cb: () => void) {
        return Promise.resolve().then(cb);
    }

    static async queue<T, K>(dataList: T[], callBack: (item: T, index: number) => Promise<K> | K, spliceLength = 5): Promise<K[]> {
        if (!dataList?.length) {
            return [];
        }
        const list: K[] = [];
        for (let i = 0; i < dataList.length; i += spliceLength) {
            const step = i + spliceLength < dataList.length ? spliceLength : dataList.length - i;
            const promiseList = new Array(step).fill(0).map((_, index) => callBack(dataList[i + index], i + index));
            const result = await Promise.all(promiseList);
            list.push(...result);
        }
        return list;
    }

    static async retry<T>(task: () => Promise<T>, { count = 3, intervalMs = 1000 } = {}): Promise<T> {
        let err = null;
        for (let attempts = 1; attempts <= count; attempts++) {
            try {
                const res = await task();
                return res;
            } catch (error) {
                err = error;
                await PromiseTools.sleep(intervalMs);
            }
        }
        throw err;
    }
}
