<template>
  <TransitionRoot as="template" :show="this.isOpen">
    <Dialog as="div" class="relative z-10" @close="this.isOpen = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <!-- <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationTriangleIcon
                      class="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div> -->
                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <!-- <DialogTitle
                      as="h3"
                      class="text-lg font-medium leading-6 text-gray-900"
                      >Deactivate account</DialogTitle
                    > -->
                    <h2
                      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
                    >
                      Log in to your account
                    </h2>
                    <div class="mt-2">
                      <vee-form
                        :validation-schema="schema"
                        @submit="onLog"
                        class="mt-8 space-y-6"
                        action="#"
                        method="POST"
                      >
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label for="email" class="sr-only"
                              >Email address</label
                            >
                            <vee-field
                              name="email"
                              type="email"
                              autocomplete="email"
                              required=""
                              class="space-px relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Email address"
                            />
                            <ErrorMessage name="email" />
                          </div>
                          <div>
                            <label for="password" class="sr-only"
                              >Password</label
                            >
                            <vee-field
                              name="password"
                              type="password"
                              autocomplete="current-password"
                              required=""
                              class="space-px relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="remember-me"
                              class="ml-2 block text-sm text-gray-900"
                              >Remember me</label
                            >
                          </div>

                          <div class="text-sm">
                            <a
                              href="#"
                              class="font-medium text-indigo-600 hover:text-indigo-500 mx-1"
                              >Forgot your password?</a
                            >

                            <RouterLink
                              @click="this.isOpen = false"
                              class="font-medium text-indigo-600 hover:text-indigo-500 mx-1"
                              to="register"
                              >Register</RouterLink
                            >
                          </div>
                        </div>

                        <div>
                          <!-- <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button> -->
                        </div>
                        <button
                          type="submit"
                          class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                          >
                            <LockClosedIcon
                              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            />
                          </span>
                          <button type="submit">Log in</button>
                        </button>
                      </vee-form>
                      <p class="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Buttons -->
              <!-- <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="this.isOpen = false"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="this.isOpen = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <LockClosedIcon
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  <button type="submit">Log in</button>
                </button>
              </div> -->
              <!-- Buttons End-->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import { mapStores, mapWritableState } from "pinia";
import useModalStore from "../stores/counter";
import useUserStore from "../stores/user";
import { auth } from "../includes/firebase";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

export default {
  computed: {
    ...mapStores(useModalStore),
    ...mapWritableState(useModalStore, ["isOpen"]),
    ...mapWritableState(useUserStore, ["authenticate", "userLoggedIn"]),
  },
  data() {
    return {
      open: this.isOpen,
      schema: {
        email: "min:3|required|email",

        password: "required",
        // confirmpassword: "confirmed:@password|required",
        // Country: "required|excluded:Asia",
      },
    };
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LoginForm,
  },
  methods: {
    async onLog(values) {
      console.log("The login values:" + values.email);

      try {
        await this.authenticate(values);
      } catch (error) {
        console.log("Authenticate failed");
      }

      if (this.userLoggedIn == true) {
        this.isOpen = false;

        setTimeout(() => {
          this.$router.push("/landing");
        }, 2000);
      }
    },
  },
};
</script>
