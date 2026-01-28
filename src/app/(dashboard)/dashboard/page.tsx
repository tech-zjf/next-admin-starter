import { useTranslations } from 'next-intl';

export default function DashboardPage() {
    const t = useTranslations('dashboard');

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">{t('title')}</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">总用户数</h3>
                    <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">1,234</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">活跃用户</h3>
                    <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">856</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">今日访问</h3>
                    <p className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">432</p>
                </div>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">最近活动</h2>
                <p className="text-gray-600 dark:text-gray-400">这里显示最近的系统活动...</p>
            </div>
        </div>
    );
}
