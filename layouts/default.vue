<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="bg-purple text-lilac-light text-center p-4 font-header"
    >
      <h1 class="text-2xl font-bold">
        My Nuxt App
      </h1>
    </header>
    <main class="flex-1 bg-lilac">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
