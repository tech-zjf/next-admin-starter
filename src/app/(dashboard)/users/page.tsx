export default function UsersPage() {
    const users = [
        { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员' },
        { id: 2, name: '李四', email: 'lisi@example.com', role: '用户' },
        { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户' },
    ];

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800">用户管理</h1>

            <div className="rounded-lg bg-white shadow">
                <table className="w-full">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">姓名</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">邮箱</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">角色</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{user.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-blue-600 hover:text-blue-800">编辑</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
