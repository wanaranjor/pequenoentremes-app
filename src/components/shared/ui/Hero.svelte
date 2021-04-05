<script>
  import { onMount } from "svelte";
  import FormContact from "../../contact/ui/FormContact.svelte";
  import { getHeroes } from "../../hero/services/hero.services";

  const API_URL = process.env.API_URL;

  let viewFormContact = false;
  let hero = [];
  let title,
    message,
    image = "";
  onMount(async () => {
    hero = await getHeroes();
    title = hero[0].title;
    message = hero[0].message;
    image = hero[0].image.url;
  });
</script>

{#if hero.length > 0}
  <section class="w-full px-3 text-gray-600 bg-white md:px-20">
    <div class="flex flex-col-reverse items-center px-3 py-5 lg:flex-row">
      <div
        class="flex flex-col items-center w-full lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left"
      >
        <h1
          class="mb-4 text-2xl font-semibold leading-tight text-gray-900 md:text-4xl"
        >
          {title}
        </h1>
        <p class="mb-8 leading-relaxed">
          {message}
        </p>
        <button class="btn" on:click={() => (viewFormContact = true)}
          >Contáctenos</button
        >
      </div>
      {#if viewFormContact}
        <FormContact on:closeFormContact={() => (viewFormContact = false)} />
      {:else}
        <div class="w-full mb-5 md:flex lg:max-w-lg md:mb-0 bg-gray-50 ">
          <img src="{API_URL}{image}" alt="img" />
        </div>
      {/if}
    </div>
  </section>
{/if}
