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
  let ctaMessage = "";
  const submitCtaForm = async (event) => {
    event.preventDefault();
    const email = document.getElementById('cta-email').value;
    ctaMessage = await submitEmailSignUpForm(email, 'DeVinciDeveloperCta');
  };
</script>

<Topnav />

<!-- Hero Section -->
<header>
    <div>
        <img src="./FutureWebInitiative_DemocratizedAI_banner.png" alt="Democratized AI header">
        <h1>Democratized AI: Take Control with DeVinci</h1>
    </div>
    <div>
        <h1>The Future is Democratized AI - Let's Build it Together.</h1>
        <p>Ready to take control of your personal AI experience?</p>
        <p>Try <a href="https://x6occ-biaaa-aaaai-acqzq-cai.icp0.io/" target="_blank" rel="noreferrer" class="underline">DeVinci here</a></p>
        <form on:submit={submitForm}>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
        {#if message}
            <h2>{message}</h2>
        {/if}
    </div>
</header>

<section id="deai-intro">
    <h2 class="section-title">Democratized AI: What Is It and Why Does It Matter?</h2>
    <p class="intro-text">
        In an era where data privacy is increasingly compromised and big tech companies dominate the AI landscape, the idea of democratized AI is more relevant than ever. Democratized AI is the concept that artificial intelligence should be accessible, understandable, and controllable by the general public. It aims to shift the power dynamics by enabling everyone, not just a few tech giants, to benefit from the incredible potential of AI technology.
    </p>
    <p class="intro-text">
        Inclusive Access: Democratized AI makes it possible for everyone to use and benefit from intelligent systems, leveling the playing field.
    </p>
    <p class="intro-text">
        User Control & Privacy: With democratized AI, you own your data and interactions. You get to decide how your data is used, and who gets to use it. You can trust that your AI works in your best interest.
    </p>
    <p class="intro-text">
        Ethical Considerations: Democratized AI empowers users to set the ethical guidelines under which their AI operates, rather than leaving it in the hands of a few corporations.
    </p>
</section>

<section id="devinci-intro">
    <h2 class="section-title">DeVinci: Decentralized, Trusted, Open-source, Truly Yours</h2>
    <p class="intro-text">
        DeVinci is a browser-based AI chatbot app that lives on the Internet Computer. Your conversations stay on your device, offering an unprecedented level of digital privacy and trust.
    </p>
    <p class="intro-text">
        With DeVinci, you can experience a new level of interaction, providing you with personalized insights, all while ensuring that your data remains confidential and secure. 
    </p>
</section>

<!-- Features Section -->
<section id="features">
    <h2 class="section-title">Key Features of DeVinci</h2>
    <div class="features-grid">
        <div class="feature-card">
            <h3>Privacy First</h3>
            <img src="./DeVinci_PrivacyFirst.png" alt="Privacy First">
            <p>Your conversations are yours alone. DeVinci ensures maximum privacy by processing all interactions locally on your device.</p>
        </div>
        <div class="feature-card">
            <h3>Open-Source Code</h3>
            <img src="./DeVinci_WebLLM.png" alt="Open-Source AI Models via WebLLM">
            <p>Benefit from the transparency and flexibility of open-source AI models (through WebLLM). This allows you to understand and trust the technology powering your interactions. DeVinci is open-source as well.</p>
        </div>
        <div class="feature-card">
            <h3>Configurable by You</h3>
            <img src="./DeVinci_Configurable.png" alt="Configurable by User">
            <p>Customize DeVinci to meet your specific needs. From selecting the AI model to setting data preferences, you have control over your experience.</p>
        </div>
        <div class="feature-card">
            <h3>Internet Computer Powered</h3>
            <img src="./DeVinci_ICP.png" alt="Internet Computer Powered">
            <p>DeVinci leverages the Internet Computer for unmatched decentralization, security, transparency, and reliability.</p>
        </div>
    </div>
</section>

<section id="cta">
    <h2 class="section-title">Ready to experience DeVinci?</h2>
    <p>Join the movement and take control of your personal AI today. Click on the button below to get started.</p>
    <a href="https://x6occ-biaaa-aaaai-acqzq-cai.icp0.io/" class="cta-button" target="_blank">Start Experiencing</a>
</section>

<section id="developer-cta">
    <h2 class="section-title">Developers, Let's Build the Future Together</h2>
    <p class="cta-text">We're actively looking for passionate developers who want to contribute to the Democratized AI ecosystem and DeVinci. If you believe in a decentralized future and have skills in ML, AI, blockchain, Web3, or any relevant technology, we would love to hear from you. By joining us, you'll not only get to work on exciting challenges but also play a key role in shaping the next generation of the Web.</p>
    <form class="cta-form" on:submit={submitCtaForm}>
        <input type="email" id="cta-email" placeholder="Enter your email...">
        <button type="submit">Get In Touch</button>
    </form>
    {#if ctaMessage}
        <h2>{ctaMessage}</h2>
    {/if}
    <a href="https://github.com/patnorris/DecentralizedAIonIC" class="cta-button" target='_blank'>Check out the code repository on GitHub</a>
</section>

<Footer />
