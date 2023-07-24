<script>
  import { browser } from "$app/environment";
  export let data;
  $: console.log(data.projects);
</script>

<svelte:head>
  <script
    src="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.min.js"
  >
  </script>

  <!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
</svelte:head>

<title>Projects</title>

<main class="container">
  <article id="name">
    <center>
      <h2>Projects</h2>
      <img src="https://ghchart.rshah.org/uek-1" />
      <br />
      <small><i>My GitHub contributions</i></small>
    </center>
  </article>

  {#each data.projects as project}
    <article id={project.name}>
      <header>
        <b>{project.name}</b>
        <br />
        <small>{project.date}</small>
      </header>

      <body>
        {#each project.description as paragraph}
          {@html paragraph}
        {/each}
      </body>
      <footer>
        <a href={project.link}>GitHub Link</a>
      </footer>
    </article>
  {/each}
</main>
