export default function parseArticleBody(body){
  var parsedBody = '';

  //transform line breaks
  parsedBody = body.replace(/(?:<\/p>)/g, '\n\n');
  //remove aside
  parsedBody = parsedBody.replace(/<aside (?:.)*?>(.)+<\/aside>/gm, "");
  //remove rest of tags
  parsedBody = parsedBody.replace(/<(?:.)*?>/gm, "");
  parsedBody = parsedBody.replace(/(\ )+/g, ' ');

  return parsedBody;
}
