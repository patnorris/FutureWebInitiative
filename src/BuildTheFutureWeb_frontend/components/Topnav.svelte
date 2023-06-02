<script>
  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<div class="topnav flex items-center justify-around flex-wrap bg-slate-600 p-3 text-l font-bold text-white">
  <a href='#'>Future Web</a>
  <a href='#/decentralizedwebstack'>Decentralized Web Stack</a>
  <div class="dropdown">
    <a href='#/projectsoverview' class="dropbtn">Projects</a>
    <div class="dropdown-content">
      <a href='#/bebbprotocol'>Bebb Protocol</a>
      <a href='#/openinternetmetaverse'>Open Internet Metaverse</a>
    </div>
  </div>
  <a href='#/relatedinitiatives'>Related Initiatives</a>
  <a href='#/getinvolved'>Get Involved</a>
  <button class="hamburger" on:click={toggleMenu}>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  </button>
</div>
<nav class="navbar-nav flex items-center justify-around flex-wrap bg-slate-600 p-3 text-l font-bold text-white" class:show={showMenu}>
  <a href='#/decentralizedwebstack'>Decentralized Web Stack</a>
  <a href='#/projectsoverview'>Projects</a>
  <a href='#/relatedinitiatives'>Related Initiatives</a>
  <a href='#/getinvolved'>Get Involved</a>
</nav>

<style>
  /* Dropdown Button */
.dropbtn {
  background-color: inherit;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  outline: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background-color: #f9f9f9;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

/* Responsive navigation menu (for mobile devices) */
@media screen and (max-width: 700px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .navbar-nav a {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

.hamburger {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
}

.hamburger-line {
  width: 2rem;
  height: 0.25rem;
  background: #fff;
}

.navbar-nav {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-nav.show {
    display: flex;
  }

  @media (min-width: 700px) {
    .hamburger {
      display: none;
    }

    .navbar-nav a {
      display: none;
    }
  }

</style>