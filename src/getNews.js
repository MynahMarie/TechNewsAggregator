import config from './config';
import moment from 'moment';

const getDefaultFromDate = () => {
  let date = new Date();
  const dateOffset = 14 * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() - dateOffset);

  return moment(date).format('YYYY-MM-DD');
}

export async function getNews(keyword, date) {
  let fromDate = date || getDefaultFromDate();
  let url = `https://newsapi.org/v2/everything?q=${keyword}&from=${fromDate}&sortBy=relevancy&language=en&apiKey=${config.API_KEY}`;

  const result = await fetch(url).then(res => res.json());
  return result.articles
}
