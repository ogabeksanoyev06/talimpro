import { ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import { s as storeToRefs, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './index--b-3J809.mjs';
import { _ as _sfc_main$1 } from './Label-Cw6GAA4x.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2$1 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { _ as _sfc_main$2 } from './SelectLabel-tcdEgKea.mjs';
import { u as useTestStore } from './test-CgfQXDQI.mjs';
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
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main = {
  __name: "school",
  __ssrInlineRender: true,
  setup(__props) {
    const testStore = useTestStore();
    const activeTestStore = useActiveTestStore();
    const { classes, schoolTestSciences, loading } = storeToRefs(testStore);
    const { hasActiveTest } = storeToRefs(activeTestStore);
    const questionsCount = ref(20);
    const selectedClass = ref(1);
    const selectedLevel = ref("beginner");
    const activeScience = ref(null);
    const educationLang = ref("o\u02BBzbek");
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
    const questionLevelList = ref([
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
    ]);
    const languageOptions = ref([
      { id: "o\u02BBzbek", name: "O\u02BBzbek tili" },
      { id: "qoraqalpoq", name: "Qoraqalpoq tili" },
      { id: "qozoq", name: "Qozoq tili" },
      { id: "tojik", name: "Tojik tili" },
      { id: "qirgiz", name: "Qirg\u02BBiz tili" },
      { id: "russian", name: "Rus tili" },
      { id: "turkman", name: "Turk tili" }
    ]);
    function selectedScience(id) {
      activeScience.value = id;
    }
    async function startTest() {
      if (hasActiveTest.value) {
        navigateTo("/active-test");
      } else {
        const paramtersModel = {
          science_id: activeScience.value,
          class_id: selectedClass.value,
          test_score: selectedLevel.value,
          test_count: questionsCount.value
        };
        testStore.startSchoolTest(paramtersModel);
      }
    }
    const isTestDisabled = computed(() => !activeScience.value || !selectedClass.value || !selectedLevel.value || !questionsCount.value);
    watch([selectedClass, educationLang], async () => {
      await testStore.getSchoolTestSciences({ school_class: selectedClass.value, education_lang: educationLang.value });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="container"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"><div class="flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ta&#39;lim tili`);
          } else {
            return [
              createTextVNode("Ta'lim tili")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: educationLang.value,
        "onUpdate:modelValue": ($event) => educationLang.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Ta'lim tilini tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim tilini tanlang" })
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
                              _push5(`Ta&#39;lim tilini tanlang`);
                            } else {
                              return [
                                createTextVNode("Ta'lim tilini tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(languageOptions.value, (item) => {
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
                              createTextVNode("Ta'lim tilini tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(languageOptions.value, (item) => {
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
                            createTextVNode("Ta'lim tilini tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(languageOptions.value, (item) => {
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
                  createVNode(unref(_sfc_main$6), { placeholder: "Ta'lim tilini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Ta'lim tilini tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(languageOptions.value, (item) => {
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
      _push(`</div><div class="flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sinf`);
          } else {
            return [
              createTextVNode("Sinf")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        modelValue: selectedClass.value,
        "onUpdate:modelValue": ($event) => selectedClass.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Sinfni tanlang" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { placeholder: "Sinfni tanlang" })
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
                              _push5(`Sinfni tanlang`);
                            } else {
                              return [
                                createTextVNode("Sinfni tanlang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(classes), (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.number)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.number), 1)
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
                              createTextVNode("Sinfni tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
                              key: item.id,
                              value: item.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.number), 1)
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
                            createTextVNode("Sinfni tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.number), 1)
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
                  createVNode(unref(_sfc_main$6), { placeholder: "Sinfni tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Sinfni tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(classes), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: item.id,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.number), 1)
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
      _push(`</div><div class="flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Savollar soni`);
          } else {
            return [
              createTextVNode("Savollar soni")
            ];
          }
        }),
        _: 1
      }, _parent));
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
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
                              createTextVNode("Savollar sonini tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
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
                            createTextVNode("Savollar sonini tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
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
                  createVNode(unref(_sfc_main$6), { placeholder: "Savollar sonini tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Savollar sonini tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(questionsCountSelect.value, (item) => {
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
      _push(`</div><div class="flex flex-col space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "text-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daraja`);
          } else {
            return [
              createTextVNode("Daraja")
            ];
          }
        }),
        _: 1
      }, _parent));
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
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
                        ssrRenderList(questionLevelList.value, (item) => {
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
                              createTextVNode("Darajani tanlang")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(questionLevelList.value, (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
                              key: item.id,
                              value: item.id,
                              disabled: item.disabled
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "disabled"]);
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
                            createTextVNode("Darajani tanlang")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(questionLevelList.value, (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: item.id,
                            value: item.id,
                            disabled: item.disabled
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
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
                  createVNode(unref(_sfc_main$6), { placeholder: "Darajani tanlang" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          createTextVNode("Darajani tanlang")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(questionLevelList.value, (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: item.id,
                          value: item.id,
                          disabled: item.disabled
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
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
      _push(`</div></div><div class="flex flex-wrap gap-3 border-b border-border pb-8"><!--[-->`);
      ssrRenderList(unref(schoolTestSciences).results, (item) => {
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          key: item.id,
          onClick: ($event) => selectedScience(item.id),
          variant: item.id === activeScience.value ? "" : "outline"
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
      _push(`<!--]--></div><div class="flex justify-center mt-12">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        disabled: unref(isTestDisabled) || unref(loading),
        onClick: startTest
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-types/school.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=school-BQtCj8P5.mjs.map
