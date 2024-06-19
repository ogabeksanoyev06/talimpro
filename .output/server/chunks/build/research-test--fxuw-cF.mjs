import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { _ as _sfc_main$2 } from './index-BIInlcvZ.mjs';
import { mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { s as storeToRefs, n as navigateTo } from './server.mjs';
import { c as currencyFormat } from './format-CPZu5AVV.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './index--b-3J809.mjs';
import { u as useTestStore } from './test-CgfQXDQI.mjs';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
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
import 'radix-vue';
import './useApi-B16mdXqT.mjs';
import 'axios';
import './parseQuestion-BnEt1owC.mjs';
import './testTypes-DX9gcdzZ.mjs';

const _sfc_main = {
  __name: "research-test",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const testStore = useTestStore();
    const activeTestStore = useActiveTestStore();
    const { testTypes, testId, loading } = storeToRefs(testStore);
    const { hasActiveTest } = storeToRefs(activeTestStore);
    const handleTestStart = (research_id) => {
      if (hasActiveTest.value) {
        navigateTo("/active-test");
      } else {
        router.push(`/test-types/research/${research_id}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Badge = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 bg-gray-100 dark:bg-transparent" }, _attrs))}><div class="container"><div class="space-y-2"><h1 class="text-2xl sm:text-4xl font-semibold tracking-tight">Maktab o&#39;quvchilari uchun Xalqaro tadqiqotlar yo&#39;nalishi bo&#39;yicha test topshirish tizimi</h1><p class="text-base sm:text-lg text-muted-foreground">Davlat standarti asosida tuzilgan test savollaridan foydalangan holda test topshirish imkoni</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"><!--[-->`);
      ssrRenderList(unref(testTypes), (item) => {
        _push(`<div class="relative rounded-xl bg-card border-b border-border dark:border-white p-4 md:p-6 flex flex-col cursor-pointer transition-300 hover:shadow-card h-full gap-2 md:gap-4"><div class="flex-grow flex flex-col gap-2"><h3 class="text-xl font-semibold w-full">${ssrInterpolate(item.title)}</h3><p class="text-justify sm:text-start">${ssrInterpolate(item.short_description)}</p></div><div class="flex flex-col gap-2 sm:flex-row sm:justify-between">`);
        if (item.is_free || item.bought) {
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => handleTestStart(item.id),
            disabled: unref(loading) && item.id === unref(testId)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(testStore).loading && item.id === unref(testStore).testId) {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="48" class="animate-spin iconify iconify--ph w-5 h-5 mr-2" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` Testni boshlash `);
              } else {
                return [
                  unref(testStore).loading && item.id === unref(testStore).testId ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "aria-hidden": "true",
                    role: "img",
                    "font-size": "48",
                    class: "animate-spin iconify iconify--ph w-5 h-5 mr-2",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 256 256"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                    })
                  ])) : createCommentVNode("", true),
                  createTextVNode(" Testni boshlash ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!item.is_free && !item.bought) {
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => unref(testStore).buyExams(item.id, "research"),
            disabled: unref(loading) && item.id === unref(testId)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(loading) && item.id === unref(testId)) {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="48" class="animate-spin iconify iconify--ph w-5 h-5 mr-2" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` Sotib olish `);
              } else {
                return [
                  unref(loading) && item.id === unref(testId) ? (openBlock(), createBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "aria-hidden": "true",
                    role: "img",
                    "font-size": "48",
                    class: "animate-spin iconify iconify--ph w-5 h-5 mr-2",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 256 256"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                    })
                  ])) : createCommentVNode("", true),
                  createTextVNode(" Sotib olish ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/top-up-balance" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, { variant: "outline" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Hisobni to&#39;ldirish`);
                  } else {
                    return [
                      createTextVNode("Hisobni to'ldirish")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1, { variant: "outline" }, {
                  default: withCtx(() => [
                    createTextVNode("Hisobni to'ldirish")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="absolute top-1 right-1">`);
        _push(ssrRenderComponent(_component_Badge, {
          variant: "outline",
          class: "rounded-lg text-green-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price))} UZS`);
            } else {
              return [
                createTextVNode(toDisplayString(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price)) + " UZS", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/research-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=research-test--fxuw-cF.mjs.map
