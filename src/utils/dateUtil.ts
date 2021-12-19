import {
  intervalToDuration,
  differenceInSeconds,
  format,
  parseISO,
} from 'date-fns';
// import Active from '../models/Active';

interface Active {
  id: string;
  activeOn: string;
  activeOff: null | string;
  date: string;
  month: string;
  on: string;
  off: null | string;
  duration: null | string;
}

const dateUtil = {
  getDuration: (
    firstDate: string,
    secondDate: string | null,
  ): string | null => {
    if (!secondDate) return null;

    const inSeconds = differenceInSeconds(
      new Date(secondDate),
      new Date(firstDate),
    );

    const {
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0,
    } = intervalToDuration({
      start: new Date(secondDate),
      end: new Date(firstDate),
    });

    if (inSeconds < 60) {
      const duration = `${seconds}s`;

      return duration;
    }

    let duration = `${days > 0 ? `${days}d ` : ''}`;

    duration += `${hours > 0 ? `${hours}h ` : ''}`;

    duration += `${minutes > 0 ? `${minutes}m` : ''}`;

    return duration;
  },

  formatActive: (act: Active): Active => {
    const formated: Active = {
      ...act,
      date: format(parseISO(act.activeOn), 'dd'),
      month: format(parseISO(act.activeOn), 'LLLL'),
      on: `${format(parseISO(act.activeOn), 'EEEEEE')}, ${format(
        parseISO(act.activeOn),
        'HH:mm',
      )}`,
      off: act.activeOff
        ? `${format(parseISO(act.activeOff), 'EEEEEE')}, ${format(
            parseISO(act.activeOff),
            'HH:mm',
          )}`
        : null,
    };

    return formated;
  },
};

export default dateUtil;
