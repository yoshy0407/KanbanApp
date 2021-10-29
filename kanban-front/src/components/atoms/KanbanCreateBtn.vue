<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        fixed
        :bottom="bottom"
        :left="left"
        :right="right"
        color="blue"
        @click="click"
      >
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <span>追加</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component
export default class KanbanEditBtn extends Vue {
  @Prop({ default: false })
  bottom!: boolean;

  @Prop({ default: false })
  left!: boolean;

  @Prop({ default: false })
  right!: boolean;

  @Emit('click')
  click () {
    // 何もしない
  }
}
</script>

<style>

</style>
