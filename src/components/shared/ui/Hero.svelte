<script>
  import { onMount } from "svelte";
  import { getHeroes } from "../../hero/services/hero.services";

  const API_URL = process.env.API_URL;
  let hero = [];
  let title,
    message,
    image = "";
  onMount(async () => {
    hero = await getHeroes();
    title = hero[0].title;
    message = hero[0].message;
    image = hero[0].image.url;
    console.log(hero);
  });
</script>

{#if hero.length > 0}
  <section class="w-full px-5 text-gray-600 bg-white md:px-20">
    <div class="flex flex-col-reverse items-center px-5 py-10 md:flex-row">
      <div
        class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left"
      >
        <h1
          class="mb-4 text-2xl font-semibold leading-tight text-gray-900 md:text-4xl"
        >
          {title}
        </h1>
        <p class="mb-8 leading-relaxed">
          {message}
        </p>
        <a
          href="/"
          class="px-3 py-2 font-semibold text-gray-900 bg-yellow-200 rounded hover:bg-yellow-300"
          >Contáctenos</a
        >
      </div>
      <div class="w-full mb-5 md:flex lg:max-w-lg sm:mb-0">
        <img src="{API_URL}{image}" alt="img" />
      </div>
    </div>
  </section>
{/if}
