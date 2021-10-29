<template>
  <v-app>
    <v-main class="orange lighten-5">
      <v-container>
        <v-row justify="space-around">
          <kanban-login-form />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KanbanLoginForm from '@/components/molecules/KanbanLoginForm.vue'

@Component({
  components: {
    KanbanLoginForm
  }
})
export default class KanbanLogin extends Vue {
}
</script>

<style>

</style>
