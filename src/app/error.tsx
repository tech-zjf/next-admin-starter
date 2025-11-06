'use client';

export default function Error(props: any) {
    const { message } = props.error;
    return (
        <div className="flex h-screen flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pb-8 pt-6 md:space-y-5">
                <h1 className="md:leading-14 tip text-42-red text-6xl font-extrabold leading-9 tracking-tight dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl">
                    Error
                </h1>
            </div>
            <div className="max-w-md">
                <p className="tip text-42-red mb-4 text-xl font-bold leading-normal md:text-2xl">Error Message：</p>
                <p className="text-42-red mb-8">{message}</p>
            </div>
        </div>
    );
}
