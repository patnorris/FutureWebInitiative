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
        <img class="header-img" src="./FutureWebInitiative_BebbProtocol_img.png" alt="Bebb Protocol is The Web3 Solution for the Internet-of-Everything">
        <h1>Bebb Protocol</h1>
    </div>
    <div>
        <h1>The Web3 Solution for the Internet-of-Everything</h1>
        <p>Want to stay up-to-date and learn how you can own your share of the future Web?</p>
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
    <p class="intro-text">Welcome to Bebb Protocol, a revolution in the way we interact with the digital universe. Born out of a passion for empowering users, our protocol takes a bold leap into the future of Web technology, setting out to transform the way we navigate and interact with the vast expanse of online data.</p>
    <p class="intro-text">In the current digital landscape, users often find themselves entangled in a web of data silos, each with their own rules and restrictions, hindering seamless access and usability. Bebb Protocol aims to bridge this gap by creating a decentralized, open network where all data is interconnected. It's not just about hyperlinks; it's about creating dynamic, adaptable "Bridges" that establish richer relationships between digital entities and offer unprecedented flexibility.</p>
    <p class="intro-text">At the heart of Bebb Protocol is the concept of Entities - everything gaining an online representation. By establishing Bridges, or enhanced hyperlinks, between Entities, we create a fluid network that integrates different types of nodes, data and applications, fostering a truly interoperable digital ecosystem.</p>
    <p class="intro-text">Whether you are an individual, a developer, or a business, Bebb Protocol offers you the tools to become an integral part of the future Web, providing control over your data while offering opportunities for creativity, monetization, and innovation. Join us as we re-imagine the digital world, and become part of an open, global content network where the user is truly at the center.</p>
</section>

<section id="intro">
    <h2 class="section-title">Bebb Protocol Connects All Types of Nodes with Each Other</h2>
    <img class="intro-image" src="./FutureWebInitiative_BebbProtocol_ConnectsEverything.png" alt="Bebb Protocol Connects Everything">
    <p class="intro-text">Bebb Protocol is pioneering a new era of interconnectedness in the digital realm, connecting all types of nodes - from individuals, organizations, physical objects, to virtual entities - in a seamless, decentralized network. By treating each node as an Entity and allowing associations in the form of Bridges, Bebb Protocol creates an expansive, user-centric 'Internet of Everything' where everything you own can be represented and connected. This groundbreaking approach facilitates dynamic interplay between diverse nodes, enabling new layers of functionality and interaction while ensuring that users retain full control and ownership. With Bebb Protocol, we are democratizing the digital landscape and setting the foundation for a more connected, decentralized future.</p>
</section>

<section id="intro">
    <h2 class="section-title">The Bebb Protocol Whitepaper</h2>
    <img class="intro-image" src="./FutureWebInitiative_BebbProtocol_banner.png" alt="Bebb Protocol Whitepaper banner">
    <p class="intro-text">The Bebb Protocol whitepaper is an in-depth exploration of our groundbreaking technology, providing comprehensive insights into the philosophy, architecture, and applications of our protocol. Intended for users, developers, and stakeholders who wish to delve deep into the mechanics of our system, the whitepaper lays out the contextual background, details of the protocol, the decentralized nature of its implementation, potential applications, and future development trajectories. We've carefully crafted this document to strike a balance between technical depth and accessibility, ensuring that anyone, regardless of their technical background, can understand and appreciate the transformative potential of Bebb Protocol. By reading our whitepaper, you can gain an intimate understanding of how Bebb Protocol is poised to redefine the digital world and how you can leverage its capabilities to benefit from the future Web.</p>
    <a href="./BebbProtocol_TechnicalWhitepaper_V0.1_202305.pdf" download class="download-button">Download Whitepaper</a>
    <p class="intro-text">
        Abstract: Bebb Protocol presents a pioneering approach to the organization and interconnection of information on the Web, aiming to create a decentralized, user-centric, and open network of user-contributed and -controlled data. It enables users to make a diverse set of physical and digital assets part of the Web, to interconnect all of these assets with each other as well as with any other Web resource, and to collectively own the emerging Internet-of-Everything. 
        This novel protocol therefore reimagines the fundamental concepts of nodes and hyperlinks by introducing more expressive, flexible, and powerful data structures that can adapt to the ever-evolving needs of users and developers. Leveraging state-of-the-art technologies such as the Internet Computer, decentralized storage, and blockchain, Bebb Protocol seamlessly integrates with existing Web systems while upholding the core principles of Web3. The decentralized nature of the protocol promotes user sovereignty, trustlessness, and true privacy, fostering a more inclusive and interconnected digital landscape.
        Bebb Protocol's wide range of potential applications, spanning from augmented experiences to interoperable metaverse platforms and virtual assistants, highlights its adaptability and versatility. As the Web continues to advance towards a more integrated, augmented, and automated future, Bebb Protocol serves as a crucial bridge between these technological leaps, keeping users at the center of this interconnected digital universe. With numerous opportunities for future research and development, Bebb Protocol offers a compelling vision for the future of the Web that empowers users and stimulates limitless creativity and innovation.        
    </p>
</section>

<section id="developer-cta">
    <h2 class="section-title">Developers, Let's Build the Future Together</h2>
    <p class="cta-text">We're actively looking for passionate developers who want to contribute to the Bebb Protocol ecosystem. If you believe in a decentralized future and have skills in blockchain, Web3, or any relevant technology, we would love to hear from you. By joining us, you'll not only get to work on exciting challenges but also play a key role in shaping the next generation of the Web.</p>
    <form class="cta-form">
        <input type="email" id="cta-email" placeholder="Enter your email...">
        <button type="submit">Get In Touch</button>
    </form>
    <a href="https://github.com/Bebb-Protocol-and-Apps/PWS" class="cta-button" target='_blank'>Check out the code repository on GitHub</a>
</section>

<Footer />
