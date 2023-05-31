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
    <h1>Let's Build the Future Web</h1>
  </div>
  <div>
      <h2>User-centric, Decentralized, 3D, and Constantly Augmented</h2>
      <p>Want to get involved or stay updated?</p>
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
  <h2 class="section-title">What's all this Future Web talk about?</h2>
  <p class="intro-text">Welcome! This unique platform is dedicated to the exploration and understanding of the next generation of the Web. Our Website serves as a showcase for groundbreaking projects and initiatives that are shaping the Web of tomorrow - a place where the user is central, data is decentralized, experiences are immersive in 3D, and the digital blends seamlessly with the physical through constant augmentation. We believe in a future Web that values privacy, encourages collaboration, and fosters innovation. Join us as we delve into these exciting projects, and discover how they're leading the way towards a more connected, interactive, and secure future online.</p>
</section>

<!-- Features Section -->
<section id="features">
  <h2 class="section-title">Key Features of the Future Web</h2>
  <div class="features-grid">
    <div class="feature-card">
        <h3>User-centric</h3>
        <img src="./FutureWebInitiative_UserCentric_img.png" alt="The Future Web will be User-centric">
        <p>In the Future Web, you're not just a user - you're the center of your online universe. User-centric design prioritizes your needs, preferences, and values, ensuring you have a personalized and efficient Web experience. It's about empowering you, giving you control over your data, and designing Websites and applications that are easy to understand and use.</p>
    </div>
    <div class="feature-card">
        <h3>Decentralized</h3>
        <img src="./FutureWebInitiative_Decentralized_img.png" alt="The Future Web will be Decentralized">
        <p>The Future Web seeks to eliminate the dependence on centralized servers and data control, which can be susceptible to hacking, censorship, and control by a single authority. Instead, the decentralized Web distributes data across numerous nodes, increasing security and ensuring no single point of failure. This fosters an environment of transparency, mutual trust, and collective ownership.</p>
    </div>
    <div class="feature-card">
      <h3>3D</h3>
      <img src="./FutureWebInitiative_3D_img.png" alt="The Future Web will be 3D">
      <p>Welcome to a new dimension of the internet - the 3D Web. This isn't just about viewing content; it's about interacting with it in a more immersive and engaging manner. From virtual reality (VR) experiences to 3D models that you can rotate and inspect closely, the 3D Web is set to revolutionize how we interact with digital content, bringing a sense of depth and reality to your online journey.</p>
    </div>
    <div class="feature-card">
        <h3>Constantly Augmented</h3>
        <img src="./FutureWebInitiative_ConstantlyAugmented_img.png" alt="The Future Web will be Constantly Augmented">
        <p>Augmented reality (AR) brings the digital world into the physical world, enhancing the way you interact with the internet. The Future Web will be constantly augmented, overlaying digital data onto your physical surroundings in real time. This can change the way you shop, learn, work, and play, creating a seamless blend of your online and offline realities.</p>
    </div>  
  </div>
</section>

<!-- Projects Section -->
<section id="projects">
  <h2 class="section-title">Our Projects</h2>
  <div class="project-card">
    <h3>Decentralized Web Stack</h3>
    <p>Reimagining the stack of Web technologies we use everyday with a focus on decentralization.</p>
    <a href="#/decentralizedwebstack">Learn More</a>
  </div>
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
  <h2 class="section-title">Related Initiatives</h2>
  <div class="project-card">
    <h3>Overview on External Projects</h3>
    <p>All of them are contributing to the future Web.</p>
    <a href="#/relatedinitiatives">Learn More</a>
  </div>
</section>

<Footer />

<style global>
/* NOTE: these styles are global and affect any element in the app. Thus, ensure that there aren't any conflicts with the class names chosen (i.e. avoid generic names as they might conflict)  */
  /* Reset some default browser styles */
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
      font-family: Arial, sans-serif;
      color: #333;
      line-height: 1.6;
      background-color: #f4f4f4;
  }

  header, #features, footer {
      padding: 20px;
  }

  header {
      background: #333;
      color: #ffffff;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
  }

  header h1 {
      font-size: 2em;
      margin-bottom: 10px;
  }

  header h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
  }

  header p {
      margin-bottom: 20px;
  }

  header form {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  header input[type="email"] {
      padding: 10px;
      font-size: 1em;
      margin-right: 10px;
      color: #000000;
  }

  header button {
      padding: 10px 20px;
      font-size: 1em;
      background-color: #009578;
      color: #ffffff;
      border: none;
      cursor: pointer;
  }

  header img {
    display: block;
    width: 60%;
    max-width: 600px;
    height: auto;
    margin: auto;
  }

  .section-title {
    font-size: 2.2em;
    text-align: center;
    color: #333;
    margin: 20px auto;
    width: fit-content; /* make sure that the width is only as wide as the content, so that auto margins will center the title */
  }

  .features-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: start;
      gap: 30px;
      margin: 0 auto;
      max-width: 1200px;
  }

  .feature-card {
      flex: 0 1 calc(50% - 30px);
      background-color: #f9f9f9;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    .feature-card {
      flex: 0 1 100%;
    }
  }

  .feature-card:hover {
      box-shadow: 0px 1px 18px rgba(0, 0, 0, 0.1);
  }

  .feature-card h3 {
      font-size: 20px;
      color: #333;
      text-align: center;
      margin: 20px 0;
  }

  .feature-card img {
      width: 100%;   /* Set the width */
      height: auto;  /* Set the height */
      object-fit: cover; /* Use this to maintain aspect ratio */
  }

  .feature-card p {
    font-size: 1em;
    color: #666;
    margin: 0 20px 20px 20px;
    text-align: justify;
  }

  footer {
      background: #333;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px 0;
  }

  footer p {
      margin-bottom: 20px;
  }

  footer a {
      margin: 0 10px;
      color: #ffffff;
  }

  footer img {
    display: block;
    width: 20%;
    max-width: 900px;
    height: auto;
    margin: auto;
  }

  .projects-title {
    font-size: 30px;
    text-align: center;
    color: #333;
    margin: 50px 0;
  }

  .project-card {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    text-align: center;
    transition: transform .2s;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .project-card img {
    width: 100px; /* Adjust as needed */
    height: auto;
    margin-bottom: 10px;
  }

  .project-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .project-card p {
    font-size: 16px;
    color: #666;
  }

  .project-card a {
    display: inline-block;
    color: #0066cc;
    text-decoration: none;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
    transition: background-color .2s;
  }

  .project-card a:hover {
    background-color: #e6e6e6;
  }

  .project-card:hover {
    transform: scale(1.02);
  }

  #intro {
      background-color: #f9f9f9;
      padding: 40px 20px;
      text-align: justify;
      line-height: 1.6;
      border-bottom: 1px solid #e0e0e0;
      margin: 20px 0;
  }

  .intro-title {
      font-size: 2em;
      text-align: center;
      color: #333;
      margin-bottom: 20px;
  }

  .intro-text {
      font-size: 1em;
      margin: 0 auto;
      max-width: 800px;
      color: #666;
      padding: 5px 0;
  }

  .intro-image {
    width: 100%;
    height: auto;
    padding: 15px 0;
  }

  .header-img {
    width: 80%;
    max-width: 600px;
    height: auto;
  }

  .download-button {
    display: block;
    text-decoration: none;
    color: #fff;
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    margin: 20px auto;
    width: max-content;
    transition: background-color 0.2s ease;
  }

  .download-button:hover {
      background-color: #0056b3;
  }

  #developer-cta {
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
  }

  #cta {
    background-color: #f4f4f4;
    text-align: center;
    padding: 20px;
  }

  .cta-text {
      font-size: 1.25em;
      margin: 20px 0;
      line-height: 1.6;
  }

  .cta-button, .cta-form button {
      display: inline-block;
      text-decoration: none;
      color: #fff;
      background-color: #007BFF;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      transition: background-color 0.2s ease;
  }

  .cta-button:hover, .cta-form button:hover {
      background-color: #0056b3;
  }

  .cta-form {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
  }

  .cta-form input {
      padding: 10px;
      font-size: 1em;
      border-radius: 5px;
      border: 1px solid #ccc;
  }

  .cta-form button {
      cursor: pointer;
  }

  #call-to-action {
    padding: 2em;
    background: #f9f9f9;
    text-align: center;
  }

  .cta-content {
      max-width: 600px;
      margin: 0 auto;
  }

  .cta-btn {
      display: inline-block;
      margin-top: 1em;
      padding: 1em 2em;
      background-color: #1e90ff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
  }

  .cta-btn:hover {
      background-color: #4682b4;
  }

</style>
