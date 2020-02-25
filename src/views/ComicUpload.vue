<template>
    <b-container>
        <v-nav></v-nav>
        <b-row>
            <b-col cols="2" class="mx-auto">
                <b-breadcrumb>
            <b-breadcrumb-item>点击上传封面</b-breadcrumb-item>
            </b-breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-img alt="图片" class="mx-auto" v-show="showPhoto"></b-img>
        </b-row>
        <b-row>
            <b-col cols="3" class="mx-auto"><label for="name">名称</label>
            <b-form-input id="name" placeholder="输入漫画名称" v-model="name" maxlength="20"></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="3" class="mx-auto"><label for="author">作者</label>
            <b-form-input id="author" placeholder="输入漫画名称" v-model="author" maxlength="10"></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="3" class="mx-auto"><label for="style">风格</label>
            <b-form-input id="style" placeholder="输入漫画风格" v-model="type" maxlength="5"></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="3" class="mx-auto"><label for="introduction">简介</label>
            <b-textarea id="introduction" placeholder="输入简介" rows="5" v-model="introduction"></b-textarea>
            </b-col>
        </b-row>
        <b-row style="margin-top: 1rem;">
            <b-button-group class="mx-auto">
                <b-button variant="primary">提交</b-button>
                <b-button @click="reset">重置</b-button>
            </b-button-group>
        </b-row>

    </b-container>
</template>

<script>
export default {
  data () {
    return {
      showPhoto: false,
      name: null,
      author: null,
      type: null,
      introduction: null,
      cover: null
    }
  },
  methods: {
    reset () {
      this.name = null
      this.author = null
      this.type = null
      this.introduction = null
    }
  }
}
</script>

<style>
</style>
