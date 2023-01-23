import { Heading, Paragraph } from 'modules/ui';

export interface TimeTrackingPageProps {}

export const TimeTrackingPage = ({}: TimeTrackingPageProps) => {
    return (
        <div>
            <Heading level={1}>time tracking</Heading>
            <Paragraph bold mt={3} light>
                track your time
            </Paragraph>
            <Paragraph>track time for given task with famous pomodoro technique</Paragraph>
            <Paragraph>get notifications when the focus session is completed</Paragraph>
            <Paragraph>see statistics of your productivity for today, this week and this month</Paragraph>
        </div>
    );
};
