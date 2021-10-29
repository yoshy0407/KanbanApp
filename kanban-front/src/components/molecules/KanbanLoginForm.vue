<template>
  <v-card
    elevation="7"
    width="500"
    class="mx-auto"
  >
    <v-card-title class="orange">
      ログイン
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          label="ユーザID"
          prepend-icon="mdi-account"
          clearable
        />

        <v-text-field
          v-model="password"
          type="password"
          label="パスワード"
          prepend-icon="mdi-lock"
          clearable
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <kanban-login-btn
        v-on:click="login"
      />
    </v-card-actions>
    <v-divider />
    <kanban-login-btn />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KanbanLoginBtn from '@/components/atoms/KanbanLoginBtn.vue'

@Component({
  components: {
    KanbanLoginBtn
  }
})
export default class KanbanLoginForm extends Vue {
  /**
   * ユーザID
   */
  username = '';

  /**
   * パスワード
   */
  password = '';

  login () :void {
    // ダミー
  }
}
</script>

<style>

</style>
