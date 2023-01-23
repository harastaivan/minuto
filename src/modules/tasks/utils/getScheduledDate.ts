import moment from 'moment';
import { Scheduled } from '../config';

export const getScheduledDate = (value: Scheduled) => {
    const scheduledValues = {
        [Scheduled.TODAY]: moment(new Date()),
        [Scheduled.TOMORROW]: moment(new Date()).add(1, 'days'),
        [Scheduled.NEXT_WEEK]: moment(new Date()).add(1, 'weeks').day(1),
        [Scheduled.LATER]: undefined,
    };

    return scheduledValues[value]?.format('YYYY-MM-DD');
};
