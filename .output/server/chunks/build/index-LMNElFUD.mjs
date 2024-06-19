import { _ as _sfc_main$6 } from './index--b-3J809.mjs';
import { _ as _sfc_main$7 } from './Label-Cw6GAA4x.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$5$1, b as _sfc_main$6$1, c as _sfc_main$4$1, d as _sfc_main$3$2, e as _sfc_main$2$2 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { useSSRContext, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, defineComponent, computed, renderSlot } from 'vue';
import { b as useRoute, s as storeToRefs, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$1$1, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './TableRow-wqr0JuMT.mjs';
import { _ as _sfc_main$3 } from './TableHeader-C45wZ8AP.mjs';
import { PaginationRoot, PaginationList, PaginationListItem, PaginationEllipsis } from 'radix-vue';
import { DotsHorizontalIcon } from '@radix-icons/vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { u as useCommonStore } from './common-CBWtjeDP.mjs';
import 'class-variance-authority';
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
import 'clsx';
import 'tailwind-merge';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaginationEllipsis",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationEllipsis), mergeProps(delegatedProps.value, {
        class: unref(cn)("w-9 h-9 flex items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(DotsHorizontalIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(DotsHorizontalIcon))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationEllipsis.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-cb8e7829><div class="preloader-content" data-v-cb8e7829><div class="loader loader--fade" data-v-cb8e7829><span class="loader-item" data-v-cb8e7829>1</span> <span class="loader-item" data-v-cb8e7829>2</span> <span class="loader-item" data-v-cb8e7829>3</span> <span class="loader-item" data-v-cb8e7829>4</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppLoading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppLoading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cb8e7829"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const commonStore = useCommonStore();
    const { universitiesDtmId, regions, universities, loading } = storeToRefs(commonStore);
    const limits = [
      {
        number: 10,
        value: 10
      },
      {
        number: 25,
        value: 25
      },
      {
        number: 50,
        value: 50
      },
      {
        number: 100,
        value: 100
      },
      {
        number: 200,
        value: 200
      }
    ];
    const educationType = [
      {
        value: "kunduzgi",
        name: "Kunduzgi"
      },
      {
        value: "sirtqi",
        name: "Sirtqi"
      },
      {
        value: "kechki",
        name: "Kechki"
      },
      {
        value: "remote",
        name: "Masofaviy"
      }
    ];
    const educationLanguage = [
      {
        value: "O`zbek",
        name: "O`zbek"
      },
      {
        value: "Rus",
        name: "Rus"
      },
      {
        value: "Qoraqalpoq",
        name: "Qoraqalpoq"
      },
      {
        value: "Ingliz",
        name: "Ingliz"
      },
      {
        value: "Tojik",
        name: "Tojik"
      },
      {
        value: "Qozoq",
        name: "Qozoq"
      },
      {
        value: "Turkman",
        name: "Turkman"
      },
      {
        value: "Koreys",
        name: "Koreys"
      },
      {
        value: "Nemis",
        name: "Nemis"
      },
      {
        value: "Frantsuz",
        name: "Frantsuz"
      }
    ];
    const regionId = ref();
    const universityId = ref();
    const selectedEducationType = ref("kunduzgi");
    const selectedEducationLang = ref("O`zbek");
    const offset = ref(1);
    const limit = ref(10);
    const selectOffsetValue = (index) => {
      offset.value = index;
    };
    const fetchUniversities = async () => {
      await commonStore.getUniversitiesDtmId(route.query.dtmTestId, {
        limit: limit.value,
        offset: offset.value,
        form_of_education: selectedEducationType.value,
        edu_lang: selectedEducationLang.value,
        university__region: regionId.value,
        university: universityId.value
      });
    };
    watch([limit, offset, selectedEducationType, selectedEducationType, regionId, universityId], async () => {
      if (route.query.dtmTestId) {
        await fetchUniversities();
      }
    });
    watch(regionId, async (newValue) => {
      await commonStore.getUniversities({ region: newValue });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Button = _sfc_main$6;
      const _component_Label = _sfc_main$7;
      const _component_Select = _sfc_main$7$1;
      const _component_SelectTrigger = _sfc_main$5$1;
      const _component_SelectValue = _sfc_main$6$1;
      const _component_SelectContent = _sfc_main$4$1;
      const _component_SelectGroup = _sfc_main$3$2;
      const _component_SelectItem = _sfc_main$2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(AppLoading, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="flex flex-col justify-center items-center space-y-2 mb-4"><div class="border border-green-500 max-w-[150px] w-full rounded-full text-center" style="${ssrRenderStyle({ "font-size": "xx-large" })}"><span>${ssrInterpolate((_b = (_a = unref(universitiesDtmId)) == null ? void 0 : _a.total_ball) == null ? void 0 : _b.toFixed(1))}</span><span style="${ssrRenderStyle({ "font-size": "medium" })}">/189</span></div><p class="text-base sm:text-lg font-bold text-center"> O&#39;tgan yilgi turdosh yo&#39;nalishlar bo&#39;yicha o&#39;tish ballari va siz to&#39;plagan ballga nisbatatan solishtirish natijasi </p><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "border-green-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`Grand: ${ssrInterpolate((_a2 = unref(universitiesDtmId)) == null ? void 0 : _a2.grands_count)}`);
          } else {
            return [
              createTextVNode("Grand: " + toDisplayString((_b2 = unref(universitiesDtmId)) == null ? void 0 : _b2.grands_count), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "border-yellow-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`Kontrakt: ${ssrInterpolate((_a2 = unref(universitiesDtmId)) == null ? void 0 : _a2.contracts_count)}`);
          } else {
            return [
              createTextVNode("Kontrakt: " + toDisplayString((_b2 = unref(universitiesDtmId)) == null ? void 0 : _b2.contracts_count), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2"><div class="mr-auto"><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "terms" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Soni`);
          } else {
            return [
              createTextVNode("Soni")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Select, {
        id: "terms",
        modelValue: limit.value,
        "onUpdate:modelValue": ($event) => limit.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Soni" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Soni" })
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
                        _push4(`<!--[-->`);
                        ssrRenderList(limits, (item) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
                            key: item.value,
                            value: item.value
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
                          (openBlock(), createBlock(Fragment, null, renderList(limits, (item) => {
                            return createVNode(_component_SelectItem, {
                              key: item.value,
                              value: item.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.number), 1)
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(limits, (item) => {
                          return createVNode(_component_SelectItem, {
                            key: item.value,
                            value: item.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.number), 1)
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Soni" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(limits, (item) => {
                        return createVNode(_component_SelectItem, {
                          key: item.value,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.number), 1)
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
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), { class: "mb-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Viloyat <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Viloyat "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Universitet <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Universitet "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Yo&#39;nalish <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Yo'nalish "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Ta&#39;lim shakli <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Ta'lim shakli "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Grand <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Grand "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Kontrakt <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Kontrakt "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}> Status <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"${_scopeId4}><path d="m7 15 5 5 5-5"${_scopeId4}></path><path d="m7 9 5-5 5 5"${_scopeId4}></path></svg></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createTextVNode(" Status "),
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
                                    class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                  }, [
                                    createVNode("path", { d: "m7 15 5 5 5-5" }),
                                    createVNode("path", { d: "m7 9 5-5 5 5" })
                                  ]))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Viloyat "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Universitet "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Yo'nalish "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Ta'lim shakli "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Grand "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Kontrakt "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createTextVNode(" Status "),
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
                                  class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                                }, [
                                  createVNode("path", { d: "m7 15 5 5 5-5" }),
                                  createVNode("path", { d: "m7 9 5-5 5 5" })
                                ]))
                              ])
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
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Viloyat "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Universitet "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Yo'nalish "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Ta'lim shakli "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Grand "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Kontrakt "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createTextVNode(" Status "),
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
                                class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                              }, [
                                createVNode("path", { d: "m7 15 5 5 5-5" }),
                                createVNode("path", { d: "m7 9 5-5 5 5" })
                              ]))
                            ])
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
            _push2(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d;
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList((_b2 = (_a2 = unref(universitiesDtmId)) == null ? void 0 : _a2.universities) == null ? void 0 : _b2.results, (item) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      key: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.university_region)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.university_region), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.university_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.university_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.form_of_education)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.form_of_education), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.grant_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.grant_ball), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.contract_ball)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.contract_ball), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.status === "grant") {
                                  _push5(`<span class="text-green-500"${_scopeId4}>Grant</span>`);
                                } else if (item.status === "contract") {
                                  _push5(`<span class="text-orange-500"${_scopeId4}>Kontrakt</span>`);
                                } else {
                                  _push5(`<span class="text-destructive"${_scopeId4}>Yiqildi</span>`);
                                }
                              } else {
                                return [
                                  item.status === "grant" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-green-500"
                                  }, "Grant")) : item.status === "contract" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "text-orange-500"
                                  }, "Kontrakt")) : (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "text-destructive"
                                  }, "Yiqildi"))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.university_region), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.university_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.form_of_education), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.grant_ball), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.contract_ball), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                              default: withCtx(() => [
                                item.status === "grant" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-green-500"
                                }, "Grant")) : item.status === "contract" ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-orange-500"
                                }, "Kontrakt")) : (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "text-destructive"
                                }, "Yiqildi"))
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
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList((_d = (_c2 = unref(universitiesDtmId)) == null ? void 0 : _c2.universities) == null ? void 0 : _d.results, (item) => {
                      return openBlock(), createBlock(unref(_sfc_main$5), {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.university_region), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.university_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.form_of_education), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.grant_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.contract_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              item.status === "grant" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-green-500"
                              }, "Grant")) : item.status === "contract" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-orange-500"
                              }, "Kontrakt")) : (openBlock(), createBlock("span", {
                                key: 2,
                                class: "text-destructive"
                              }, "Yiqildi"))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "text-start" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Viloyat "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Universitet "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Yo'nalish "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Ta'lim shakli "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Grand "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Kontrakt "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$1$1), { class: "h-12 px-4 cursor-pointer" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createTextVNode(" Status "),
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
                              class: "lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                            }, [
                              createVNode("path", { d: "m7 15 5 5 5-5" }),
                              createVNode("path", { d: "m7 9 5-5 5 5" })
                            ]))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3$1), { class: "text-start" }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList((_b2 = (_a2 = unref(universitiesDtmId)) == null ? void 0 : _a2.universities) == null ? void 0 : _b2.results, (item) => {
                      return openBlock(), createBlock(unref(_sfc_main$5), {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.university_region), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.university_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.form_of_education), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.grant_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.contract_ball), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$2$1), { class: "p-4" }, {
                            default: withCtx(() => [
                              item.status === "grant" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-green-500"
                              }, "Grant")) : item.status === "contract" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-orange-500"
                              }, "Kontrakt")) : (openBlock(), createBlock("span", {
                                key: 2,
                                class: "text-destructive"
                              }, "Yiqildi"))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><div><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "region" }, {
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
      _push(ssrRenderComponent(_component_Select, {
        id: "region",
        modelValue: regionId.value,
        "onUpdate:modelValue": ($event) => regionId.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Viloyat" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Viloyat" })
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
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(regions), (item) => {
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (item) => {
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (item) => {
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
                  createVNode(_component_SelectValue, { placeholder: "Viloyat" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (item) => {
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
      _push(`</div></div><div><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "universityId" }, {
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
      _push(ssrRenderComponent(_component_Select, {
        id: "universityId",
        modelValue: universityId.value,
        "onUpdate:modelValue": ($event) => universityId.value = $event,
        disabled: !regionId.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Universitet" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Universitet" })
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
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(universities), (item) => {
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
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
                  createVNode(_component_SelectValue, { placeholder: "Universitet" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(universities), (item) => {
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
      _push(`</div></div><div><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "terms" }, {
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
      _push(ssrRenderComponent(_component_Select, {
        id: "terms",
        modelValue: selectedEducationType.value,
        "onUpdate:modelValue": ($event) => selectedEducationType.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Ta'lim shakli" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Ta'lim shakli" })
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
                        _push4(`<!--[-->`);
                        ssrRenderList(educationType, (item) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
                            key: item.value,
                            value: item.value
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
                          (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
                            return createVNode(_component_SelectItem, {
                              key: item.value,
                              value: item.value
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
                          return createVNode(_component_SelectItem, {
                            key: item.value,
                            value: item.value
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Ta'lim shakli" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(educationType, (item) => {
                        return createVNode(_component_SelectItem, {
                          key: item.value,
                          value: item.value
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
      _push(`</div></div><div><div class="flex flex-col space-y-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "lang" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Til`);
          } else {
            return [
              createTextVNode("Til")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Select, {
        id: "lang",
        modelValue: selectedEducationLang.value,
        "onUpdate:modelValue": ($event) => selectedEducationLang.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Til" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Til" })
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
                        _push4(`<!--[-->`);
                        ssrRenderList(educationLanguage, (item) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
                            key: item.value,
                            value: item.value
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
                          (openBlock(), createBlock(Fragment, null, renderList(educationLanguage, (item) => {
                            return createVNode(_component_SelectItem, {
                              key: item.value,
                              value: item.value
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(educationLanguage, (item) => {
                          return createVNode(_component_SelectItem, {
                            key: item.value,
                            value: item.value
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Til" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(educationLanguage, (item) => {
                        return createVNode(_component_SelectItem, {
                          key: item.value,
                          value: item.value
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
      _push(`</div></div></div><div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(unref(PaginationRoot), {
        total: (_c = unref(universitiesDtmId)) == null ? void 0 : _c.universities_total_count,
        "sibling-count": 1,
        "show-edges": "",
        "default-page": 1
      }, {
        default: withCtx(({ page }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), { class: "flex items-center gap-1" }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Button, {
                              class: "w-9 h-9 p-0",
                              variant: item.value === page ? "default" : "outline",
                              onClick: ($event) => selectOffsetValue(item.value)
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.value)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Button, {
                                class: "w-9 h-9 p-0",
                                variant: item.value === page ? "default" : "outline",
                                onClick: ($event) => selectOffsetValue(item.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["variant", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), {
                        key: item.type,
                        index
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          value: item.value,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              class: "w-9 h-9 p-0",
                              variant: item.value === page ? "default" : "outline",
                              onClick: ($event) => selectOffsetValue(item.value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : (openBlock(), createBlock(unref(_sfc_main$2), {
                          key: item.type,
                          index
                        }, null, 8, ["index"]))
                      ], 64);
                    }), 256))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PaginationList), { class: "flex items-center gap-1" }, {
                default: withCtx(({ items }) => [
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            class: "w-9 h-9 p-0",
                            variant: item.value === page ? "default" : "outline",
                            onClick: ($event) => selectOffsetValue(item.value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant", "onClick"])
                        ]),
                        _: 2
                      }, 1032, ["value"])) : (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: item.type,
                        index
                      }, null, 8, ["index"]))
                    ], 64);
                  }), 256))
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-LMNElFUD.mjs.map
