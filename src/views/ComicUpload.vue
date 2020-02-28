<template>
    <b-container>
        <v-nav></v-nav>
        <b-row cols="3" style="margin-bottom: 1rem;">
            <b-col cols="4" class="mx-auto">
                     <b-form-file class="mt-3" v-model="cover" id="upload" accept="image/*"></b-form-file>
     </b-col>
        </b-row>
        <b-row>
            <b-img :src="preview" alt="图片" class="mx-auto" v-show="showPhoto" height="300"></b-img>
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
                <b-button variant="primary" @click="submit">提交</b-button>
                <b-button @click="reset">重置</b-button>
            </b-button-group>
            <b-modal v-model="modalShow">请填写完整再提交</b-modal>
        </b-row>

    </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      showPhoto: false,
      name: null,
      author: null,
      type: null,
      introduction: null,
      cover: null,
      preview: null,
      modalShow: false,
      base64Picture: null
    }
  },
  methods: {
    reset () {
      this.name = null
      this.author = null
      this.type = null
      this.introduction = null
    },
    showCover (e) {
      this.showPhoto = true
      // 读取文件:
      let url = URL.createObjectURL(e)
      this.preview = url
      console.log(url)
      var text = (new Response(e)).text()
      console.log(text)
      this.base64Picture = text
    },
    submit () {
      if (this.name === null || this.type === null || this.author === null || this.cover === null) {
        this.modalShow = true
      } else {
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        let param = new FormData()
        param.append('srcFile', this.cover)
        axios({
          method: 'post',
          url: this.baseURL() + '/comics/uploadComic',
          data: param,
          config: config
        }).then(res => console.log(this.base64Picture)).catch(res => console.log(res))
      }
    }
  },
  watch: {
    cover: 'showCover'
  }
}
</script>

<style>
    .custom-file-input:lang(en) ~ .custom-file-label::after {
      content: '点此上传封面';
    }
</style>
