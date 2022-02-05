<script>
  import "./style.css";
</script>

<div class="wrapper">
  <div class="container">
    <header class="head">
      <h1 class="heading">Svelte Starter Kit</h1>
      <small class="caption"
        ><i>(Svelte, Vite & Tailwindcss)</i></small>
    </header>
    <p class="text">
      If you see this page, that means everything worked fine. You can
      start building your project now!!
    </p>
  </div>
</div>

<style type="postcss">
  .wrapper {
    @apply bg-gray-100;
    @apply w-screen h-screen;
    @apply flex items-center justify-center;
  }

  .container {
    @apply p-12;
    @apply rounded-md;
    @apply max-w-[700px];
    @apply text-center;
    @apply bg-white;
    @apply border border-gray-200;
  }

  .head {
    @apply pt-4 pb-6;
    @apply mb-4;
  }

  .heading {
    @apply text-4xl;
    @apply font-normal;
  }

  .caption {
    @apply text-gray-500;
  }

  .text {
    @apply text-sm;
    @apply text-gray-800;
  }
</style>
