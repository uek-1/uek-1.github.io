import { marked } from 'marked';
import { base } from "$app/paths";

marked.use({
  mangle: false,
  headerIds: false
});

export function load({ fetch, params }){
  const raw = import.meta.glob("/static/project_files/*.md");

  const posts = [];
  
  for (const path in raw) {
    posts.push(Promise.resolve(
      raw[path]().then(async (mod) => {
        let new_path = path.replace('/static/', './');
        const mdfile = await fetch(`${base}/${new_path}`).then(res => res.arrayBuffer());
        var enc = new TextDecoder("utf-8");
        const mdstr = enc.decode(mdfile);
        const mdhtml = marked.parse(mdstr);
        const post = parse_html(mdhtml);
        return post;
      })
    ))
  } 


  return {
    projects: Promise.all(posts).then((values) => values)
  }
}



function parse_html(mdhtml){
  mdhtml = mdhtml.replace(/\s+/g, ' ').trim()

  const title_regex = /<h1(?:\s+[^>]*)*>(.*?)<\/h1>/g;
  var title = null;

  let match;
  while ((match = title_regex.exec(mdhtml)) != null) {
    title = match[1];
  }

  const date_regex = /<h2(?:\s+[^>]*)*>(.*?)<\/h2>/g;
  var date = null;
  while((match = date_regex.exec(mdhtml)) != null) {
    date = match[1];
  }

  const content_regex = /<p(?:\s+[^>]*)*>(.*?)<\/p>/g;
  const content = [];
  while ((match = content_regex.exec(mdhtml)) != null) {
    content.push(match[0]);
  }

  const link_regex = /<a\s+[^>]*?href=(?:"([^"]+)"|'([^']+)')/g
  var link = null
  while ((match = link_regex.exec(mdhtml)) != null) {
    link = match[1];
  }

  return {
    name: title,
    date: date,
    description: content,
    link: link
  }
}
