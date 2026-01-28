import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MeterialLibraryPage = () => {
    return (
        <div className="space-y-6">
            {/* 页面标题 */}
            <div>
                <h1 className="text-3xl font-bold text-foreground">素材库</h1>
                <p className="mt-2 text-muted-foreground">管理您的设计素材和资源</p>
            </div>

            {/* 卡片示例 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>卡片 1</CardTitle>
                        <CardDescription>使用主题色的卡片组件</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">这个卡片使用了 bg-card、text-card-foreground 等主题色</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>卡片 2</CardTitle>
                        <CardDescription>支持深色模式</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">切换主题时，颜色会自动适配</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>卡片 3</CardTitle>
                        <CardDescription>使用自定义颜色</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="default" className="bg-main-blue hover:bg-main-dark-blue">
                                主蓝色
                            </Button>
                            <Button variant="outline" className="border-success text-success">
                                成功色
                            </Button>
                            <Button variant="outline" className="border-warning text-warning">
                                警告色
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default MeterialLibraryPage;
