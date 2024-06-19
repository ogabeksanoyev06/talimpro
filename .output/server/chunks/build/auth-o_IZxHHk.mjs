import { l as defineNuxtRouteMiddleware, a as useCookie, n as navigateTo } from './server.mjs';
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

const auth = defineNuxtRouteMiddleware((to) => {
  const token = useCookie("access_token");
  if (token.value && (to.path === "/auth/login" || to.path === "/auth/register")) {
    return navigateTo("/");
  }
  if (!token.value && !["/auth/login", "/auth/register"].includes(to.path)) {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-o_IZxHHk.mjs.map
