<template>
  <v-card elevation="7">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-h5">
          ボード一覧
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="boardName"
                :rules="nameRules"
                :counter="false"
                label="ボード名"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="boardTerm"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateRangeText"
                    label="期間"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="boardTerm"
                  no-title
                  scrollable
                  range
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(boardTerm)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <kanban-search-btn></kanban-search-btn>
          <kanban-cancel-btn v-on:click="clearData"></kanban-cancel-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KanbanSearchBtn from '@/components/atoms/KanbanSearchBtn.vue'
import KanbanCancelBtn from '@/components/atoms/KanbanCancelBtn.vue'

@Component({
  components: {
    KanbanSearchBtn,
    KanbanCancelBtn
  }
})
export default class BoardHeader extends Vue {
  valid = false;

  boardName = '';

  boardTerm = [];

  nameRules = [
    (v: string) => !!v || 'Name is required',
    (v: string) => v.length <= 10 || 'Name must be less than 10 characters'
  ];

  menu = false;

  get dateRangeText () :string {
    return this.boardTerm.join(' ~ ')
  }

  clearData () :void {
    this.boardName = ''
    this.boardTerm = []
  }
}
</script>>

<style>

</style>
