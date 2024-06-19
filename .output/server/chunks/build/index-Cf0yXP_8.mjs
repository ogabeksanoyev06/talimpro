import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { _ as _sfc_main$6 } from './index--b-3J809.mjs';
import { useSSRContext, mergeProps, unref, ref, computed, withCtx, createTextVNode, createVNode } from 'vue';
import { _ as _export_sfc, s as storeToRefs } from './server.mjs';
import { u as useCommonStore } from './common-CBWtjeDP.mjs';
import { u as useMouseInElement } from './index-CQGKuTmi.mjs';
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
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'vue-router';
import 'vee-validate';
import 'vue-sonner';
import './useApi-B16mdXqT.mjs';
import 'axios';

const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_96_2)'%3e%3cpath%20d='M36%200H12C5.37258%200%200%205.37258%200%2012V36C0%2042.6274%205.37258%2048%2012%2048H36C42.6274%2048%2048%2042.6274%2048%2036V12C48%205.37258%2042.6274%200%2036%200Z'%20fill='%233B82F6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.2873%2019.6861C18.1229%2019.7972%2017.9627%2019.9121%2017.8067%2020.0309C17.6886%2020.0927%2017.5743%2020.1641%2017.4639%2020.2454C15.1716%2021.935%2013.2043%2024.0754%2011.646%2026.1218L9.3381%2023.8138C6.81177%2021.2875%207.62504%2018.7265%2011.155%2018.1382L16.6748%2017.2211C17.5919%2017.0654%2018.6993%2016.2521%2019.1147%2015.4043L22.1601%209.31346C23.8212%206.00847%2026.5206%206.00847%2028.1645%209.31346L31.2099%2015.4043C31.6251%2016.2521%2032.7326%2017.0654%2033.6669%2017.2211L39.1868%2018.1382C42.7167%2018.7265%2043.5473%2021.2875%2041.0037%2023.8138L36.7124%2028.1051C35.9856%2028.8319%2035.5877%2030.2335%2035.8127%2031.2371L37.0412%2036.5492C38.0102%2040.754%2035.778%2042.3806%2032.0577%2040.183L27.5577%2037.5191C27.8766%2037.327%2028.1435%2037.1479%2028.3586%2036.9877C28.7558%2036.7879%2029.145%2036.5602%2029.5235%2036.3043C34.2017%2033.1411%2035.4788%2026.8568%2032.376%2022.2677C29.2733%2017.6788%2022.9655%2016.5229%2018.2873%2019.6861Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.838%2022.9592C18.9465%2022.8765%2019.0579%2022.7966%2019.1724%2022.7192C22.428%2020.5179%2026.8279%2021.3375%2028.9999%2024.5498C31.1719%2027.7622%2030.2934%2032.1507%2027.0378%2034.352C26.7744%2034.53%2026.5035%2034.6884%2026.2269%2034.8272C25.105%2035.6637%2021.9511%2037.2332%2016.7382%2037.8758L21.1341%2033.7559L9.00549%2038.2515L18.1192%2028.0563L12.0432%2031.2792C12.803%2029.607%2015.1779%2025.6317%2018.5995%2023.1084C18.6762%2023.0519%2018.7558%2023.0022%2018.838%2022.9592Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_96_2'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_1$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0.98%200.68%2014.04%2013.47'%3e%3cpath%20d='M6.85873%201.51246C7.21795%200.406888%208.78205%200.406888%209.14127%201.51246L9.97572%204.08065C10.1364%204.57508%2010.5971%204.90983%2011.117%204.90983H13.8173C14.9798%204.90983%2015.4631%206.39737%2014.5227%207.08065L12.3381%208.66788C11.9175%208.97345%2011.7415%209.51509%2011.9021%2010.0095L12.7366%2012.5777C13.0958%2013.6833%2011.8304%2014.6026%2010.89%2013.9194L8.70534%2012.3321C8.28476%2012.0265%207.71524%2012.0265%207.29466%2012.3321L5.11002%2013.9193C4.16957%2014.6026%202.90419%2013.6833%203.26341%2012.5777L4.09787%2010.0095C4.25852%209.51509%204.08253%208.97345%203.66194%208.66788L1.47731%207.08065C0.536856%206.39737%201.02019%204.90983%202.18265%204.90983H4.88301C5.40288%204.90983%205.86363%204.57508%206.02428%204.08065L6.85873%201.51246Z'%20fill='%23F58543'/%3e%3c/svg%3e";
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Button = _sfc_main$6;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-var(--header-height))] flex items-center py-4" }, _attrs))}><div class="container"><div class="flex flex-col items-center gap-y-4 sm:gap-y-6"><div class="flex items-center gap-x-2 rounded-full border bg-muted px-3 py-1.5"><div class="w-3 h-3 bg-blue-600 rounded-full"></div><div class="shrink-0 bg-border w-px mx-2 h-4"></div><span class="text-xs sm:text-sm font-medium">Xush kelipsiz, Bilimdon</span></div><h1 class="text-2xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl sm:leading-snug" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top", "text-decoration": "inherit", "text-wrap": "balance" })}"> Ta&#39;limPro.uz orqali bilimingizni tez va oson oshiring. </h1><span class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top", "text-decoration": "inherit", "text-wrap": "initial" })}"> Bu platforma sizga test topshirish, sinovlarni o&#39;tkazish va natijalarni o&#39;rganish imkoniyatini beradi. Bu yerga kirishingiz bilan, sizning bilimingizni sinash va rivojlantirishga yordam beradigan qulay va samarali vositaga ega bo&#39;lasiz. </span><div class="flex w-full items-center flex-wrap justify-center gap-4 py-4 md:pb-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/choose-test" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, { class: "sm:px-8 h-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Test ishlash `);
            } else {
              return [
                createTextVNode(" Test ishlash ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, { class: "sm:px-8 h-10" }, {
            default: withCtx(() => [
              createTextVNode(" Test ishlash ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          class: "sm:px-8 h-10",
          variant: "outline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Video kusrlar `);
            } else {
              return [
                createTextVNode(" Video kusrlar ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            class: "sm:px-8 h-10",
            variant: "outline"
          }, {
            default: withCtx(() => [
              createTextVNode(" Video kusrlar ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><a target="_blank" class="flex items-center px-4 py-2.5 rounded-full bg-muted/70 hover:bg-muted gap-x-3 transition-all ease-linear shadow-sm" href="#"><img alt="sharh.commeta.uz" loading="lazy" width="24" height="24"${ssrRenderAttr("src", _imports_0$1)}><img alt="sharh.commeta.uz" loading="lazy" width="16" height="16"${ssrRenderAttr("src", _imports_1$1)}><span class="font-bold">4.9</span></a></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/HeroBanner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("students.Dwwji6c_.svg");
const _imports_1 = "" + buildAssetsURL("hello.DL-SNCm6.svg");
const _imports_2 = "" + buildAssetsURL("courses.CWm-yw1d.svg");
const _sfc_main$4 = {
  __name: "AppCounts",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { statistics, loading } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mt-20" }, _attrs))}><div class="container"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-6 justify-center"><div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4"><img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24"${ssrRenderAttr("src", _imports_0)}><dl class="flex flex-col gap-y-2"><dt class="text-2xl font-medium sm:text-4xl">${ssrInterpolate((_a = unref(statistics)) == null ? void 0 : _a.users_count)} +</dt><dd class="text-base sm:text-lg">Umumiy foydalanuvchilar</dd></dl></div><div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4 group"><img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24"${ssrRenderAttr("src", _imports_1)}><dl class="flex flex-col gap-y-2"><dt class="text-2xl font-medium sm:text-4xl">${ssrInterpolate(unref(statistics).schools_count)} +</dt><dd class="text-lg">Maktablar</dd></dl></div><div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4"><img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24"${ssrRenderAttr("src", _imports_2)}><dl class="flex flex-col gap-y-2"><dt class="text-2xl font-medium sm:text-4xl">20 000 +</dt><dd class="text-base sm:text-lg">Testlar</dd></dl></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/AppCounts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CtaBanner",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    text: String,
    img: String,
    order: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const target = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
    const cardTransform = computed(() => {
      const MAX_ROTATION = 6;
      const rX = (MAX_ROTATION / 2 - elementY.value / elementHeight.value * MAX_ROTATION).toFixed(5);
      const rY = (MAX_ROTATION / 2 - elementX.value / elementHeight.value * MAX_ROTATION).toFixed(2);
      return isOutside.value ? "" : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mt-20" }, _attrs))}><div class="container"><div class="grid items-center grid-cols-1 md:grid-cols-2 gap-10"><div class="${ssrRenderClass([{ "md:order-last": __props.order }, "flex flex-col space-y-4"])}"><p class="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">${ssrInterpolate(props.name)}</p><h5 class="text-xl font-bold">${ssrInterpolate(props.title)}</h5><p class="text-base text-muted-foreground">${ssrInterpolate(props.text)}</p>`);
      _push(ssrRenderComponent(_component_Button, { class: "w-fit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Test yechish `);
          } else {
            return [
              createTextVNode(" Test yechish ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(__props.order ? "md:mr-auto" : "md:ml-auto")}" style="${ssrRenderStyle({ transform: unref(cardTransform), transition: "transform .35s ease-out" })}"><img${ssrRenderAttr("src", props.img)} alt="" class="rounded max-w-full"></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/CtaBanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TestTypes",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { testTypesHome } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 sm:mt-20" }, _attrs))}><div class="container"><div class="space-y-2 mb-4 sm:mb-8"><h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Bizda mavjud testlar</h1><p class="text-lg text-muted-foreground"></p></div><div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-6 justify-center"><!--[-->`);
      ssrRenderList(unref(testTypesHome), (item) => {
        _push(`<div><div class="flex items-center bg-card border rounded-md group min-h-[170px]"><dl class="flex flex-col gap-y-2 p-3 sm:p-4 sm:col-span-9"><dt class="text-base sm:text-lg font-bold">${ssrInterpolate(item.title)}</dt><dd class="text-sm">${ssrInterpolate(item.short_description)}</dd></dl></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/TestTypes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        value: "item-1",
        title: "Qulay interfeys",
        content: "Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin"
      },
      {
        value: "item-2",
        title: "Malakali mutaxassislar",
        content: "Malakali mutaxassislar tomonidan tayyorlangan kurslar orqali o'z malakangizni oshiring. Yanada ko'proq bilimga ega bo'ling."
      },
      { value: "item-3", title: "Kasblar", content: "Kasbga yo'naltirilgan kurslarimizda 0 dan boshlab ishga tayyor bo'lib chiqing" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-8 md:mt-12 mb-10" }, _attrs))}><div class="container"><div class="space-y-2"><h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Siz uchun yaratilgan qulayliklar</h1><p class="text-sm text-muted-foreground max-w-[600px]"> Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga, o&#39;zingizga qulay vaqtda malaka oshirishingizga yordam beradi. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="rounded-xl bg-card border-b-2 border-border dark:border-white p-3 md:p-6 transition-300 hover:shadow-card gap-2 md:gap-4"><div class="flex flex-col items-center gap-2"><h3 class="text-xl font-medium w-full">${ssrInterpolate(item.title)}</h3><p class="text-sm">${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/AppFeatures.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const img1 = "" + buildAssetsURL("5.DWM1kckh.jpg");
const img2 = "" + buildAssetsURL("6.pJoMk29a.jpg");
const img3 = "" + buildAssetsURL("7.Dan_dwZy.jpg");
const img4 = "" + buildAssetsURL("8.DvUCjqBX.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const banners = [
      {
        name: "Online test",
        title: "Sizning vaqtingizga qarab moslashadi.",
        text: "Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring.",
        img: img2
      },
      {
        name: "Blog test",
        title: "Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi.",
        text: "Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring.",
        order: true,
        img: img3
      },
      {
        name: "Maktab o'quvchilari uchun test",
        title: "O'quvchilar uchun maxsus testlar.",
        text: "Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang.",
        img: img4
      },
      {
        name: "Xalqaro tadqiqot testlari",
        title: "Bu bo'limda xalqaro darajada o'z o'rningizni egallang.",
        text: "Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi.",
        order: true,
        img: img1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroBanner, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(banners, (banner, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          name: banner.name,
          title: banner.title,
          text: banner.text,
          img: banner.img,
          order: banner.order
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cf0yXP_8.mjs.map
