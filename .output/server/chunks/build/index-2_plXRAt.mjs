import { ref, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { u as useCourseStore } from './courses-CkQ_OTxl.mjs';
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
import './useApi-B16mdXqT.mjs';
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courseStore = useCourseStore();
    storeToRefs(courseStore);
    const route = useRoute();
    ref(Number(route.params.slug));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[slug]/lessons/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2_plXRAt.mjs.map
