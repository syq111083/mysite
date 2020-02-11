<template>
    <b-container fluid style="padding: 0;">
        <v-nav></v-nav>
        <b-row style="margin-top: 5rem;width: 100%;">
            <b-col cols="1" class="fixed-top" style="margin-top: 12%;">
                <b-list-group v-b-scrollspy:listgroup-ex class="text-center">
                    <b-list-group-item href="#list-item-1">坑 1</b-list-group-item>
                    <b-list-group-item href="#list-item-2">坑 2</b-list-group-item>
                    <b-list-group-item href="#list-item-3">坑 3</b-list-group-item>
                    <b-list-group-item href="#list-item-4">坑 4</b-list-group-item>
                    <b-list-group-item href="#list-item-5">坑 5</b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col class="offset-2" style="width: 100%;">
                <div style="width: 100%;">
                    <b-jumbotron v-bind:class="{click: isClick}" style="width: 75%;margin: 0 auto;color: #42B983;"
                        v-on:click="chColor()">
                        <h2 class="display-5" style="text-align: center;">BLOG</h2>
                        <p class="lead" style="text-align: center;">日志，踩坑</p>
                        <hr class="my-4">
                        <b-row>
                            <b-btn style="margin: 0 auto;">点此了解更多</b-btn>
                        </b-row>

                    </b-jumbotron>
                </div>
                <div id="listgroup-ex" style="position:relative; overflow-y:visible; width: 100%;">
                    <h4 id="list-item-1">坑 1</h4>
                    <p>{{ text }}</p>
                    <h4 id="list-item-2">坑 2</h4>
                    <p>{{ text2 }}</p>
                    <h4 id="list-item-3">坑 3</h4>
                    <p>{{ text3 }}</p>
                    <h4 id="list-item-4">坑 4</h4>
                    <p>{{ text4 }}</p>
                    <h4 id="list-item-5">坑 5</h4>
                    <p>{{ text2 }}</p>
                </div>
            </b-col>
        </b-row>
        <b-row style="width: 100%;">
            <!-- Use HTML and sub-components in slots -->
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  class="mt-4"
                  style="margin: 0 auto;margin-bottom: 5rem;"
                >
                  <template v-slot:first-text><span class="text-success">第一页</span></template>
                  <template v-slot:prev-text><span class="text-danger">前一页</span></template>
                  <template v-slot:next-text><span class="text-warning">下一页</span></template>
                  <template v-slot:last-text><span class="text-info">最后一页</span></template>
                  <template v-slot:ellipsis-text>
                    <b-spinner small type="grow"></b-spinner>
                    <b-spinner small type="grow"></b-spinner>
                    <b-spinner small type="grow"></b-spinner>
                  </template>
                  <template v-slot:page="{ page, active }">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
                  </template>
                </b-pagination>

</b-row>
</b-container>
</template>

<script>
export default {
  data () {
    return {
      text: 'Eslint的判断机制有问题，出现“unexpected token ；”的时候，不要看是不是真缺个"；"，看看是不是少个大括号}',
      text2: '`ESlint，组件标签命名必须带一个“-”在里面，不然报错`,或者驼峰命名,然后使用组件的时候,换成kabab命名方式，例如myName，用的时候为<my-name></my-name>',
      text3: 'ESlint,data里的数据，最后一个末尾不要加逗号',
      text4: '前端页面的路径注意别和后端写重了，不然springboot就算controller设置@Crosorigin 也会被nginx提示跨域',
      isClick: false,
      rows: 100,
      perPage: 10,
      currentPage: 1
    }
  },
  methods: {
    chColor () {
      if (this.isClick === false) {
        this.isClick = true
      } else {
        this.isClick = false
      }
    }
  }
}
</script>

<style>
    .click {
        background-color: bisque;
    }
</style>
