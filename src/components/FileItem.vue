<template>
  <div>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ song.original_name }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ song.display_name }}
    </p>
    <i class="fa fa-pencil-alt m-4" @click.prevent="showForm = !showForm"></i>
    <i class="fa fa-times" @click.prevent="deleteItem"></i>

    <div v-show="showForm">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-if="show_alert"
        :class="alert_variant"
      >
        {{ alert_message }}
      </div>
      <vee-form @submit="edit">
        <div class="mb-6">
          <label
            for="original_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Original Name</label
          >
          <vee-field
            type="email"
            name="original_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="display_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Display Name</label
          >
          <vee-field
            name="display_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="flex items-start mb-6"></div>
        <button
          :disabled="in_submission"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script>
import { fileCollection, storage } from "../includes/firebase";
export default {
  name: "FileItem",
  data() {
    return {
      showForm: false,
      in_submission: false,
      show_alert: false,
      alert_variant: "bg-blue-500",
      alert_message: "Please wait! Updating song info.",
    };
  },
  props: ["song", "updateItem", "index", "deleteItem"],
  methods: {
    async edit(values) {
      console.log("Song Edit");
      this.in_submission = true;
      this.show_alert = true;
      this.alert_variant = "bg-blue-500";
      this.alert_message = "Please wait! Updating song info.";

      console.log(values);

      try {
        await fileCollection.doc(this.song.docID).update(values);
      } catch (error) {
        this.in_submission = false;
        this.alert_message = "Something went wrong!";
        this.alert_variant = "bg-red-500";
        return;
      }

      this.in_submission = false;

      this.alert_variant = "bg-green-500";
      this.alert_message = "Success";

      this.updateItem(this.index, values);
    },
    async deleteItem() {
      const storageRef = storage.ref();
      const songRef = storageRef.child(`sample/${this.song.modified_name}`);

      await songRef.delete();

      await fileCollection.doc(this.song.docID).delete();

      this.deleteItem(this.index);
    },
  },
};
</script>

<style></style>
