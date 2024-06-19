import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$1$1, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './TableRow-wqr0JuMT.mjs';
import { _ as _sfc_main$2 } from './TableHeader-C45wZ8AP.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { s as storeToRefs, a as useCookie } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$1 } from './index--b-3J809.mjs';
import { u as useResultStore } from './ResultStore-B7Zb-C4W.mjs';
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
import 'class-variance-authority';
import './parseQuestion-BnEt1owC.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main = {
  __name: "research-test",
  __ssrInlineRender: true,
  setup(__props) {
    const resultStore = useResultStore();
    const { testResultId, answerLabels } = storeToRefs(resultStore);
    useRoute();
    const selectedQuestion = ref({});
    const testNumber = useCookie("testNumber", { default: () => 0 });
    const getActiveTestNumber = (number) => {
      if (number !== testNumber.value) {
        testNumber.value = number;
        selectedQuestions();
      }
    };
    const selectedQuestions = () => {
      var _a;
      selectedQuestion.value = (_a = testResultId.value[0]) == null ? void 0 : _a.questions[testNumber.value];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$4;
      const _component_TableHeader = _sfc_main$2;
      const _component_TableRow = _sfc_main$3;
      const _component_TableHead = _sfc_main$1$1;
      const _component_TableBody = _sfc_main$3$1;
      const _component_TableCell = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><!--[-->`);
      ssrRenderList(unref(testResultId), (item, i) => {
        var _a;
        _push(`<div class="flex flex-col space-y-6"><div class="inline-flex justify-center w-full"><p class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6">${ssrInterpolate(unref(selectedQuestion).science)}</p></div><div class="border">`);
        _push(ssrRenderComponent(_component_Table, { class: "font-medium whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Test turi `);
                              } else {
                                return [
                                  createTextVNode(" Test turi ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Fan nomi`);
                              } else {
                                return [
                                  createTextVNode("Fan nomi")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Savollar soni`);
                              } else {
                                return [
                                  createTextVNode("Savollar soni")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Ball`);
                              } else {
                                return [
                                  createTextVNode(" Ball")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;plangan ball `);
                              } else {
                                return [
                                  createTextVNode(" To'plangan ball ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Test turi ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Fan nomi")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Savollar soni")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Ball")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'plangan ball ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Test turi ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Fan nomi")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Savollar soni")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Ball")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TableBody, { class: "text-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4 font-medium" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>Xalqaro tadqiqot testlari</span>`);
                              } else {
                                return [
                                  createVNode("span", null, "Xalqaro tadqiqot testlari")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.science)}</span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString((_b = unref(testResultId)[0]) == null ? void 0 : _b.blogs.science), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.question_count)}</span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString((_b = unref(testResultId)[0]) == null ? void 0 : _b.blogs.question_count), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.max_ball)}</span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString((_b = unref(testResultId)[0]) == null ? void 0 : _b.blogs.max_ball), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4 flex justify-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b, _c, _d;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_b = (_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs) == null ? void 0 : _b.total_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_d = (_c = unref(testResultId)[0]) == null ? void 0 : _c.blogs) == null ? void 0 : _d.total_ball), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "p-4 font-medium" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Xalqaro tadqiqot testlari")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.science), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_TableCell, { class: "p-4" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.question_count), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_TableCell, { class: "p-4" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.max_ball), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_TableCell, { class: "p-4 flex justify-center" }, {
                              default: withCtx(() => {
                                var _a2, _b;
                                return [
                                  createTextVNode(toDisplayString((_b = (_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs) == null ? void 0 : _b.total_ball), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "p-4 font-medium" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Xalqaro tadqiqot testlari")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.science), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.question_count), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.max_ball), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_TableCell, { class: "p-4 flex justify-center" }, {
                            default: withCtx(() => {
                              var _a2, _b;
                              return [
                                createTextVNode(toDisplayString((_b = (_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs) == null ? void 0 : _b.total_ball), 1)
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Test turi ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Fan nomi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Savollar soni")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_TableBody, { class: "text-center" }, {
                  default: withCtx(() => [
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, { class: "p-4 font-medium" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Xalqaro tadqiqot testlari")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.science), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_TableCell, { class: "p-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.question_count), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_TableCell, { class: "p-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createVNode("span", null, toDisplayString((_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs.max_ball), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_TableCell, { class: "p-4 flex justify-center" }, {
                          default: withCtx(() => {
                            var _a2, _b;
                            return [
                              createTextVNode(toDisplayString((_b = (_a2 = unref(testResultId)[0]) == null ? void 0 : _a2.blogs) == null ? void 0 : _b.total_ball), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="flex flex-col gap-3"><div class="${ssrRenderClass([{
          "border-green-500": unref(selectedQuestion).is_correct && unref(selectedQuestion).is_picked,
          "border-destructive": unref(selectedQuestion).is_picked && !unref(selectedQuestion).is_correct,
          "border-secondary": !(unref(selectedQuestion).is_correct && unref(selectedQuestion).is_picked) && !(unref(selectedQuestion).is_picked && !unref(selectedQuestion).is_correct)
        }, "flex flex-col gap-2 border-2 p-4"])}"><div class="question flex items-start text-base"><b id="question_number" class="mr-1">${ssrInterpolate(unref(testNumber) + 1)}. </b><span class="flex flex-wrap">${(_a = unref(selectedQuestion).question) != null ? _a : ""}</span></div><div>`);
        if (unref(selectedQuestion).is_correct && unref(selectedQuestion).is_picked) {
          _push(`<span class="!text-green-500">(To&#39;g&#39;ri)</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedQuestion).is_picked && !unref(selectedQuestion).is_correct) {
          _push(`<span class="text-destructive">(Xato)</span>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(selectedQuestion).is_picked) {
          _push(`<span class="text-destructive">(Belgilanmagan)</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="flex flex-col gap-2"><!--[-->`);
        ssrRenderList(unref(selectedQuestion).answers, (answer, aIndex) => {
          _push(`<li class="${ssrRenderClass([{
            "border-green-500 text-green-500": unref(selectedQuestion).is_correct && unref(selectedQuestion).is_picked && unref(selectedQuestion).answer === aIndex + 1,
            "text-destructive border-destructive": !unref(selectedQuestion).is_correct && unref(selectedQuestion).is_picked && unref(selectedQuestion).answer === aIndex + 1
          }, "text-sm border rounded flex items-start gap-1 p-3"])}"><span class="font-semibold">${ssrInterpolate(unref(answerLabels)[aIndex] + ")")}</span><span>${answer != null ? answer : ""}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div><ul class="flex flex-wrap gap-1 justify-center"><!--[-->`);
        ssrRenderList(item.questions, (question, index) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: index,
            variant: question.is_correct && question.is_picked && question.answer ? "default" : !question.is_correct && question.is_picked && question.answer ? "destructive" : "secondary",
            class: [[
              question.is_correct && question.is_picked && question.answer ? "bg-green-500 hover:bg-green-500" : "",
              index === unref(testNumber) ? "border-foreground" : ""
            ], "h-8 w-[40px] border-2"],
            onClick: ($event) => getActiveTestNumber(index)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(index + 1)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(index + 1), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results/research-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=research-test-vlmw9hit.mjs.map
