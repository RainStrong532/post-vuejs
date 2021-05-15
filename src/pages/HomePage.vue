<template>
  <div class="container">
    <h2 class="text-center my-5">Home page</h2>
    <div class="row justify-content-between">
      <post-view
        v-for="(item, index) in listPost" v-bind:key = "index"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import PostView from "../components/PostView.vue";

import * as callApis from '../fetchApis';
export default {
  components: { PostView },
  name: "home",
  data(){
      return{
          listPost: []
      }
  },
  methods: {
      getData: async function(){
          try{
            const res = await callApis.posts.getData();
            this.listPost = [...res];
          }catch(err){
              console.log(err);
          }
      }
  },
  created: function(){
      this.getData();
  }
};
</script>

<style>
</style>