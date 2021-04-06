<script>
  import { onMount } from "svelte";
  import { numberFormat } from "./../../../helpers/numbers.js";
  import { getProducts } from "./../services/product.services.js";

  const API_URL = process.env.API_URL;

  let listProducts = [];
  onMount(async () => {
    listProducts = await getProducts();
  });
</script>

<section class="overflow-hidden">
  <p class="text-3xl font-semibold py-7">Productos Destacados</p>
  {#each listProducts as product}
    <div class="flex flex-wrap p-3 mx-auto bg-white md:p-20">
      <div class="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
        <h2 class="text-sm tracking-widest text-gray-500 uppercase">
          {product.category.name}
        </h2>
        <h1 class="mb-4 text-3xl font-medium text-gray-900">{product.name}</h1>
        <div class="flex mb-4">
          <a
            href="/"
            class="flex-grow px-1 py-2 text-lg text-indigo-700 border-b-2 border-yellow-200"
            >Descripción</a
          >
        </div>
        <p class="mb-4 leading-relaxed">{product.description}</p>
        <div class="flex py-2 border-t border-gray-200">
          <span class="text-gray-500">Decoración</span>
          <span class="ml-auto text-gray-900">{product.decor}</span>
        </div>
        <div class="flex py-2 border-t border-gray-200">
          <span class="text-gray-500">Relleno</span>
          <span class="ml-auto text-gray-900">{product.filling}</span>
        </div>
        <div class="flex py-2 border-t border-gray-200">
          <span class="text-gray-500">Porciones</span>
          <span class="ml-auto text-gray-900">{product.portions}</span>
        </div>
        <div class="flex py-2 border-t border-gray-200">
          <span class="text-gray-500">Sabores</span>
          <span class="ml-auto text-gray-900">Chocolate</span>
        </div>
        <div class="flex py-2 mb-6 border-t border-b border-gray-200">
          <span class="text-gray-500">Tiempo de entrega</span>
          <span class="ml-auto text-gray-900">{product.delivery}</span>
        </div>
        <div class="flex flex-col space-y-3">
          <div class="flex items-center">
            <span class="text-2xl font-medium text-gray-900"
              >Desde ${numberFormat(product.price)}</span
            >
            <button
              class="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-700"
              >Cotizar</button
            >
          </div>
          <span class="text-sm font-medium text-gray-500"
            >*El precio puede variar de acuerdo a la personalización requerida.
          </span>
        </div>
      </div>
      <img
        alt="ecommerce"
        class="object-cover object-center w-full rounded md:w-1/2 bg-gray-50"
        src="{API_URL}{product.image.url}"
      />
    </div>
  {/each}
</section>
