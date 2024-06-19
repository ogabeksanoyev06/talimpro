import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './Input-DvOO0onJ.mjs';
import { _ as _sfc_main$2 } from './index--b-3J809.mjs';
import { ref, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as usePaymentStore } from './payment-Dmp51Dzu.mjs';
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
import './index-CQGKuTmi.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import './server.mjs';
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _imports_0 = "" + buildAssetsURL("payme.CRpXD4cr.svg");
const _sfc_main = {
  __name: "top-up-balance",
  __ssrInlineRender: true,
  setup(__props) {
    const paymentStore = usePaymentStore();
    const selectedPaymentType = ref(1);
    const paymentAmount = ref(null);
    const isNumber = (evt) => {
      evt = evt ? evt : (void 0).event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><h4 class="text-base sm:text-xl font-semibold tracking-tight mb-4">To&#39;lov turini tanlang</h4><div class="${ssrRenderClass([{ "!border-primary": unref(selectedPaymentType) === 1 }, "inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white"])}"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-20"></div><div class="flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5 bg-card"><p class="text-sm text-foreground">Hisobni to&#39;ldirish uchun kerakli miqdorni kiriting va to&#39;lovni amalga oshirish tugmasini bosing. Minimal to&#39;lov - 20000 so&#39;m</p>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(paymentAmount),
        "onUpdate:modelValue": ($event) => isRef(paymentAmount) ? paymentAmount.value = $event : null,
        placeholder: "20 000",
        onKeypress: ($event) => isNumber($event)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        disabled: parseInt(unref(paymentAmount)) < 2e4 || unref(paymentAmount) === null,
        onClick: ($event) => unref(paymentStore).createPayment(unref(paymentAmount))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hisobni to&#39;ldirish `);
          } else {
            return [
              createTextVNode(" Hisobni to'ldirish ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/top-up-balance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=top-up-balance-DB8Tx0bU.mjs.map
