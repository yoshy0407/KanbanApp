<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="error"
        @click="click"
      >
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-delete
        </v-icon>
      </v-btn>
    </template>
    <span>削除</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class KanbanDeleteBtn extends Vue {
  @Emit('click')
  click () {
    // 何もしない
  }
}
</script>

<style>

</style>
