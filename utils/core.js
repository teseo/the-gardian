export default function get(url){
  return fetch(url)
    .then((response) => response.json());
}

export default function searchFor(query, offset){
  const apiKey = 'api-key';
  const requestUrl = (
    `http://content.guardianapis.com/search?show-elements=all&show-blocks=body&show-fields=lastModified,byline,headline,trailText,thumbnail,body&page-size=20&page=${ offset }&q=${ query }&type=article&api-key=${ apiKey }&order-by=newest`
  );

  return get(requestUrl)
    .then( (res) => {
      const results = res.response.results ? res.response.results : [];
      return results;
    });
}
