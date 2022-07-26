// Sun, Aug 30, 2021
import {format} from 'date-fns';

export const dateFormat = (date: string) => {
  if (date) {
    var newDate: any = format(new Date(date), 'dd/MM/yyyy');
  }

  return newDate || '';
};

export const timeFormat = (date: string) => {
  if (date) {
    var newDate: any = format(new Date(date), 'h:mm a');
  }

  return newDate || '';
};

export const timeDateFormat = (date: string) => {
  if (date) {
    var newDate: any = format(new Date(date), 'h:mm a LLLL yyyy');
  }

  return newDate || '';
};
