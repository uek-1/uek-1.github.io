<script>
  export let data;
  console.log(data);
  import { base } from "$app/paths";
</script>

<title>Blog</title>

<main class="container">
  <article id="name">
    <center>
      <h2>Posts</h2>
    </center>
  </article>

  {#each data.posts as post}
    <article id={post.title}>
      <header>
        <b><a href="./blog/{post.file_path}/">{post.title}</a></b>
        <br />
        <small>{post.date}</small>
      </header>
      <body>
        <p>
          Tags:
          {#each post.tags as tag}
            <kbd class="tag">{tag}</kbd>
          {/each}
        </p>
      </body>
    </article>
  {/each}
</main>

<style>
  kbd.tag {
    margin-right: 0.3em;
  }
</style>
