<script>
  import { base } from "$app/paths";
</script>

<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</head>

<header class="container-fluid">
  <nav>
    <ul>
      <li>
        <a href="{base}/"><img src="{base}/avatar.jpg" alt="avatar" class="avatar" /></a>
      </li>
      <li><a href="{base}/"><big>Vivek Kethineni</big></a></li>
      <li><a href="{base}/projects">Projects</a></li>
      <li><a href="{base}/blog">Blog</a></li>
    </ul>
    <ul>
      <li>
        <a href="https://github.com/uek-1"
          ><img src="{base}/github_icon.png" alt="avatar" class="nav-icon" /></a
        >
      </li>
    </ul>
  </nav>
</header>

<slot />

<footer class="container-fluid fixed">
  <nav>
    <ul>
      <li><a href="https://github.com/uek-1/">github</a></li>
      <li>
        <a href="https://www.linkedin.com/in/vivek-kethineni-78a436265/"
          >linkedin</a
        >
      </li>
      <li><a href="mailto:vickey2183@gmail.com">email</a></li>
      <li><a href="{base}/resume.pdf">resume</a></li>
    </ul>
  </nav>
</footer>

<style>
  img.avatar {
    border-radius: 50%;
    height: 5em;
    width: 5em;
  }

  img.nav-icon {
    border-radius: 50%;
    height: 3em;
    width: 3em;
  }

  footer.fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    display:block;
    background-color: var(--background-color);
  }

  @media (max-width: 600px) {
    img.avatar {
      display: none;
    }

    img.nav-icon {
      display: none;
    }
  }
</style>
