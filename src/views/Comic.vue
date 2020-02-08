<template>
    <div class="container-fluid">
        <v-nav></v-nav>
        <b-row style="margin-top: 10rem;">
            <b-input-group class="mx-auto" style="width: 50%;">
                      <b-dropdown :text="selected" variant="success">
                        <b-dropdown-item @click="change('名称')">名称</b-dropdown-item>
                        <b-dropdown-item @click="change('作者')">作者</b-dropdown-item>
                        <b-dropdown-item @click="change('国家')">国家</b-dropdown-item>
                      </b-dropdown>
                <b-form-input v-bind:disabled="showProps" v-model="searchContent" required></b-form-input>
                <b-input-group-addon>
                    <b-button variant="info" v-bind:disabled="showProps" @click="getComics">搜索</b-button>
                    <b-button variant="warning" v-on:click="showProperties">搜索栏锁定</b-button>
                </b-input-group-addon>
            </b-input-group>
        </b-row>
        <hr v-show="showProps">
        <b-row v-show="showProps">
        <b-col cols v-for="(comic,index) in comics" v-bind:key="index">
            <b-col cols>
                <b-img thumbnail fluid left src="comic.photo" alt="alt" blank-color="#88f" width=200 height=250></b-img>
            </b-col>
            <b-row>
                <b-col>
                <P>{{comic.comic}}</P>
                <p>{{comic.type}}</p>
                <p>{{comic.country}}</p>
                <p>作者：{{comic.author}}</p>
                <p>性别：{{comic.sex}}</p>
            </b-col>
            </b-row>
        </b-col>
        </b-row>
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
      photo: null,
      alt: this.baseURL() + 'images/1.jpg'
    }
  },
  methods: {
    showProperties () {
      this.showProps = !this.showProps
    },
    change (e) {
      this.selected = e
    },
    getComics () {
      if (this.searchContent !== null) {
        axios({
          method: 'get',
          url: this.baseURL() + ':8080' + '/comic/getComics',
          params: {
            searchType: this.selected,
            searchContent: this.searchContent
          }
        }).then(res => {
          console.log(res)
          this.comics = res.data
        })
        this.showProps = true
      }
    }
  }
}
</script>

<style>
</style>
