import { _ as __nuxt_component_0 } from './nuxt-link-Dhb71uaa.mjs';
import { s as storeToRefs, o as useState } from './server.mjs';
import { useSSRContext, ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, defineComponent, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './logo-dark-D8HvwyBX.mjs';
import { _ as _sfc_main$g } from './index--b-3J809.mjs';
import { useRoute, useRouter } from 'vue-router';
import { useForwardPropsEmits, DropdownMenuRoot, useForwardProps, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogClose, ComboboxRoot, ComboboxEmpty, ComboboxGroup, ComboboxLabel, ComboboxInput, ComboboxItem, ComboboxContent, ComboboxSeparator } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$1$1, a as _sfc_main$h } from './DialogContent-DzqGgtf6.mjs';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-icons/vue';
import { u as useAuthStore } from './AuthStore-CoOPwA7b.mjs';
import { u as useUserStore } from './user-BLCEGJvj.mjs';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, side, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps({
                class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    open: { type: Boolean, default: true },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/Command.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CommandDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1$1), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$h), { class: "overflow-hidden p-0 shadow-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$h), { class: "overflow-hidden p-0 shadow-lg" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandDialog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CommandEmpty",
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
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps(delegatedProps.value, {
        class: unref(cn)("py-6 text-center text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandEmpty.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps(delegatedProps.value, {
        class: unref(cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.heading) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.heading ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        "auto-focus": "",
        class: unref(cn)(
          "flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps(unref(forwarded), {
        class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: false },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
        class: unref(cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommandSeparator",
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
      _push(ssrRenderComponent(unref(ComboboxSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 h-px bg-border", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandSeparator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = [
      {
        name: "Asosiy",
        route: "/",
        value: "Asosiy"
      },
      {
        name: "Testlar",
        route: "/choose-test",
        value: "Testlar"
      },
      {
        name: "Xalqaro tadqiqotlar",
        route: "/research-test",
        value: "Xalqaro Testlar"
      },
      {
        name: "Kurslar",
        route: "/courses",
        value: "Kurslar"
      }
      // {
      //    name: 'Davlat OTMlari',
      //    route: '/courses',
      //    value: 'Kurslar'
      // }
    ];
    const pages = [
      {
        name: "DTM testlar",
        route: "/dtm-test",
        value: "DTM testlar"
      },
      {
        name: "Blog testlar",
        route: "/block-test",
        value: "Blog testlar"
      },
      {
        name: "Maktab o`quvchilari testlari",
        route: "/school-test",
        value: "Maktab o`quvchilari testlari"
      },
      {
        name: "PISA testlar",
        route: "/research-test",
        value: "PISA testlar"
      },
      {
        name: "PIRLS testlar",
        route: "/research-test",
        value: "PIRLS testlar"
      },
      {
        name: "TIMSS testlar",
        route: "/research-test",
        value: "TIMSS testlar"
      },
      {
        name: "Mening profilim",
        route: "/profile",
        value: "Mening profilim"
      },
      {
        name: "Mening natijalarim",
        route: "/profile/tests-results",
        value: "Mening natijalarim"
      },
      {
        name: "Hisobni to`ldirish",
        route: "/profile/top-up-balance",
        value: "Hisobni to`ldirish"
      },
      {
        name: "To`lovlar tarixi",
        route: "/profile/payment-history",
        value: "To`lovlar tarixi"
      },
      {
        name: "Mening kurslarim",
        route: "/profile/my-courses",
        value: "Mening kurslarim"
      }
    ];
    const authStore = useAuthStore();
    const userStore = useUserStore();
    const { isAuthenticated } = storeToRefs(authStore);
    const { user, fullNameInitial, loading } = storeToRefs(userStore);
    const open = ref(false);
    const route = useRoute();
    const router = useRouter();
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    function handleOpenChange() {
      open.value = !open.value;
    }
    function goToLink(route2) {
      router.push({ path: route2 });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-background/75 backdrop-blur border-b border-border -mb-px sticky top-0 z-50" }, _attrs))}><div class="container flex items-center justify-between gap-3 h-[--header-height]">`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "w-10 h-10 flex-shrink-0 border rounded-full bg-secondary hover:bg-secondary/80 flex lg:hidden justify-center items-center cursor-pointer" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="24" class="iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId2}><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      role: "img",
                      "font-size": "24",
                      class: "iconify iconify--material-symbols",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              side: "right",
              class: "flex flex-col gap-y-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-center mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(colorMode).preference === "light") {
                          _push4(`<img alt="logo" fetchpriority="high" height="40" width="150"${ssrRenderAttr("src", _imports_0)}${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(colorMode).preference === "dark") {
                          _push4(`<img alt="logo" fetchpriority="high" height="40" width="150"${ssrRenderAttr("src", _imports_1)}${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(colorMode).preference === "light" ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "logo",
                            fetchpriority: "high",
                            height: "40",
                            width: "150",
                            src: _imports_0
                          })) : createCommentVNode("", true),
                          unref(colorMode).preference === "dark" ? (openBlock(), createBlock("img", {
                            key: 1,
                            alt: "logo",
                            fetchpriority: "high",
                            height: "40",
                            width: "150",
                            src: _imports_1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><nav class="flex flex-col rounded-md bg-muted p-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(menu, (item, index) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      class: ["rounded-md px-4 py-2 hover:bg-foreground/5", { "bg-card hover:!bg-card ": item.route === unref(route).path }],
                      key: index,
                      to: item.route
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></nav>`);
                  if (!unref(isAuthenticated)) {
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$g), { class: "w-full rounded-full" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Tizimga kirish`);
                              } else {
                                return [
                                  createTextVNode("Tizimga kirish")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$g), { class: "w-full rounded-full" }, {
                              default: withCtx(() => [
                                createTextVNode("Tizimga kirish")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "flex justify-center mt-2" }, [
                      createVNode(_component_NuxtLink, { to: "/" }, {
                        default: withCtx(() => [
                          unref(colorMode).preference === "light" ? (openBlock(), createBlock("img", {
                            key: 0,
                            alt: "logo",
                            fetchpriority: "high",
                            height: "40",
                            width: "150",
                            src: _imports_0
                          })) : createCommentVNode("", true),
                          unref(colorMode).preference === "dark" ? (openBlock(), createBlock("img", {
                            key: 1,
                            alt: "logo",
                            fetchpriority: "high",
                            height: "40",
                            width: "150",
                            src: _imports_1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("nav", { class: "flex flex-col rounded-md bg-muted p-1" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(menu, (item, index) => {
                        return createVNode(_component_NuxtLink, {
                          class: ["rounded-md px-4 py-2 hover:bg-foreground/5", { "bg-card hover:!bg-card ": item.route === unref(route).path }],
                          key: index,
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"]);
                      }), 64))
                    ]),
                    !unref(isAuthenticated) ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: "/auth/login"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), { class: "w-full rounded-full" }, {
                          default: withCtx(() => [
                            createTextVNode("Tizimga kirish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$a), { class: "w-10 h-10 flex-shrink-0 border rounded-full bg-secondary hover:bg-secondary/80 flex lg:hidden justify-center items-center cursor-pointer" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "aria-hidden": "true",
                    role: "img",
                    "font-size": "24",
                    class: "iconify iconify--material-symbols",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                    })
                  ]))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$9), {
                side: "right",
                class: "flex flex-col gap-y-8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center mt-2" }, [
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        unref(colorMode).preference === "light" ? (openBlock(), createBlock("img", {
                          key: 0,
                          alt: "logo",
                          fetchpriority: "high",
                          height: "40",
                          width: "150",
                          src: _imports_0
                        })) : createCommentVNode("", true),
                        unref(colorMode).preference === "dark" ? (openBlock(), createBlock("img", {
                          key: 1,
                          alt: "logo",
                          fetchpriority: "high",
                          height: "40",
                          width: "150",
                          src: _imports_1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("nav", { class: "flex flex-col rounded-md bg-muted p-1" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(menu, (item, index) => {
                      return createVNode(_component_NuxtLink, {
                        class: ["rounded-md px-4 py-2 hover:bg-foreground/5", { "bg-card hover:!bg-card ": item.route === unref(route).path }],
                        key: index,
                        to: item.route
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "class"]);
                    }), 64))
                  ]),
                  !unref(isAuthenticated) ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 0,
                    to: "/auth/login"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), { class: "w-full rounded-full" }, {
                        default: withCtx(() => [
                          createTextVNode("Tizimga kirish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mr-4 lg:mr-1 hidden lg:flex lg:flex-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-x-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).preference === "light") {
              _push2(`<img alt="logo" fetchpriority="high" height="40" width="120"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(colorMode).preference === "dark") {
              _push2(`<img alt="logo" fetchpriority="high" height="40" width="120"${ssrRenderAttr("src", _imports_1)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(colorMode).preference === "light" ? (openBlock(), createBlock("img", {
                key: 0,
                alt: "logo",
                fetchpriority: "high",
                height: "40",
                width: "120",
                src: _imports_0
              })) : createCommentVNode("", true),
              unref(colorMode).preference === "dark" ? (openBlock(), createBlock("img", {
                key: 1,
                alt: "logo",
                fetchpriority: "high",
                height: "40",
                width: "120",
                src: _imports_1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 justify-center flex whitespace-nowrap"><nav class="flex p-1 rounded-full bg-muted shadow"><!--[-->`);
      ssrRenderList(menu, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: { path: item.route },
          class: ["px-8 py-2 text-base rounded-full hover:bg-foreground/5", { "bg-card hover:!bg-card ": item.route === unref(route).path }]
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
      _push(`<!--]--></nav></div></div><div class="flex items-center flex-1 md:flex-none justify-between space-x-2 md:justify-end"><div class="w-full flex-1 md:w-auto md:flex-none">`);
      _push(ssrRenderComponent(unref(_sfc_main$g), {
        variant: "outline",
        class: "relative flex md:hidden h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
        onClick: handleOpenChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex"${_scopeId}>Tezkor qidiruv...</span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex" }, "Tezkor qidiruv...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="flex items-center">`);
      _push(ssrRenderComponent(unref(_sfc_main$g), {
        variant: "ghost",
        size: "icon",
        class: "hidden md:flex",
        onClick: handleOpenChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-5 h-5"${_scopeId}><circle cx="11" cy="11" r="8"${_scopeId}></circle><path d="m21 21-4.3-4.3"${_scopeId}></path></svg>`);
          } else {
            return [
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
                class: "lucide lucide-search w-5 h-5"
              }, [
                createVNode("circle", {
                  cx: "11",
                  cy: "11",
                  r: "8"
                }),
                createVNode("path", { d: "m21 21-4.3-4.3" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="group relative flex cursor-pointer items-center justify-center">`);
      _push(ssrRenderComponent(unref(_sfc_main$g), {
        variant: "ghost",
        size: "icon",
        class: "absolute"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"${_scopeId}><path fill="currentColor" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 15 15",
                width: "1.2em",
                height: "1.2em",
                class: "w-5 h-5 text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  "fill-rule": "evenodd",
                  d: "M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$g), {
        variant: "ghost",
        size: "icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"${_scopeId}><path fill="currentColor" fill-rule="evenodd" d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 15 15",
                width: "1.2em",
                height: "1.2em",
                class: "w-5 h-5 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  "fill-rule": "evenodd",
                  d: "M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$g), {
                variant: "ghost",
                size: "icon"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in w-5 h-5"${_scopeId2}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"${_scopeId2}></path><polyline points="10 17 15 12 10 7"${_scopeId2}></polyline><line x1="15" x2="3" y1="12" y2="12"${_scopeId2}></line></svg>`);
                  } else {
                    return [
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
                        class: "lucide lucide-log-in w-5 h-5"
                      }, [
                        createVNode("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
                        createVNode("polyline", { points: "10 17 15 12 10 7" }),
                        createVNode("line", {
                          x1: "15",
                          x2: "3",
                          y1: "12",
                          y2: "12"
                        })
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$g), {
                  variant: "ghost",
                  size: "icon"
                }, {
                  default: withCtx(() => [
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
                      class: "lucide lucide-log-in w-5 h-5"
                    }, [
                      createVNode("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
                      createVNode("polyline", { points: "10 17 15 12 10 7" }),
                      createVNode("line", {
                        x1: "15",
                        x2: "3",
                        y1: "12",
                        y2: "12"
                      })
                    ]))
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
      if (unref(isAuthenticated)) {
        _push(ssrRenderComponent(unref(_sfc_main$f), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$e), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(`<div class="relative ml-1 overflow-hidden shrink-0 before:border before:border-solid before:border-white before:opacity-20 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full cursor-pointer"${_scopeId2}><div class="rounded-full relative"${_scopeId2}><div class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full"${_scopeId2}>`);
                    if (!((_a = unref(user)) == null ? void 0 : _a.photo)) {
                      _push3(`<div class="flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary"${_scopeId2}>${ssrInterpolate(unref(fullNameInitial))}</div>`);
                    } else {
                      _push3(`<div class="w-full h-full object-cover bg-white"${_scopeId2}><img alt="avatar-image" class="object-cover w-full h-full"${ssrRenderAttr("src", (_b = unref(user)) == null ? void 0 : _b.photo)}${_scopeId2}></div>`);
                    }
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative ml-1 overflow-hidden shrink-0 before:border before:border-solid before:border-white before:opacity-20 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full cursor-pointer" }, [
                        createVNode("div", { class: "rounded-full relative" }, [
                          createVNode("div", { class: "relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full" }, [
                            !((_c = unref(user)) == null ? void 0 : _c.photo) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary"
                            }, toDisplayString(unref(fullNameInitial)), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "w-full h-full object-cover bg-white"
                            }, [
                              createVNode("img", {
                                alt: "avatar-image",
                                class: "object-cover w-full h-full",
                                src: (_d = unref(user)) == null ? void 0 : _d.photo
                              }, null, 8, ["src"])
                            ]))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$d), {
                align: "end",
                class: "whitespace-nowrap mt-3 w-48"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, { to: { path: "/profile" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId4}><g fill="currentColor"${_scopeId4}><path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity="0.2"${_scopeId4}></path><path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"${_scopeId4}></path></g></svg> Mening profilim `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 256 256"
                                  }, [
                                    createVNode("g", { fill: "currentColor" }, [
                                      createVNode("path", {
                                        d: "M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64",
                                        opacity: "0.2"
                                      }),
                                      createVNode("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" })
                                    ])
                                  ])),
                                  createTextVNode(" Mening profilim ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "1em",
                                  height: "1em",
                                  viewBox: "0 0 256 256"
                                }, [
                                  createVNode("g", { fill: "currentColor" }, [
                                    createVNode("path", {
                                      d: "M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64",
                                      opacity: "0.2"
                                    }),
                                    createVNode("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" })
                                  ])
                                ])),
                                createTextVNode(" Mening profilim ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_nuxt_link, { to: { path: "/profile/top-up-balance" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "cursor-pointer" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon mr-2 h-4 w-4"${_scopeId4}><rect width="20" height="14" x="2" y="5" rx="2"${_scopeId4}></rect><line x1="2" x2="22" y1="10" y2="10"${_scopeId4}></line></svg> Hisobni to&#39;ldirish `);
                              } else {
                                return [
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
                                    class: "lucide lucide-credit-card-icon mr-2 h-4 w-4"
                                  }, [
                                    createVNode("rect", {
                                      width: "20",
                                      height: "14",
                                      x: "2",
                                      y: "5",
                                      rx: "2"
                                    }),
                                    createVNode("line", {
                                      x1: "2",
                                      x2: "22",
                                      y1: "10",
                                      y2: "10"
                                    })
                                  ])),
                                  createTextVNode(" Hisobni to'ldirish ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$c), { class: "cursor-pointer" }, {
                              default: withCtx(() => [
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
                                  class: "lucide lucide-credit-card-icon mr-2 h-4 w-4"
                                }, [
                                  createVNode("rect", {
                                    width: "20",
                                    height: "14",
                                    x: "2",
                                    y: "5",
                                    rx: "2"
                                  }),
                                  createVNode("line", {
                                    x1: "2",
                                    x2: "22",
                                    y1: "10",
                                    y2: "10"
                                  })
                                ])),
                                createTextVNode(" Hisobni to'ldirish ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_nuxt_link, { to: { path: "/profile/my-courses" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--ph" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId4}><g fill="currentColor"${_scopeId4}><path d="M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8" opacity=".2"${_scopeId4}></path><path d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"${_scopeId4}></path></g></svg> Mening kurslarim `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "aria-hidden": "true",
                                    role: "img",
                                    "font-size": "16",
                                    class: "iconify iconify--ph",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 256 256"
                                  }, [
                                    createVNode("g", { fill: "currentColor" }, [
                                      createVNode("path", {
                                        d: "M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8",
                                        opacity: ".2"
                                      }),
                                      createVNode("path", { d: "M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z" })
                                    ])
                                  ])),
                                  createTextVNode(" Mening kurslarim ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  "aria-hidden": "true",
                                  role: "img",
                                  "font-size": "16",
                                  class: "iconify iconify--ph",
                                  width: "1em",
                                  height: "1em",
                                  viewBox: "0 0 256 256"
                                }, [
                                  createVNode("g", { fill: "currentColor" }, [
                                    createVNode("path", {
                                      d: "M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8",
                                      opacity: ".2"
                                    }),
                                    createVNode("path", { d: "M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z" })
                                  ])
                                ])),
                                createTextVNode(" Mening kurslarim ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_nuxt_link, { to: { path: "/profile/tests-results" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"${_scopeId4}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"${_scopeId4}></polygon></svg> Mening natijalarim `);
                              } else {
                                return [
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
                                    class: "w-4 h-4"
                                  }, [
                                    createVNode("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
                                  ])),
                                  createTextVNode(" Mening natijalarim ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                              default: withCtx(() => [
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
                                  class: "w-4 h-4"
                                }, [
                                  createVNode("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
                                ])),
                                createTextVNode(" Mening natijalarim ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_nuxt_link, { to: { path: "/profile/payment-history" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId4}><g fill="currentColor"${_scopeId4}><path d="M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity="0.2"${_scopeId4}></path><path d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0"${_scopeId4}></path></g></svg> To&#39;lovlar tarixi `);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 256 256"
                                  }, [
                                    createVNode("g", { fill: "currentColor" }, [
                                      createVNode("path", {
                                        d: "M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24",
                                        opacity: "0.2"
                                      }),
                                      createVNode("path", { d: "M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0" })
                                    ])
                                  ])),
                                  createTextVNode(" To'lovlar tarixi ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "1em",
                                  height: "1em",
                                  viewBox: "0 0 256 256"
                                }, [
                                  createVNode("g", { fill: "currentColor" }, [
                                    createVNode("path", {
                                      d: "M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24",
                                      opacity: "0.2"
                                    }),
                                    createVNode("path", { d: "M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0" })
                                  ])
                                ])),
                                createTextVNode(" To'lovlar tarixi ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="-mx-1 my-1 h-px bg-muted"${_scopeId2}></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      class: "flex cursor-pointer items-center gap-x-2",
                      onClick: unref(authStore).logout
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="text-destructive iconify iconify--lets-icons" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId3}><defs${_scopeId3}><mask id="iconifyReact10"${_scopeId3}><g fill="none"${_scopeId3}><circle cx="6" cy="6" r="6" fill="#fff" fill-opacity=".25" transform="matrix(0 -1 -1 0 20 18)"${_scopeId3}></circle><path stroke="silver" stroke-opacity=".25" stroke-width=".6" d="M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"${_scopeId3}></path><path stroke="#fff" stroke-width="1.2" d="M8 18.928A8 8 0 1 0 8 5.072"${_scopeId3}></path><path fill="#fff" d="m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"${_scopeId3}></path></g></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#iconifyReact10)"${_scopeId3}></path></svg><span class="text-destructive"${_scopeId3}>Chiqish</span>`);
                        } else {
                          return [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              "aria-hidden": "true",
                              role: "img",
                              "font-size": "16",
                              class: "text-destructive iconify iconify--lets-icons",
                              width: "1em",
                              height: "1em",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("defs", null, [
                                createVNode("mask", { id: "iconifyReact10" }, [
                                  createVNode("g", { fill: "none" }, [
                                    createVNode("circle", {
                                      cx: "6",
                                      cy: "6",
                                      r: "6",
                                      fill: "#fff",
                                      "fill-opacity": ".25",
                                      transform: "matrix(0 -1 -1 0 20 18)"
                                    }),
                                    createVNode("path", {
                                      stroke: "silver",
                                      "stroke-opacity": ".25",
                                      "stroke-width": ".6",
                                      d: "M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"
                                    }),
                                    createVNode("path", {
                                      stroke: "#fff",
                                      "stroke-width": "1.2",
                                      d: "M8 18.928A8 8 0 1 0 8 5.072"
                                    }),
                                    createVNode("path", {
                                      fill: "#fff",
                                      d: "m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"
                                    })
                                  ])
                                ])
                              ]),
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M0 0h24v24H0z",
                                mask: "url(#iconifyReact10)"
                              })
                            ])),
                            createVNode("span", { class: "text-destructive" }, "Chiqish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, { to: { path: "/profile" } }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "1em",
                                height: "1em",
                                viewBox: "0 0 256 256"
                              }, [
                                createVNode("g", { fill: "currentColor" }, [
                                  createVNode("path", {
                                    d: "M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64",
                                    opacity: "0.2"
                                  }),
                                  createVNode("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" })
                                ])
                              ])),
                              createTextVNode(" Mening profilim ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: { path: "/profile/top-up-balance" } }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), { class: "cursor-pointer" }, {
                            default: withCtx(() => [
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
                                class: "lucide lucide-credit-card-icon mr-2 h-4 w-4"
                              }, [
                                createVNode("rect", {
                                  width: "20",
                                  height: "14",
                                  x: "2",
                                  y: "5",
                                  rx: "2"
                                }),
                                createVNode("line", {
                                  x1: "2",
                                  x2: "22",
                                  y1: "10",
                                  y2: "10"
                                })
                              ])),
                              createTextVNode(" Hisobni to'ldirish ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: { path: "/profile/my-courses" } }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                "aria-hidden": "true",
                                role: "img",
                                "font-size": "16",
                                class: "iconify iconify--ph",
                                width: "1em",
                                height: "1em",
                                viewBox: "0 0 256 256"
                              }, [
                                createVNode("g", { fill: "currentColor" }, [
                                  createVNode("path", {
                                    d: "M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8",
                                    opacity: ".2"
                                  }),
                                  createVNode("path", { d: "M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z" })
                                ])
                              ])),
                              createTextVNode(" Mening kurslarim ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: { path: "/profile/tests-results" } }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx(() => [
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
                                class: "w-4 h-4"
                              }, [
                                createVNode("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
                              ])),
                              createTextVNode(" Mening natijalarim ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: { path: "/profile/payment-history" } }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "1em",
                                height: "1em",
                                viewBox: "0 0 256 256"
                              }, [
                                createVNode("g", { fill: "currentColor" }, [
                                  createVNode("path", {
                                    d: "M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24",
                                    opacity: "0.2"
                                  }),
                                  createVNode("path", { d: "M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0" })
                                ])
                              ])),
                              createTextVNode(" To'lovlar tarixi ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "-mx-1 my-1 h-px bg-muted" }),
                      createVNode(unref(_sfc_main$c), {
                        class: "flex cursor-pointer items-center gap-x-2",
                        onClick: unref(authStore).logout
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            "aria-hidden": "true",
                            role: "img",
                            "font-size": "16",
                            class: "text-destructive iconify iconify--lets-icons",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("defs", null, [
                              createVNode("mask", { id: "iconifyReact10" }, [
                                createVNode("g", { fill: "none" }, [
                                  createVNode("circle", {
                                    cx: "6",
                                    cy: "6",
                                    r: "6",
                                    fill: "#fff",
                                    "fill-opacity": ".25",
                                    transform: "matrix(0 -1 -1 0 20 18)"
                                  }),
                                  createVNode("path", {
                                    stroke: "silver",
                                    "stroke-opacity": ".25",
                                    "stroke-width": ".6",
                                    d: "M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"
                                  }),
                                  createVNode("path", {
                                    stroke: "#fff",
                                    "stroke-width": "1.2",
                                    d: "M8 18.928A8 8 0 1 0 8 5.072"
                                  }),
                                  createVNode("path", {
                                    fill: "#fff",
                                    d: "m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"
                                  })
                                ])
                              ])
                            ]),
                            createVNode("path", {
                              fill: "currentColor",
                              d: "M0 0h24v24H0z",
                              mask: "url(#iconifyReact10)"
                            })
                          ])),
                          createVNode("span", { class: "text-destructive" }, "Chiqish")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$e), null, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [
                      createVNode("div", { class: "relative ml-1 overflow-hidden shrink-0 before:border before:border-solid before:border-white before:opacity-20 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full cursor-pointer" }, [
                        createVNode("div", { class: "rounded-full relative" }, [
                          createVNode("div", { class: "relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full" }, [
                            !((_a = unref(user)) == null ? void 0 : _a.photo) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary"
                            }, toDisplayString(unref(fullNameInitial)), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "w-full h-full object-cover bg-white"
                            }, [
                              createVNode("img", {
                                alt: "avatar-image",
                                class: "object-cover w-full h-full",
                                src: (_b = unref(user)) == null ? void 0 : _b.photo
                              }, null, 8, ["src"])
                            ]))
                          ])
                        ])
                      ])
                    ];
                  }),
                  _: 1
                }),
                createVNode(unref(_sfc_main$d), {
                  align: "end",
                  class: "whitespace-nowrap mt-3 w-48"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, { to: { path: "/profile" } }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "1em",
                              height: "1em",
                              viewBox: "0 0 256 256"
                            }, [
                              createVNode("g", { fill: "currentColor" }, [
                                createVNode("path", {
                                  d: "M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64",
                                  opacity: "0.2"
                                }),
                                createVNode("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" })
                              ])
                            ])),
                            createTextVNode(" Mening profilim ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_nuxt_link, { to: { path: "/profile/top-up-balance" } }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), { class: "cursor-pointer" }, {
                          default: withCtx(() => [
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
                              class: "lucide lucide-credit-card-icon mr-2 h-4 w-4"
                            }, [
                              createVNode("rect", {
                                width: "20",
                                height: "14",
                                x: "2",
                                y: "5",
                                rx: "2"
                              }),
                              createVNode("line", {
                                x1: "2",
                                x2: "22",
                                y1: "10",
                                y2: "10"
                              })
                            ])),
                            createTextVNode(" Hisobni to'ldirish ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_nuxt_link, { to: { path: "/profile/my-courses" } }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              "aria-hidden": "true",
                              role: "img",
                              "font-size": "16",
                              class: "iconify iconify--ph",
                              width: "1em",
                              height: "1em",
                              viewBox: "0 0 256 256"
                            }, [
                              createVNode("g", { fill: "currentColor" }, [
                                createVNode("path", {
                                  d: "M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8",
                                  opacity: ".2"
                                }),
                                createVNode("path", { d: "M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z" })
                              ])
                            ])),
                            createTextVNode(" Mening kurslarim ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_nuxt_link, { to: { path: "/profile/tests-results" } }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                          default: withCtx(() => [
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
                              class: "w-4 h-4"
                            }, [
                              createVNode("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
                            ])),
                            createTextVNode(" Mening natijalarim ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_nuxt_link, { to: { path: "/profile/payment-history" } }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), { class: "flex cursor-pointer items-center gap-x-2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "1em",
                              height: "1em",
                              viewBox: "0 0 256 256"
                            }, [
                              createVNode("g", { fill: "currentColor" }, [
                                createVNode("path", {
                                  d: "M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24",
                                  opacity: "0.2"
                                }),
                                createVNode("path", { d: "M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0" })
                              ])
                            ])),
                            createTextVNode(" To'lovlar tarixi ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "-mx-1 my-1 h-px bg-muted" }),
                    createVNode(unref(_sfc_main$c), {
                      class: "flex cursor-pointer items-center gap-x-2",
                      onClick: unref(authStore).logout
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          "aria-hidden": "true",
                          role: "img",
                          "font-size": "16",
                          class: "text-destructive iconify iconify--lets-icons",
                          width: "1em",
                          height: "1em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("defs", null, [
                            createVNode("mask", { id: "iconifyReact10" }, [
                              createVNode("g", { fill: "none" }, [
                                createVNode("circle", {
                                  cx: "6",
                                  cy: "6",
                                  r: "6",
                                  fill: "#fff",
                                  "fill-opacity": ".25",
                                  transform: "matrix(0 -1 -1 0 20 18)"
                                }),
                                createVNode("path", {
                                  stroke: "silver",
                                  "stroke-opacity": ".25",
                                  "stroke-width": ".6",
                                  d: "M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"
                                }),
                                createVNode("path", {
                                  stroke: "#fff",
                                  "stroke-width": "1.2",
                                  d: "M8 18.928A8 8 0 1 0 8 5.072"
                                }),
                                createVNode("path", {
                                  fill: "#fff",
                                  d: "m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"
                                })
                              ])
                            ])
                          ]),
                          createVNode("path", {
                            fill: "currentColor",
                            d: "M0 0h24v24H0z",
                            mask: "url(#iconifyReact10)"
                          })
                        ])),
                        createVNode("span", { class: "text-destructive" }, "Chiqish")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
      _push(`</nav>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), {
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { placeholder: "Kerakli bo'limni qidiring..." }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Natijalar topilmadi.`);
                      } else {
                        return [
                          createTextVNode("Natijalar topilmadi.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { heading: "Linklar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(menu, (item, index) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            key: index,
                            value: item.value,
                            class: "py-3 cursor-pointer",
                            onClick: ($event) => (goToLink(item.route), open.value = false)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4"${_scopeId4}><path fill="currentColor" fill-rule="evenodd" d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z" clip-rule="evenodd"${_scopeId4}></path></svg><span${_scopeId4}>${ssrInterpolate(item.name)}</span>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    viewBox: "0 0 15 15",
                                    width: "1.2em",
                                    height: "1.2em",
                                    class: "mr-2 h-4 w-4"
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      "fill-rule": "evenodd",
                                      d: "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z",
                                      "clip-rule": "evenodd"
                                    })
                                  ])),
                                  createVNode("span", null, toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(menu, (item, index) => {
                            return createVNode(unref(_sfc_main$3), {
                              key: index,
                              value: item.value,
                              class: "py-3 cursor-pointer",
                              onClick: ($event) => (goToLink(item.route), open.value = false)
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 15 15",
                                  width: "1.2em",
                                  height: "1.2em",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    "fill-rule": "evenodd",
                                    d: "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                createVNode("span", null, toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { heading: "Sahifalar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(pages, (item, index) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            key: index,
                            value: item.value,
                            class: "py-3 cursor-pointer",
                            onClick: ($event) => (goToLink(item.route), open.value = false)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4"${_scopeId4}><path fill="currentColor" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346" clip-rule="evenodd"${_scopeId4}></path></svg><span${_scopeId4}>${ssrInterpolate(item.name)}</span>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    viewBox: "0 0 15 15",
                                    width: "1.2em",
                                    height: "1.2em",
                                    class: "mr-2 h-4 w-4"
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      "fill-rule": "evenodd",
                                      d: "M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346",
                                      "clip-rule": "evenodd"
                                    })
                                  ])),
                                  createVNode("span", null, toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(pages, (item, index) => {
                            return createVNode(unref(_sfc_main$3), {
                              key: index,
                              value: item.value,
                              class: "py-3 cursor-pointer",
                              onClick: ($event) => (goToLink(item.route), open.value = false)
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 15 15",
                                  width: "1.2em",
                                  height: "1.2em",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    "fill-rule": "evenodd",
                                    d: "M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                createVNode("span", null, toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { heading: "Mavzu" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$3), {
                          value: "light",
                          class: "cursor-pointer py-3",
                          onClick: ($event) => (unref(colorMode).preference = "light", open.value = false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4"${_scopeId4}><path fill="currentColor" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"${_scopeId4}></path></svg><span${_scopeId4}> Kungi regim</span>`);
                            } else {
                              return [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 15 15",
                                  width: "1.2em",
                                  height: "1.2em",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    "fill-rule": "evenodd",
                                    d: "M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                createVNode("span", null, " Kungi regim")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), {
                          value: "dark",
                          class: "cursor-pointer py-3",
                          onClick: ($event) => (unref(colorMode).preference = "dark", open.value = false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4"${_scopeId4}><path fill="currentColor" fill-rule="evenodd" d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9" clip-rule="evenodd"${_scopeId4}></path></svg><span${_scopeId4}> Tungi rejim</span>`);
                            } else {
                              return [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 15 15",
                                  width: "1.2em",
                                  height: "1.2em",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    "fill-rule": "evenodd",
                                    d: "M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                createVNode("span", null, " Tungi rejim")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$3), {
                            value: "light",
                            class: "cursor-pointer py-3",
                            onClick: ($event) => (unref(colorMode).preference = "light", open.value = false)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 15 15",
                                width: "1.2em",
                                height: "1.2em",
                                class: "mr-2 h-4 w-4"
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  "fill-rule": "evenodd",
                                  d: "M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6",
                                  "clip-rule": "evenodd"
                                })
                              ])),
                              createVNode("span", null, " Kungi regim")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$3), {
                            value: "dark",
                            class: "cursor-pointer py-3",
                            onClick: ($event) => (unref(colorMode).preference = "dark", open.value = false)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 15 15",
                                width: "1.2em",
                                height: "1.2em",
                                class: "mr-2 h-4 w-4"
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  "fill-rule": "evenodd",
                                  d: "M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9",
                                  "clip-rule": "evenodd"
                                })
                              ])),
                              createVNode("span", null, " Tungi rejim")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createTextVNode("Natijalar topilmadi.")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { heading: "Linklar" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(menu, (item, index) => {
                          return createVNode(unref(_sfc_main$3), {
                            key: index,
                            value: item.value,
                            class: "py-3 cursor-pointer",
                            onClick: ($event) => (goToLink(item.route), open.value = false)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 15 15",
                                width: "1.2em",
                                height: "1.2em",
                                class: "mr-2 h-4 w-4"
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  "fill-rule": "evenodd",
                                  d: "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z",
                                  "clip-rule": "evenodd"
                                })
                              ])),
                              createVNode("span", null, toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick"]);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1)),
                    createVNode(unref(_sfc_main$5), { heading: "Sahifalar" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(pages, (item, index) => {
                          return createVNode(unref(_sfc_main$3), {
                            key: index,
                            value: item.value,
                            class: "py-3 cursor-pointer",
                            onClick: ($event) => (goToLink(item.route), open.value = false)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 15 15",
                                width: "1.2em",
                                height: "1.2em",
                                class: "mr-2 h-4 w-4"
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  "fill-rule": "evenodd",
                                  d: "M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346",
                                  "clip-rule": "evenodd"
                                })
                              ])),
                              createVNode("span", null, toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick"]);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1)),
                    createVNode(unref(_sfc_main$5), { heading: "Mavzu" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), {
                          value: "light",
                          class: "cursor-pointer py-3",
                          onClick: ($event) => (unref(colorMode).preference = "light", open.value = false)
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 15 15",
                              width: "1.2em",
                              height: "1.2em",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                "fill-rule": "evenodd",
                                d: "M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, " Kungi regim")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(_sfc_main$3), {
                          value: "dark",
                          class: "cursor-pointer py-3",
                          onClick: ($event) => (unref(colorMode).preference = "dark", open.value = false)
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 15 15",
                              width: "1.2em",
                              height: "1.2em",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                "fill-rule": "evenodd",
                                d: "M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, " Tungi rejim")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(unref(_sfc_main$4), { placeholder: "Kerakli bo'limni qidiring..." }),
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), null, {
                    default: withCtx(() => [
                      createTextVNode("Natijalar topilmadi.")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), { heading: "Linklar" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(menu, (item, index) => {
                        return createVNode(unref(_sfc_main$3), {
                          key: index,
                          value: item.value,
                          class: "py-3 cursor-pointer",
                          onClick: ($event) => (goToLink(item.route), open.value = false)
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 15 15",
                              width: "1.2em",
                              height: "1.2em",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                "fill-rule": "evenodd",
                                d: "M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$1)),
                  createVNode(unref(_sfc_main$5), { heading: "Sahifalar" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(pages, (item, index) => {
                        return createVNode(unref(_sfc_main$3), {
                          key: index,
                          value: item.value,
                          class: "py-3 cursor-pointer",
                          onClick: ($event) => (goToLink(item.route), open.value = false)
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 15 15",
                              width: "1.2em",
                              height: "1.2em",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                "fill-rule": "evenodd",
                                d: "M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$1)),
                  createVNode(unref(_sfc_main$5), { heading: "Mavzu" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), {
                        value: "light",
                        class: "cursor-pointer py-3",
                        onClick: ($event) => (unref(colorMode).preference = "light", open.value = false)
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            viewBox: "0 0 15 15",
                            width: "1.2em",
                            height: "1.2em",
                            class: "mr-2 h-4 w-4"
                          }, [
                            createVNode("path", {
                              fill: "currentColor",
                              "fill-rule": "evenodd",
                              d: "M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, " Kungi regim")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(_sfc_main$3), {
                        value: "dark",
                        class: "cursor-pointer py-3",
                        onClick: ($event) => (unref(colorMode).preference = "dark", open.value = false)
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            viewBox: "0 0 15 15",
                            width: "1.2em",
                            height: "1.2em",
                            class: "mr-2 h-4 w-4"
                          }, [
                            createVNode("path", {
                              fill: "currentColor",
                              "fill-rule": "evenodd",
                              d: "M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, " Tungi rejim")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/default/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppHeader-CXy1GHHY.mjs.map
