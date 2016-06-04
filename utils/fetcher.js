export default function get(url){
  return fetch(url)
    .then((response) => response.json());
}

export default function searchFor(query){
  const requestUrl = (
    `http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=${ query }&type=article&api-key=GUARDIAN-API-KEY&order-by=newest`
  );
  return get(requestUrl)
    .then( (res) => {
      const results = res.response.results ? res.response.results : [];
      return results;
    });
}
