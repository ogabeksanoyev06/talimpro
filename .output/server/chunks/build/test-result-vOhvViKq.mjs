import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { _ as _sfc_main$5 } from './index--b-3J809.mjs';
import { computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { a as useCookie } from './server.mjs';
import { t as testType } from './testTypes-DX9gcdzZ.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$4, c as _sfc_main$3, a as _sfc_main$1, b as _sfc_main$1$1, d as _sfc_main$2 } from './TableRow-wqr0JuMT.mjs';
import 'radix-vue';
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
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';

const _sfc_main = {
  __name: "test-result",
  __ssrInlineRender: true,
  setup(__props) {
    const testResult = useCookie("testResult");
    const totalBasic = computed(() => {
      var _a, _b;
      return (_b = (_a = testResult.value) == null ? void 0 : _a.blogs) == null ? void 0 : _b.filter((blog) => {
        var _a2;
        return ((_a2 = blog == null ? void 0 : blog.dtmtest_blog) == null ? void 0 : _a2.type) === "basic";
      }).reduce((sum, blog) => sum + blog.total_ball, 0);
    });
    const totalCompulsory = computed(() => {
      var _a, _b;
      return (_b = (_a = testResult.value) == null ? void 0 : _a.blogs) == null ? void 0 : _b.filter((blog) => {
        var _a2;
        return ((_a2 = blog.dtmtest_blog) == null ? void 0 : _a2.type) === "compulsory";
      }).reduce((sum, blog) => sum + blog.total_ball, 0);
    });
    const typeName = computed(() => {
      var _a, _b, _c;
      let typeValue = "";
      const testType2 = ((_a = testResult.value) == null ? void 0 : _a.type) || ((_c = (_b = testResult.value) == null ? void 0 : _b.blogs[0]) == null ? void 0 : _c.type);
      switch (testType2) {
        case testType2.TYPE_DTM:
          typeValue = "DTM test";
          break;
        case testType2.TYPE_BLOG:
          typeValue = "Blog test";
          break;
        case testType2.TYPE_SCHOOL:
          typeValue = "Maktab o`quvchilari uchun test";
          break;
        case testType2.TYPE_RESEARCH:
          typeValue = "Xalqaro tadqiqot test";
          break;
      }
      return typeValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Button = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}><div class="container"><h3 class="text-xl text-center mb-3 font-semibold">${ssrInterpolate(unref(typeName))}</h3><div class="border">`);
      if (((_a = unref(testResult)) == null ? void 0 : _a.type) === ("testType" in _ctx ? _ctx.testType : unref(testType)).TYPE_RESEARCH) {
        _push(ssrRenderComponent(unref(_sfc_main$4), { class: "whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Yo&#39;nalish nomi `);
                              } else {
                                return [
                                  createTextVNode(" Yo'nalish nomi ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Savollar soni `);
                              } else {
                                return [
                                  createTextVNode(" Savollar soni ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;gri javoblar `);
                              } else {
                                return [
                                  createTextVNode(" To'gri javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Xato javoblar `);
                              } else {
                                return [
                                  createTextVNode(" Xato javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;plangan ball `);
                              } else {
                                return [
                                  createTextVNode(" To'plangan ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Yo'nalish nomi ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Savollar soni ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'gri javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Xato javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'plangan ball ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).specification)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).specification), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult).questions) == null ? void 0 : _b2.length), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).correct_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate(((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length) - unref(testResult).correct_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(((_b2 = unref(testResult).questions) == null ? void 0 : _b2.length) - unref(testResult).correct_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).total_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).total_ball), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).specification), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString(((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length) - unref(testResult).correct_ans), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).total_ball), 1)
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
                      createVNode(unref(_sfc_main$1), { class: "" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Yo'nalish nomi ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Savollar soni ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'gri javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Xato javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).specification), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length) - unref(testResult).correct_ans), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).total_ball), 1)
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
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), { class: "" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Yo'nalish nomi ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Savollar soni ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'gri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Xato javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).specification), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString(((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length) - unref(testResult).correct_ans), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).total_ball), 1)
                          ]),
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
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_b = unref(testResult)) == null ? void 0 : _b.type) === ("testType" in _ctx ? _ctx.testType : unref(testType)).TYPE_BLOG) {
        _push(ssrRenderComponent(unref(_sfc_main$4), { class: "whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Fan nomi `);
                              } else {
                                return [
                                  createTextVNode(" Fan nomi ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Savollar soni `);
                              } else {
                                return [
                                  createTextVNode(" Savollar soni ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;gri javoblar `);
                              } else {
                                return [
                                  createTextVNode(" To'gri javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Xato javoblar `);
                              } else {
                                return [
                                  createTextVNode(" Xato javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;plangan ball `);
                              } else {
                                return [
                                  createTextVNode(" To'plangan ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Fan nomi ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Savollar soni ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'gri javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Xato javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'plangan ball ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).science)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).science), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult).questions) == null ? void 0 : _b2.length), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).correct_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).incorrect_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult)) == null ? void 0 : _b2.total_ball), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).science), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Fan nomi ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Savollar soni ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'gri javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Xato javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).science), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Fan nomi ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Savollar soni ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'gri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Xato javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).science), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_c = unref(testResult)) == null ? void 0 : _c.type) === ("testType" in _ctx ? _ctx.testType : unref(testType)).TYPE_SCHOOL) {
        _push(ssrRenderComponent(unref(_sfc_main$4), { class: "whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Fan nomi `);
                              } else {
                                return [
                                  createTextVNode(" Fan nomi ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Savollar soni `);
                              } else {
                                return [
                                  createTextVNode(" Savollar soni ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;gri javoblar `);
                              } else {
                                return [
                                  createTextVNode(" To'gri javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Xato javoblar `);
                              } else {
                                return [
                                  createTextVNode(" Xato javoblar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` To&#39;plangan ball `);
                              } else {
                                return [
                                  createTextVNode(" To'plangan ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Fan nomi ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Savollar soni ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'gri javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Xato javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'plangan ball ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).science)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).science), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult).questions) == null ? void 0 : _b2.length), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).correct_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(testResult).incorrect_ans)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult)) == null ? void 0 : _b2.total_ball), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).science), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Fan nomi ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Savollar soni ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'gri javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Xato javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).science), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Fan nomi ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Savollar soni ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'gri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Xato javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), { class: "font-medium" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).science), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult).questions) == null ? void 0 : _a2.length), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).correct_ans), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(testResult).incorrect_ans), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), { class: "p-4 text-center" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_e = (_d = unref(testResult)) == null ? void 0 : _d.blogs) == null ? void 0 : _e.length) > 0 && ((_g = (_f = unref(testResult)) == null ? void 0 : _f.blogs[0]) == null ? void 0 : _g.type) === ("testType" in _ctx ? _ctx.testType : unref(testType)).TYPE_DTM) {
        _push(ssrRenderComponent(unref(_sfc_main$4), { class: "text-center whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
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
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Blog fanlari ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" To'g'ri javoblar ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Ball ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
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
                    ssrRenderList(unref(testResult).blogs, (item) => {
                      _push3(ssrRenderComponent(unref(_sfc_main$1), {
                        class: "font-medium",
                        key: item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a2, _b2;
                                if (_push5) {
                                  _push5(`${ssrInterpolate(((_a2 = item.dtmtest_blog) == null ? void 0 : _a2.type) === "basic" ? item.blog_science : `${item.blog_science} (majburiy fan)`)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(((_b2 = item.dtmtest_blog) == null ? void 0 : _b2.type) === "basic" ? item.blog_science : `${item.blog_science} (majburiy fan)`), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="text-green-600" style="${ssrRenderStyle({ "font-size": "large" })}"${_scopeId4}>${ssrInterpolate(item.correct_ans_count ? item.correct_ans_count : 0)}</span> /${ssrInterpolate(item.dtmtest_blog.question_count)}`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "text-green-600",
                                      style: { "font-size": "large" }
                                    }, toDisplayString(item.correct_ans_count ? item.correct_ans_count : 0), 1),
                                    createTextVNode(" /" + toDisplayString(item.dtmtest_blog.question_count), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.dtmtest_blog.ball)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.dtmtest_blog.ball), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              class: "p-4 text-green-600",
                              style: { "font-size": "large" }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.total_ball)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.total_ball), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString(((_a2 = item.dtmtest_blog) == null ? void 0 : _a2.type) === "basic" ? item.blog_science : `${item.blog_science} (majburiy fan)`), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "text-green-600",
                                    style: { "font-size": "large" }
                                  }, toDisplayString(item.correct_ans_count ? item.correct_ans_count : 0), 1),
                                  createTextVNode(" /" + toDisplayString(item.dtmtest_blog.question_count), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.dtmtest_blog.ball), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$2), {
                                class: "p-4 text-green-600",
                                style: { "font-size": "large" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.total_ball), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
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
                            createVNode(unref(_sfc_main$2), {
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
                    _push3(ssrRenderComponent(unref(_sfc_main$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(totalBasic))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(totalBasic)), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Asosiy fandan to'plangan ball:")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(totalBasic)), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(totalCompulsory))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(totalCompulsory)), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Majburiy fandan to'plangan ball:")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(totalCompulsory)), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b2 = unref(testResult)) == null ? void 0 : _b2.total_ball), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 5 ta fandan to'plangan ball:")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 font-semibold text-base",
                              colspan: "2"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Blog fanlari ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" To'g'ri javoblar ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Ball ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("To'plangan ball ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(testResult).blogs, (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$1), {
                          class: "font-medium",
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString(((_a2 = item.dtmtest_blog) == null ? void 0 : _a2.type) === "basic" ? item.blog_science : `${item.blog_science} (majburiy fan)`), 1)
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "text-green-600",
                                  style: { "font-size": "large" }
                                }, toDisplayString(item.correct_ans_count ? item.correct_ans_count : 0), 1),
                                createTextVNode(" /" + toDisplayString(item.dtmtest_blog.question_count), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.dtmtest_blog.ball), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2), {
                              class: "p-4 text-green-600",
                              style: { "font-size": "large" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.total_ball), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(unref(_sfc_main$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
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
                      createVNode(unref(_sfc_main$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Asosiy fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(totalBasic)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Majburiy fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(totalCompulsory)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 5 ta fandan to'plangan ball:")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 font-semibold text-base",
                            colspan: "2"
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), { class: "text-base" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Blog fanlari ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" To'g'ri javoblar ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "p-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("To'plangan ball ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(testResult).blogs, (item) => {
                      return openBlock(), createBlock(unref(_sfc_main$1), {
                        class: "font-medium",
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(((_a2 = item.dtmtest_blog) == null ? void 0 : _a2.type) === "basic" ? item.blog_science : `${item.blog_science} (majburiy fan)`), 1)
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-green-600",
                                style: { "font-size": "large" }
                              }, toDisplayString(item.correct_ans_count ? item.correct_ans_count : 0), 1),
                              createTextVNode(" /" + toDisplayString(item.dtmtest_blog.question_count), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.dtmtest_blog.ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2), {
                            class: "p-4 text-green-600",
                            style: { "font-size": "large" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.total_ball), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(unref(_sfc_main$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
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
                    createVNode(unref(_sfc_main$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Asosiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(totalBasic)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Majburiy fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(totalCompulsory)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 5 ta fandan to'plangan ball:")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), {
                          class: "p-4 font-semibold text-base",
                          colspan: "2"
                        }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(testResult)) == null ? void 0 : _a2.total_ball), 1)
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
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center mt-4">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/profile/tests-results" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Barcha natijalar`);
                } else {
                  return [
                    createTextVNode("Barcha natijalar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, null, {
                default: withCtx(() => [
                  createTextVNode("Barcha natijalar")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-result-vOhvViKq.mjs.map
