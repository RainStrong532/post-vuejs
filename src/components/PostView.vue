<template>
  <div class="m-3">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ data.title }}
      </b-card-text>
      <p>{{ data.content }}</p>
      <div class="d-flex">
        <div>
          <b-button v-b-modal="idModal" variant="primary">Update</b-button>

          <b-modal :id="idModal" title="Chỉnh sửa bài viết" :ref="idModal" hide-footer>
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
              <b-button variant="warning" class="mx-2" @click="handleUpdate"
                >Cập nhật</b-button
              >
            </div>
          </b-modal>
        </div>

        <div class="mx-4">
          <b-button v-b-modal="idModal + 'delete'" variant="danger">Delete</b-button>

          <b-modal
            :id="idModal + 'delete'"
            title="Bạn có chắc không?"
            :ref="idModal + 'delete'"
            hide-footer
          >
            <div class="d-flex justify-content-end m-4">
              <b-button
                variant="secondary"
                class="mx-2"
                @click="toggleModalDelete"
                >Không</b-button
              >
              <b-button variant="danger" class="mx-2" @click="handleDelete"
                >Có</b-button
              >
            </div>
          </b-modal>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "post-view",
  data() {
    return {
      title: "",
      content: "",
      id: null
    };
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: null,
          content: null,
        };
      },
    },
    idModal: {
      type: String,
    },
  },
  methods: {
    toggleModal() {
      this.$refs[this.idModal].toggle("#toggle-btn");
    },
    toggleModalDelete() {
      this.$refs[this.idModal + "delete"].toggle("#toggle-btn");
    },
    handleDelete() {
      this.$emit("delete", this.data.id);
      this.toggleModalDelete();
    },
    handleUpdate() {
      this.$emit("update", { title: this.title, content: this.content, id: this.data.id });
      this.toggleModal();
    },
  },
  created: function () {
    this.title = this.data.title ? this.data.title : "";
    this.content = this.data.content ? this.data.content : "";
  },
};
</script>

<style>
</style>