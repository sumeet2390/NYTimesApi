export default function getNewsById(state) {
  const newsId = state.selectedNewsId;
  const newsList = state.newsList;
  if (newsList.length) {
    return newsList.filter(news => news.id === newsId)[0];
  } else {
    return null;
  }
}
