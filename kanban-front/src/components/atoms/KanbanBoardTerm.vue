<template>
  <v-text-field
    v-model="formatedTerm"
    label="期間"
    readonly
  >
    <template v-slot:append-outer>
      <v-menu
        v-model="menu"
        offset-x
        transition="scale-transition"
        :close-on-content-click="false"
        min-width="auto"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon color="primary" dark elevation="0" v-on="on">
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </template>
        <v-date-picker
          v-model="dates"
          no-title
          scrollable
          range
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="cancelDate"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class KanbanBoardTerm extends Vue {
  menu = false;

  @Prop({ default: () => [] })
  value!: string[];
  // modelValue!: Date[]; vue3系での書き方

  get formatedTerm () : string {
    return this.formatDate(this.value)
  }

  get dates () :string[] {
    return this.value.filter(Boolean)
  }

  set dates (dates: string[]) {
    this.input(dates.filter(Boolean))
  }

  cancelDate () :void {
    this.dates = []
    this.menu = false
  }

  formatDate (dates: string[]) :string {
    var clearDates = dates.filter(Boolean)
    if (clearDates.length < 2) {
      return ''
    } else {
      return clearDates[0].replaceAll('-', '/') + '〜' + clearDates[1].replaceAll('-', '/')
    }
  }

  @Emit()
  input (value: string[]) :void {
    // イベント発行のみ
  }
}

</script>

<style>

</style>
