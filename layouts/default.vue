<template>
  <div
    :class="{ dark: $store.state.colorMode.mode == 'dark' }"
    class="min-h-full flex flex-col justify-between"
  >
    <NavigationHeader />
    <div class="min-h-70">
      <Nuxt />>
    </div>
    <NavigationFooter />
  </div>
</template>
<style>
.min-h-70 {
  min-height: 70vh;
}
</style>
