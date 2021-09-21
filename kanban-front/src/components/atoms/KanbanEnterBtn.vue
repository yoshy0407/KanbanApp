<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="indigo"
        @click="click"
      >
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-door-open
        </v-icon>
      </v-btn>
    </template>
    <span>入る</span>
  </v-tooltip>
</template>

<script>
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class KanbanEnterBtn extends Vue {
  @Emit('click')
  click () {
    // 何もしない
  }
}
</script>

<style>

</style>
