import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2$1 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { _ as _sfc_main$2 } from './SelectLabel-tcdEgKea.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import { s as storeToRefs, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './index--b-3J809.mjs';
import { u as useTestStore } from './test-CgfQXDQI.mjs';
import 'radix-vue';
import '@radix-icons/vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './parseQuestion-BnEt1owC.mjs';
import './testTypes-DX9gcdzZ.mjs';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const testStore = useTestStore();
    const activeTestStore = useActiveTestStore();
    const { researches, loading } = storeToRefs(testStore);
    const { hasActiveTest } = storeToRefs(activeTestStore);
    const research_id = ref("");
    const selected_specification = ref(null);
    const questionsCount = ref(5);
    const questionsCountSelect = ref([
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
    ]);
    function startTest() {
      if (hasActiveTest.value) {
        navigateTo("/active-test");
      } else {
        const paramtersModel = {
          test_type_id: research_id.value,
          specification_id: selected_specification.value,
          question_count: questionsCount.value
        };
        testStore.startResearchesTest(paramtersModel);
      }
    }
    research_id.value = route.params.id;
    testStore.getResearchById(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Select = _sfc_main$7;
      const _component_SelectTrigger = _sfc_main$5;
      const _component_SelectValue = _sfc_main$6;
      const _component_SelectContent = _sfc_main$4;
      const _component_SelectGroup = _sfc_main$3;
      const _component_SelectLabel = _sfc_main$2;
      const _component_SelectItem = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="flex flex-col justify-center sm:justify-start space-y-3"><h1 class="text-center sm:text-left text-2xl font-bold sm:text-3xl">${ssrInterpolate((_a = unref(researches)) == null ? void 0 : _a.title)}</h1><p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base max-w-[900px]">${ssrInterpolate((_b = unref(researches)) == null ? void 0 : _b.short_description)}</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: questionsCount.value,
        "onUpdate:modelValue": ($event) => questionsCount.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Savollar sonini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Savollar sonini tanlang" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectLabel, null, {
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
                        ssrRenderList(questionsCountSelect.value, (item) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
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
                          createVNode(_component_SelectLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Savollar sonini tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              key: item.id,
                              value: item.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Savollar sonini tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
                          return openBlock(), createBlock(_component_SelectItem, {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Savollar sonini tanlang" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("Savollar sonini tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
                        return openBlock(), createBlock(_component_SelectItem, {
                          key: item.id,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
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
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"><!--[-->`);
      ssrRenderList((_c = unref(researches)) == null ? void 0 : _c.specifications, (item) => {
        _push(`<div class="${ssrRenderClass([{ "border-primary": selected_specification.value === item.id }, "rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url('https://www.fozilov.uz/assets/Light.png')] bg-[length:200px_200px]"])}"><div class="flex flex-col justify-between h-full space-y-1 p-6"><h3 class="text-base font-semibold leading-none tracking-tight">${ssrInterpolate(item.name)}</h3><div class="flex flex-col gap-y-1"><p class="text-sm text-muted-foreground">Umumiy vaqt: <span class="font-semibold">40 daqiqa</span></p><p class="text-sm text-muted-foreground"> Ball: <span class="font-semibold">${ssrInterpolate(item.ball)} ball</span></p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-6">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: startTest,
        disabled: !selected_specification.value || !questionsCount.value || unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="48" class="animate-spin iconify iconify--ph w-5 h-5 mr-2" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` Testni boshlash `);
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("svg", {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-types/research/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C945MYbe.mjs.map
