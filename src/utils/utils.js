import moment from 'moment';

export const getDefaultFromDate = () => {
  let date = new Date();
  const dateOffset = 14 * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() - dateOffset);

  return moment(date).format('YYYY-MM-DD');
};
