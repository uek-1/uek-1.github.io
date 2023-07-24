import { marked } from 'marked';

export async function load({ fetch, params }){
  const raw = import.meta.glob("/src/routes/projects/project_files/*.md");

  console.log(raw);

  const posts = [];
  
  for (const path in raw) {
    raw[path]().then(async (mod) => {
      console.log(`${path}`);
      const mdfile = await fetch(`${path}`).then(res => res.arrayBuffer());
      var enc = new TextDecoder("utf-8");
      const mdstr = enc.decode(mdfile);
      const mdhtml = marked.parse(mdstr);
      const post = parse_html(mdhtml);
      posts.push(post);
      // console.log(posts);
    })
  } 

  return {
    projects: posts 
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
    content.push(match[1]);
  }

  const link_regex = /<a\s+[^>]*?href=(?:"([^"]+)"|'([^']+)')/g
  var link = null
  while ((match = link_regex.exec(mdhtml)) != null) {
    console.log(match);
    link = match[1];
  }

  return {
    name: title,
    date: date,
    description: content,
    link: link
  }
}
