<template>
  <div>
    <a
      class="
        hover:text-slate-500
        text-slate-700
        px-3
        py-2
        flex
        items-center
        text-xs
        uppercase
        font-bold
      "
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      Navigation
    </a>
    <div
      ref="popoverDropdownRef"
      class="
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded
        shadow-lg
        min-w-48
      "
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        href="#top"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Accueil
      </a>
      <a
        href="#mes_photos"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Mes photos
      </a>
      <a
        href="#communiquer"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Communiquer
      </a>
      <a
        href="#traiter"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Traiter les images
      </a>
            <a
        href="#diffuser"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Diffuser
      </a>
                  <a
        href="#timelapse"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-slate-700
        "
      >
        Expliquer
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
