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
        <img src="./FutureWebInitiative_RelatedInitiatives_together.png" alt="Let's build the future Web together">
        <h1>Related Initiatives</h1>
    </div>
    <div>
        <h1>See which other projects contribute to the future Web</h1>
        <p>Want to keep up with relevant projects and initiatives or propose one?</p>
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
        <h3>Internet Computer</h3>
        <!-- <img src="./internetcomputer-logo.png" alt="Internet Computer Logo"> -->
        <p>The Internet Computer is a revolutionary blockchain that hosts unlimited data and computation on-chain. It aims to expand the functionality of the public Internet from a network that connects billions of people via static Websites and APIs, to a public compute platform that empowers developers to build powerful decentralized software.</p>
        <a href="https://internetcomputer.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>A-Frame</h3>
        <!-- <img src="./aframe-logo.png" alt="A-Frame Logo"> -->
        <p>A-Frame is an open-source Web framework for building Extended Reality (XR) experiences. It is primarily maintained by developers from the Mozilla VR team and makes it easy for anyone to get involved with virtual and augmented reality.</p>
        <a href="https://aframe.io/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>Solid</h3>
        <!-- <img src="./solid-logo.png" alt="Solid Logo"> -->
        <p>Solid is an exciting new project led by Prof. Tim Berners-Lee, inventor of the World Wide Web. The project aims to radically change the way Web applications work today, as a technology for organizing data, applications, and identities on the Web. It gives power and control of data back to users, resulting in true data ownership as well as improved privacy.</p>
        <a href="https://solidproject.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>Open AR Cloud</h3>
        <!-- <img src="./openarcloud-logo.png" alt="Open AR Cloud Logo"> -->
        <p>The mission of Open AR Cloud is to drive the development of open and interoperable spatial computing technology, data, and standards to connect the physical and digital worlds for the benefit of all.</p>
        <a href="https://openarcloud.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>Bitcoin</h3>
        <!-- <img src="./bitcoin-logo.png" alt="Bitcoin Logo"> -->
        <p>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer Bitcoin network without the need for intermediaries.</p>
        <a href="https://bitcoin.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>Ethereum</h3>
        <!-- <img src="./ethereum-logo.png" alt="Ethereum Logo"> -->
        <p>Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.</p>
        <a href="https://ethereum.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <h3>Metaverse Standards Forum</h3>
        <!-- <img src="./metaversestandardsforum-logo.png" alt="Metaverse Standards Forum Logo"> -->
        <p>Metaverse Standards Forum is an international non-profit organization dedicated to promoting and developing standards for the metaverse, a collective virtual shared space created by the convergence of virtually enhanced physical and digital reality.</p>
        <a href="https://metaverse-standards.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <!-- <img src="https://ipfs.io/ipfs/QmVkfQBnqwAQN6DL1CzBkNCKykLEX3FaD9TuA4mGPB9mbh" alt="IPFS logo"> -->
        <h3>IPFS</h3>
        <p>IPFS is a protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing hypermedia in a distributed file system.</p>
        <a href="https://ipfs.io/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <!-- <img src="https://blog.torproject.org/sites/default/files/styles/large/public/field/image/tor-logo-press-2000x1000.png?itok=IdVHPHxa" alt="Tor Project logo"> -->
        <h3>Tor Project</h3>
        <p>Tor is a network and a software that enables anonymous communication, a key aspect for privacy on the future Web.</p>
        <a href="https://www.torproject.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <!-- <img src="https://matrix.org/img/matrix.svg" alt="Matrix logo"> -->
        <h3>Matrix</h3>
        <p>Matrix is an open standard and communication protocol for real-time communication. It aims to make real-time communication work seamlessly between different service providers.</p>
        <a href="https://matrix.org/" target='_blank' rel="noreferrer">Learn More</a>
    </div>
    <div class="project-card">
        <!-- <img src="https://web3.foundation/assets/images/web3_foundation_logo.svg" alt="Web3 Foundation logo"> -->
        <h3>Web3 Foundation</h3>
        <p>The Web3 Foundation fosters and shepherds technologies and applications in the fields of decentralized Web software protocols.</p>
        <a href="https://web3.foundation/" target='_blank' rel="noreferrer">Learn More</a>
    </div>    
</section>

<Footer />
