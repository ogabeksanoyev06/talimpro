import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, defineComponent, computed, renderSlot } from 'vue';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import { s as storeToRefs, n as navigateTo } from './server.mjs';
import { p as parseQuestion } from './parseQuestion-BnEt1owC.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './index--b-3J809.mjs';
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator } from 'radix-vue';
import { CheckIcon } from '@radix-icons/vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2$1 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { _ as _sfc_main$8 } from './SelectLabel-tcdEgKea.mjs';
import { u as useTestStore } from './test-CgfQXDQI.mjs';
import './testTypes-DX9gcdzZ.mjs';
import 'vue-router';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const testStore = useTestStore();
    const activeTestStore = useActiveTestStore();
    const { blogTestSubjects, loading } = storeToRefs(testStore);
    const { hasActiveTest } = storeToRefs(activeTestStore);
    const questionsCount = ref(5);
    const selectedLevel = ref("beginner");
    const scienceId = ref(null);
    const subjectList = ref([]);
    const questionsCountSelect = [
      {
        id: 5,
        name: 5
      },
      {
        id: 10,
        name: 10
      },
      {
        id: 15,
        name: 15
      },
      {
        id: 20,
        name: 20
      },
      {
        id: 25,
        name: 25
      },
      {
        id: 30,
        name: 30
      }
    ];
    const questionLevelList = [
      {
        id: "beginner",
        name: "Oson",
        disabled: false
      },
      {
        id: "medium",
        name: "O'rta",
        disabled: true
      },
      {
        id: "advanced",
        name: "Qiyin",
        disabled: true
      }
    ];
    function selectedScience(id) {
      scienceId.value = id;
      subjectList.value = [];
      testStore.getBlogTestSubjects({ science_id: id });
    }
    function handleChange(id) {
      if (!subjectList.value.includes(id)) {
        subjectList.value.push(id);
      } else {
        subjectList.value = subjectList.value.filter((item) => item !== id);
      }
    }
    async function startTest() {
      if (hasActiveTest.value) {
        navigateTo("/active-test");
      } else {
        const paramtersModel = {
          subject_list: subjectList.value,
          science_id: scienceId.value,
          test_score: selectedLevel.value,
          test_count: questionsCount.value
        };
        testStore.startBlogTest(paramtersModel);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div><h4 class="text-xl font-semibold mb-4">Fanni tanlang</h4><div class="flex flex-wrap gap-2 border-b border-border pb-8"><!--[-->`);
      ssrRenderList(unref(testStore).blogTestSciences, (item) => {
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          key: item.id,
          variant: item.id === scienceId.value ? "" : "outline",
          onClick: ($event) => selectedScience(item.id)
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
      _push(`<!--]--></div></div>`);
      if (scienceId.value) {
        _push(`<div class="mt-6"><h4 class="text-xl font-semibold mb-4">Mavzuni tanlang</h4><div class="flex flex-col space-y-2"><!--[-->`);
        ssrRenderList(unref(blogTestSubjects), (item) => {
          var _a;
          _push(`<div class="flex items-center space-x-4">`);
          _push(ssrRenderComponent(unref(_sfc_main$1), {
            id: item.id,
            checked: subjectList.value.includes(item.id),
            "onUpdate:checked": ($event) => handleChange(item.id)
          }, null, _parent));
          _push(`<label${ssrRenderAttr("for", item.id)} class="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">${(_a = ("parseQuestion" in _ctx ? _ctx.parseQuestion : unref(parseQuestion))(item.name)) != null ? _a : ""}</label></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: questionsCount.value,
        "onUpdate:modelValue": ($event) => questionsCount.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Savollar sonini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Savollar sonini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Savollar sonini tanlang`);
                            } else {
                              return [
                                createTextVNode("Savollar sonini tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(questionsCountSelect, (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode("Savollar sonini tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(questionsCountSelect, (item) => {
                            return createVNode(unref(_sfc_main$2$1), {
                              key: item.id,
                              value: item.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode("Savollar sonini tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(questionsCountSelect, (item) => {
                          return createVNode(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Savollar sonini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createTextVNode("Savollar sonini tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(questionsCountSelect, (item) => {
                        return createVNode(unref(_sfc_main$2$1), {
                          key: item.id,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedLevel.value,
        "onUpdate:modelValue": ($event) => selectedLevel.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Darajani tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Darajani tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Darajani tanlang`);
                            } else {
                              return [
                                createTextVNode("Darajani tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(questionLevelList, (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id,
                            disabled: item.disabled
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode("Darajani tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(questionLevelList, (item) => {
                            return createVNode(unref(_sfc_main$2$1), {
                              key: item.id,
                              value: item.id,
                              disabled: item.disabled
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "disabled"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode("Darajani tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(questionLevelList, (item) => {
                          return createVNode(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id,
                            disabled: item.disabled
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Darajani tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createTextVNode("Darajani tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(questionLevelList, (item) => {
                        return createVNode(unref(_sfc_main$2$1), {
                          key: item.id,
                          value: item.id,
                          disabled: item.disabled
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-center mt-6">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        onClick: startTest,
        disabled: !scienceId.value && !subjectList.value.length > 0 && !selectedLevel.value && !questionsCount.value || unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(testStore).loading) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="48" class="animate-spin iconify iconify--ph w-5 h-5 mr-2" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` Testni boshlash `);
          } else {
            return [
              unref(testStore).loading ? (openBlock(), createBlock("svg", {
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
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-types/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-DXzRd9dr.mjs.map
