<script lang="ts">
  import Router from "svelte-spa-router";

  import Login from "./components/Login.svelte";
  import Intro from "./pages/Intro.svelte";
  import NotFound from "./pages/NotFound.svelte";

  const routes = {
    // Exact path (with /# in front of route)
    "/": Intro,
    /* TODO
    "/decentralizedwebstack": DecentralizedWebStack,
    "/bebbprotocol": BebbProtocol,
    "/openinternetmetaverse": OpenInternetMetaverse,
    "/relatedinitiatives": RelatedInitiatives, //e.g. URL: https://vdfyi-uaaaa-aaaai-acptq-cai.ic0.app/#/relatedinitiatives
    "/getinvolved": GetInvolved, */
    //"/space/:spaceId": Space,
    // Catch-all (this is optional, but if present it must be the last)
    "*": NotFound,
  };
</script>

<div class="App">
  <Router {routes} />
</div>
