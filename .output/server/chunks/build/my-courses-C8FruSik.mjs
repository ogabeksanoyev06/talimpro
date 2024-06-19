import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useCourseStore } from './courses-CkQ_OTxl.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';
import 'vue-router';
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

const _sfc_main = {
  __name: "my-courses",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const courseStore = useCourseStore();
    const { boughtCourses, loading } = storeToRefs(courseStore);
    [__temp, __restore] = withAsyncContext(() => courseStore.getBoughtCourses()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Mening kurslarim</h3><div class="grid grid-cols-1 gap-6"><!--[-->`);
      ssrRenderList(unref(boughtCourses), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.id,
          to: `/courses/${item.course.id}`,
          class: "flex flex-col border-b border-gray-300 bg-secondary gap-2 p-3 sm:p-6 md:p-10 cursor-pointer relative group rounded-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="text-xl sm:text-2xl font-semibold leading-none tracking-tight mb-4"${_scopeId}>${ssrInterpolate(item.course.title)}</h3><p class="text-sm text-muted-foreground mb-2"${_scopeId}>${ssrInterpolate(item.course.teacher)}</p><div class="flex items-center gap-x-4"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="18" class="iconify iconify--fluent" width="1em" height="1em" viewBox="0 0 20 20"${_scopeId}><path fill="currentColor" d="M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"${_scopeId}></path></svg><span class="truncate"${_scopeId}>${ssrInterpolate(item.course.modules_count)} ta modul</span></div><div class="flex items-center gap-x-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="18" class="iconify iconify--iconoir" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${_scopeId}><path d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"${_scopeId}></path><path d="M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z"${_scopeId}></path></g></svg><span class="truncate"${_scopeId}>${ssrInterpolate(item.course.lessons_count)} ta video</span></div></div><div class="absolute right-2 top-2 w-10 h-10 bg-secondary flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-primary"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up rotate-45 w-5 h-5 group-hover:text-card"${_scopeId}><path d="m5 12 7-7 7 7"${_scopeId}></path><path d="M12 19V5"${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("h3", { class: "text-xl sm:text-2xl font-semibold leading-none tracking-tight mb-4" }, toDisplayString(item.course.title), 1),
                createVNode("p", { class: "text-sm text-muted-foreground mb-2" }, toDisplayString(item.course.teacher), 1),
                createVNode("div", { class: "flex items-center gap-x-4" }, [
                  createVNode("div", { class: "flex items-center gap-x-2" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      role: "img",
                      "font-size": "18",
                      class: "iconify iconify--fluent",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 20 20"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      })
                    ])),
                    createVNode("span", { class: "truncate" }, toDisplayString(item.course.modules_count) + " ta modul", 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-x-2" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      role: "img",
                      "font-size": "18",
                      class: "iconify iconify--iconoir",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("g", {
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5"
                      }, [
                        createVNode("path", { d: "M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6" }),
                        createVNode("path", { d: "M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z" })
                      ])
                    ])),
                    createVNode("span", { class: "truncate" }, toDisplayString(item.course.lessons_count) + " ta video", 1)
                  ])
                ]),
                createVNode("div", { class: "absolute right-2 top-2 w-10 h-10 bg-secondary flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-primary" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "lucide lucide-arrow-up rotate-45 w-5 h-5 group-hover:text-card"
                  }, [
                    createVNode("path", { d: "m5 12 7-7 7 7" }),
                    createVNode("path", { d: "M12 19V5" })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/my-courses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-courses-C8FruSik.mjs.map
