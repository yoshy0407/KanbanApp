<template>
  <v-menu
  left
  bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        @click="() => {}"
      >
        <v-list-item-title>アカウント情報</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="() => {}"
      >
        <v-list-item-title>ログアウト</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>

</style>
