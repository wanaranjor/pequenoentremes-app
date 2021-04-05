<script>
  import MainHome from "../components/shared/ui/MainHome.svelte";
  import NavBarLeft from "../components/shared/ui/NavBarLeft.svelte";
</script>

<div class="flex flex-row h-scree">
  <div class="flex flex-none w-10 md:w-16">
    <NavBarLeft />
  </div>
  <div class="w-full bg-gray-50 md:pr-16">
    <MainHome />
  </div>
</div>
