import * as moment from 'moment';

export function isValidDateFormat(date: string): boolean {
  return moment(date, 'DD/MM/YYYY', true).isValid();
}
