<template>
  <div class="my-4 text-subtitle-1">{{ estimateString }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class KanbanTaskEstimate extends Vue {
  @Prop()
  taskEstimate!: number;

  @Prop()
  estimateUnit!: string;

  get estimateString () {
    return this.taskEstimate + ' ' + this.estimateUnit
  }
}

</script>

<style>

</style>
