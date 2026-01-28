import Nav from '@/components/layout/nav';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors">
            <Nav />
            <main className="bg-background">
                <div className="h-[3000px] space-y-6 p-6">落地页</div>
            </main>
        </div>
    );
}
