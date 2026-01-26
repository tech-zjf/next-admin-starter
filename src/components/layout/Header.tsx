'use client';

import { useState } from 'react';

export default function Header() {
    const [user] = useState({ name: 'Admin User' });

    return (
        <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white shadow-sm">
            <div className="flex h-full items-center justify-between px-6">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-800">后台管理系统</h1>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">欢迎, {user.name}</span>
                    <button
                        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                        onClick={() => {
                            // 退出登录逻辑
                            console.log('退出登录');
                        }}
                    >
                        退出
                    </button>
                </div>
            </div>
        </header>
    );
}
