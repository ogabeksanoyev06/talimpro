<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuthStore } from '@/stores/AuthStore';

definePageMeta({ layout: 'auth', middleware: 'auth' });

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);

const user = ref({
   username: '',
   lastname: '',
   firstname: '',
   phone: '',
   password: '',
   passwordConfirmation: ''
});

const usertype = ref([
   {
      value: 'applicant',
      name: 'Abituriyent'
   },
   {
      value: 'pupil',
      name: "O'quvchi"
   }
   // {
   //    value: 'teacher',
   //    name: "O'qituvchi"
   // }
]);

const selectedUserType = ref('pupil');

const passwordField = ref(true);

const passwordConfirmationField = ref(true);

const passwordSee = () => (passwordField.value = !passwordField.value);

const confirmationSee = () => (passwordConfirmationField.value = !passwordConfirmationField.value);

const registerToSystem = () => {
   authStore.register(user.value, selectedUserType.value);
};
</script>

<template>
   <div class="bg-card p-4 sm:p-8 border border-border rounded max-w-[560px] mx-auto w-full mt-3">
      <h4 class="text-xl mb-2 font-bold text-center">Ro'yxatdan o'tish</h4>
      <p class="font-medium mb-10 text-center">Ro'yxatdan o'tish uchun quyidagilarni kiriting.</p>
      <VForm v-slot="{ handleSubmit }">
         <form @submit.prevent="handleSubmit(registerToSystem)">
            <div class="flex flex-col gap-4">
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col space-y-2">
                     <Label for="terms">Foydalanuvchi turi</Label>
                     <Select id="terms" v-model="selectedUserType">
                        <SelectTrigger>
                           <SelectValue :placeholder="selectedUserType ? selectedUserType.name : 'Foydalanuvchi turi'" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectLabel>Foydalanuvchi turini tanlang</SelectLabel>
                              <SelectItem v-for="item in usertype" :key="item.value" :value="item.value">
                                 {{ item.name }}
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="username" rules="required|max:60|min:3" v-model="user.username" v-slot="{ errors }">
                        <Label for="username">Foylanuvchi nomi (username) </Label>
                        <Input
                           id="username"
                           type="text"
                           placeholder="Fodalanuvchi nomini kiriting"
                           v-model="user.username"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col space-y-2">
                     <VField name="firstName" rules="required|max:60|min:3" v-model="user.firstname" v-slot="{ errors }">
                        <Label for="firstName">Ism</Label>
                        <Input
                           id="firstName"
                           type="text"
                           placeholder="Ism"
                           v-model="user.firstname"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="lastName" rules="required|max:60|min:3" v-model="user.lastname" v-slot="{ errors }">
                        <Label for="lastName">Familiya</Label>
                        <Input
                           id="lastName"
                           type="text"
                           placeholder="Familiya"
                           v-model="user.lastname"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
               </div>
               <div class="flex flex-col space-y-2">
                  <VField name="phone" rules="required|phone|max:9" v-model="user.phone" v-slot="{ errors }">
                     <Label for="phone">Telefon raqam</Label>
                     <div class="relative w-full">
                        <Input
                           id="phone"
                           type="text"
                           placeholder="Telefon raqam"
                           v-model="user.phone"
                           class="pl-12"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                        />
                        <span class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"> 998 </span>
                     </div>
                     <span class="text-xs text-red-600">{{ errors[0] }}</span>
                  </VField>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col space-y-2">
                     <VField name="password" rules="required|passwordformat|max:8|min:8" v-model="user.password" v-slot="{ errors }">
                        <Label for="password">Parol</Label>
                        <div class="relative">
                           <Input
                              id="password"
                              :type="passwordField ? 'password' : 'text'"
                              placeholder="Parol"
                              v-model="user.password"
                              class="pr-8"
                              :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           />
                           <span class="absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="p-icon"
                                 aria-hidden="true"
                                 @click="passwordSee"
                                 v-if="!passwordField"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                                    fill="currentColor"
                                 ></path>
                              </svg>
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="p-icon"
                                 aria-hidden="true"
                                 @click="passwordSee"
                                 v-if="passwordField"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                                    fill="currentColor"
                                 ></path>
                              </svg>
                           </span>
                        </div>
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="passwordConfirmation" rules="required|passwordformat|max:8|min:8|confirmed:@password" v-model="user.passwordConfirmation" v-slot="{ errors }">
                        <Label for="passwordConfirmation">Parol tasdig'i</Label>
                        <div class="relative">
                           <Input
                              id="passwordConfirmation"
                              :type="passwordConfirmationField ? 'password' : 'text'"
                              placeholder="Parol tasdig'i"
                              v-model="user.passwordConfirmation"
                              class="pr-8"
                              :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           />
                           <span class="absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="p-icon"
                                 aria-hidden="true"
                                 @click="confirmationSee"
                                 v-if="!passwordConfirmationField"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                                    fill="currentColor"
                                 ></path>
                              </svg>
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="p-icon"
                                 aria-hidden="true"
                                 @click="confirmationSee"
                                 v-if="passwordConfirmationField"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                                    fill="currentColor"
                                 ></path>
                              </svg>
                           </span>
                        </div>
                        <span class="text-xs text-red-600">{{ errors[0] }}</span>
                     </VField>
                  </div>
               </div>
               <Button type="submit" :disabled="loading">Ro'yxatdan o'tish</Button>
            </div>
         </form>
      </VForm>
      <div class="flex justify-center items-center !mt-5">
         <NuxtLink to="/auth/login"> <Button variant="link"> Tizimga kirish </Button></NuxtLink>
      </div>
   </div>
</template>
