export default function get(url){
  return fetch(url)
    .then((response) => response.json());
}

export default function searchFor(query, offset){
  const requestUrl = (
    `http://content.guardianapis.com/search?show-elements=all&show-blocks=body&show-fields=lastModified,byline,headline,trailText,thumbnail,body&page-size=20&page=${ offset }&q=${ query }&type=article&api-key=4f508039-f7af-4b2e-838b-4766794a86ea&order-by=newest`
  );

  return get(requestUrl)
    .then( (res) => {
      const results = res.response.results ? res.response.results : [];
      return results;
    });
}
