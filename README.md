# Next Admin Starter

一个功能完整的 Next.js 管理后台起始模板，集成了现代化的开发工具和最佳实践。

## ✨ 特性

- ⚡️ **Next.js 16** - 使用最新的 App Router
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🌓 **深浅色主题** - 完整的深色模式支持（next-themes）
- 🌍 **国际化** - 中英文双语支持（next-intl）
- 📦 **TypeScript** - 类型安全
- 🔐 **认证系统** - 用户认证上下文
- 🎯 **状态管理** - Zustand + Immer
- 📱 **响应式设计** - 移动端友好
- 🛠 **开发工具** - ESLint + Prettier + Husky
- 🎭 **UI 组件** - 基于 Radix UI 的组件库

## 📦 技术栈

- **框架**: Next.js 16.1.3
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3.4
- **状态管理**: Zustand 5.0
- **国际化**: next-intl 4.7
- **主题**: next-themes 0.4
- **HTTP 客户端**: Axios 1.7
- **代码质量**: ESLint + Prettier
- **包管理器**: pnpm

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
pnpm start
```

### 其他命令

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 添加 shadcn/ui 组件
pnpm add:ui

# 分析打包大小
pnpm analyzer
```

## 📁 项目结构

```
next-admin-starter/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── (auth)/            # 认证相关页面
│   │   ├── (dashboard)/       # 管理后台页面
│   │   └── layout.tsx         # 根布局
│   ├── components/            # React 组件
│   │   ├── common/           # 通用组件
│   │   ├── context/          # Context Providers
│   │   ├── layout/           # 布局组件
│   │   └── ui/               # UI 组件库
│   ├── config/               # 配置文件
│   ├── constants/            # 常量定义
│   ├── hooks/                # 自定义 Hooks
│   ├── i18n/                 # 国际化配置
│   │   ├── config.ts         # i18n 配置
│   │   ├── request.ts        # 服务端配置
│   │   └── messages/         # 翻译文件
│   ├── lib/                  # 工具库
│   ├── services/             # API 服务
│   ├── types/                # TypeScript 类型
│   └── utils/                # 工具函数
├── store/                    # Zustand 状态管理
├── public/                   # 静态资源
└── scripts/                  # 脚本文件
```

## 🎨 主题和国际化

### 主题切换

项目支持浅色、深色和跟随系统三种主题模式：

```tsx
import { ThemeToggle } from '@/components/common/theme-toggle';

export function MyComponent() {
    return <ThemeToggle />;
}
```

### 国际化

项目支持中英文双语切换：

```tsx
import { LocaleToggle } from '@/components/common/locale-toggle';
import { useTranslations } from 'next-intl';

export function MyComponent() {
    const t = useTranslations('common');

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <LocaleToggle />
        </div>
    );
}
```

详细使用指南请查看 [THEME_I18N_GUIDE.md](./THEME_I18N_GUIDE.md)

## 🔧 配置

### 环境变量

创建 `.env.local` 文件：

```env
# API 基础地址
NEXT_PUBLIC_API_URL=https://api.example.com

# 其他配置...
```

### Tailwind CSS

主题颜色和深色模式配置在 `tailwind.config.ts` 中。

### TypeScript

TypeScript 配置在 `tsconfig.json` 中，包含路径别名等设置。

## 📝 开发指南

### 添加新页面

1. 在 `src/app` 目录下创建新的路由文件夹
2. 创建 `page.tsx` 文件
3. 添加相应的翻译键到语言文件

### 添加新组件

1. 在 `src/components` 相应目录下创建组件文件
2. 如果需要深色模式支持，使用 `dark:` 前缀类名
3. 使用 `useTranslations` 进行文本国际化

### 添加新的 API 服务

1. 在 `src/services/modules` 下创建模块文件夹
2. 定义接口类型在 `interface.ts`
3. 实现 API 调用在 `index.ts`

### 状态管理

使用 Zustand 进行状态管理：

```tsx
import { create } from 'zustand';

interface MyStore {
    count: number;
    increment: () => void;
}

export const useMyStore = create<MyStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## 🎯 代码规范

项目使用 ESLint 和 Prettier 确保代码质量：

- 提交前自动格式化代码（Husky + lint-staged）
- 遵循 Next.js 推荐的 ESLint 配置
- 使用 Prettier 统一代码风格

## 📦 包管理

项目强制使用 pnpm 作为包管理器：

```bash
# 安装依赖
pnpm install

# 添加依赖
pnpm add <package-name>

# 移除依赖
pnpm remove <package-name>
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

## 👨‍💻 作者

tech-zjf

---

如有问题或建议，请提交 Issue。
