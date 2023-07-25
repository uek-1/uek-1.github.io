<script>
  export let data;
</script>

<main class="container">
  <header>
    <center>
      <h2>{data.title}</h2>
      <br />
      {#if data.tags !== null}
        {#each data.tags as tag}
          <kbd class="tag">{tag}</kbd>
        {/each}
      {/if}
    </center>
  </header>
  <article>
    <body>
      {#if data.tags !== null}
        {#each data.content as paragraph}
          {@html paragraph}
        {/each}
      {/if}
    </body>
  </article>
</main>

<style>
  kbd.tag {
    margin-right: 0.3em;
  }
</style>
