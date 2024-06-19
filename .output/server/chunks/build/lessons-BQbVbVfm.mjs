import { u as useCourseStore } from './courses-CkQ_OTxl.mjs';
import { ref, unref, useSSRContext, watch, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$2 } from './AppHeader-CXy1GHHY.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$4, c as _sfc_main$2$1 } from './AccordionTrigger-prchiAh_.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';
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
import './user-BLCEGJvj.mjs';

const _sfc_main$1 = {
  __name: "CourseSidebar",
  __ssrInlineRender: true,
  props: {
    course: {
      type: Object,
      required: true
    },
    courseId: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const activeModule = ref("");
    const findActiveModule = () => {
      var _a;
      if (!props.course || !props.course.modules) {
        return;
      }
      const lessonId = route.params.lessonId;
      const foundModule = (_a = props.course) == null ? void 0 : _a.modules.find((module) => module.lessons.some((lesson) => lesson.slug === lessonId));
      if (foundModule) {
        activeModule.value = `${foundModule.id}${lessonId}`;
      } else {
        activeModule.value = "";
      }
    };
    watch(
      () => route.params.lessonId,
      () => {
        findActiveModule();
      }
    );
    watch(
      () => props.course,
      (newCourse) => {
        if (newCourse && newCourse.modules) {
          findActiveModule();
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(unref(_sfc_main$3), mergeProps({
        type: "single",
        class: "w-full border-border h-full",
        collapsible: true,
        modelValue: activeModule.value,
        "onUpdate:modelValue": ($event) => activeModule.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.course.modules, (module, i) => {
              _push2(ssrRenderComponent(unref(_sfc_main$1$1), {
                key: i,
                value: `${module.id}${unref(route).params.lessonId}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex w-full items-center justify-between p-4 font-medium transition-all text-sm bg-muted/80" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(module.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(module.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$2$1), { class: "text-sm pb-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(module.lessons, (lesson) => {
                            _push4(ssrRenderComponent(_component_nuxt_link, {
                              key: lesson.id,
                              to: `/courses/${__props.courseId}/lessons/${lesson.slug}`,
                              class: ["relative border-muted-foreground/10 border-b last:border-b-0 p-4 group transition-all duration-300 flex items-center justify-between", { "bg-blue-500/5": lesson.slug === unref(route).params.lessonId }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a, _b;
                                if (_push5) {
                                  _push5(`<div class="flex items-center space-x-3 font-medium"${_scopeId4}>`);
                                  if (lesson.is_free || ((_a = __props.course) == null ? void 0 : _a.is_bought)) {
                                    _push5(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--icon-park-solid flex-shrink-0" width="1em" height="1em" viewBox="0 0 48 48"${_scopeId4}><defs${_scopeId4}><mask id="iconifyReact10"${_scopeId4}><g fill="none" stroke-linejoin="round" stroke-width="4"${_scopeId4}><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"${_scopeId4}></path><path fill="#000" stroke="#000" d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"${_scopeId4}></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#iconifyReact10)"${_scopeId4}></path></svg>`);
                                  } else {
                                    _push5(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--solar flex-shrink-0" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId4}><path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z" clip-rule="evenodd"${_scopeId4}></path></svg>`);
                                  }
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(lesson.name)}</span></div><div class="${ssrRenderClass([{ "!opacity-100": lesson.slug === unref(route).params.lessonId }, "absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100"])}"${_scopeId4}></div><div class="${ssrRenderClass([{ "!opacity-100": lesson.slug === unref(route).params.lessonId }, "absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100"])}"${_scopeId4}></div><div${_scopeId4}><div${_scopeId4}>5:53</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center space-x-3 font-medium" }, [
                                      lesson.is_free || ((_b = __props.course) == null ? void 0 : _b.is_bought) ? (openBlock(), createBlock("svg", {
                                        key: 0,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                        "aria-hidden": "true",
                                        role: "img",
                                        "font-size": "16",
                                        class: "iconify iconify--icon-park-solid flex-shrink-0",
                                        width: "1em",
                                        height: "1em",
                                        viewBox: "0 0 48 48"
                                      }, [
                                        createVNode("defs", null, [
                                          createVNode("mask", { id: "iconifyReact10" }, [
                                            createVNode("g", {
                                              fill: "none",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "4"
                                            }, [
                                              createVNode("path", {
                                                fill: "#fff",
                                                stroke: "#fff",
                                                d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                                              }),
                                              createVNode("path", {
                                                fill: "#000",
                                                stroke: "#000",
                                                d: "M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                                              })
                                            ])
                                          ])
                                        ]),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M0 0h48v48H0z",
                                          mask: "url(#iconifyReact10)"
                                        })
                                      ])) : (openBlock(), createBlock("svg", {
                                        key: 1,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                        "aria-hidden": "true",
                                        role: "img",
                                        "font-size": "16",
                                        class: "iconify iconify--solar flex-shrink-0",
                                        width: "1em",
                                        height: "1em",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          "fill-rule": "evenodd",
                                          d: "M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z",
                                          "clip-rule": "evenodd"
                                        })
                                      ])),
                                      createVNode("span", null, toDisplayString(lesson.name), 1)
                                    ]),
                                    createVNode("div", {
                                      class: ["absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                    }, null, 2),
                                    createVNode("div", {
                                      class: ["absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                    }, null, 2),
                                    createVNode("div", null, [
                                      createVNode("div", null, "5:53")
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(module.lessons, (lesson) => {
                              return openBlock(), createBlock(_component_nuxt_link, {
                                key: lesson.id,
                                to: `/courses/${__props.courseId}/lessons/${lesson.slug}`,
                                class: ["relative border-muted-foreground/10 border-b last:border-b-0 p-4 group transition-all duration-300 flex items-center justify-between", { "bg-blue-500/5": lesson.slug === unref(route).params.lessonId }]
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode("div", { class: "flex items-center space-x-3 font-medium" }, [
                                      lesson.is_free || ((_a = __props.course) == null ? void 0 : _a.is_bought) ? (openBlock(), createBlock("svg", {
                                        key: 0,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                        "aria-hidden": "true",
                                        role: "img",
                                        "font-size": "16",
                                        class: "iconify iconify--icon-park-solid flex-shrink-0",
                                        width: "1em",
                                        height: "1em",
                                        viewBox: "0 0 48 48"
                                      }, [
                                        createVNode("defs", null, [
                                          createVNode("mask", { id: "iconifyReact10" }, [
                                            createVNode("g", {
                                              fill: "none",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "4"
                                            }, [
                                              createVNode("path", {
                                                fill: "#fff",
                                                stroke: "#fff",
                                                d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                                              }),
                                              createVNode("path", {
                                                fill: "#000",
                                                stroke: "#000",
                                                d: "M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                                              })
                                            ])
                                          ])
                                        ]),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M0 0h48v48H0z",
                                          mask: "url(#iconifyReact10)"
                                        })
                                      ])) : (openBlock(), createBlock("svg", {
                                        key: 1,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                        "aria-hidden": "true",
                                        role: "img",
                                        "font-size": "16",
                                        class: "iconify iconify--solar flex-shrink-0",
                                        width: "1em",
                                        height: "1em",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          "fill-rule": "evenodd",
                                          d: "M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z",
                                          "clip-rule": "evenodd"
                                        })
                                      ])),
                                      createVNode("span", null, toDisplayString(lesson.name), 1)
                                    ]),
                                    createVNode("div", {
                                      class: ["absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                    }, null, 2),
                                    createVNode("div", {
                                      class: ["absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                    }, null, 2),
                                    createVNode("div", null, [
                                      createVNode("div", null, "5:53")
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to", "class"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "flex w-full items-center justify-between p-4 font-medium transition-all text-sm bg-muted/80" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(module.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$2$1), { class: "text-sm pb-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(module.lessons, (lesson) => {
                            return openBlock(), createBlock(_component_nuxt_link, {
                              key: lesson.id,
                              to: `/courses/${__props.courseId}/lessons/${lesson.slug}`,
                              class: ["relative border-muted-foreground/10 border-b last:border-b-0 p-4 group transition-all duration-300 flex items-center justify-between", { "bg-blue-500/5": lesson.slug === unref(route).params.lessonId }]
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "flex items-center space-x-3 font-medium" }, [
                                    lesson.is_free || ((_a = __props.course) == null ? void 0 : _a.is_bought) ? (openBlock(), createBlock("svg", {
                                      key: 0,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                      "aria-hidden": "true",
                                      role: "img",
                                      "font-size": "16",
                                      class: "iconify iconify--icon-park-solid flex-shrink-0",
                                      width: "1em",
                                      height: "1em",
                                      viewBox: "0 0 48 48"
                                    }, [
                                      createVNode("defs", null, [
                                        createVNode("mask", { id: "iconifyReact10" }, [
                                          createVNode("g", {
                                            fill: "none",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "4"
                                          }, [
                                            createVNode("path", {
                                              fill: "#fff",
                                              stroke: "#fff",
                                              d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                                            }),
                                            createVNode("path", {
                                              fill: "#000",
                                              stroke: "#000",
                                              d: "M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                                            })
                                          ])
                                        ])
                                      ]),
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M0 0h48v48H0z",
                                        mask: "url(#iconifyReact10)"
                                      })
                                    ])) : (openBlock(), createBlock("svg", {
                                      key: 1,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                      "aria-hidden": "true",
                                      role: "img",
                                      "font-size": "16",
                                      class: "iconify iconify--solar flex-shrink-0",
                                      width: "1em",
                                      height: "1em",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        "fill-rule": "evenodd",
                                        d: "M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z",
                                        "clip-rule": "evenodd"
                                      })
                                    ])),
                                    createVNode("span", null, toDisplayString(lesson.name), 1)
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                  }, null, 2),
                                  createVNode("div", {
                                    class: ["absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                  }, null, 2),
                                  createVNode("div", null, [
                                    createVNode("div", null, "5:53")
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1032, ["to", "class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.course.modules, (module, i) => {
                return openBlock(), createBlock(unref(_sfc_main$1$1), {
                  key: i,
                  value: `${module.id}${unref(route).params.lessonId}`
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$4), { class: "flex w-full items-center justify-between p-4 font-medium transition-all text-sm bg-muted/80" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(module.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$2$1), { class: "text-sm pb-0" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(module.lessons, (lesson) => {
                          return openBlock(), createBlock(_component_nuxt_link, {
                            key: lesson.id,
                            to: `/courses/${__props.courseId}/lessons/${lesson.slug}`,
                            class: ["relative border-muted-foreground/10 border-b last:border-b-0 p-4 group transition-all duration-300 flex items-center justify-between", { "bg-blue-500/5": lesson.slug === unref(route).params.lessonId }]
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("div", { class: "flex items-center space-x-3 font-medium" }, [
                                  lesson.is_free || ((_a = __props.course) == null ? void 0 : _a.is_bought) ? (openBlock(), createBlock("svg", {
                                    key: 0,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "aria-hidden": "true",
                                    role: "img",
                                    "font-size": "16",
                                    class: "iconify iconify--icon-park-solid flex-shrink-0",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 48 48"
                                  }, [
                                    createVNode("defs", null, [
                                      createVNode("mask", { id: "iconifyReact10" }, [
                                        createVNode("g", {
                                          fill: "none",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "4"
                                        }, [
                                          createVNode("path", {
                                            fill: "#fff",
                                            stroke: "#fff",
                                            d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                                          }),
                                          createVNode("path", {
                                            fill: "#000",
                                            stroke: "#000",
                                            d: "M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                                          })
                                        ])
                                      ])
                                    ]),
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M0 0h48v48H0z",
                                      mask: "url(#iconifyReact10)"
                                    })
                                  ])) : (openBlock(), createBlock("svg", {
                                    key: 1,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "aria-hidden": "true",
                                    role: "img",
                                    "font-size": "16",
                                    class: "iconify iconify--solar flex-shrink-0",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      "fill-rule": "evenodd",
                                      d: "M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z",
                                      "clip-rule": "evenodd"
                                    })
                                  ])),
                                  createVNode("span", null, toDisplayString(lesson.name), 1)
                                ]),
                                createVNode("div", {
                                  class: ["absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                }, null, 2),
                                createVNode("div", {
                                  class: ["absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100", { "!opacity-100": lesson.slug === unref(route).params.lessonId }]
                                }, null, 2),
                                createVNode("div", null, [
                                  createVNode("div", null, "5:53")
                                ])
                              ];
                            }),
                            _: 2
                          }, 1032, ["to", "class"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/CourseSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "lessons",
  __ssrInlineRender: true,
  setup(__props) {
    const courseStore = useCourseStore();
    const { course } = storeToRefs(courseStore);
    const route = useRoute();
    const course_id = ref(route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="py-8"><div class="container"><div class="grid gap-6 xl:grid-cols-6"><div class="xl:col-span-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="h-min xl:col-span-2">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        course: unref(course),
        courseId: course_id.value
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/lessons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lessons-BQbVbVfm.mjs.map
