<template>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="primary"
      @click="clickAndLoading"
    >
      ログイン
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component
export default class KanbanLoginBtn extends Vue {
  loading = false

  @Prop({ default: 3000 })
  private timeout!: number;

  clickAndLoading () :void {
    this.loading = true
    this.click()
    setTimeout(
      () => { this.loading = !this.loading },
      this.timeout
    )
  }

  @Emit('click')
  click () :void {
    // イベント発行のみ
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
