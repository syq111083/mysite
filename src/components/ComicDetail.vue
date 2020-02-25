<template>
    <b-container>
        <b-row>
        <b-col style="border-right: solid #2C3E50;">
        <b-row>
                <b-col>
                    <b-img thumbnail :src="comic.cover" alt="没有封面" blank-color="#88f" width=300 height=500
                        :comic="comic"></b-img>
                </b-col>
                <b-col>
                    <P>题目：{{comic.comic}}</P>
                    <p>类型：<b-badge href="#" variant="info">{{comic.type}}</b-badge>
                    </p>
                    <p>国家：{{comic.country}}</p>
                    <p>作者：<b-badge href="#" variant="success">{{comic.author}}</b-badge>
                    </p>
                </b-col>
        </b-row>
        <b-row>
            <b-col cols="8" style="padding: 0;">
                <label for="range-1" style="margin-top: 1rem;">剧情评分：<b-badge variant="warning">{{ valueOfStory }}</b-badge></label>
                <b-form-input id="range-1" v-model="valueOfStory" type="range" min="0" max="10"></b-form-input>
                <label for="range-2" style="margin-top: 1rem;">画工评分：<b-badge variant="warning">{{ valueOfGraph }}</b-badge></label>
                <b-form-input id="range-2" v-model="valueOfGraph" type="range" min="0" max="10"></b-form-input>
                <label for="range-3" style="margin-top: 1rem;">人设评分：<b-badge variant="warning">{{ valueOfCharacter }}</b-badge></label>
                <b-form-input id="range-3" v-model="valueOfCharacter" type="range" min="0" max="10"></b-form-input>
            </b-col>
        </b-row>
        <b-row style="margin-top: 3rem;">
            <b-col style="margin-bottom: 8rem;" cols="10">
                <b-row>
                <label for="title">标题</label>
                <b-form-input id="title"></b-form-input>
                <label for="content">评价内容</label>
                <b-textarea id="content" ></b-textarea>
                </b-row>
                <b-row style="margin-top: 1rem;">
                    <b-badge variant="secondary">
                        <h6>平均得分：{{ average }}</h6>
                    </b-badge>
                </b-row>
                <b-row>
                    <b-button style="margin-top: 1rem;" variant="success" v-b-modal.modal-2>点此提交你的评分</b-button>
                </b-row>
            </b-col>
                    <b-modal id="modal-2" title="提交分数" ok-title="提交" cancel-title="取消" @ok="submitScore()">
            <p class="my-4">确定提交吗?</p>
        </b-modal>
        </b-row>
        </b-col>
        <b-col v-for="(comment,index) in comments" :key="index">
            <h2>预留其他人评论区域</h2>
            <b-row style="margin-top: 1.5rem;">
                <b-col style="border-top:  #2C3E50 dotted;border-right: #2C3E50 dotted;">
                   <h6> 作者：{{ comment.author }} </h6>
                </b-col>
            </b-row>
                <b-row>
                   <b-col style="border-right: #2C3E50 dotted;">
                     <h6> 标题：{{ comment.title }} </h6>
                   </b-col>
                </b-row>
                <b-row>
                    <b-col style="border-bottom:  #2C3E50 dotted;border-right: #2C3E50 dotted;">
                     <p> 内容：{{ comment.content }} </p>
                    </b-col>
                </b-row>
        </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ['comic'],
  data () {
    return {
      valueOfStory: 5,
      valueOfGraph: 5,
      valueOfCharacter: 5,
      average: 0,
      comments: [
        {
          title: '题目',
          content: '内容',
          author: '作者'
        }
      ]
    }
  },
  watch: {
    valueOfStory: 'getAverage',
    valueOfGraph: 'getAverage',
    valueOfCharacter: 'getAverage'
  },
  methods: {
    getAverage () {
      let x = parseFloat(this.valueOfCharacter)
      let y = parseFloat(this.valueOfGraph)
      let z = parseFloat(this.valueOfStory)
      let r = (x + y + z) / 3
      r = r.toFixed(1)
      console.log(x, y, z, r)
      this.average = r
    },
    submitScore () {

    }
  }
}
</script>

<style>
</style>
