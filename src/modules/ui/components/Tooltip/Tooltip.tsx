import * as RadixTooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

export interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
    return (
        <RadixTooltip.Provider delayDuration={100}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        className="bg-slate-200 text-slate-500 px-3 py-1 rounded font-mono text-sm transition-opacity"
                        sideOffset={5}
                        side="right"
                    >
                        {content}
                        <RadixTooltip.Arrow className="fill-slate-200" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
