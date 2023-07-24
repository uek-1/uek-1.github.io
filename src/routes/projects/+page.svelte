<script>
  export let data;
  $: console.log(data.projects);
  // data = {
  //   projects: [{
  //     name: '1',
  //     date: '2',
  //     description: '3',
  //     link: null,
  //   }]
  // }
</script>

<title>Projects</title>

<main class="container">
  <article id="name">
    <center>
      <h2>Projects</h2>
    </center>
  </article>

  {#each data.projects as project}
    <article>
      <header>
        <b>{project.name}</b>
        <br />
        <small>{project.date}</small>
      </header>

      <body>
        {#each project.description as paragraph}
          <p>{paragraph}</p>
        {/each}
      </body>
      <footer>
        <a href={project.link}>GitHub Link</a>
      </footer>
    </article>
  {/each}
</main>
