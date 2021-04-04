<script>
  import Home24 from "carbon-icons-svelte/lib/Home24";
  import PhoneIncoming24 from "carbon-icons-svelte/lib/PhoneIncoming24";
  import ShoppingCart24 from "carbon-icons-svelte/lib/ShoppingCart24";

  const TITLE_APP = process.env.TITLE_APP;
</script>

<nav
  class="flex flex-col items-center justify-between w-full py-2 pl-5 md:flex-row md:pr-16"
>
  <h1
    class="flex items-center justify-center text-4xl font-semibold text-black font-cookie sm:justify-start"
  >
    <a href="/"> {TITLE_APP} </a>
  </h1>

  <div class="flex flex-row space-x-3 text-sm md:py-2 md:px-10">
    <a
      href="/"
      class="flex flex-col items-center justify-center p-2 text-black rounded-md hover:bg-yellow-200"
    >
      <Home24 />
    </a>
    <div class="relative flex items-center justify-center">
      <div
        class="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs font-semibold text-center text-white bg-yellow-200 rounded-full"
      >
        <span class="text-black">1</span>
      </div>
      <a
        href="/cart"
        class="flex flex-col items-center justify-center px-3 text-black"
      >
        <ShoppingCart24 />
      </a>
    </div>
    <a
      href="/"
      class="flex flex-row items-center justify-center px-3 space-x-2 text-black rounded hover:bg-yellow-300"
    >
      <PhoneIncoming24 />
      <span class="font-semibold">300 7732600</span>
    </a>
    <a
      href="/login"
      class="flex items-center px-2 py-1 font-medium text-black bg-yellow-200 rounded hover:bg-yellow-300"
    >
      Ingresar
    </a>
  </div>
</nav>
