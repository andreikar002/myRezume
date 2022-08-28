<template>
  <div class="w-full">
    <div
      class="w-full border-t border-gray-300 flex flex-row px-32 py-4 justify-between items-center dark:bg-gray-800 text-gray-500 dark:text-gray-300"
    >
      <LOGO />
      <div class="w-48 text-lg">
        <p>Frontend and backend developer and designer:</p>
        <p class="text-xl">Andrei Tushev</p>
      </div>
      <div class="w-64 flex flex-col gap-1 text-s">
        <p>The stack of this site includes:</p>
        <p>Frontend - Nuxt 2, tailwind.</p>
        <p>Backend - Adonis js(framework from Node js), mySQL(DB)</p>
      </div>
    </div>
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
