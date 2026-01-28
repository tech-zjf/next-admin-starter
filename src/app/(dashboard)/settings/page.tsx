import { useTranslations } from 'next-intl';

export default function SettingsPage() {
    const t = useTranslations('settings');

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">{t('title')}</h1>

            <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                    <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">{t('general')}</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">站点名称</label>
                            <input
                                type="text"
                                className="form-input mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 transition-colors dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                defaultValue="后台管理系统"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">站点描述</label>
                            <textarea
                                className="form-textarea mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 transition-colors dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow transition-colors dark:bg-gray-800">
                    <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">通知设置</h2>
                    <div className="space-y-3">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 rounded border-gray-300 dark:border-gray-600" />
                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">邮件通知</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 rounded border-gray-300 dark:border-gray-600" />
                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">站内消息</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
