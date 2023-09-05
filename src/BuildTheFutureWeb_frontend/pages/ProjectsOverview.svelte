<script lang="ts">
  import { location } from "svelte-spa-router";
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";

  import { submitEmailSignUpForm } from "../helpers/utils.js";
  let message = "";
  const submitForm = async (event) => {
    event.preventDefault();
    const email = document.getElementById('hero-email').value;
    message = await submitEmailSignUpForm(email, $location);
  };
</script>

<Topnav />

<!-- Hero Section -->
<header>
    <div>
        <img src="./FutureWebInitiative_img.png" alt="Future Web Initiative logo">
        <h1>Our Projects</h1>
    </div>
    <div>
        <h1>We contribute them as building blocks for the future Web</h1>
        <p>Want to know more about the projects or have an idea?</p>
        <form on:submit={submitForm}>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
        {#if message}
            <h2>{message}</h2>
        {/if}
    </div>
</header>

<!-- Projects Section -->
<section id="projects">
    <div class="project-card">
      <h3>Bebb Protocol</h3>
      <p>The Web3 Solution for the Internet-of-Everything.</p>
      <a href="#/bebbprotocol">Learn More</a>
    </div>
    <div class="project-card">
      <h3>Open Internet Metaverse</h3>
      <p>The Internet is our Metaverse - let's make it a great open space together.</p>
      <a href="#/openinternetmetaverse">Learn More</a>
    </div>
    <div class="project-card">
      <h3>Democratized AI</h3>
      <p>Take Control over Your AI with DeVinci</p>
      <a href="#/democratizedai">Learn More</a>
    </div>  
    <div class="project-card">
        <h3>Decentralized Web Stack</h3>
        <p>Reimagining the stack of Web technologies we use everyday with a focus on decentralization.</p>
        <a href="#/decentralizedwebstack">Learn More</a>
    </div>
    <div class="project-card">
        <h3>More will follow... :)</h3>
    </div>
</section>

<Footer />
