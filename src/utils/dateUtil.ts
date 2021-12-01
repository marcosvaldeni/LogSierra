import { intervalToDuration } from 'date-fns';

const dateUtil = {
  getDuration: (
    firstDate: string,
    secondDate: string | null,
  ): string | null => {
    if (!secondDate) return null;

    const {
      days = 0,
      hours = 0,
      minutes = 0,
    } = intervalToDuration({
      start: new Date(secondDate),
      end: new Date(firstDate),
    });

    let duration = `${days > 0 ? `${days}d ` : ''}`;

    duration += `${hours > 0 ? `${hours}h ` : ''}`;

    duration += `${minutes > 0 ? `${minutes}m` : ''}`;

    return duration;
  },
};

export default dateUtil;
