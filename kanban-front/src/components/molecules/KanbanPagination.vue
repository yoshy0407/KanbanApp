<template>
  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="pageLength"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @next="clickNext"
      @input="clickPage"
      @previous="clickPrevious"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class KanbanPagination extends Vue {
  @Prop({ default: 4 })
  pageLength!:number;

  @Prop({ default: 1 })
  value!:number;

  /**
   * valueのGet computedです
   */
  get currentPage () :number {
    return this.value
  }

  /**
   * valueのSet computedです
   */
  set currentPage (page :number) {
    this.input(page)
  }

  /**
   * 次へボタンが押された時に呼び出されるメソッドです
   */
  clickNext () :void {
    this.currentPage = this.currentPage + 1
    this.next(this.currentPage)
  }

  /**
   * ページ番号のボタンが押された時に呼び出されるメソッドです
   */
  clickPage (pageNumber: number) :void {
    this.currentPage = pageNumber
    this.page(this.currentPage)
  }

  /**
   * 一つ前へボタンが押された時に呼び出されるメソッドです
   */
  clickPrevious () :void {
    this.currentPage = this.currentPage - 1
    this.previous(this.currentPage)
  }

  /**
   * valueのinputイベントを発行します
   */
  @Emit()
  input (currentPage: number) :void {
    // イベント発行のみ
  }

  /**
   * 次へボタン押下時にnextイベントを発行します
   */
  @Emit()
  next (nextPage: number) :void {
    // イベント発行のみ
  }

  /**
   * ページ押下時にpageイベントを発行します
   */
  @Emit()
  page (page: number) :void {
    // イベント発行のみ
  }

  /**
   * 一つ前へボタン押下時にpreviousイベントを発行します
   */
  @Emit()
  previous (previousPage: number) :void {
    // イベント発行のみ
  }
}
</script>

<style>

</style>
