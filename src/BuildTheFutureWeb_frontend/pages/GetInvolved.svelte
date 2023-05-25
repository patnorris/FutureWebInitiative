<script lang="ts">
  import { push } from "svelte-spa-router";
  import { store } from "../store";
  import Login from "../components/Login.svelte";
  import Button from "../components/Button.svelte";
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Topnav />

<!-- Hero Section -->
<header>
    <div>
        <img src="https://storage.googleapis.com/mixo-files/logos/webDecentralizer-1684272341437.svg" alt="WebDecentralizer logo">
        <h1>Get Involved</h1>
    </div>
    <div>
        <h1>Let's build the future Web together</h1>
        <p>Want to contribute?</p>
        <form>
            <input type="email" id="hero-email" placeholder="Enter your email...">
            <button type="submit">Submit</button>
        </form>
    </div>
</header>

<!-- Features Section -->
<section id="features">
    <!-- Feature 0 -->
    <div>
        <h2>Take back control of your data.</h2>
        <p>With WebDecentralizer, you can host your own data and decide who has access. No more trusting centralized services with your sensitive information.</p>
        <img src="https://images.unsplash.com/photo-1644190015480-f0765ad5d4d6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzczODV8MHwxfHNlYXJjaHwzfHxkZWNlbnRyYWxpemF0aW9ufGVufDB8MHx8fDE2ODQyNzIzNDJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Take back control of your data">
    </div>

    <!-- Feature 1 -->
    <div>
        <h2>Monetize what is yours.</h2>
        <p></p>
        <img src="https://images.unsplash.com/photo-1644190015480-f0765ad5d4d6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzczODV8MHwxfHNlYXJjaHwzfHxkZWNlbnRyYWxpemF0aW9ufGVufDB8MHx8fDE2ODQyNzIzNDJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Take back control of your data">
    </div>

    <!-- Feature 2 -->
    <div>
        <h2>Protect your privacy.</h2>
        <p>WebDecentralizer empowers you to keep your online activity private. No more tracking or surveillance by third parties.</p>
        <img src="https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzczODV8MHwxfHNlYXJjaHw1fHxkZWNlbnRyYWxpemF0aW9ufGVufDB8MHx8fDE2ODQyNzIzNDJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Protect your privacy">
    </div>

    <!-- Feature 3 -->
    <div>
        <h2>Support internet freedom.</h2>
        <p>By decentralizing the web and supporting open protocols, you can help preserve the open and free nature of the internet.</p>
        <img src="https://images.unsplash.com/photo-1643107225439-83920744a32a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzczODV8MHwxfHNlYXJjaHw8fHxkZWNlbnRyYWxpemF0aW9ufGVufDB8MHx8fDE2ODQyNzIzNDJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Support internet freedom">
    </div>
</section>

<Footer />
