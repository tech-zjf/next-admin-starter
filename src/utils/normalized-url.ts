export class NormalizedURL extends URL {
    /**
     * 创建标准化URL对象
     * @param url 原始URL字符串或URL对象
     * @param options 配置项
     * @param options.sortSearchParams 是否自动排序查询参数（默认true）
     */
    constructor(
        url: string | URL,
        private options: { sortSearchParams?: boolean } = { sortSearchParams: true },
    ) {
        super(url.toString());
        this.normalizeSearchParams();
    }

    /**
     * 标准化查询参数
     */
    private normalizeSearchParams(): void {
        if (this.options.sortSearchParams !== false) {
            this.searchParams.sort();
        }
    }

    /**
     * 添加查询参数（支持链式调用）
     */
    appendParam(key: string, value: string): this {
        this.searchParams.append(key, value);
        return this;
    }

    /**
     * 设置查询参数（覆盖已有值）
     */
    setParam(key: string, value: string): this {
        this.searchParams.set(key, value);
        return this;
    }

    /**
     * 删除查询参数
     */
    deleteParam(key: string): this {
        this.searchParams.delete(key);
        return this;
    }

    /**
     * 获取首个匹配的查询参数值
     */
    getParam(key: string): string | null {
        return this.searchParams.get(key);
    }

    /**
     * 获取全部匹配的查询参数值
     */
    getAllParams(key: string): string[] {
        return this.searchParams.getAll(key);
    }

    /**
     * 批量更新查询参数
     */
    updateParams(params: Record<string, string | string[]>): this {
        Object.entries(params).forEach(([key, values]) => {
            this.searchParams.delete(key);
            const valuesArray = Array.isArray(values) ? values : [values];
            valuesArray.forEach((value) => this.searchParams.append(key, value));
        });
        return this;
    }

    /**
     * 转换为标准化URL字符串
     */
    override toString(): string {
        this.normalizeSearchParams(); // 确保输出前参数已排序
        return super.toString();
    }

    /**
     * 转换为普通对象
     */
    toObject(): {
        href: string;
        origin: string;
        protocol: string;
        username: string;
        password: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        searchParams: Record<string, string | string[]>;
        hash: string;
    } {
        const params: Record<string, string | string[]> = {};
        this.searchParams.forEach((value, key) => {
            params[key] = params[key] ? [...(params[key] as string[]), value] : value;
        });

        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: params,
            hash: this.hash,
        };
    }
}
