import type { ReactNode } from 'react';

export interface HeadingProps {
    level: 1 | 2 | 3;
    children: ReactNode;
}

export const Heading = ({ level, children }: HeadingProps) => {
    const base = 'font-bold tracking-wide font-mono mb-6';

    if (level === 2) {
        return <h2 className={`text-xl text-red-400 ${base}`}>{children}</h2>;
    }

    if (level === 3) {
        return <h3 className={`text-lg text-inherit ${base}`}>{children}</h3>;
    }

    return <h1 className={`text-2xl text-red-400 ${base}`}>{children}</h1>;
};
