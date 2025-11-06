export default function SettingsPage() {
    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800">设置</h1>

            <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-lg font-semibold text-gray-700">基本设置</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">站点名称</label>
                            <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" defaultValue="后台管理系统" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">站点描述</label>
                            <textarea className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" rows={3} />
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-lg font-semibold text-gray-700">通知设置</h2>
                    <div className="space-y-3">
                        <label className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                            <span className="ml-2 text-sm text-gray-700">邮件通知</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                            <span className="ml-2 text-sm text-gray-700">站内消息</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
