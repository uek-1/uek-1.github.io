<script>
  import { base } from "$app/paths";
</script>

<title>Vivek Kethineni</title>

<main class="container">
  <article id="name">
    <center>
      <figure>
        <figcaption class="title">Vivek Kethineni</figcaption>
        <img src="{base}/group_picture.jpg" alt="group picture" class="main" />
        <figcaption class="sub">
          Moving out of the freshman dorms (2023)
        </figcaption>
      </figure>
    </center>
  </article>

  <article id="about">
    <h2>About</h2>
    <body>
      Hi, I'm a sophmore at the University of Minnesota - Twin Cities, pursuing
      a bachelors degree in Computer Science. In my spare time, I like reading,
      listening to music, video games, and bouldering.
    </body>
  </article>

  <article id="interests">
    <h2>Tech-related Interests</h2>
    <body>
      <ol class="bold-items">
        <li>Articial Intelligence</li>
        <p>
          Specifically, I'm interested in research related to running large
          models on devices that are not powerful. For example, running a
          language language model on a local server using a rasberry pi or a
          used laptop. I think research in reducing the memory required to load
          large models and speed up inference time will prove to be very useful
          in making current artificial intellgience based products popular with
          consumers.
        </p>
        <li>Compression</li>
        <p>
          Recently, I've been very interested in compression algorithms. I find
          them very interesting because of how effective they can be. I
          implemented a few image compression methods in my project, <a
            href="./projects#pngpeg">pngpeg</a
          >
        </p>
        <li>Functional Programming</li>
        <p>
          I've been experimented with Haskell because I wanted to know how
          coding in functional languages feel. It's been a very interesting
          experience and has made me reconsider the way I think about certain
          problems.
        </p>
      </ol>
    </body>
  </article>

  <article id="defaults">
    <h2>Defaults</h2>
    <body>
      <ul>
        <li>Programming Language: <kbd>Rust</kbd></li>
        <li>IDE: <kbd>Helix + Zellij</kbd></li>
        <li>Operating System: <kbd>Pop!_OS</kbd></li>
      </ul>
    </body>
  </article>
</main>

<style>
  img.rounded {
    border-radius: 50%;
  }

  img.main {
    border-radius: 10%;
    max-width: 300px;
    max-height: 500px;
  }

  figcaption.sub {
    font-size: small;
    font-style: italic;
  }

  figcaption.title {
    font-size: xx-large;
    color: var(--primary);
    font-weight: bold;
  }

  ol.bold-items li {
    font-weight: bold;
  }
</style>
