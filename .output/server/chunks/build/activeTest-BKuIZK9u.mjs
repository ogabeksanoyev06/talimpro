import { l as defineNuxtRouteMiddleware, m as executeAsync, n as navigateTo } from './server.mjs';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';
import './parseQuestion-BnEt1owC.mjs';
import './testTypes-DX9gcdzZ.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';

const activeTest = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const activeTestStore = useActiveTestStore();
  [__temp, __restore] = executeAsync(() => activeTestStore.getActiveTest()), await __temp, __restore();
  if (to.path === "/active-test" && !activeTestStore.hasActiveTest) {
    return navigateTo("/profile/tests-results");
  }
});

export { activeTest as default };
//# sourceMappingURL=activeTest-BKuIZK9u.mjs.map
