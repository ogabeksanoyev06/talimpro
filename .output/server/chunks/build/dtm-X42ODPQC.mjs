import { _ as _sfc_main$4$1, a as _sfc_main$a, b as _sfc_main$1$1, c as _sfc_main$3$1, d as _sfc_main$2$2 } from './TableRow-wqr0JuMT.mjs';
import { _ as _sfc_main$9 } from './TableHeader-C45wZ8AP.mjs';
import { ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import { s as storeToRefs, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './index--b-3J809.mjs';
import { _ as _sfc_main$1 } from './Label-Cw6GAA4x.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2$1 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { _ as _sfc_main$2 } from './SelectLabel-tcdEgKea.mjs';
import { u as useTestStore } from './test-CgfQXDQI.mjs';
import { u as useCommonStore } from './common-CBWtjeDP.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './parseQuestion-BnEt1owC.mjs';
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
import 'radix-vue';
import 'class-variance-authority';
import '@radix-icons/vue';

const _sfc_main = {
  __name: "dtm",
  __ssrInlineRender: true,
  setup(__props) {
    const testStore = useTestStore();
    const activeTestStore = useActiveTestStore();
    const commonStore = useCommonStore();
    const { dtmTestBlogsMainSubjects, dtmTestBlogsMandatorySubjects, loading } = storeToRefs(testStore);
    const { hasActiveTest } = storeToRefs(activeTestStore);
    const { regions, universities, directions } = storeToRefs(commonStore);
    const testLanguage = ref([{ id: 0, name: "O`zbek" }]);
    const educationType = [
      {
        id: "kunduzgi",
        name: "Kunduzgi",
        disabled: false
      },
      {
        id: "sirtqi",
        name: "Sirtqi",
        disabled: false
      },
      {
        id: "kechki",
        name: "Kechki",
        disabled: false
      }
    ];
    const regionId = ref("");
    const selectedUniversity = ref("");
    const selectedTestLanguage = ref(0);
    const selectedEducationType = ref("kunduzgi");
    const selectedDirection = ref("");
    const isSelectedUniversityNotEmpty = computed(() => {
      return selectedUniversity.value !== "";
    });
    function startTest() {
      if (hasActiveTest.value) {
        navigateTo("/active-test");
      } else {
        const paramtersModel = {
          blog_ids: testStore.dtmTestBlogs.map((blog) => blog.id)
        };
        testStore.startDtmTest(paramtersModel);
      }
    }
    const totalCompulsoryBall = computed(() => {
      var _a;
      return (_a = dtmTestBlogsMandatorySubjects.value) == null ? void 0 : _a.reduce((total, subject) => total + subject.ball * subject.question_count, 0);
    });
    const totalBasicBall = computed(() => {
      var _a;
      return (_a = dtmTestBlogsMainSubjects.value) == null ? void 0 : _a.reduce((total, subject) => total + subject.ball * subject.question_count, 0);
    });
    watch(regionId, async (newValue) => {
      selectedUniversity.value = "";
      await commonStore.getUniversities({ region: newValue });
    });
    watch([selectedUniversity, selectedEducationType], async (newValue) => {
      selectedDirection.value = "";
      await commonStore.getUniversityDirection({ university: selectedUniversity.value, form_of_education: selectedEducationType.value, edu_lang: "O`zbek" });
    });
    watch(selectedDirection, async (newValue) => {
      await testStore.getDtmTestBlogs({ educ_direction: selectedDirection.value });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$4$1;
      const _component_TableHeader = _sfc_main$9;
      const _component_TableRow = _sfc_main$a;
      const _component_TableHead = _sfc_main$1$1;
      const _component_TableBody = _sfc_main$3$1;
      const _component_TableCell = _sfc_main$2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}><div class="container"><div class="grid grid-cols-12 gap-4 justify-center"><div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Viloyat`);
          } else {
            return [
              createTextVNode("Viloyat")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: regionId.value,
        "onUpdate:modelValue": ($event) => regionId.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Viloyatni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Viloyatni tanlang" })
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(regions), (region) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                            key: region.id,
                            value: region.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(region.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(region.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
                              key: region.id,
                              value: region.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(region.name), 1)
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
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: region.id,
                            value: region.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(region.name), 1)
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
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Viloyatni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: region.id,
                          value: region.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(region.name), 1)
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
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Universitet`);
          } else {
            return [
              createTextVNode("Universitet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedUniversity.value,
        "onUpdate:modelValue": ($event) => selectedUniversity.value = $event,
        disabled: regionId.value === ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Universitetni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Universitetni tanlang" })
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(universities), (item) => {
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
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Universitetni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Test tili`);
          } else {
            return [
              createTextVNode("Test tili")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedTestLanguage.value,
        "onUpdate:modelValue": ($event) => selectedTestLanguage.value = $event,
        disabled: !isSelectedUniversityNotEmpty.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Test tilini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Test tilini tanlang" })
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(testLanguage.value, (item) => {
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
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(testLanguage.value, (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(testLanguage.value, (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Test tilini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(testLanguage.value, (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
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
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ta&#39;lim shakli`);
          } else {
            return [
              createTextVNode("Ta'lim shakli")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedEducationType.value,
        "onUpdate:modelValue": ($event) => selectedEducationType.value = $event,
        disabled: !isSelectedUniversityNotEmpty.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Ta'lim shaklini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim shaklini tanlang" })
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(educationType, (item) => {
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
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
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
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
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
                  createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim shaklini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
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
      _push(`</div><div class="col-span-12 md:col-span-6 lg:col-span-9 flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Yo&#39;nalish`);
          } else {
            return [
              createTextVNode("Yo'nalish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedDirection.value,
        "onUpdate:modelValue": ($event) => selectedDirection.value = $event,
        disabled: !isSelectedUniversityNotEmpty.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Ta'lim yo'nalishini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim yo'nalishini tanlang" })
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tanlang`);
                            } else {
                              return [
                                createTextVNode("Tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(directions), (direction) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                            key: direction.id,
                            value: direction.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(direction.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(direction.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
                              key: direction.id,
                              value: direction.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(direction.name), 1)
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
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: direction.id,
                            value: direction.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(direction.name), 1)
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
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim yo'nalishini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: direction.id,
                          value: direction.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(direction.name), 1)
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
      _push(`</div></div><div class="mt-6">`);
      if (unref(testStore).dtmTestBlogs.length && selectedDirection.value && unref(testStore).dtmTestBlogsMainSubjects.length && unref(testStore).dtmTestBlogsMandatorySubjects.length) {
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
                                _push5(` # `);
                              } else {
                                return [
                                  createTextVNode(" # ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Majburiy fanlar`);
                              } else {
                                return [
                                  createTextVNode("Majburiy fanlar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Testlar soni`);
                              } else {
                                return [
                                  createTextVNode("Testlar soni")
                                ];
                              }
                            }),
                            _: 1
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
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" # ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Majburiy fanlar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Testlar soni")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Ball")
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
                      createVNode(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" # ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Majburiy fanlar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Testlar soni")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Ball")
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
              _push2(ssrRenderComponent(_component_TableBody, { class: "text-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(testStore).dtmTestBlogsMandatorySubjects, (item, i) => {
                      _push3(ssrRenderComponent(_component_TableRow, { key: i }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(i + 1)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(i + 1), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.science)} (majburiy) `);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.science) + " (majburiy) ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.question_count)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.question_count), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.ball)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.ball), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(i + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.science) + " (majburiy) ", 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.question_count), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.ball), 1)
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
                    _push3(ssrRenderComponent(_component_TableRow, { class: "!border-b bg-muted" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Umumiy ball `);
                              } else {
                                return [
                                  createTextVNode(" Umumiy ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(totalCompulsoryBall.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(totalCompulsoryBall.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Umumiy ball ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(totalCompulsoryBall.value), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(testStore).dtmTestBlogsMandatorySubjects, (item, i) => {
                        return openBlock(), createBlock(_component_TableRow, { key: i }, {
                          default: withCtx(() => [
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(i + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.science) + " (majburiy) ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.question_count), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.ball), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_TableRow, { class: "!border-b bg-muted" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Umumiy ball ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(totalCompulsoryBall.value), 1)
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
              _push2(ssrRenderComponent(_component_TableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` # `);
                              } else {
                                return [
                                  createTextVNode(" # ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Asosiy fanlar`);
                              } else {
                                return [
                                  createTextVNode("Asosiy fanlar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Testlar soni`);
                              } else {
                                return [
                                  createTextVNode("Testlar soni")
                                ];
                              }
                            }),
                            _: 1
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
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" # ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Asosiy fanlar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Testlar soni")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Ball")
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
                      createVNode(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" # ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Asosiy fanlar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Testlar soni")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Ball")
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
              _push2(ssrRenderComponent(_component_TableBody, { class: "text-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(testStore).dtmTestBlogsMainSubjects, (item, i) => {
                      _push3(ssrRenderComponent(_component_TableRow, { key: i }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(i + 1)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(i + 1), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
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
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.question_count)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.question_count), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.ball)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.ball), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(i + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.science), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.question_count), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.ball), 1)
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
                    _push3(ssrRenderComponent(_component_TableRow, { class: "!border-b border-card-foreground bg-muted" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Umumiy ball `);
                              } else {
                                return [
                                  createTextVNode(" Umumiy ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(totalBasicBall.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(totalBasicBall.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Umumiy ball ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(totalBasicBall.value), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TableRow, { class: "!border-b border-card-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 5ta fan bo&#39;yicha umumiy ball `);
                              } else {
                                return [
                                  createTextVNode(" 5ta fan bo'yicha umumiy ball ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(totalBasicBall.value + totalCompulsoryBall.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(totalBasicBall.value + totalCompulsoryBall.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 5ta fan bo'yicha umumiy ball ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableCell, {
                              colSpan: "2",
                              class: "p-2 font-bold"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(totalBasicBall.value + totalCompulsoryBall.value), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(testStore).dtmTestBlogsMainSubjects, (item, i) => {
                        return openBlock(), createBlock(_component_TableRow, { key: i }, {
                          default: withCtx(() => [
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(i + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.science), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.question_count), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.ball), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_TableRow, { class: "!border-b border-card-foreground bg-muted" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Umumiy ball ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(totalBasicBall.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableRow, { class: "!border-b border-card-foreground" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 5ta fan bo'yicha umumiy ball ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableCell, {
                            colSpan: "2",
                            class: "p-2 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(totalBasicBall.value + totalCompulsoryBall.value), 1)
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
                createVNode(_component_TableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" # ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Majburiy fanlar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Testlar soni")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(testStore).dtmTestBlogsMandatorySubjects, (item, i) => {
                      return openBlock(), createBlock(_component_TableRow, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(i + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.science) + " (majburiy) ", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.question_count), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.ball), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_TableRow, { class: "!border-b bg-muted" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Umumiy ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(totalCompulsoryBall.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_TableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" # ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Asosiy fanlar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("Testlar soni")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "h-12 px-4 text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" Ball")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(testStore).dtmTestBlogsMainSubjects, (item, i) => {
                      return openBlock(), createBlock(_component_TableRow, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(i + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.science), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.question_count), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "p-2 font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.ball), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_TableRow, { class: "!border-b border-card-foreground bg-muted" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Umumiy ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(totalBasicBall.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableRow, { class: "!border-b border-card-foreground" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 5ta fan bo'yicha umumiy ball ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableCell, {
                          colSpan: "2",
                          class: "p-2 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(totalBasicBall.value + totalCompulsoryBall.value), 1)
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
      if (!unref(testStore).dtmTestBlogs.length && selectedDirection.value && !unref(testStore).dtmTestBlogsMainSubjects.length && !unref(testStore).dtmTestBlogsMandatorySubjects.length) {
        _push(`<div class="relative w-full rounded-lg border px-4 py-4 text-sm bg-background text-center font-semibold text-foreground"> Tanlangan yo&#39;nalish bo&#39;yicha testlar mavjud emas </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center mt-6">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        size: "lg",
        onClick: startTest,
        disabled: !selectedDirection.value || unref(testStore).loading
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-types/dtm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dtm-X42ODPQC.mjs.map
