import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { c as currencyFormat } from './format-CPZu5AVV.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { _ as _sfc_main$2 } from './index-BIInlcvZ.mjs';
import { _ as _sfc_main$1 } from './index--b-3J809.mjs';
import { u as useCourseStore } from './courses-CkQ_OTxl.mjs';
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
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courseStore = useCourseStore();
    const { courses, categories, selectedCategory, loading } = storeToRefs(courseStore);
    const selectCategory = (categoryId) => {
      courseStore.selectCategory(categoryId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="flex flex-wrap justify-center sm:justify-start gap-2 mb-8"><!--[-->`);
      ssrRenderList(unref(categories), (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: item.id,
          variant: item.id === unref(selectedCategory) ? "default" : "outline",
          onClick: ($event) => selectCategory(item.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(categories).length > 0 && ((_a = unref(courses)) == null ? void 0 : _a.length) === 0) {
        _push(`<p class="mb-8 text-center font-bold text-base">Tanlangan kategoriya bo&#39;yicha kurslar mavjud emas</p>`);
      } else {
        _push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(courses), (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: index,
            to: `/courses/${item.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-col overflow-hidden rounded-md border group bg-card hover:shadow-sm"${_scopeId}><div class="relative aspect-video"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)}${_scopeId}></div><div class="flex flex-col gap-y-4 p-4 group-hover:bg-muted/25 transition-all"${_scopeId}><div class="space-y-2"${_scopeId}><h3 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(item.title)}</h3><h4 class="text-base font-medium text-foreground"${_scopeId}>${ssrInterpolate(item.teacher)}</h4><p class="text-sm sm:text-base text-muted-foreground/80 line-clamp-2"${_scopeId}>${ssrInterpolate(item.description)}</p></div><div class="flex items-center gap-x-4"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="18" class="iconify iconify--fluent" width="1em" height="1em" viewBox="0 0 20 20"${_scopeId}><path fill="currentColor" d="M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"${_scopeId}></path></svg><span class="text-sm sm:text-base"${_scopeId}>${ssrInterpolate(item.modules_count)} ta modul</span></div><div class="flex items-center gap-x-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="18" class="iconify iconify--iconoir" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${_scopeId}><path d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"${_scopeId}></path><path d="M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z"${_scopeId}></path></g></svg><span class="text-sm sm:text-base"${_scopeId}>${ssrInterpolate(item.lessons_count)} ta video</span></div></div><div class="flex flex-wrap items-center justify-between gap-1"${_scopeId}><div class="${ssrRenderClass([item.is_free ? "line-through" : "", "text-xl font-medium"])}"${_scopeId}>${ssrInterpolate(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price))} UZS</div>`);
                if (item.is_free) {
                  _push2(ssrRenderComponent(_sfc_main$2, { size: "lg" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Tekin`);
                      } else {
                        return [
                          createTextVNode("Tekin")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col overflow-hidden rounded-md border group bg-card hover:shadow-sm" }, [
                    createVNode("div", { class: "relative aspect-video" }, [
                      createVNode("img", {
                        src: item.image,
                        alt: item.title
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-y-4 p-4 group-hover:bg-muted/25 transition-all" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "text-xl font-bold" }, toDisplayString(item.title), 1),
                        createVNode("h4", { class: "text-base font-medium text-foreground" }, toDisplayString(item.teacher), 1),
                        createVNode("p", { class: "text-sm sm:text-base text-muted-foreground/80 line-clamp-2" }, toDisplayString(item.description), 1)
                      ]),
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
                          createVNode("span", { class: "text-sm sm:text-base" }, toDisplayString(item.modules_count) + " ta modul", 1)
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
                          createVNode("span", { class: "text-sm sm:text-base" }, toDisplayString(item.lessons_count) + " ta video", 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap items-center justify-between gap-1" }, [
                        createVNode("div", {
                          class: ["text-xl font-medium", item.is_free ? "line-through" : ""]
                        }, toDisplayString(("currencyFormat" in _ctx ? _ctx.currencyFormat : unref(currencyFormat))(item.price)) + " UZS", 3),
                        item.is_free ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 0,
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tekin")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ECq_BRgu.mjs.map
