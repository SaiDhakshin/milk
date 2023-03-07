<template>
  <div>
    <div><Header></Header></div>
    <!-- UI -->
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          Hi,{{ this.user }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Check Your Details.</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              <div class="m-4">
                <label for="start-date">Start Date</label>
                <input id="start-date" type="date" v-model="startDate" />
              </div>
              <div class="py-4">
                <label for="end-date">End Date</label>
                <input id="end-date" type="date" v-model="endDate" />
              </div>
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Application for</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">About</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Attachments</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                class="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li
                  class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-2 w-0 flex-1 truncate"
                      >resume_back_end_developer.pdf</span
                    >
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >Download</a
                    >
                  </div>
                </li>
                <li
                  class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                >
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-2 w-0 flex-1 truncate"
                      >coverletter_back_end_developer.pdf</span
                    >
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      >Download</a
                    >
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <Upload ref="upload" :addSong="addSong"></Upload>

    <!-- From Firebase -->

    <FileItem
      v-for="(song, index) in songs"
      :key="song.docID"
      :song="song"
      :updateItem="updateItem"
      :deleteItem="deleteItem"
      :index="index"
    ></FileItem>

    <!-- From Firebase End-->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { PaperClipIcon } from "@heroicons/vue/20/solid";
import { mapStores, mapWritableState } from "pinia";
import useUserStore from "../stores/user";
import Upload from "../components/Upload.vue";
import { auth, fileCollection } from "../includes/firebase";
import FileItem from "./FileItem.vue";

export default {
  name: "Landing",
  async created() {
    const snapshot = await fileCollection
      .where("uid", "==", auth.currentUser.uid)
      .get();

    snapshot.forEach((document) => {
      const song = {
        ...document.data(),
        docID: document.id,
      };

      this.songs.push(song);
      console.log(song);
    });
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      user: "" || auth.currentUser.displayName,
      songs: [],
    };
  },
  components: {
    Header,
    PaperClipIcon,
    Upload,
    FileItem,
  },
  computed: {
    ...mapStores(useUserStore),
    ...mapWritableState(useUserStore, ["username"]),
  },
  methods: {
    updateItem(i, values) {
      this.songs[i].original_name = values.original_name;
      this.songs[i].display_name = values.display_name;
    },
    deleteItem(index) {
      this.songs.splice(index, 1);
    },
    addSong() {},
  },
};
</script>

<style></style>
