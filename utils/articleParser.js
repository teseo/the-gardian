export default function parseArticleHTMLText(body){
  var parsedBody = '';

  //transform line breaks
  parsedBody = body.replace(/(?:<\/p>)/g, '\n\n');
  //remove aside stuff
  parsedBody = parsedBody.replace(/<aside (?:.)*?>(.)+<\/aside>/gm, "");
  //remove rest of tags
  parsedBody = parsedBody.replace(/<(?:.)*?>/gm, "");
  //remove html encoded spaces
  parsedBody = parsedBody.replace(/&nbsp;/g, " ");
  //remove repeated spaces
  parsedBody = parsedBody.replace(/(\ )+/g, ' ');

  return parsedBody;
}
