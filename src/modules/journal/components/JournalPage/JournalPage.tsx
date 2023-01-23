import { Heading, Paragraph } from 'modules/ui';

export interface JournalPageProps {}

export const JournalPage = ({}: JournalPageProps) => {
    return (
        <div>
            <Heading level={1}>journal</Heading>
            <Paragraph bold mt={3}>
                track your mood and thoughts
            </Paragraph>
            <Paragraph>use markdown rich text editor to write your thoughts</Paragraph>
            <Paragraph>track your mood during the day</Paragraph>
            <Paragraph>use tags to summarize your day</Paragraph>
        </div>
    );
};
