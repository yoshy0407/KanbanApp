<template>
    <v-btn
      class="ma-2"
      color="secondary"
      @click="click"
    >
      <v-icon
        left
        dark
      >
        mdi-cancel
      </v-icon>
      キャンセル
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class KanbanCancelBtn extends Vue {
  @Emit('click')
  click () {
    // 何もしない
    // 親へのイベント発火のみ
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
