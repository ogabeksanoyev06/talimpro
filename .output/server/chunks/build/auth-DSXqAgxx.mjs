import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './logo-dark-D8HvwyBX.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><main class="min-h-screen flex flex-col"><div class="relative flex items-center w-full h-20 sm:h-28 justify-center overflow-hidden rounded-md"><div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div><div class="flex flex-col items-center justify-center gap-y-3 sm:gap-y-4">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "flex items-center justify-center gap-x-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$colorMode.preference === "light") {
          _push2(`<img alt="logo" fetchpriority="high" height="40"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$colorMode.preference === "dark") {
          _push2(`<img alt="logo" fetchpriority="high" height="40"${ssrRenderAttr("src", _imports_1)}${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$colorMode.preference === "light" ? (openBlock(), createBlock("img", {
            key: 0,
            alt: "logo",
            fetchpriority: "high",
            height: "40",
            src: _imports_0
          })) : createCommentVNode("", true),
          _ctx.$colorMode.preference === "dark" ? (openBlock(), createBlock("img", {
            key: 1,
            alt: "logo",
            fetchpriority: "high",
            height: "40",
            src: _imports_1
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="container flex-1 flex flex-col">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "md:absolute md:top-10 md:left-10 flex h-10 w-10 items-center justify-center gap-x-3 rounded-full border bg-card hover:bg-muted"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="18" class="iconify iconify--mingcute" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><g fill="none" fill-rule="evenodd"${_scopeId}><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"${_scopeId}></path><path fill="currentColor" d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09"${_scopeId}></path></g></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img",
            "font-size": "18",
            class: "iconify iconify--mingcute",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24"
          }, [
            createVNode("g", {
              fill: "none",
              "fill-rule": "evenodd"
            }, [
              createVNode("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
              createVNode("path", {
                fill: "currentColor",
                d: "M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09"
              })
            ])
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-DSXqAgxx.mjs.map
