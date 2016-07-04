export default function parseArticleDate(date){
return new Date(date).toLocaleString('en-GB',
  {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute:'2-digit'})
  }
