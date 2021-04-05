<script>
  import Menu24 from "carbon-icons-svelte/lib/Menu24";
  import Navbar from "./Navbar.svelte";
</script>

<header class="flex flex-row items-center bg-yellow-200">
  <div
    class="flex items-center justify-center flex-none w-10 text-black md:w-16"
  >
    <Menu24 />
  </div>
  <div class="flex items-center w-full bg-gray-50">
    <Navbar />
  </div>
</header>
