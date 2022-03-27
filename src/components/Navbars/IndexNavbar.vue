<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-slate-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            Briac
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <index-dropdown />
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/briac.lme.5"
              target="_blank"
            >
              <i class="text-slate-400 fab fa-facebook text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Facebook</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.instagram.com/briaclme/"
              target="_blank"
            >
              <i class="text-slate-400 fab fa-instagram text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Instagram</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/briacl/vue-briac"
              target="_blank"
            >
              <i class="text-slate-400 fab fa-github text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>

          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
