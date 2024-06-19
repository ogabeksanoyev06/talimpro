import { _ as _sfc_main$1 } from './index--b-3J809.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, a as useCookie, s as storeToRefs } from './server.mjs';
import { u as useActiveTestStore } from './ActiveTestStore-kLnQEG9L.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vee-validate';
import 'vue-sonner';
import './parseQuestion-BnEt1owC.mjs';
import './testTypes-DX9gcdzZ.mjs';
import './useApi-B16mdXqT.mjs';
import 'axios';

const useTimerFormat = () => {
  const activeTestStore = useActiveTestStore();
  storeToRefs(activeTestStore);
  const timerFormat = (time) => {
    let sec_num = parseInt(time, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;
    const format = (num) => num < 10 ? `0${num}` : num;
    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  };
  return {
    timerFormat
  };
};
const _sfc_main = {
  __name: "active-test",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const selectedQuestion = ref({});
    const testActiveNumber = useCookie("testActiveNumber", { default: () => 0 });
    const { timerFormat } = useTimerFormat();
    const activeTestStore = useActiveTestStore();
    const { tests, testTimer, hasActiveTest } = storeToRefs(activeTestStore);
    const answerLabels = ref(["A", "B", "C", "D", "E", "F", "G", "H"]);
    const getActivetestActiveNumber = (number) => {
      if (number !== testActiveNumber.value) {
        testActiveNumber.value = number;
        selectedQuestions();
      }
    };
    const prev = () => {
      const prevNumber = testActiveNumber.value - 1;
      if (prevNumber >= 0) {
        getActivetestActiveNumber(prevNumber);
      }
    };
    const next = () => {
      const nextNumber = testActiveNumber.value + 1;
      if (nextNumber <= (tests == null ? void 0 : tests.value.questions.length) - 1) {
        getActivetestActiveNumber(nextNumber);
      }
    };
    const selectedQuestions = () => {
      var _a;
      selectedQuestion.value = (_a = tests.value) == null ? void 0 : _a.questions[testActiveNumber.value];
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))} data-v-02f70976><div class="container" data-v-02f70976><div class="flex flex-col gap-y-4" data-v-02f70976><div class="flex items-center md:justify-between flex-col md:flex-row gap-3 border-b border-t rounded-lg border-gray-400 py-2 px-4" data-v-02f70976>`);
      if (unref(tests).type === "dtm") {
        _push(`<h3 class="text-xl font-semibold" data-v-02f70976>${ssrInterpolate(selectedQuestion.value ? selectedQuestion.value.science : "")}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-xl font-semibold" data-v-02f70976>${ssrInterpolate(unref(tests).subjectName)}</h3><div class="max-w-[200px] w-full border border-green-500 text-center" data-v-02f70976><span class="text-green-500" style="${ssrRenderStyle({ "font-variant-numeric": "tabular-nums", "font-size": "xx-large" })}" data-v-02f70976>${ssrInterpolate(unref(timerFormat)(unref(testTimer)))}</span></div></div><div class="border-b border-t rounded-lg border-gray-400 py-4" data-v-02f70976><div class="text-sm sm:text-base px-4" data-v-02f70976><b style="${ssrRenderStyle({ "font-size": "1.1rem" })}" data-v-02f70976>${ssrInterpolate(unref(testActiveNumber) + 1)}. </b><span data-v-02f70976>${(_a2 = (_a = selectedQuestion.value) == null ? void 0 : _a.question) != null ? _a2 : ""}</span></div><div class="w-full h-px bg-border my-6" data-v-02f70976></div><ul class="flex flex-col" data-v-02f70976><!--[-->`);
      ssrRenderList((_b = selectedQuestion.value) == null ? void 0 : _b.answers, (answer, aIndex) => {
        _push(`<li class="${ssrRenderClass([selectedQuestion.value.answer === aIndex + 1 ? "!bg-blue-500/5 after:opacity-100 before:op " : "", "text-sm relative cursor-pointer flex items-start gap-1 p-3 after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-blue-500/45 after:rounded-tr-sm after:rounded-br-sm after:opacity-0 before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-blue-500/45 before:rounded-tl-sm before:rounded-bl-sm before:opacity-0 hover:after:opacity-100 hover:before:opacity-100 transition-all duration-300 group"])}" data-v-02f70976><span class="text-[1rem] font-bold pl-2 sm:pl-4" data-v-02f70976>${ssrInterpolate(answerLabels.value[aIndex] + ")")}</span><span data-v-02f70976>${answer != null ? answer : ""}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="border-b border-t rounded-lg border-gray-400 py-4 px-4 mb-8" data-v-02f70976><div class="flex flex-wrap gap-1" data-v-02f70976><!--[-->`);
      ssrRenderList((_c = unref(tests)) == null ? void 0 : _c.questions, (item, index) => {
        _push(ssrRenderComponent(_component_Button, {
          key: item.id,
          variant: index === unref(testActiveNumber) ? "default" : item.is_picked ? "secondary" : "outline",
          onClick: ($event) => getActivetestActiveNumber(index),
          class: "h-8 w-[40px]"
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
      _push(`<!--]--></div><div class="w-full h-px bg-border my-6" data-v-02f70976></div><div class="grid grid-cols-1 md:grid-cols-12 gap-4" data-v-02f70976><div class="md:col-span-6 flex gap-5 justify-center md:justify-start" data-v-02f70976>`);
      _push(ssrRenderComponent(_component_Button, { onClick: prev }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Oldingi`);
          } else {
            return [
              createTextVNode("Oldingi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, { onClick: next }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Keyingi`);
          } else {
            return [
              createTextVNode("Keyingi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-6 flex justify-center md:justify-end" data-v-02f70976>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "destructive",
        onClick: unref(activeTestStore).testFinish
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Yakunlash`);
          } else {
            return [
              createTextVNode("Yakunlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/active-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activeTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02f70976"]]);

export { activeTest as default };
//# sourceMappingURL=active-test-DrHsQj3x.mjs.map
