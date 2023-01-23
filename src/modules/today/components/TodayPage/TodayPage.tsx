import { Heading, Paragraph } from 'modules/ui';

export interface TodayPageProps {}

export const TodayPage = ({}: TodayPageProps) => {
    return (
        <div>
            <Heading level={1}>today</Heading>
            <Paragraph bold mt={3} light>
                see today in one place
            </Paragraph>
            <Paragraph>see tasks you have worked on today</Paragraph>
            <Paragraph>overview your productivity with time spent statistics</Paragraph>
            <Paragraph>quickly set your mood to journal</Paragraph>
        </div>
    );
};
