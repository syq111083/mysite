<template>
    <div class="container-fluid">
        <v-nav></v-nav>
        <b-container fluid="true" v-show="clickForDetail">
            <b-row><h1 class="mx-auto"><b-badge>搜索漫画</b-badge></h1></b-row>
        <b-row style="margin-top: 1rem;">
            <b-input-group class="mx-auto" style="width: 50%;">
                <b-dropdown :text="selected" variant="success">
                    <b-dropdown-item @click="change('名称')">名称</b-dropdown-item>
                    <b-dropdown-item @click="change('作者')">作者</b-dropdown-item>
                    <b-dropdown-item @click="change('国家')">国家</b-dropdown-item>
                </b-dropdown>
                <b-form-input v-model="searchContent" required></b-form-input>
                <b-input-group-addon>
                    <b-button variant="info" @click="getComics">搜索</b-button>
                </b-input-group-addon>
            </b-input-group>
        </b-row>
        <b-row v-show="showProps" style="margin-top: 2rem;" id="comicView">
            <b-col cols="4" v-for="(comic,index) in comics" v-bind:key="index" style="margin-top: 2rem;">
                <b-col>
                    <b-img thumbnail fluid left :src="comic.cover" alt="没有封面" blank-color="#88f" width=200 height=300></b-img>
                </b-col>
                <b-row>
                    <b-col>
                        <b-link><P @click="detail(index,comics)">题目：{{comic.comic}}</P></b-link>
                        <p>类型：<b-badge href="#" variant="info">{{comic.type}}</b-badge></p>
                        <p>国家：{{comic.country}}</p>
                        <p>作者：<b-badge href="#" variant="success">{{comic.author}}</b-badge></p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row style="width: 100%;margin-top: 3rem;" v-show="showPage">
                <div class="overflow-auto mx-auto">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="comicView"
                  ></b-pagination>

                  <p class="mt-3">Current Page: {{ currentPage }}</p>
                  </div>
        </b-row>
        </b-container>
        <v-detail v-if="!clickForDetail" :comic="contentDetail" style="margin-top: 3rem;"></v-detail>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showProps: false,
      temperture: 10,
      humidity: 50,
      selected: '名称',
      searchContent: null,
      comics: [],
      perPage: 3,
      currentPage: 1,
      rows: 1,
      showPage: true,
      clickForDetail: true,
      index: 0,
      contentDetail: []
    }
  },
  mounted () {
    this.getAll()
  },
  created () {
    axios({
      method: 'get',
      url: this.baseURL() + '/comics/numbers'
    }).then(res => {
      this.rows = res.data.comicNumbers
    }).catch(res => console.log(res))
  },
  methods: {
    detail (index, comics) {
      this.clickForDetail = false
      this.index = index
      this.contentDetail = comics[index]
    },
    showProperties () {
      this.showProps = !this.showProps
    },
    change (e) {
      this.selected = e
    },
    getComics () {
      console.log(this.baseURL())
      if (this.searchContent !== null) {
        axios({
          method: 'get',
          url: this.baseURL() + '/comics/getComics',
          params: {
            searchType: this.selected,
            searchContent: this.searchContent
          }
        }).then(res => {
          console.log(res)
          this.comics = res.data
          this.rows = res.length
        })
        this.showProps = true
      }
    },
    getAll () {
      axios({
        method: 'GET',
        url: this.baseURL() + '/comics/pagesList',
        params: {
          pagesNumber: this.currentPage
        }
      }).then(res => {
        this.comics = res.data
        this.showProps = true
        console.log(res)
      }).catch(res => console.log(res))
    }
  },
  watch: {
    currentPage: 'getAll'
  }
}
</script>

<style>
</style>
