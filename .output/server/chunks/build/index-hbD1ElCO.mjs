import { _ as _sfc_main$3 } from './Label-Cw6GAA4x.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3$1, e as _sfc_main$2$1 } from './SelectScrollDownButton-BUeSNw4o.mjs';
import { _ as _sfc_main$8 } from './SelectLabel-tcdEgKea.mjs';
import { watchEffect, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { _ as _sfc_main$2 } from './index--b-3J809.mjs';
import { _ as _sfc_main$1 } from './Input-DvOO0onJ.mjs';
import { u as useUserStore } from './user-BLCEGJvj.mjs';
import { u as useCommonStore } from './common-CBWtjeDP.mjs';
import 'radix-vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';
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
import './index-CQGKuTmi.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const usertype = [
      {
        value: "applicant",
        name: "Abituriyent"
      },
      {
        value: "pupil",
        name: "O'quvchi"
      }
    ];
    const userStore = useUserStore();
    const commonStore = useCommonStore();
    const { user, loading } = storeToRefs(userStore);
    const { regions, districts, schools } = storeToRefs(commonStore);
    watchEffect(() => {
      if (user.value.region !== null && user.value.region !== void 0) {
        commonStore.getDistricts(user.value.region);
      }
    });
    watchEffect(() => {
      if (user.value.district !== null && user.value.district !== void 0) {
        commonStore.getSchools(user.value.district);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_VField = resolveComponent("VField");
      const _component_Label = _sfc_main$3;
      const _component_Select = _sfc_main$7;
      const _component_SelectTrigger = _sfc_main$5;
      const _component_SelectValue = _sfc_main$6;
      const _component_SelectContent = _sfc_main$4;
      const _component_SelectGroup = _sfc_main$3$1;
      const _component_SelectLabel = _sfc_main$8;
      const _component_SelectItem = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Asosiy ma&#39;lumotlar</h3>`);
      _push(ssrRenderComponent(_component_VForm, null, {
        default: withCtx(({ handleSubmit }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}><div class="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 mb-8"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "username",
              rules: "required|max:60|min:3",
              modelValue: unref(user).username,
              "onUpdate:modelValue": ($event) => unref(user).username = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "username" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Foylanuvchi nomi (username) `);
                      } else {
                        return [
                          createTextVNode("Foylanuvchi nomi (username) ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "username",
                    type: "text",
                    placeholder: "Fodalanuvchi nomini kiriting",
                    disabled: unref(loading),
                    class: errors.length > 0 ? "focus-visible:border-destructive border-destructive" : "",
                    modelValue: unref(user).username,
                    "onUpdate:modelValue": ($event) => unref(user).username = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "username" }, {
                      default: withCtx(() => [
                        createTextVNode("Foylanuvchi nomi (username) ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "username",
                      type: "text",
                      placeholder: "Fodalanuvchi nomini kiriting",
                      disabled: unref(loading),
                      class: errors.length > 0 ? "focus-visible:border-destructive border-destructive" : "",
                      modelValue: unref(user).username,
                      "onUpdate:modelValue": ($event) => unref(user).username = $event
                    }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "first_name",
              rules: "required|max:60|min:3",
              modelValue: unref(user).first_name,
              "onUpdate:modelValue": ($event) => unref(user).first_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "first_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ism`);
                      } else {
                        return [
                          createTextVNode("Ism")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "first_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    disabled: unref(loading),
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                    modelValue: unref(user).first_name,
                    "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "first_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Ism")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "first_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      disabled: unref(loading),
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                      modelValue: unref(user).first_name,
                      "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                    }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "last_name",
              rules: "required|max:60|min:3",
              modelValue: unref(user).last_name,
              "onUpdate:modelValue": ($event) => unref(user).last_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "last_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiya`);
                      } else {
                        return [
                          createTextVNode("Familiya")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "last_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    disabled: unref(loading),
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                    modelValue: unref(user).last_name,
                    "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "last_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Familiya")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "last_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      disabled: unref(loading),
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                      modelValue: unref(user).last_name,
                      "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                    }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "father_name",
              rules: "max:60|min:3",
              modelValue: unref(user).father_name,
              "onUpdate:modelValue": ($event) => unref(user).father_name = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "father_name" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Otasining ismi`);
                      } else {
                        return [
                          createTextVNode("Otasining ismi")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "father_name",
                    type: "text",
                    placeholder: "Fodalanuvchi nomi",
                    disabled: unref(loading),
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                    modelValue: unref(user).father_name,
                    "onUpdate:modelValue": ($event) => unref(user).father_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "father_name" }, {
                      default: withCtx(() => [
                        createTextVNode("Otasining ismi")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "father_name",
                      type: "text",
                      placeholder: "Fodalanuvchi nomi",
                      disabled: unref(loading),
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                      modelValue: unref(user).father_name,
                      "onUpdate:modelValue": ($event) => unref(user).father_name = $event
                    }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "email",
              rules: "email",
              modelValue: unref(user).email,
              "onUpdate:modelValue": ($event) => unref(user).email = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "email" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "email",
                    type: "text",
                    placeholder: "Email",
                    disabled: unref(loading),
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                    modelValue: unref(user).email,
                    "onUpdate:modelValue": ($event) => unref(user).email = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      id: "email",
                      type: "text",
                      placeholder: "Email",
                      disabled: unref(loading),
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                      modelValue: unref(user).email,
                      "onUpdate:modelValue": ($event) => unref(user).email = $event
                    }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "phone",
              rules: "phone|max:9",
              modelValue: unref(user).phone,
              "onUpdate:modelValue": ($event) => unref(user).phone = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "phone" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Telefon raqam`);
                      } else {
                        return [
                          createTextVNode("Telefon raqam")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "phone",
                    type: "text",
                    placeholder: "Telefon raqam",
                    disabled: unref(loading),
                    class: ["pl-14", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""],
                    modelValue: unref(user).phone,
                    "onUpdate:modelValue": ($event) => unref(user).phone = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3"${_scopeId2}>+ 998 </span></div><span class="text-xs text-destructive"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                } else {
                  return [
                    createVNode(_component_Label, { for: "phone" }, {
                      default: withCtx(() => [
                        createTextVNode("Telefon raqam")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative w-full" }, [
                      createVNode(unref(_sfc_main$1), {
                        id: "phone",
                        type: "text",
                        placeholder: "Telefon raqam",
                        disabled: unref(loading),
                        class: ["pl-14", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""],
                        modelValue: unref(user).phone,
                        "onUpdate:modelValue": ($event) => unref(user).phone = $event
                      }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                      createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3" }, "+ 998 ")
                    ]),
                    createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "usertype" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "usertype" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yo&#39;nalish `);
                      } else {
                        return [
                          createTextVNode("Yo'nalish ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).type,
                    "onUpdate:modelValue": ($event) => unref(user).type = $event,
                    disabled: unref(loading)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(usertype, (type, i) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: i + 2,
                                        value: type.value
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(type.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(type.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(), createBlock(Fragment, null, renderList(usertype, (type, i) => {
                                        return createVNode(_component_SelectItem, {
                                          key: i + 2,
                                          value: type.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(type.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(), createBlock(Fragment, null, renderList(usertype, (type, i) => {
                                      return createVNode(_component_SelectItem, {
                                        key: i + 2,
                                        value: type.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(type.name), 1)
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(), createBlock(Fragment, null, renderList(usertype, (type, i) => {
                                    return createVNode(_component_SelectItem, {
                                      key: i + 2,
                                      value: type.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(type.name), 1)
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "usertype" }, {
                      default: withCtx(() => [
                        createTextVNode("Yo'nalish ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).type,
                      "onUpdate:modelValue": ($event) => unref(user).type = $event,
                      disabled: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(), createBlock(Fragment, null, renderList(usertype, (type, i) => {
                                  return createVNode(_component_SelectItem, {
                                    key: i + 2,
                                    value: type.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(type.name), 1)
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "region" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "region" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Viloyat`);
                      } else {
                        return [
                          createTextVNode("Viloyat")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).region,
                    "onUpdate:modelValue": ($event) => unref(user).region = $event,
                    disabled: unref(loading),
                    onChange: _ctx.regionS
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Viloyatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(regions), (region) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: region.id,
                                        value: region.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(region.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(region.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
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
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "region" }, {
                      default: withCtx(() => [
                        createTextVNode("Viloyat")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).region,
                      "onUpdate:modelValue": ($event) => unref(user).region = $event,
                      disabled: unref(loading),
                      onChange: _ctx.regionS
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "district" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "district" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tuman`);
                      } else {
                        return [
                          createTextVNode("Tuman")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).district,
                    "onUpdate:modelValue": ($event) => unref(user).district = $event,
                    disabled: unref(user).region === "" || unref(loading)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Tumanni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(districts), (district) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: district.id,
                                        value: district.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(district.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(district.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: district.id,
                                          value: district.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(district.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: district.id,
                                        value: district.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(district.name), 1)
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: district.id,
                                      value: district.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(district.name), 1)
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "district" }, {
                      default: withCtx(() => [
                        createTextVNode("Tuman")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).district,
                      "onUpdate:modelValue": ($event) => unref(user).district = $event,
                      disabled: unref(user).region === "" || unref(loading)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: district.id,
                                    value: district.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(district.name), 1)
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, { name: "school" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "school" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Maktab`);
                      } else {
                        return [
                          createTextVNode("Maktab")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(user).school,
                    "onUpdate:modelValue": ($event) => unref(user).school = $event,
                    disabled: unref(user).district === "" || unref(loading)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Maktabni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanlang`);
                                        } else {
                                          return [
                                            createTextVNode("Tanlang")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(schools), (school) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: school.id,
                                        value: school.id
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(school.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(school.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: school.id,
                                          value: school.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(school.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanlang")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: school.id,
                                        value: school.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(school.name), 1)
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanlang")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: school.id,
                                      value: school.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(school.name), 1)
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Label, { for: "school" }, {
                      default: withCtx(() => [
                        createTextVNode("Maktab")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(user).school,
                      "onUpdate:modelValue": ($event) => unref(user).school = $event,
                      disabled: unref(user).district === "" || unref(loading)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanlang")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: school.id,
                                    value: school.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(school.name), 1)
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              class: "w-full sm:w-auto",
              disabled: unref(loading)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="48" class="animate-spin iconify iconify--ph w-5 h-5 mr-2" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId2}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Saqlash `);
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
                    createTextVNode(" Saqlash ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(($event) => handleSubmit(unref(userStore).updateUserProfile), ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode("div", { class: "grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 mb-8" }, [
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "username",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).username,
                        "onUpdate:modelValue": ($event) => unref(user).username = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "username" }, {
                            default: withCtx(() => [
                              createTextVNode("Foylanuvchi nomi (username) ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "username",
                            type: "text",
                            placeholder: "Fodalanuvchi nomini kiriting",
                            disabled: unref(loading),
                            class: errors.length > 0 ? "focus-visible:border-destructive border-destructive" : "",
                            modelValue: unref(user).username,
                            "onUpdate:modelValue": ($event) => unref(user).username = $event
                          }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "first_name",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).first_name,
                        "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "first_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Ism")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "first_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            disabled: unref(loading),
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                            modelValue: unref(user).first_name,
                            "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                          }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "last_name",
                        rules: "required|max:60|min:3",
                        modelValue: unref(user).last_name,
                        "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "last_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Familiya")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "last_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            disabled: unref(loading),
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                            modelValue: unref(user).last_name,
                            "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                          }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "father_name",
                        rules: "max:60|min:3",
                        modelValue: unref(user).father_name,
                        "onUpdate:modelValue": ($event) => unref(user).father_name = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "father_name" }, {
                            default: withCtx(() => [
                              createTextVNode("Otasining ismi")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "father_name",
                            type: "text",
                            placeholder: "Fodalanuvchi nomi",
                            disabled: unref(loading),
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                            modelValue: unref(user).father_name,
                            "onUpdate:modelValue": ($event) => unref(user).father_name = $event
                          }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "email",
                        rules: "email",
                        modelValue: unref(user).email,
                        "onUpdate:modelValue": ($event) => unref(user).email = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            id: "email",
                            type: "text",
                            placeholder: "Email",
                            disabled: unref(loading),
                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : "",
                            modelValue: unref(user).email,
                            "onUpdate:modelValue": ($event) => unref(user).email = $event
                          }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, {
                        name: "phone",
                        rules: "phone|max:9",
                        modelValue: unref(user).phone,
                        "onUpdate:modelValue": ($event) => unref(user).phone = $event
                      }, {
                        default: withCtx(({ errors }) => [
                          createVNode(_component_Label, { for: "phone" }, {
                            default: withCtx(() => [
                              createTextVNode("Telefon raqam")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "relative w-full" }, [
                            createVNode(unref(_sfc_main$1), {
                              id: "phone",
                              type: "text",
                              placeholder: "Telefon raqam",
                              disabled: unref(loading),
                              class: ["pl-14", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""],
                              modelValue: unref(user).phone,
                              "onUpdate:modelValue": ($event) => unref(user).phone = $event
                            }, null, 8, ["disabled", "class", "modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 start-0 flex items-center justify-center px-3" }, "+ 998 ")
                          ]),
                          createVNode("span", { class: "text-xs text-destructive" }, toDisplayString(errors[0]), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, { name: "usertype" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "usertype" }, {
                            default: withCtx(() => [
                              createTextVNode("Yo'nalish ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).type,
                            "onUpdate:modelValue": ($event) => unref(user).type = $event,
                            disabled: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Yo'nalishni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(), createBlock(Fragment, null, renderList(usertype, (type, i) => {
                                        return createVNode(_component_SelectItem, {
                                          key: i + 2,
                                          value: type.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(type.name), 1)
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
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, { name: "region" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "region" }, {
                            default: withCtx(() => [
                              createTextVNode("Viloyat")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).region,
                            "onUpdate:modelValue": ($event) => unref(user).region = $event,
                            disabled: unref(loading),
                            onChange: _ctx.regionS
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(regions), (region) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
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
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, { name: "district" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "district" }, {
                            default: withCtx(() => [
                              createTextVNode("Tuman")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).district,
                            "onUpdate:modelValue": ($event) => unref(user).district = $event,
                            disabled: unref(user).region === "" || unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Tumanni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(districts), (district) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: district.id,
                                          value: district.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(district.name), 1)
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
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                      createVNode(_component_VField, { name: "school" }, {
                        default: withCtx(() => [
                          createVNode(_component_Label, { for: "school" }, {
                            default: withCtx(() => [
                              createTextVNode("Maktab")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Select, {
                            modelValue: unref(user).school,
                            "onUpdate:modelValue": ($event) => unref(user).school = $event,
                            disabled: unref(user).district === "" || unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Maktabni tanlang" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanlang")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(schools), (school) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: school.id,
                                          value: school.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(school.name), 1)
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
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(unref(_sfc_main$2), {
                    type: "submit",
                    class: "w-full sm:w-auto",
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
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
                      createTextVNode(" Saqlash ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-hbD1ElCO.mjs.map
