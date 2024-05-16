<script setup>
import { ref, watchEffect, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Button } from '@/components/ui/button';
import { Input } from '~/components/ui/input';
import { useUserStore } from '~/stores/user';
import { useCommonStore } from '~/stores/common';

definePageMeta({ layout: 'cabinet' });

const usertype = [
   {
      value: 'applicant',
      name: 'Abituriyent'
   },
   {
      value: 'pupil',
      name: "O'quvchi"
   }
];

const userStore = useUserStore();
const commonStore = useCommonStore();

const { user, loading } = storeToRefs(userStore);
const { regions, districts, schools } = storeToRefs(commonStore);

commonStore.getRegions();

watchEffect(() => {
   if (user.value.region !== null && user.value.region !== undefined) {
      commonStore.getDistricts(user.value.region);
   }
});

watchEffect(() => {
   if (user.value.district !== null && user.value.district !== undefined) {
      commonStore.getSchools(user.value.district);
   }
});
</script>

<template>
   <div>
      <h3 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Asosiy ma'lumotlar</h3>
      <VForm v-slot="{ handleSubmit }">
         <form @submit.prevent="handleSubmit(userStore.updateUserProfile)">
            <div>
               <div class="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 mb-8">
                  <div class="flex flex-col space-y-2">
                     <VField name="username" rules="required|max:60|min:3" v-model="user.username" v-slot="{ errors }">
                        <Label for="username">Foydalanuvchi nomi</Label>
                        <Input
                           id="username"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           :disabled="loading"
                           :class="errors.length > 0 ? 'focus-visible:border-destructive border-destructive' : ''"
                           v-model="user.username"
                        />
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="first_name" rules="required|max:60|min:3" v-model="user.first_name" v-slot="{ errors }">
                        <Label for="first_name">Ism</Label>
                        <Input
                           id="first_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           :disabled="loading"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           v-model="user.first_name"
                        />
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="last_name" rules="required|max:60|min:3" v-model="user.last_name" v-slot="{ errors }">
                        <Label for="last_name">Familiya</Label>
                        <Input
                           id="last_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           :disabled="loading"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           v-model="user.last_name"
                        />
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="father_name" rules="max:60|min:3" v-model="user.father_name" v-slot="{ errors }">
                        <Label for="father_name">Otasining ismi</Label>
                        <Input
                           id="father_name"
                           type="text"
                           placeholder="Fodalanuvchi nomi"
                           :disabled="loading"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           v-model="user.father_name"
                        />
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="email" rules="email" v-model="user.email" v-slot="{ errors }">
                        <Label for="email">Email</Label>
                        <Input
                           id="email"
                           type="text"
                           placeholder="Email"
                           :disabled="loading"
                           :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                           v-model="user.email"
                        />
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="phone" rules="phone|max:9" v-model="user.phone" v-slot="{ errors }">
                        <Label for="phone">Telefon raqam</Label>
                        <div class="relative w-full">
                           <Input
                              id="phone"
                              type="text"
                              placeholder="Telefon raqam"
                              :disabled="loading"
                              class="pl-14"
                              :class="errors.length > 0 ? 'focus-visible:border-red-600 border-red-600' : ''"
                              v-model="user.phone"
                           />
                           <span class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3">+ 998 </span>
                        </div>
                        <span class="text-xs text-destructive">{{ errors[0] }}</span>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="usertype">
                        <Label for="usertype">Yo'nalish </Label>
                        <Select v-model="user.type" :disabled="loading">
                           <SelectTrigger>
                              <SelectValue placeholder="Yo'nalishni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="(type, i) in usertype" :key="i + 2" :value="type.value">
                                    {{ type.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="region">
                        <Label for="region">Viloyat</Label>
                        <Select v-model="user.region" :disabled="loading">
                           <SelectTrigger>
                              <SelectValue placeholder="Viloyatni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="region in regions" :key="region.id" :value="region.id">
                                    {{ region.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="district">
                        <Label for="district">Tuman</Label>
                        <Select v-model="user.district" :disabled="user.region === '' || loading">
                           <SelectTrigger>
                              <SelectValue placeholder="Tumanni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="district in districts" :key="district.id" :value="district.id">
                                    {{ district.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
                  <div class="flex flex-col space-y-2">
                     <VField name="school">
                        <Label for="school">Maktab</Label>
                        <Select v-model="user.school" :disabled="user.district === '' || loading">
                           <SelectTrigger>
                              <SelectValue placeholder="Maktabni tanlang" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Tanlang</SelectLabel>
                                 <SelectItem v-for="school in schools" :key="school.id" :value="school.id">
                                    {{ school.name }}
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </VField>
                  </div>
               </div>

               <Button type="submit" class="w-full sm:w-auto" :disabled="loading">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     font-size="48"
                     class="animate-spin iconify iconify--ph w-5 h-5 mr-2"
                     width="1em"
                     height="1em"
                     viewBox="0 0 256 256"
                     v-if="loading"
                  >
                     <path
                        fill="currentColor"
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                     ></path>
                  </svg>
                  Saqlash
               </Button>
            </div>
         </form>
      </VForm>
   </div>
</template>
