export default function parseArticleDate(date){
return new Date(date).toLocaleString('en',
  {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute:'2-digit'}).slice(0, -8)
}
