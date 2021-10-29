<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <!--<v-btn
        class="mx-2"
        x-small
        rounded
        @click="click"
        elevation="0"
      > -->
        <v-icon
          v-bind="attrs"
          v-on="on"
          v-on:click="click"
        >
          mdi-close
        </v-icon>
      <!--</v-btn>-->
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
