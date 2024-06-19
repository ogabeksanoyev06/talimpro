import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { p as phoneFormat, c as currencyFormat } from './format-CPZu5AVV.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { useRoute } from 'vue-router';
import { u as useUserStore } from './user-BLCEGJvj.mjs';
import { A as AppFooter } from './AppFooter-Df6SItb_.mjs';
import { _ as _sfc_main$1 } from './AppHeader-CXy1GHHY.mjs';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vee-validate';
import 'vue-sonner';
import './useApi-B16mdXqT.mjs';
import 'axios';
import './logo-dark-D8HvwyBX.mjs';
import './index--b-3J809.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './DialogContent-DzqGgtf6.mjs';
import '@radix-icons/vue';
import './AuthStore-CoOPwA7b.mjs';

const _sfc_main = {
  __name: "cabinet",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { user, fullNameInitial, fullName } = storeToRefs(userStore);
    const route = useRoute();
    const currentRoute = computed(() => route.path);
    const menu = [
      {
        title: "Asosiy malumotlar",
        path: "/profile"
      },
      {
        title: "Mening kurslarim",
        path: "/profile/my-courses"
      },
      {
        title: "Hisobni to`ldirish",
        path: "/profile/top-up-balance"
      },
      {
        title: "To`lovlar tarixi",
        path: "/profile/payment-history"
      },
      {
        title: "Test natijalari",
        path: "/profile/tests-results"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class="py-8"><div class="container"><div class="grid gap-6 grid-cols-1 md:grid-cols-7"><div class="md:col-span-2"><div class="sticky top-28 flex flex-col gap-y-6"><div class="flex flex-col gap-y-3 p-4 bg-card border rounded-md"><div class="flex items-center gap-x-3"><div class="relative ml-1 overflow-hidden shrink-0 before:border before:border-solid before:border-white before:opacity-20 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full cursor-pointer"><div class="rounded-full relative"><div class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full">`);
      if (!((_a = unref(user)) == null ? void 0 : _a.photo)) {
        _push(`<div class="flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary">${ssrInterpolate(unref(fullNameInitial))}</div>`);
      } else {
        _push(`<div class="w-full h-full object-cover bg-white"><img alt="avatar-image" class="object-cover w-full h-full"${ssrRenderAttr("src", (_b = unref(user)) == null ? void 0 : _b.photo)}></div>`);
      }
      _push(`</div></div></div><div class="flex flex-col"><div class="sm:text-base lg:text-xl font-bold">${ssrInterpolate(unref(fullName))}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(("phoneFormat" in _ctx ? _ctx.phoneFormat : unref(phoneFormat))((_c = unref(user)) == null ? void 0 : _c.phone))}</div></div></div><div><h3 class="sm:text-base lg:text-xl font-bold"> Mening hisobim : <span class="text-green-500">${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))((_d = unref(user)) == null ? void 0 : _d.balance))} UZS</span></h3></div></div><div class="p-1 border rounded-md bg-muted space-y-[2px]"><!--[-->`);
      ssrRenderList(menu, (item, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["flex px-4 py-3 rounded-md hover:bg-foreground/5 transition-all text-base", { "!bg-card hover:bg-card": item.path === unref(currentRoute) }],
          key: i,
          to: item.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><div class="md:col-span-5"><div class="p-4 bg-card border rounded-md">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></main>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/cabinet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cabinet-Bau4C5Ua.mjs.map
