<template>
  <div
    class="w-full border-b border-gray-300 flex flex-row px-32 py-3 justify-between items-center dark:bg-gray-800 text-gray-800 dark:text-gray-300"
  >
    <LOGO />
    <NuxtLink
      v-for="(item, idx) in links"
      :key="idx"
      :to="item.link"
      class="text-xl hover:text-main-green focus:text-gray-900 flex flex-row gap-1"
    >
      <i :class="item.icon"></i>
      {{ item.content }}</NuxtLink
    >
    <template v-if="mode == 'light'">
      <button
        @click="$store.commit('colorMode/darkMode')"
        class="text-gray-800 hover:text-main-green text-xl"
      >
        <i class="icon-moon-inv"></i>
      </button> </template
    ><template v-if="mode == 'dark'">
      <button
        @click="$store.commit('colorMode/lightMode')"
        class="text-gray-300 hover:text-main-green text-xl"
      >
        <i class="icon-moon-inv"></i>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.state.colorMode.mode;
    },
  },
  data() {
    return {
      links: [
        { link: "/", content: "About me", icon: "icon-info" },
        { link: "/", content: "Price list", icon: "icon-tag" },
        { link: "/", content: "My experiance", icon: "icon-laptop" },
        { link: "/", content: "Contacts", icon: "icon-users" },
      ],
      activeLang: 1,
      langs: [
        {
          id: 1,
          content: "RU",
        },
        {
          id: 1,
          content: "EN",
        },
        {
          id: 1,
          content: "GE",
        },
        {
          id: 1,
          content: "FR",
        },
      ],
    };
  },
};
</script>
