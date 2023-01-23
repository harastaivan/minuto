import { ReactNode } from 'react';

export interface ParagraphProps {
    bold?: boolean;
    mt?: 1 | 2 | 3 | 4;
    children: ReactNode;
}

export const Paragraph = ({ bold = false, mt = 1, children }: ParagraphProps) => {
    const classNames = ['tracking-wide', 'font-mono', 'text-slate-600', `mt-${mt}`];

    if (bold) {
        classNames.push('font-bold');
    }

    return <p className={classNames.join(' ')}>{children}</p>;
};
