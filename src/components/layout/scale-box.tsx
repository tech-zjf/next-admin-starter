import { cn } from '@/utils';

interface ScaleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    scale: number;
    bg?: string;
}

const ScaleBox: React.FC<ScaleBoxProps> = (props) => {
    const { children, scale = 100, bg, className, style, ...reset } = props;
    return (
        <div
            className={cn('placeholder relative overflow-hidden bg-cover bg-center bg-no-repeat', className)}
            style={{
                ...style,
                width: '100%',
                height: 0,
                paddingBottom: scale + '%',
                ...(bg ? { backgroundImage: `url(${bg})` } : {}),
            }}
            {...reset}
        >
            <div className="absolute h-full w-full">{children}</div>
        </div>
    );
};

export default ScaleBox;
