import { useTranslations } from 'next-intl';

export default function UsersPage() {
    const t = useTranslations('users');
    const tCommon = useTranslations('common');

    const users = [
        { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员' },
        { id: 2, name: '李四', email: 'lisi@example.com', role: '用户' },
        { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户' },
    ];

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">{t('title')}</h1>

            <div className="overflow-hidden rounded-lg bg-white shadow transition-colors dark:bg-gray-800">
                <table className="w-full">
                    <thead className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">姓名</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">邮箱</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">角色</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-gray-700">
                        {users.map((user) => (
                            <tr key={user.id} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.role}</td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        {tCommon('edit')}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
