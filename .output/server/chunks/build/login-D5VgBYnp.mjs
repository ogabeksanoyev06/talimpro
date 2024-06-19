import { _ as _sfc_main$5 } from './Label-Cw6GAA4x.mjs';
import { _ as _sfc_main$6 } from './index--b-3J809.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-DvOO0onJ.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './DialogContent-DzqGgtf6.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2$1, b as _sfc_main$1$2, c as _sfc_main$4 } from './DialogDescription-BynYntTz.mjs';
import { u as useAuthStore } from './AuthStore-CoOPwA7b.mjs';
import 'radix-vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
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
import './index-CQGKuTmi.mjs';
import '@radix-icons/vue';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { loading } = storeToRefs(authStore);
    const form = ref({ username: "", password: "" });
    const resetForm = ref({ username: "", password: "" });
    const passwordField = ref(true);
    const resetPasswordField = ref(true);
    const passwordSee = () => passwordField.value = !passwordField.value;
    const resetPasswordSee = () => resetPasswordField.value = !resetPasswordField.value;
    const loginToSystem = () => {
      authStore.login(form.value);
    };
    const resetToPassword = () => {
      authStore.resetPassword(resetForm.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_VField = resolveComponent("VField");
      const _component_Label = _sfc_main$5;
      const _component_Button = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-card p-4 sm:p-8 border border-border rounded max-w-[450px] mx-auto w-full mt-3" }, _attrs))}><h4 class="text-xl mb-2 font-bold text-center">Tizimga kirish</h4><p class="font-medium mb-5 text-center">Kirish uchun foydalanuvchi va parolni kiriting.</p>`);
      _push(ssrRenderComponent(_component_VForm, null, {
        default: withCtx(({ handleSubmit }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="flex flex-col space-y-6"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "username",
              rules: "required|max:60|min:3",
              modelValue: form.value.username,
              "onUpdate:modelValue": ($event) => form.value.username = $event
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
                    placeholder: "Fodalanuvchi nomini kiritng",
                    modelValue: form.value.username,
                    "onUpdate:modelValue": ($event) => form.value.username = $event,
                    class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                  }, null, _parent3, _scopeId2));
                  if (errors[0]) {
                    _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
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
                      placeholder: "Fodalanuvchi nomini kiritng",
                      modelValue: form.value.username,
                      "onUpdate:modelValue": ($event) => form.value.username = $event,
                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                    errors[0] ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-red-600"
                    }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VField, {
              name: "password",
              rules: "required|passwordformat|max:8|min:8",
              modelValue: form.value.password,
              "onUpdate:modelValue": ($event) => form.value.password = $event
            }, {
              default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Label, { for: "password" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Parol`);
                      } else {
                        return [
                          createTextVNode("Parol")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    id: "password",
                    type: passwordField.value ? "password" : "text",
                    placeholder: "Parol",
                    modelValue: form.value.password,
                    "onUpdate:modelValue": ($event) => form.value.password = $event,
                    class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer"${_scopeId2}>`);
                  if (passwordField.value) {
                    _push3(`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z" fill="currentColor"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!passwordField.value) {
                    _push3(`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z" fill="currentColor"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</span></div>`);
                  if (errors[0]) {
                    _push3(`<span class="text-xs text-red-600"${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_Label, { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode("Parol")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(unref(_sfc_main$1), {
                        id: "password",
                        type: passwordField.value ? "password" : "text",
                        placeholder: "Parol",
                        modelValue: form.value.password,
                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                        class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                      }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                      createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                        passwordField.value ? (openBlock(), createBlock("svg", {
                          key: 0,
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "p-icon",
                          "aria-hidden": "true",
                          onClick: passwordSee
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                            fill: "currentColor"
                          })
                        ])) : createCommentVNode("", true),
                        !passwordField.value ? (openBlock(), createBlock("svg", {
                          key: 1,
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "p-icon",
                          "aria-hidden": "true",
                          onClick: passwordSee
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                            fill: "currentColor"
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    errors[0] ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-red-600"
                    }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { "as-child": "" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "link",
                          class: "text-primary justify-start px-0"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Parolni unitdingizmi? `);
                            } else {
                              return [
                                createTextVNode(" Parolni unitdingizmi? ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: "link",
                            class: "text-primary justify-start px-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Parolni unitdingizmi? ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$1), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$2), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Parolni tiklash`);
                                  } else {
                                    return [
                                      createTextVNode("Parolni tiklash")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Malumotlarni to&#39;ldiring va parolingizni yangilang `);
                                  } else {
                                    return [
                                      createTextVNode(" Malumotlarni to'ldiring va parolingizni yangilang ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Parolni tiklash")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Malumotlarni to'ldiring va parolingizni yangilang ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VForm, null, {
                          default: withCtx(({ handleSubmit: handleSubmit2 }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<form${_scopeId4}><div class="flex flex-col space-y-4"${_scopeId4}><div class="flex flex-col space-y-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_VField, {
                                name: "username",
                                rules: "required|max:60|min:3",
                                modelValue: resetForm.value.username,
                                "onUpdate:modelValue": ($event) => resetForm.value.username = $event
                              }, {
                                default: withCtx(({ errors }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Label, { for: "username" }, {
                                      default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Foylanuvchi nomi (username) `);
                                        } else {
                                          return [
                                            createTextVNode("Foylanuvchi nomi (username) ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$1), {
                                      id: "username",
                                      type: "text",
                                      placeholder: "Fodalanuvchi nomini kiriting",
                                      modelValue: resetForm.value.username,
                                      "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                      class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="text-xs text-red-600"${_scopeId5}>${ssrInterpolate(errors[0])}</span>`);
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
                                        modelValue: resetForm.value.username,
                                        "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                        class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="flex flex-col space-y-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_VField, {
                                name: "password",
                                rules: "required|passwordformat|min:8|max:12",
                                modelValue: resetForm.value.password,
                                "onUpdate:modelValue": ($event) => resetForm.value.password = $event
                              }, {
                                default: withCtx(({ errors }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Label, { for: "password" }, {
                                      default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Yangi parol`);
                                        } else {
                                          return [
                                            createTextVNode("Yangi parol")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="relative"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$1), {
                                      id: "password",
                                      type: resetPasswordField.value ? "password" : "text",
                                      placeholder: "Yangi parol",
                                      modelValue: resetForm.value.password,
                                      "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                      class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer"${_scopeId5}>`);
                                    if (resetPasswordField.value) {
                                      _push6(`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true"${_scopeId5}><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z" fill="currentColor"${_scopeId5}></path></svg>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (!resetPasswordField.value) {
                                      _push6(`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true"${_scopeId5}><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z" fill="currentColor"${_scopeId5}></path></svg>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</span></div><span class="text-xs text-red-600"${_scopeId5}>${ssrInterpolate(errors[0])}</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_Label, { for: "password" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Yangi parol")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(unref(_sfc_main$1), {
                                          id: "password",
                                          type: resetPasswordField.value ? "password" : "text",
                                          placeholder: "Yangi parol",
                                          modelValue: resetForm.value.password,
                                          "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                          class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                                          resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                            key: 0,
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "p-icon",
                                            "aria-hidden": "true",
                                            onClick: resetPasswordSee
                                          }, [
                                            createVNode("path", {
                                              "fill-rule": "evenodd",
                                              "clip-rule": "evenodd",
                                              d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                              fill: "currentColor"
                                            })
                                          ])) : createCommentVNode("", true),
                                          !resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                            key: 1,
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "p-icon",
                                            "aria-hidden": "true",
                                            onClick: resetPasswordSee
                                          }, [
                                            createVNode("path", {
                                              "fill-rule": "evenodd",
                                              "clip-rule": "evenodd",
                                              d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                              fill: "currentColor"
                                            })
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_Button, {
                                type: "submit",
                                disabled: unref(loading)
                              }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Yangilash`);
                                  } else {
                                    return [
                                      createTextVNode("Yangilash")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div></form>`);
                            } else {
                              return [
                                createVNode("form", {
                                  onSubmit: withModifiers(($event) => handleSubmit2(resetToPassword), ["prevent"])
                                }, [
                                  createVNode("div", { class: "flex flex-col space-y-4" }, [
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode(_component_VField, {
                                        name: "username",
                                        rules: "required|max:60|min:3",
                                        modelValue: resetForm.value.username,
                                        "onUpdate:modelValue": ($event) => resetForm.value.username = $event
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
                                            modelValue: resetForm.value.username,
                                            "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode(_component_VField, {
                                        name: "password",
                                        rules: "required|passwordformat|min:8|max:12",
                                        modelValue: resetForm.value.password,
                                        "onUpdate:modelValue": ($event) => resetForm.value.password = $event
                                      }, {
                                        default: withCtx(({ errors }) => [
                                          createVNode(_component_Label, { for: "password" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yangi parol")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "relative" }, [
                                            createVNode(unref(_sfc_main$1), {
                                              id: "password",
                                              type: resetPasswordField.value ? "password" : "text",
                                              placeholder: "Yangi parol",
                                              modelValue: resetForm.value.password,
                                              "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                              class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                            }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                                              resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                                key: 0,
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 14 14",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "p-icon",
                                                "aria-hidden": "true",
                                                onClick: resetPasswordSee
                                              }, [
                                                createVNode("path", {
                                                  "fill-rule": "evenodd",
                                                  "clip-rule": "evenodd",
                                                  d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                                  fill: "currentColor"
                                                })
                                              ])) : createCommentVNode("", true),
                                              !resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                                key: 1,
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 14 14",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "p-icon",
                                                "aria-hidden": "true",
                                                onClick: resetPasswordSee
                                              }, [
                                                createVNode("path", {
                                                  "fill-rule": "evenodd",
                                                  "clip-rule": "evenodd",
                                                  d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                                  fill: "currentColor"
                                                })
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(_component_Button, {
                                      type: "submit",
                                      disabled: unref(loading)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Yangilash")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ], 40, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$1), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$2), null, {
                                default: withCtx(() => [
                                  createTextVNode("Parolni tiklash")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Malumotlarni to'ldiring va parolingizni yangilang ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VForm, null, {
                            default: withCtx(({ handleSubmit: handleSubmit2 }) => [
                              createVNode("form", {
                                onSubmit: withModifiers(($event) => handleSubmit2(resetToPassword), ["prevent"])
                              }, [
                                createVNode("div", { class: "flex flex-col space-y-4" }, [
                                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                                    createVNode(_component_VField, {
                                      name: "username",
                                      rules: "required|max:60|min:3",
                                      modelValue: resetForm.value.username,
                                      "onUpdate:modelValue": ($event) => resetForm.value.username = $event
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
                                          modelValue: resetForm.value.username,
                                          "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                          class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                                    createVNode(_component_VField, {
                                      name: "password",
                                      rules: "required|passwordformat|min:8|max:12",
                                      modelValue: resetForm.value.password,
                                      "onUpdate:modelValue": ($event) => resetForm.value.password = $event
                                    }, {
                                      default: withCtx(({ errors }) => [
                                        createVNode(_component_Label, { for: "password" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yangi parol")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "relative" }, [
                                          createVNode(unref(_sfc_main$1), {
                                            id: "password",
                                            type: resetPasswordField.value ? "password" : "text",
                                            placeholder: "Yangi parol",
                                            modelValue: resetForm.value.password,
                                            "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                            class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                          }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                                            resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                              key: 0,
                                              width: "14",
                                              height: "14",
                                              viewBox: "0 0 14 14",
                                              fill: "none",
                                              xmlns: "http://www.w3.org/2000/svg",
                                              class: "p-icon",
                                              "aria-hidden": "true",
                                              onClick: resetPasswordSee
                                            }, [
                                              createVNode("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                                fill: "currentColor"
                                              })
                                            ])) : createCommentVNode("", true),
                                            !resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                              key: 1,
                                              width: "14",
                                              height: "14",
                                              viewBox: "0 0 14 14",
                                              fill: "none",
                                              xmlns: "http://www.w3.org/2000/svg",
                                              class: "p-icon",
                                              "aria-hidden": "true",
                                              onClick: resetPasswordSee
                                            }, [
                                              createVNode("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                                fill: "currentColor"
                                              })
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_Button, {
                                    type: "submit",
                                    disabled: unref(loading)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Yangilash")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ], 40, ["onSubmit"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: "link",
                          class: "text-primary justify-start px-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Parolni unitdingizmi? ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2$1), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1$2), null, {
                              default: withCtx(() => [
                                createTextVNode("Parolni tiklash")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createTextVNode(" Malumotlarni to'ldiring va parolingizni yangilang ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VForm, null, {
                          default: withCtx(({ handleSubmit: handleSubmit2 }) => [
                            createVNode("form", {
                              onSubmit: withModifiers(($event) => handleSubmit2(resetToPassword), ["prevent"])
                            }, [
                              createVNode("div", { class: "flex flex-col space-y-4" }, [
                                createVNode("div", { class: "flex flex-col space-y-2" }, [
                                  createVNode(_component_VField, {
                                    name: "username",
                                    rules: "required|max:60|min:3",
                                    modelValue: resetForm.value.username,
                                    "onUpdate:modelValue": ($event) => resetForm.value.username = $event
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
                                        modelValue: resetForm.value.username,
                                        "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                        class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                      createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "flex flex-col space-y-2" }, [
                                  createVNode(_component_VField, {
                                    name: "password",
                                    rules: "required|passwordformat|min:8|max:12",
                                    modelValue: resetForm.value.password,
                                    "onUpdate:modelValue": ($event) => resetForm.value.password = $event
                                  }, {
                                    default: withCtx(({ errors }) => [
                                      createVNode(_component_Label, { for: "password" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Yangi parol")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(unref(_sfc_main$1), {
                                          id: "password",
                                          type: resetPasswordField.value ? "password" : "text",
                                          placeholder: "Yangi parol",
                                          modelValue: resetForm.value.password,
                                          "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                          class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                        }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                                          resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                            key: 0,
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "p-icon",
                                            "aria-hidden": "true",
                                            onClick: resetPasswordSee
                                          }, [
                                            createVNode("path", {
                                              "fill-rule": "evenodd",
                                              "clip-rule": "evenodd",
                                              d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                              fill: "currentColor"
                                            })
                                          ])) : createCommentVNode("", true),
                                          !resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                            key: 1,
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "p-icon",
                                            "aria-hidden": "true",
                                            onClick: resetPasswordSee
                                          }, [
                                            createVNode("path", {
                                              "fill-rule": "evenodd",
                                              "clip-rule": "evenodd",
                                              d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                              fill: "currentColor"
                                            })
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_Button, {
                                  type: "submit",
                                  disabled: unref(loading)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Yangilash")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ], 40, ["onSubmit"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              class: "w-full",
              disabled: unref(loading)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tizimga kirish `);
                } else {
                  return [
                    createTextVNode(" Tizimga kirish ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(($event) => handleSubmit(loginToSystem), ["prevent"])
              }, [
                createVNode("div", { class: "flex flex-col space-y-6" }, [
                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                    createVNode(_component_VField, {
                      name: "username",
                      rules: "required|max:60|min:3",
                      modelValue: form.value.username,
                      "onUpdate:modelValue": ($event) => form.value.username = $event
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
                          placeholder: "Fodalanuvchi nomini kiritng",
                          modelValue: form.value.username,
                          "onUpdate:modelValue": ($event) => form.value.username = $event,
                          class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        errors[0] ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-600"
                        }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                    createVNode(_component_VField, {
                      name: "password",
                      rules: "required|passwordformat|max:8|min:8",
                      modelValue: form.value.password,
                      "onUpdate:modelValue": ($event) => form.value.password = $event
                    }, {
                      default: withCtx(({ errors }) => [
                        createVNode(_component_Label, { for: "password" }, {
                          default: withCtx(() => [
                            createTextVNode("Parol")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "relative" }, [
                          createVNode(unref(_sfc_main$1), {
                            id: "password",
                            type: passwordField.value ? "password" : "text",
                            placeholder: "Parol",
                            modelValue: form.value.password,
                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                            class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                          }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                          createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                            passwordField.value ? (openBlock(), createBlock("svg", {
                              key: 0,
                              width: "14",
                              height: "14",
                              viewBox: "0 0 14 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "p-icon",
                              "aria-hidden": "true",
                              onClick: passwordSee
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                fill: "currentColor"
                              })
                            ])) : createCommentVNode("", true),
                            !passwordField.value ? (openBlock(), createBlock("svg", {
                              key: 1,
                              width: "14",
                              height: "14",
                              viewBox: "0 0 14 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "p-icon",
                              "aria-hidden": "true",
                              onClick: passwordSee
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                fill: "currentColor"
                              })
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        errors[0] ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-600"
                        }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$1$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: "link",
                              class: "text-primary justify-start px-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Parolni unitdingizmi? ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$1), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$2), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Parolni tiklash")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Malumotlarni to'ldiring va parolingizni yangilang ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VForm, null, {
                              default: withCtx(({ handleSubmit: handleSubmit2 }) => [
                                createVNode("form", {
                                  onSubmit: withModifiers(($event) => handleSubmit2(resetToPassword), ["prevent"])
                                }, [
                                  createVNode("div", { class: "flex flex-col space-y-4" }, [
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode(_component_VField, {
                                        name: "username",
                                        rules: "required|max:60|min:3",
                                        modelValue: resetForm.value.username,
                                        "onUpdate:modelValue": ($event) => resetForm.value.username = $event
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
                                            modelValue: resetForm.value.username,
                                            "onUpdate:modelValue": ($event) => resetForm.value.username = $event,
                                            class: errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col space-y-2" }, [
                                      createVNode(_component_VField, {
                                        name: "password",
                                        rules: "required|passwordformat|min:8|max:12",
                                        modelValue: resetForm.value.password,
                                        "onUpdate:modelValue": ($event) => resetForm.value.password = $event
                                      }, {
                                        default: withCtx(({ errors }) => [
                                          createVNode(_component_Label, { for: "password" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yangi parol")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "relative" }, [
                                            createVNode(unref(_sfc_main$1), {
                                              id: "password",
                                              type: resetPasswordField.value ? "password" : "text",
                                              placeholder: "Yangi parol",
                                              modelValue: resetForm.value.password,
                                              "onUpdate:modelValue": ($event) => resetForm.value.password = $event,
                                              class: ["pr-8", errors.length > 0 ? "focus-visible:border-red-600 border-red-600" : ""]
                                            }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "class"]),
                                            createVNode("span", { class: "absolute top-1/2 -translate-y-1/2 end-0 flex items-center justify-center px-3 cursor-pointer" }, [
                                              resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                                key: 0,
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 14 14",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "p-icon",
                                                "aria-hidden": "true",
                                                onClick: resetPasswordSee
                                              }, [
                                                createVNode("path", {
                                                  "fill-rule": "evenodd",
                                                  "clip-rule": "evenodd",
                                                  d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
                                                  fill: "currentColor"
                                                })
                                              ])) : createCommentVNode("", true),
                                              !resetPasswordField.value ? (openBlock(), createBlock("svg", {
                                                key: 1,
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 14 14",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "p-icon",
                                                "aria-hidden": "true",
                                                onClick: resetPasswordSee
                                              }, [
                                                createVNode("path", {
                                                  "fill-rule": "evenodd",
                                                  "clip-rule": "evenodd",
                                                  d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
                                                  fill: "currentColor"
                                                })
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-xs text-red-600" }, toDisplayString(errors[0]), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(_component_Button, {
                                      type: "submit",
                                      disabled: unref(loading)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Yangilash")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ], 40, ["onSubmit"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode(_component_Button, {
                    type: "submit",
                    class: "w-full",
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Tizimga kirish ")
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
      _push(`<div class="flex items-center flex-col mt-6"><div class="flex flex-wrap justify-center sm:justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, { variant: "link" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ro&#39;yxatdan o&#39;tish `);
                } else {
                  return [
                    createTextVNode(" Ro'yxatdan o'tish ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, { variant: "link" }, {
                default: withCtx(() => [
                  createTextVNode(" Ro'yxatdan o'tish ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-D5VgBYnp.mjs.map
