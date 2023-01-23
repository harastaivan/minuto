import { ReactNode } from 'react';

export interface ParagraphProps {
    bold?: boolean;
    mt?: 1 | 2 | 3 | 4;
    light?: boolean;
    children: ReactNode;
}

export const Paragraph = ({ bold = false, mt = 1, light = false, children }: ParagraphProps) => {
    const classNames = ['tracking-wide', 'font-mono'];

    if (mt === 1) {
        classNames.push('mt-1');
    } else if (mt === 2) {
        classNames.push('mt-2');
    } else if (mt === 3) {
        classNames.push('mt-3');
    } else if (mt === 4) {
        classNames.push('mt-4');
    }

    if (light) {
        classNames.push('text-slate-400');
    } else {
        classNames.push('text-slate-600');
    }

    if (bold) {
        classNames.push('font-bold');
    }

    return <p className={classNames.join(' ')}>{children}</p>;
};
