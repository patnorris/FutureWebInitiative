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
        <h1>Get Involved</h1>
    </div>
    <div>
        <h1>Let's build the future Web together</h1>
        <p>Want to contribute?</p>
        <form on:submit={submitForm}>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
        {#if message}
            <h2>{message}</h2>
        {/if}
    </div>
</header>

<section id="intro">
    <img class="intro-image" src="./FutureWebInitiative_RelatedInitiatives_img.png" alt="Get involved in the future Web">
</section>

<!-- Call to Action Section -->
<section id="call-to-action">
    <div class="cta-content">
        <h2 class="section-title">Become part of the change</h2>
        <p>Join our passionate community of developers, designers, and innovators who are committed to creating our Web of the future - user-centric, decentralized, 3D, and constantly augmented. We welcome ideas, feedback, and collaboration. No matter your experience level or background, your contributions can make a real impact.</p>
        <a href="mailto:futurewebinitiative@proton.me?subject=I%20want%20to%20get%20involved" class="cta-btn">Let's Talk</a>
    </div>
</section>

<Footer />
