'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Eye, EyeOff } from 'lucide-react';
import { cn, StringTools } from '@/utils/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/context/auth-context';
import { useGlobalStore } from '@/store/global';

export function LoginModal() {
    const t = useTranslations('common.loginModal');
    const { login } = useAuth();
    const { setShowLoginModal } = useGlobalStore();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!phone.trim() || !StringTools.isPhone(phone)) {
            setError(t('phoneRequired'));
            return;
        }

        if (!password.trim()) {
            setError(t('passwordRequired'));
            return;
        }

        setIsLoading(true);
        try {
            await login({ phone: phone.trim(), password });
            setShowLoginModal(false);
            setPhone('');
            setPassword('');
        } catch (err) {
            setError(err instanceof Error ? err.message : t('loginFailed'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setShowLoginModal(false);
        setPhone('');
        setPassword('');
        setError('');
    };

    return (
        <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm" onClick={handleClose}>
            <div className={cn('w-full max-w-sm px-4')} onClick={(e) => e.stopPropagation()}>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">{t('title')}</CardTitle>
                        <CardDescription>{t('description')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                {error && (
                                    <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3">
                                        <p className="text-sm text-destructive">{error}</p>
                                    </div>
                                )}

                                <div className="grid gap-2">
                                    <Label htmlFor="phone">{t('phone')}</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder={t('phonePlaceholder')}
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setError('');
                                        }}
                                        maxLength={11}
                                        required
                                        disabled={isLoading}
                                        className="w-full"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">{t('password')}</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm text-muted-foreground underline-offset-4 hover:underline"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                // TODO: 实现忘记密码功能
                                            }}
                                        >
                                            {t('forgotPassword')}
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            placeholder={t('passwordPlaceholder')}
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setError('');
                                            }}
                                            required
                                            disabled={isLoading}
                                            className="w-full pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                            disabled={isLoading}
                                        >
                                            {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? t('loggingIn') : t('login')}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
