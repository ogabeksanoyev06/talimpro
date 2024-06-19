import { _ as _sfc_main$4, c as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, d as _sfc_main$2$1 } from './TableRow-wqr0JuMT.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { s as storeToRefs, a as useCookie } from './server.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
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
  __name: "dtm-test",
  __ssrInlineRender: true,
  setup(__props) {
    const resultStore = useResultStore();
    const { testResultId, answerLabels } = storeToRefs(resultStore);
    const route = useRoute();
    useRouter();
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
      selectedQuestion.value = (_a = testResultId.value) == null ? void 0 : _a.questions[testNumber.value];
    };
    const totalBasic = computed(() => {
      var _a, _b;
      return (_b = (_a = testResultId.value) == null ? void 0 : _a.blogs) == null ? void 0 : _b.filter((blog) => blog.type === "basic" && blog.total_ball > 0).reduce((sum, blog) => sum + blog.total_ball, 0);
    });
    const totalCompulsory = computed(() => {
      var _a, _b;
      return (_b = (_a = testResultId.value) == null ? void 0 : _a.blogs) == null ? void 0 : _b.filter((blog) => blog.type === "compulsory" && blog.total_ball > 0).reduce((sum, blog) => sum + blog.total_ball, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_Table = _sfc_main$4;
      const _component_TableBody = _sfc_main$3;
      const _component_TableRow = _sfc_main$2;
      const _component_TableHead = _sfc_main$1$1;
      const _component_TableCell = _sfc_main$2$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}><div class="container"><div class="flex flex-col space-y-6"><h3 class="text-xl font-semibold text-center">${ssrInterpolate((_a = selectedQuestion.value) == null ? void 0 : _a.science)}</h3><div class="flex flex-col gap-3"><div class="${ssrRenderClass([{
        "border-green-500": ((_b = selectedQuestion.value) == null ? void 0 : _b.is_correct) && ((_c = selectedQuestion.value) == null ? void 0 : _c.is_picked),
        "border-destructive": ((_d = selectedQuestion.value) == null ? void 0 : _d.is_picked) && !((_e = selectedQuestion.value) == null ? void 0 : _e.is_correct),
        "border-secondary": !(((_f = selectedQuestion.value) == null ? void 0 : _f.is_correct) && ((_g = selectedQuestion.value) == null ? void 0 : _g.is_picked)) && !(((_h = selectedQuestion.value) == null ? void 0 : _h.is_picked) && !selectedQuestion.value.is_correct)
      }, "flex flex-col gap-2 border-2 p-4"])}"><div class="question flex items-start text-base"><b id="question_number" class="mr-1">${ssrInterpolate(unref(testNumber) + 1)}. </b><span class="flex flex-wrap">${(_a2 = (_i = selectedQuestion.value) == null ? void 0 : _i.question) != null ? _a2 : ""}</span></div><div>`);
      if (((_j = selectedQuestion.value) == null ? void 0 : _j.is_correct) && ((_k = selectedQuestion.value) == null ? void 0 : _k.is_picked)) {
        _push(`<span class="!text-green-500">(To&#39;g&#39;ri)</span>`);
      } else {
        _push(`<!---->`);
      }
      if (((_l = selectedQuestion.value) == null ? void 0 : _l.is_picked) && !((_m = selectedQuestion.value) == null ? void 0 : _m.is_correct)) {
        _push(`<span class="text-destructive">(Xato)</span>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_n = selectedQuestion.value) == null ? void 0 : _n.is_picked)) {
        _push(`<span class="text-destructive">(Belgilanmagan)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><ul class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList((_o = selectedQuestion.value) == null ? void 0 : _o.answers, (answer, aIndex) => {
        var _a22, _b2, _c2, _d2, _e2, _f2;
        _push(`<li class="${ssrRenderClass([{
          "border-green-500 text-green-500": ((_a22 = selectedQuestion.value) == null ? void 0 : _a22.is_correct) && ((_b2 = selectedQuestion.value) == null ? void 0 : _b2.is_picked) && ((_c2 = selectedQuestion.value) == null ? void 0 : _c2.answer) === aIndex + 1,
          "text-destructive border-destructive": !((_d2 = selectedQuestion.value) == null ? void 0 : _d2.is_correct) && ((_e2 = selectedQuestion.value) == null ? void 0 : _e2.is_picked) && ((_f2 = selectedQuestion.value) == null ? void 0 : _f2.answer) === aIndex + 1
        }, "text-sm border rounded flex items-start gap-1 p-3"])}"><span class="font-semibold">${ssrInterpolate(unref(answerLabels)[aIndex] + ")")}</span><span>${answer != null ? answer : ""}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div><ul class="flex flex-wrap gap-1 justify-center"><!--[-->`);
      ssrRenderList((_p = unref(testResultId)) == null ? void 0 : _p.questions, (question, index) => {
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
      _push(`<!--]--></ul></div><div class="border mt-6">`);
      _push(ssrRenderComponent(_component_Table, { class: "text-center whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a22, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableRow, { class: "text-base" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Blog fanlari `);
                            } else {
                              return [
                                createTextVNode(" Blog fanlari ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` To&#39;g&#39;ri javoblar `);
                            } else {
                              return [
                                createTextVNode(" To'g'ri javoblar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Ball `);
                            } else {
                              return [
                                createTextVNode(" Ball ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`To&#39;plangan ball `);
                            } else {
                              return [
                                createTextVNode("To'plangan ball ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blog fanlari ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'g'ri javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Ball ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList((_a22 = unref(resultStore).testResultId) == null ? void 0 : _a22.blogs, (item) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      class: "font-medium",
                      key: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.science)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.science), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-green-600" style="${ssrRenderStyle({ "font-size": "large" })}"${_scopeId4}>${ssrInterpolate(item.correct_answers)}</span>`);
                              } else {
                                return [
                                  createVNode("span", {
                                    class: "text-green-600",
                                    style: { "font-size": "large" }
                                  }, toDisplayString(item.correct_answers), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.max_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.max_ball), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, {
                            class: "p-4 text-green-600",
                            style: { "font-size": "large" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a3, _b3;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a3 = item.total_ball) == null ? void 0 : _a3.toFixed(1))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b3 = item.total_ball) == null ? void 0 : _b3.toFixed(1)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.science), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "text-green-600",
                                  style: { "font-size": "large" }
                                }, toDisplayString(item.correct_answers), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.max_ball), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, {
                              class: "p-4 text-green-600",
                              style: { "font-size": "large" }
                            }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createTextVNode(toDisplayString((_a3 = item.total_ball) == null ? void 0 : _a3.toFixed(1)), 1)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-bold text-base",
                          colspan: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Natijalar`);
                            } else {
                              return [
                                createTextVNode(" Natijalar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCell, {
                            class: "p-4 font-bold text-base",
                            colspan: "4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Natijalar")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Asosiy fandan to&#39;plangan ball:`);
                            } else {
                              return [
                                createTextVNode(" Asosiy fandan to'plangan ball:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a3, _b3;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a3 = unref(totalBasic)) == null ? void 0 : _a3.toFixed(1))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b3 = unref(totalBasic)) == null ? void 0 : _b3.toFixed(1)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Asosiy fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = unref(totalBasic)) == null ? void 0 : _a3.toFixed(1)), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Majburiy fandan to&#39;plangan ball:`);
                            } else {
                              return [
                                createTextVNode(" Majburiy fandan to'plangan ball:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a3, _b3;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a3 = unref(totalCompulsory)) == null ? void 0 : _a3.toFixed(1))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b3 = unref(totalCompulsory)) == null ? void 0 : _b3.toFixed(1)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Majburiy fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = unref(totalCompulsory)) == null ? void 0 : _a3.toFixed(1)), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 5 ta fandan to&#39;plangan ball:`);
                            } else {
                              return [
                                createTextVNode(" 5 ta fandan to'plangan ball:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate((unref(totalBasic) + unref(totalCompulsory)).toFixed(1))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((unref(totalBasic) + unref(totalCompulsory)).toFixed(1)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 5 ta fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString((unref(totalBasic) + unref(totalCompulsory)).toFixed(1)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TableRow, { class: "text-base" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blog fanlari ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'g'ri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(resultStore).testResultId) == null ? void 0 : _b2.blogs, (item) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        class: "font-medium",
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.science), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-green-600",
                                style: { "font-size": "large" }
                              }, toDisplayString(item.correct_answers), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.max_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, {
                            class: "p-4 text-green-600",
                            style: { "font-size": "large" }
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = item.total_ball) == null ? void 0 : _a3.toFixed(1)), 1)
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-bold text-base",
                          colspan: "4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Natijalar")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Asosiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(totalBasic)) == null ? void 0 : _a3.toFixed(1)), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Majburiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(totalCompulsory)) == null ? void 0 : _a3.toFixed(1)), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 5 ta fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString((unref(totalBasic) + unref(totalCompulsory)).toFixed(1)), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableBody, null, {
                default: withCtx(() => {
                  var _a22;
                  return [
                    createVNode(_component_TableRow, { class: "text-base" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blog fanlari ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'g'ri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList((_a22 = unref(resultStore).testResultId) == null ? void 0 : _a22.blogs, (item) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        class: "font-medium",
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.science), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-green-600",
                                style: { "font-size": "large" }
                              }, toDisplayString(item.correct_answers), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.max_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, {
                            class: "p-4 text-green-600",
                            style: { "font-size": "large" }
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = item.total_ball) == null ? void 0 : _a3.toFixed(1)), 1)
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-bold text-base",
                          colspan: "4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Natijalar")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Asosiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(totalBasic)) == null ? void 0 : _a3.toFixed(1)), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Majburiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(totalCompulsory)) == null ? void 0 : _a3.toFixed(1)), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 5 ta fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString((unref(totalBasic) + unref(totalCompulsory)).toFixed(1)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: "/compare", query: { dtmTestId: unref(route).query.test_id } },
        class: "mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "w-fit",
              onClick: _ctx.goToCompareLink
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Solishtirish`);
                } else {
                  return [
                    createTextVNode("Solishtirish")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                class: "w-fit",
                onClick: _ctx.goToCompareLink
              }, {
                default: withCtx(() => [
                  createTextVNode("Solishtirish")
                ]),
                _: 1
              }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results/dtm-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dtm-test-BH3uWl-C.mjs.map
