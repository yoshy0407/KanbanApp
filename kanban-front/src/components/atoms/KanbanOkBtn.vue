<template>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="primary"
      @click="click"
    >
      OK
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component
export default class KanbanOkBtn extends Vue {
  loading = false

  @Prop({ default: 3000 })
  private timeout!: number;

  @Emit('click')
  click () {
    this.loading = true
    setTimeout(
      () => { this.loading = !this.loading },
      this.timeout
    )
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
