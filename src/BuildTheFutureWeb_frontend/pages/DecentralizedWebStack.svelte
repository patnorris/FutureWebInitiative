<script lang="ts">
  import { push } from "svelte-spa-router";
  import { store } from "../store";
  import Login from "../components/Login.svelte";
  import Button from "../components/Button.svelte";
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";

  import { submitEmailSignUpForm } from "../helpers/utils.js";
  let message = "";
  const submitForm = async (event) => {
    event.preventDefault();
    const email = document.getElementById('hero-email').value;
    message = await submitEmailSignUpForm(email, 'Intro');
  };
</script>

<Topnav />

<!-- Hero Section -->
<header>
    <div>
        <img class="header-img" src="./FutureWebInitiative_DecentralizedWebStack_img.png" alt="The Decentralized Web visualized">
    </div>
    <div>
        <h1>Let's Decentralize the Web</h1>
        <p>Want to join the movement for a more decentralized internet and protect your data from centralized control?</p>
        <form on:submit={submitForm}>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
        {#if message}
            <h2>{message}</h2>
        {/if}
    </div>
</header>

<!-- Features Section -->
<section id="features">
    <h2 class="section-title">What has Decentralization ever done for Us?</h2>
    <div class="features-grid">
      <div class="feature-card">
          <h3>Take back control of your data.</h3>
          <img src="./FutureWebInitiative_DecentralizedWebStack_DataControl_img.png" alt="The Decentralized Web enables Users to control their data">
          <p>In the decentralized Web, you become the rightful owner of your data. Host your own data, decide who has access, and share on your own terms. No longer do you have to rely on centralized services with your sensitive information, putting you back in control of your digital life.</p>
      </div>
      <div class="feature-card">
          <h3>Monetize what is yours.</h3>
          <img src="./FutureWebInitiative_DecentralizedWebStack_Monetize_img.png" alt="The Decentralized Web enables Users to monetize their data">
          <p>Unlock new income streams with the decentralized Web. From your personal blog to social media presence, every online interaction is a potential earning opportunity. Take full advantage of the value you generate online, without intermediaries diminishing your profit.</p>
      </div>
      <div class="feature-card">
        <h3>Protect your privacy.</h3>
        <img src="./FutureWebInitiative_DecentralizedWebStack_Privacy_img.png" alt="The Decentralized Web protects Users' privacy">
        <p>Decentralization means more than just control — it's a robust shield for your online privacy and empowers you as the Web's user. Avoid tracking, surveillance, and data misuse by third parties. Keep your online activities truly yours, ensuring a private and secure digital environment.</p>
      </div>
      <div class="feature-card">
          <h3>Support (internet) freedom.</h3>
          <img src="./FutureWebInitiative_DecentralizedWebStack_Freedom_img.png" alt="The Decentralized Web means freedom for all">
          <p>By adopting a decentralized Web, you're supporting the fundamental principles of internet freedom. Stand up against online censorship and surveillance by supporting open protocols and decentralized services, fostering an internet where information remains free and accessible to all.</p>
      </div>  
    </div>
</section>

<section id="intro">
    <h2 class="section-title">Let's Decentralize Each Layer of the Web Stack</h2>
    <p class="intro-text">In the journey to create a fully decentralized Web, we must analyze each layer of the current Web Stack: Users (and Other Entities), Devices, Applications, Protocols and Platforms, and Hosting. This analysis should consider the current degree of decentralization in each layer, including what improvements need to be made and how to make them. For example, while some layers may already have emerging decentralized solutions, others might still be reliant on centralized services. By juxtaposing centralized and decentralized instances within each layer, we can see the potential for further decentralization. The goal is not necessarily to eliminate centralized services but to provide alternatives and enrich the ecosystem, ultimately providing better control, privacy, and freedom to users across the globe.</p>
    <img class="intro-image" src="./FutureWebInitiative_DecentralizedTechStack_table.png" alt="The Decentralized Web Stack">
    <p class="intro-text">
        We are actively involved in the creation and development of innovative decentralized technologies. Two key projects we're focusing on are <a class='underline' href="#/bebbprotocol">Bebb Protocol</a> on the Protocols and Platforms layer, and the <a class='underline' href="#/openinternetmetaverse">Open Internet Metaverse</a> on the Applications layer. Both of these initiatives exemplify our commitment to creating a more decentralized Web, offering users new opportunities for control, privacy, and monetization.
    </p>
</section>

<Footer />

<!-- <style>
    #features {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
  }

  #features div {
      width: 30%;
      text-align: center;
  }

  #features img {
      width: 100%;
      margin-bottom: 20px;
  }
</style> -->
