<script lang="ts">
  import Router from "svelte-spa-router";

  import Login from "./components/Login.svelte";
  import Intro from "./pages/Intro.svelte";
  import DecentralizedWebStack from "./pages/DecentralizedWebStack.svelte";
  import BebbProtocol from "./pages/BebbProtocol.svelte";
  import OpenInternetMetaverse from "./pages/OpenInternetMetaverse.svelte";
  import DemocratizedAI_DeVinci from "./pages/DemocratizedAI_DeVinci.svelte";
  import RelatedInitiatives from "./pages/RelatedInitiatives.svelte";
  import GetInvolved from "./pages/GetInvolved.svelte";
  import ProjectsOverview from "./pages/ProjectsOverview.svelte";
  import NotFound from "./pages/NotFound.svelte";

  const routes = {
    // Exact path (with /# in front of route)
    "/": Intro,
    "/decentralizedwebstack": DecentralizedWebStack,
    "/relatedinitiatives": RelatedInitiatives, //e.g. URL: https://vdfyi-uaaaa-aaaai-acptq-cai.ic0.app/#/relatedinitiatives
    "/getinvolved": GetInvolved,
    "/projectsoverview": ProjectsOverview,
    "/bebbprotocol": BebbProtocol,
    "/openinternetmetaverse": OpenInternetMetaverse,
    "/democratizedai": DemocratizedAI_DeVinci,
    //"/space/:spaceId": Space,
    // Catch-all (this is optional, but if present it must be the last)
    "*": NotFound,
  };
</script>

<div class="App">
  <Router {routes} />
</div>
