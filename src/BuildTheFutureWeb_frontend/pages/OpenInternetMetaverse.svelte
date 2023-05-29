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
        <img src="./FutureWebInitiative_OpenInternetMetaverse_img.png" alt="WebDecentralizer logo">
        <h1>Open Internet Metaverse</h1>
    </div>
    <div>
        <h1>The Internet is our Metaverse - let's make it a great open space together.</h1>
        <p>Want to create your personal space in this Metaverse and learn more?</p>
        <p>Try the <a href='https://vdfyi-uaaaa-aaaai-acptq-cai.ic0.app/' target='_blank' rel="noreferrer" class='underline'>Open Internet Metaverse app here</a></p>
        <form on:submit={submitForm}>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
        {#if message}
            <h2>{message}</h2>
        {/if}
    </div>
</header>

<section id="oim-intro">
    <h2 class="section-title">The Vision of Open Internet Metaverse (OIM)</h2>
    <img src="./FutureWebInitiative_OpenInternetMetaverse_banner.png" alt="The Vision of Open Internet Metaverse (OIM)">
    <p class="intro-text">
        In an increasingly digital world dominated by centralization, the future of the Web lies in embracing its original, decentralized roots. Our mission at the Open Internet Metaverse (OIM) is to nurture this transition. We believe in the transformative potential of a decentralized, open network that empowers both end-users and developers. The OIM provides a space where any user can create and host their unique virtual 3D experiences just like they would a Webpage. 
    </p>
    <p class="intro-text">
        Together with Bebb Protocol, a groundbreaking technology that reimagines the concept of nodes and hyperlinks, OIM integrates seamlessly with the existing Web. It enables users to create their own virtual neighborhoods, redefining the way we interact with the digital world. Our aim is not to construct an alternate reality, but to enhance the existing Internet, blending physical and virtual worlds into a unified, interconnected ecosystem. With OIM, users gain the true ownership, infinite possibilities, and the freedom of the open Web, while enjoying the immersive experiences of the virtual world. 
    </p>
    <p class="intro-text">
        Already in its MVP stage, OIM leverages the Internet Computer (ICP) to provide Web3 guarantees such as virtual ownership, transparency, and interoperability, while allowing self-hosting via dedicated canisters. Our vision for OIM is to create a platform that facilitates hosting of virtual experiences, integrating user feedback and establishing partnerships for future growth. Whether it's creating a personal virtual home or running a 3D virtual store, OIM aims to be the most accessible and comprehensive solution for realizing your digital aspirations.
    </p>
</section>

<!-- Features Section -->
<section id="features">
    <h2 class="section-title">What exactly is this Metaverse thing here?</h2>
    <div class="features-grid">
      <div class="feature-card">
          <h3>Easily Create and Share your 3D Webpage</h3>
          <img src="./FutureWebInitiative_OpenInternetMetaverse_3DWebpage.png" alt="OIM lets You Easily Create and Share your 3D Webpage">
          <p>With OIM, creating your 3D Webpage is as simple as it gets. Our user-friendly interface and tools allow you to effortlessly design and customize your virtual environment. Plus, sharing your creation is just a click away. Unleash your imagination and make your mark on the 3D Web.</p>
      </div>
      <div class="feature-card">
        <h3>Design Your Personal Web Space to Make it Your Virtual Home</h3>
        <img src="./FutureWebInitiative_OpenInternetMetaverse_PersonalWebSpace.png" alt="Design Your Personal Web Space to Make it Your Virtual Home with OIM">
        <p>Your Personal Web Space is more than just a 3D Webpage - it's your virtual home. Customize it to reflect your personality, create immersive experiences, or showcase your work. OIM gives you the tools and flexibility to transform your digital space into a unique representation of you.</p>
      </div>
      <div class="feature-card">
          <h3>The Internet-native 3D Web hosted on the Internet Computer</h3>
          <img src="./FutureWebInitiative_OpenInternetMetaverse_3DWebOnIC.png" alt="OIM is the Internet-native 3D Web hosted on the Internet Computer">
          <p>OIM is built right on the Internet Computer, a decentralized cloud computing platform. This means your 3D Webpage isn't just a virtual space - it's a part of the Internet itself. Benefit from Web3 guarantees such as virtual ownership, interoperability, and the freedom to self-host.</p>
      </div>
      <div class="feature-card">
          <h3>Establish Your Virtual OIM Neighborhood</h3>
          <img src="./FutureWebInitiative_OpenInternetMetaverse_VirtualNeighborhood.png" alt="Establish Your Virtual OIM Neighborhood">
          <p>In the OIM, connectivity is key. You have the power to establish your own virtual neighborhood, linking your 3D Webpage to others that interest you. Create meaningful connections, discover new experiences, and shape the narrative of your virtual community.</p>
      </div>  
    </div>
</section>

<section id="cta">
    <h2 class="section-title">Ready to start your journey in the Open Internet Metaverse?</h2>
    <p>Join the movement and start creating your own virtual 3D space today. Click on the button below to get started.</p>
    <a href="https://vdfyi-uaaaa-aaaai-acptq-cai.ic0.app/" class="cta-button" target="_blank">Start Creating</a>
</section>

<Footer />
