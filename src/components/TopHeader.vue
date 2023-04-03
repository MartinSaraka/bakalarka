<script setup lang="ts">
import {
  TheDropDownNavbar,
  TheDropDownItem
} from 'vue3-dropdown-navbar'
import { ref } from 'vue'
const logged = ref(true)
</script>

<template>
  <q-header elevated class=""></q-header>
  <TheDropDownNavbar>

    <template #logo>
      <div class="card-text1">
      <q-avatar size="50px" class="  shadow-10">
              <img src="~assets/img/avatar.svg" alt="avatar" />
            </q-avatar>

            Inovatívna rehabilitačná aplikácia
            </div>
    </template>

    <TheDropDownItem link="/">Domovská stránka</TheDropDownItem>
    <TheDropDownItem link="/informations">Informácie</TheDropDownItem>
    <TheDropDownItem link="/videos">Videá</TheDropDownItem>
    <TheDropDownItem link="/games">Hry</TheDropDownItem>

    <div>
      <div v-if="logged">
    <TheDropDownItem link="/login">Prihlásenie sa</TheDropDownItem>
  </div>
  </div>
  </TheDropDownNavbar>

</template>
<style>
.card-text1 {
font-size: 20px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
.card-text2 {
font-size: 10 px;
}

</style>
