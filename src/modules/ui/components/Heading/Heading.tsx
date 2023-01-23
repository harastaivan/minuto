import type { ReactNode } from 'react';

export interface HeadingProps {
    level: 1 | 2 | 3;
    children: ReactNode;
}

export const Heading = ({ level, children }: HeadingProps) => {
    if (level === 2) {
        return <h2 className="text-xl font-bold tracking-wide font-mono text-red-400">{children}</h2>;
    }

    if (level === 3) {
        return <h3 className="text-lg font-bold tracking-wide font-mono text-inherit">{children}</h3>;
    }

    return <h1 className="text-2xl font-bold tracking-wide font-mono text-red-400">{children}</h1>;
};
