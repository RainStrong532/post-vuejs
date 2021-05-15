<template>
  <div class="container">
    <h2 class="text-center my-5">Home page</h2>
    <div class="text-center">
      <div>
          <b-button v-b-modal="'add'" variant="primary">Thêm mới</b-button>

          <b-modal id="add" title="Chỉnh sửa bài viết" ref="add" hide-footer>
            <div>
              <div>
                <label for="title"></label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="Tiêu đề"
                  v-model="title"
                />
              </div>
              <div>
                <label for="content"></label>
                <input
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="Nội dung"
                  v-model="content"
                />
              </div>
            </div>

            <div class="d-flex justify-content-end m-4">
              <b-button variant="secondary" class="mx-2" @click="toggleModal"
                >Hủy</b-button
              >
              <b-button variant="primary" class="mx-2" @click="handleCreate"
                >Thêm mới</b-button
              >
            </div>
          </b-modal>
        </div>
    </div>

    <div class="row justify-content-between">
      <post-view
        v-for="(item, index) in listPost"
        v-bind:key="index"
        :data="item"
        :idModal="'model' + index"
        @delete="handleDelete"
        @update="handleUpdate"
      />
    </div>
  </div>
</template>

<script>
import PostView from "../components/PostView.vue";

import * as callApis from "../fetchApis";
export default {
  components: { PostView },
  name: "home",
  data() {
    return {
      listPost: [],
      title: "",
      content: ""
    };
  },
  methods: {
    getData: async function () {
      try {
        const res = await callApis.posts.getData();
        this.listPost = [...res];
      } catch (err) {
        console.log(err);
      }
    },
    handleDelete: async function (id) {
      try {
        const res = await callApis.posts.deleteData(id);
        console.log(res);
        this.getData();
      } catch (err) {
        console.log(err);
      }
    },
    handleUpdate: async function (data) {
      try {
        const res = await callApis.posts.updateData(data);
        console.log(res, data);
        this.getData();
      } catch (err) {
        console.log(err);
      }
    },
    toggleModal() {
      this.$refs['add'].toggle("#toggle-btn");
    },
    handleCreate: async function(){
      try {
        const res = await callApis.posts.createData({title: this.title, content: this.content});
        console.log(res);
        this.getData();
      } catch (err) {
        console.log(err);
      }
      this.toggleModal();
    }
  },
  created: function () {
    this.getData();
  },
};
</script>

<style>
</style>