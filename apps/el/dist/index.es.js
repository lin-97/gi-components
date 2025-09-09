import { defineComponent, createElementBlock, openBlock, createElementVNode, getCurrentInstance, useAttrs, computed, resolveComponent, createBlock, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, useSlots, normalizeClass, createCommentVNode, normalizeStyle, mergeModels, useModel, ref, createSlots, resolveDynamicComponent, createVNode, createApp, h, Fragment, renderList, watch, onMounted, onUpdated, onUnmounted, inject, toRefs, watchEffect, reactive, provide, toRaw, normalizeProps, guardReactiveProps } from "vue";
import * as El from "element-plus";
import El__default, { ElMessage } from "element-plus";
/*! Element Plus Icons Vue v2.3.2 */
var _sfc_main6 = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), arrow_down_default = _sfc_main6;
var _sfc_main7 = /* @__PURE__ */ defineComponent({
  name: "ArrowLeftBold",
  __name: "arrow-left-bold",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
      })
    ]));
  }
}), arrow_left_bold_default = _sfc_main7;
var _sfc_main9 = /* @__PURE__ */ defineComponent({
  name: "ArrowRightBold",
  __name: "arrow-right-bold",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
      })
    ]));
  }
}), arrow_right_bold_default = _sfc_main9;
var _sfc_main12 = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), arrow_up_default = _sfc_main12;
var _sfc_main56 = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), close_default = _sfc_main56;
var _sfc_main80 = /* @__PURE__ */ defineComponent({
  name: "Delete",
  __name: "delete",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), delete_default = _sfc_main80;
var _sfc_main91 = /* @__PURE__ */ defineComponent({
  name: "Download",
  __name: "download",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), download_default = _sfc_main91;
var _sfc_main94 = /* @__PURE__ */ defineComponent({
  name: "Edit",
  __name: "edit",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
      })
    ]));
  }
}), edit_default = _sfc_main94;
var _sfc_main201 = /* @__PURE__ */ defineComponent({
  name: "Plus",
  __name: "plus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), plus_default = _sfc_main201;
var _sfc_main208 = /* @__PURE__ */ defineComponent({
  name: "Printer",
  __name: "printer",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.06 29.06 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.06 29.06 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256zm64-192v320h384V576zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.3 23.3 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.3 23.3 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704zm64-448h384V128H320zm-64 128h64v64h-64zm128 0h64v64h-64z"
      })
    ]));
  }
}), printer_default = _sfc_main208;
var _sfc_main225 = /* @__PURE__ */ defineComponent({
  name: "Search",
  __name: "search",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), search_default = _sfc_main225;
var _sfc_main275 = /* @__PURE__ */ defineComponent({
  name: "Upload",
  __name: "upload",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), upload_default = _sfc_main275;
function useBemClass() {
  var _a;
  const instance = getCurrentInstance();
  const configPrefix = ((_a = instance == null ? void 0 : instance.appContext.config.globalProperties.$config) == null ? void 0 : _a.prefix) || "gi";
  const prefix = configPrefix.toLowerCase();
  const b = (name = "") => `${prefix}-${name ? `${name}` : ""}`;
  return { b };
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: {
    type: { default: "" },
    size: {},
    disabled: { type: Boolean },
    icon: {},
    nativeType: {},
    loading: { type: Boolean },
    loadingIcon: {},
    plain: { type: Boolean },
    text: { type: Boolean },
    link: { type: Boolean },
    bg: { type: Boolean },
    autofocus: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    color: {},
    dark: { type: Boolean },
    autoInsertSpace: { type: Boolean },
    tag: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const attrs = useAttrs();
    const { b } = useBemClass();
    const obj = {
      add: { btnProps: { icon: plus_default, type: "primary" }, btnText: "新增" },
      edit: { btnProps: { icon: edit_default, type: "primary" }, btnText: "编辑" },
      delete: { btnProps: { icon: delete_default, type: "danger" }, btnText: "删除" },
      search: { btnProps: { icon: search_default, type: "primary" }, btnText: "搜索" },
      reset: { btnProps: { type: void 0 }, btnText: "重置" },
      upload: { btnProps: { icon: upload_default, type: "primary" }, btnText: "上传" },
      download: {
        btnProps: { icon: download_default, type: "primary" },
        btnText: "下载"
      },
      print: { btnProps: { icon: printer_default, type: "primary" }, btnText: "打印" }
    };
    const bindProps = computed(() => {
      var _a;
      const btnProps = ((_a = obj == null ? void 0 : obj[props.type]) == null ? void 0 : _a.btnProps) || { type: props.type };
      return { ...attrs, ...props, ...btnProps };
    });
    const btnText = computed(() => {
      return obj[props.type].btnText;
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createBlock(_component_el_button, mergeProps({
        class: unref(b)("button")
      }, bindProps.value, {
        onClick: _cache[0] || (_cache[0] = (e) => emit("click", e))
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(btnText.value), 1)
          ])
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "card",
  props: {
    title: { default: "" },
    extra: { default: "" },
    bordered: { type: Boolean, default: false },
    size: { default: "middle" },
    headerBordered: { type: Boolean, default: true },
    headerStyle: { default: () => ({}) },
    bodyStyle: { default: () => ({}) },
    inner: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const slot = useSlots();
    const { b } = useBemClass();
    const getCardClass = computed(() => {
      const arr = [b("card")];
      if (props.bordered) {
        arr.push(b("card--bordered"));
      }
      if (props.inner) {
        arr.push(b("card--inner"));
      }
      arr.push(b(`card--${props.size}`));
      return arr.join(" ");
    });
    const getHeaderClass = computed(() => {
      const arr = [b("card-header")];
      if (props.headerBordered) {
        arr.push(b("card-header--bordered"));
      }
      return arr.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getCardClass.value)
      }, [
        createElementVNode("section", {
          class: normalizeClass(getHeaderClass.value),
          style: normalizeStyle(props.headerStyle)
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(b)("card-header__title"))
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(props.title), 1)
            ], true)
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(unref(b)("card-header__extra"))
          }, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(props.extra), 1)
            ], true)
          ], 2)
        ], 6),
        createElementVNode("section", {
          class: normalizeClass(unref(b)("card-body")),
          style: normalizeStyle(props.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 6),
        unref(slot).footer ? (openBlock(), createElementBlock("section", {
          key: 0,
          class: normalizeClass(unref(b)("card-footer"))
        }, [
          renderSlot(_ctx.$slots, "footer", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-9877eddb"]]);
const _hoisted_1$1 = { key: 0 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "dialog",
  props: /* @__PURE__ */ mergeModels({
    content: {},
    footer: { type: [Boolean, Function], default: true },
    okText: { default: "确认" },
    cancelText: { default: "取消" },
    okButtonProps: {},
    cancelButtonProps: {},
    style: {},
    simple: { type: Boolean },
    onOk: {},
    onBeforeOk: {},
    onCancel: {},
    appendToBody: { type: Boolean },
    appendTo: {},
    beforeClose: {},
    destroyOnClose: { type: Boolean },
    closeOnClickModal: { type: Boolean, default: true },
    closeOnPressEscape: { type: Boolean },
    lockScroll: { type: Boolean },
    modal: { type: Boolean },
    modalPenetrable: { type: Boolean },
    openDelay: {},
    closeDelay: {},
    top: {},
    modelValue: { type: Boolean },
    modalClass: {},
    headerClass: {},
    bodyClass: {},
    footerClass: {},
    width: { default: "calc(100% - 20px)" },
    zIndex: {},
    trapFocus: { type: Boolean },
    headerAriaLevel: {},
    transition: {},
    center: { type: Boolean },
    alignCenter: { type: Boolean, default: true },
    closeIcon: {},
    draggable: { type: Boolean },
    overflow: { type: Boolean },
    fullscreen: { type: Boolean },
    showClose: { type: Boolean, default: true },
    title: {},
    ariaLevel: {}
  }, {
    "modelValue": {
      type: Boolean,
      default: false
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const visible = useModel(__props, "modelValue");
    const props = __props;
    const { b } = useBemClass();
    const getClass = computed(() => {
      const arr = [b("dialog")];
      if (props.simple) {
        arr.push(b("dialog--simple"));
      }
      return arr.join(" ");
    });
    const dialogProps = computed(() => {
      return {
        ...props,
        content: void 0,
        footer: void 0,
        okText: void 0,
        cancelText: void 0,
        okButtonProps: void 0,
        cancelButtonProps: void 0,
        onOk: void 0,
        onBeforeOk: void 0,
        onCancel: void 0,
        simple: void 0
      };
    });
    const okLoading = ref(false);
    const handleCancel = () => {
      var _a;
      (_a = props.onCancel) == null ? void 0 : _a.call(props);
      visible.value = false;
    };
    const handleOk = async () => {
      var _a;
      if (props.onBeforeOk) {
        try {
          okLoading.value = true;
          const flag = await props.onBeforeOk();
          okLoading.value = false;
          if (flag) {
            visible.value = false;
          }
        } catch (error) {
          console.error("error", error);
          okLoading.value = false;
        }
      } else {
        (_a = props.onOk) == null ? void 0 : _a.call(props);
        visible.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_space = resolveComponent("el-space");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, mergeProps(dialogProps.value, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
        class: getClass.value,
        title: props.title,
        style: { maxWidth: !props.fullscreen ? "480px" : "100%", ...props.style }
      }), createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => {
            var _a;
            return [
              typeof props.content === "string" ? (openBlock(), createElementBlock("p", _hoisted_1$1, toDisplayString(props.content), 1)) : createCommentVNode("", true),
              typeof props.content === "function" ? (openBlock(), createBlock(resolveDynamicComponent((_a = props == null ? void 0 : props.content) == null ? void 0 : _a.call(props)), { key: 1 })) : createCommentVNode("", true)
            ];
          })
        ]),
        _: 2
      }, [
        props.footer ? {
          name: "footer",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              typeof props.footer === "boolean" ? (openBlock(), createBlock(_component_el_space, {
                key: 0,
                size: 10
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, mergeProps(props.cancelButtonProps, { onClick: handleCancel }), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.cancelText), 1)
                    ]),
                    _: 1
                  }, 16),
                  createVNode(_component_el_button, mergeProps({ type: "primary" }, props.okButtonProps, {
                    loading: okLoading.value,
                    onClick: handleOk
                  }), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.okText), 1)
                    ]),
                    _: 1
                  }, 16, ["loading"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(resolveDynamicComponent(props.footer()), { key: 1 }))
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "class", "title", "style"]);
    };
  }
});
const DEF_OPTIONS = {
  // width: '600px',
  // center: false,
  // footer: true,
  // closeOnClickModal: true
};
function createDialog() {
  const Dialog2 = {
    _context: {},
    // 核心创建方法
    create(options) {
      const mergedOptions = { ...DEF_OPTIONS, ...options };
      const container = document.createElement("div");
      document.body.appendChild(container);
      const visible = ref(true);
      const dialogOptions = ref(mergedOptions || {});
      const dialogApp = createApp({
        setup() {
          const closed = () => {
            dialogApp.unmount();
            container.remove();
          };
          return () => h(_sfc_main$b, {
            ...dialogOptions.value,
            modelValue: visible.value,
            "onUpdate:modelValue": (val) => visible.value = val,
            onClosed: () => closed()
          });
        }
      });
      dialogApp.use(El__default);
      Object.assign(dialogApp._context, Dialog2._context);
      dialogApp.mount(container);
      return {
        /** 关闭对话框 */
        close: () => {
          visible.value = false;
          setTimeout(() => {
            dialogApp.unmount();
            container.remove();
          }, 300);
        },
        /** 更新对话框 */
        update: (newProps) => {
          dialogOptions.value = { ...dialogOptions.value, ...newProps };
        }
      };
    },
    /** 对话框-打开 */
    open(options) {
      return this.create(options);
    }
  };
  return Dialog2;
}
const Dialog = createDialog();
const clearable = false;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "edit-table",
  props: {
    rowKey: { default: "id" },
    data: { default: () => [] },
    columns: { default: () => [] },
    cellDisabled: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const attrs = useAttrs();
    const { b } = useBemClass();
    const COMP_MAP = {
      input: El.ElInput,
      textarea: El.ElInput,
      "input-number": El.ElInputNumber,
      "input-tag": El.ElInputTag,
      select: El.ElSelect,
      "select-v2": El.ElSelectV2,
      "tree-select": El.ElTreeSelect,
      cascader: El.ElCascader,
      slider: El.ElSlider,
      switch: El.ElSwitch,
      rate: El.ElRate,
      "checkbox-group": El.ElCheckboxGroup,
      checkbox: El.ElCheckbox,
      "radio-group": El.ElRadioGroup,
      radio: El.ElRadio,
      "date-picker": El.ElDatePicker,
      "time-picker": El.ElTimePicker,
      "time-select": El.ElTimeSelect,
      "color-picker": El.ElColorPicker,
      transfer: El.ElTransfer,
      autocomplete: El.ElAutocomplete,
      upload: El.ElUpload
    };
    const formRef = ref();
    const form = computed(() => ({ tableData: props.data }));
    const STATIC_PROPS = /* @__PURE__ */ new Map([
      ["input", { clearable, maxlength: 20 }],
      [
        "textarea",
        {
          clearable,
          type: "textarea",
          rows: 1,
          maxlength: 200,
          showWordLimit: true
        }
      ],
      ["input-number", {}],
      ["input-tag", { clearable }],
      ["select", { clearable }],
      ["select-v2", { clearable }],
      ["tree-select", { clearable }],
      ["cascader", { clearable }],
      ["slider", {}],
      ["switch", {}],
      ["rate", {}],
      ["checkbox-group", {}],
      ["checkbox", {}],
      ["radio-group", {}],
      ["radio", {}],
      ["date-picker", { clearable }],
      ["time-picker", { clearable }],
      ["time-select", { clearable }],
      ["color-picker", {}],
      ["transfer", {}],
      ["autocomplete", {}],
      ["upload", {}],
      ["title", {}]
    ]);
    const getPlaceholder = (item) => {
      if (!item.type) return void 0;
      if (["input", "input-number", "input-tag"].includes(item.type)) {
        return `请输入${item.title}`;
      }
      if (["textarea"].includes(item.type)) {
        return `请填写${item.title}`;
      }
      if (["select", "select-v2", "tree-select", "cascader", "time-select"].includes(
        item.type
      )) {
        return `请选择${item.title}`;
      }
      if (["date-picker"].includes(item.type)) {
        return `请选择日期`;
      }
      if (["time-picker"].includes(item.type)) {
        return `请选择时间`;
      }
      return void 0;
    };
    function getComponentBindProps(item) {
      var _a;
      const defaultProps = STATIC_PROPS.get(item.type || "") || {};
      defaultProps.placeholder = getPlaceholder(item);
      if (item.type === "date-picker") {
        defaultProps.valueFormat = ((_a = item == null ? void 0 : item.props) == null ? void 0 : _a.type) === "datetime" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
      }
      return { ...defaultProps, ...item.props };
    }
    function getFormItemRules(item) {
      if (item.required) {
        return [
          { required: true, message: `${item.title}为必填项` },
          ...Array.isArray(item.rules) ? item.rules : []
        ];
      }
      return item.rules;
    }
    function getLabelClassName(item) {
      if (item.required) return "column-required";
      return "";
    }
    const isDisabled = (p) => {
      if (typeof (props == null ? void 0 : props.cellDisabled) === "function") return props.cellDisabled(p);
      return false;
    };
    __expose({ formRef });
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        model: form.value,
        class: normalizeClass(unref(b)("edit-table"))
      }, {
        default: withCtx(() => [
          createVNode(_component_el_table, mergeProps({
            data: form.value.tableData,
            border: ""
          }, unref(attrs)), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (column, index2) => {
                return openBlock(), createBlock(_component_el_table_column, mergeProps({
                  key: column.dataIndex + index2,
                  width: column.width
                }, { ref_for: true }, column.columnProps, {
                  prop: column.dataIndex,
                  label: column.title,
                  "label-class-name": getLabelClassName(column)
                }), {
                  default: withCtx((scope) => [
                    createVNode(_component_el_form_item, mergeProps({ ref_for: true }, column.formItemProps, {
                      label: column.title,
                      prop: `tableData[${scope.$index}].${column.dataIndex}`,
                      rules: getFormItemRules(column)
                    }), {
                      default: withCtx(() => [
                        column.slotName ? renderSlot(_ctx.$slots, column.slotName, mergeProps({
                          key: 0,
                          ref_for: true
                        }, scope), void 0, true) : (openBlock(), createBlock(resolveDynamicComponent(COMP_MAP[column.type] || column.type), mergeProps({
                          key: 1,
                          ref_for: true
                        }, getComponentBindProps(column), {
                          modelValue: scope.row[column.dataIndex],
                          "onUpdate:modelValue": ($event) => scope.row[column.dataIndex] = $event,
                          class: "w-full",
                          disabled: isDisabled(scope)
                        }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                      ]),
                      _: 2
                    }, 1040, ["label", "prop", "rules"])
                  ]),
                  _: 2
                }, 1040, ["width", "prop", "label", "label-class-name"]);
              }), 128))
            ]),
            _: 3
          }, 16, ["data"])
        ]),
        _: 3
      }, 8, ["model", "class"]);
    };
  }
});
const EditTable = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ddc08e3c"]]);
const GridContextInjectionKey = Symbol(
  "GridContextInjectionKey"
);
const GridDataCollectorInjectionKey = Symbol("GridDataCollectorInjectionKey");
function isUndefined(obj) {
  return obj === void 0;
}
function useIndex({
  itemRef,
  selector,
  index: index2,
  parentClassName
}) {
  const _index = ref(-1);
  const computedIndex = computed(() => (index2 == null ? void 0 : index2.value) ?? _index.value);
  const parent = ref();
  const getParent = () => {
    var _a;
    let parent2 = ((_a = itemRef.value) == null ? void 0 : _a.parentElement) ?? void 0;
    if (parentClassName) {
      while (parent2 && !parent2.className.includes(parentClassName)) {
        parent2 = parent2.parentElement ?? void 0;
      }
    }
    return parent2;
  };
  const getIndex = () => {
    if (isUndefined(index2 == null ? void 0 : index2.value) && parent.value && itemRef.value) {
      const index22 = Array.from(parent.value.querySelectorAll(selector)).indexOf(
        itemRef.value
      );
      if (index22 !== _index.value) {
        _index.value = index22;
      }
    }
  };
  watch(itemRef, () => {
    if (itemRef.value && !parent.value) {
      parent.value = getParent();
    }
  });
  onMounted(() => {
    if (itemRef.value) {
      parent.value = getParent();
    }
    getIndex();
  });
  onUpdated(() => getIndex());
  return {
    computedIndex
  };
}
const opt = Object.prototype.toString;
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
const responsiveArray = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
const responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let subscribers = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap, breakpointChecked) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func
    });
    func(screens, null);
    return token;
  },
  unsubscribe(token) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach(
      (screen) => {
        const matchMediaQuery = responsiveMap[screen];
        if (!matchMediaQuery) return;
        const handler = this.matchHandlers[matchMediaQuery];
        if (handler && handler.mql && handler.listener) {
          if (handler.mql.removeEventListener) {
            handler.mql.removeEventListener("change", handler.listener);
          } else {
            handler.mql.removeListener(handler.listener);
          }
        }
      }
    );
  },
  register() {
    Object.keys(responsiveMap).forEach(
      (screen) => {
        const matchMediaQuery = responsiveMap[screen];
        if (!matchMediaQuery) return;
        const listener = ({ matches }) => {
          this.dispatch(
            {
              ...screens,
              [screen]: matches
            },
            screen
          );
        };
        const mql = window.matchMedia(matchMediaQuery);
        if (mql.addEventListener) {
          mql.addEventListener("change", listener);
        } else {
          mql.addListener(listener);
        }
        this.matchHandlers[matchMediaQuery] = {
          mql,
          listener
        };
        listener(mql);
      }
    );
  }
};
function isResponsiveValue(val) {
  return isObject(val);
}
function useResponsiveState(val, defaultVal, fallbackToXs = false) {
  const screens2 = ref({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if ((screens2.value[breakpoint] || breakpoint === "xs" && fallbackToXs) && val.value[breakpoint] !== void 0) {
          res = val.value[breakpoint];
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });
  let subscribeToken = "";
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) {
        screens2.value = screensVal;
      }
    });
  });
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });
  return result;
}
function resolveItemData(cols, props) {
  const originSpan = props.span ?? 1;
  const originOffset = props.offset ?? 0;
  const offset = Math.min(originOffset, cols);
  const span = Math.min(
    offset > 0 ? originSpan + originOffset : originSpan,
    cols
  );
  return {
    span,
    offset,
    suffix: "suffix" in props ? props.suffix !== false : false
  };
}
function setItemVisible({
  cols,
  collapsed,
  collapsedRows,
  itemDataList
}) {
  let overflow = false;
  let displayIndexList = [];
  function isOverflow(span) {
    return Math.ceil(span / cols) > collapsedRows;
  }
  if (collapsed) {
    let spanSum = 0;
    for (let i = 0; i < itemDataList.length; i++) {
      if (itemDataList[i].suffix) {
        spanSum += itemDataList[i].span;
        displayIndexList.push(i);
      }
    }
    if (!isOverflow(spanSum)) {
      let current = 0;
      while (current < itemDataList.length) {
        const item = itemDataList[current];
        if (!item.suffix) {
          spanSum += item.span;
          if (isOverflow(spanSum)) {
            break;
          }
          displayIndexList.push(current);
        }
        current++;
      }
    }
    overflow = itemDataList.some(
      (item, index2) => !item.suffix && !displayIndexList.includes(index2)
    );
  } else {
    displayIndexList = itemDataList.map((_, index2) => index2);
  }
  return {
    overflow,
    displayIndexList
  };
}
function getPrefixCls(name) {
  const { b } = useBemClass();
  return b(name);
}
const _sfc_main$9 = defineComponent({
  name: "GridItem",
  props: {
    /**
     * @zh 跨越的格数
     * @en Number of grids spanned
     */
    span: {
      type: [Number, Object],
      default: 1
    },
    /**
     * @zh 左侧的间隔格数
     * @en Number of grids on the left
     */
    offset: {
      type: [Number, Object],
      default: 0
    },
    /**
     * @zh 是否是后缀元素
     * @en Is it a suffix element
     */
    suffix: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("grid-item");
    const domRef = ref();
    const { computedIndex } = useIndex({
      itemRef: domRef,
      selector: `.${prefixCls}`
    });
    const gridContext = inject(GridContextInjectionKey, {
      overflow: false,
      displayIndexList: [],
      cols: 24,
      colGap: 0
    });
    const gridDataCollector = inject(GridDataCollectorInjectionKey);
    const visible = computed(
      () => {
        var _a;
        return (_a = gridContext == null ? void 0 : gridContext.displayIndexList) == null ? void 0 : _a.includes(computedIndex.value);
      }
    );
    const { span: propSpan, offset: propOffset } = toRefs(props);
    const rSpan = useResponsiveState(propSpan, 1);
    const rOffset = useResponsiveState(propOffset, 0);
    const itemData = computed(
      () => resolveItemData(gridContext.cols, {
        ...props,
        span: rSpan.value,
        offset: rOffset.value
      })
    );
    const classNames = computed(() => [prefixCls]);
    const offsetStyle = computed(() => {
      const { offset, span } = itemData.value;
      const { colGap } = gridContext;
      if (offset > 0) {
        const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`;
        return {
          "margin-left": `calc((${oneSpan} * ${offset}) + ${colGap * offset}px)`
        };
      }
      return {};
    });
    const columnStart = computed(() => {
      const { suffix, span } = itemData.value;
      const { cols } = gridContext;
      if (suffix) {
        return `${cols - span + 1}`;
      }
      return `span ${span}`;
    });
    const style = computed(() => {
      const { span } = itemData.value;
      if (domRef.value) {
        return [
          {
            "grid-column": `${columnStart.value} / span ${span}`
          },
          offsetStyle.value,
          !visible.value || span === 0 ? { display: "none" } : {}
        ];
      }
      return [];
    });
    watchEffect(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.collectItemData(computedIndex.value, itemData.value);
      }
    });
    onUnmounted(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.removeItemData(computedIndex.value);
      }
    });
    return {
      classNames,
      style,
      domRef,
      overflow: computed(() => gridContext.overflow)
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "domRef",
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default", { overflow: _ctx.overflow })
  ], 6);
}
const GridItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
const _sfc_main$8 = defineComponent({
  name: "Grid",
  props: {
    /**
     * @zh 每一行展示的列数
     * @en Number of columns displayed in each row
     */
    cols: {
      type: [Number, Object],
      default: 24
    },
    /**
     * @zh 行与行之间的间距
     * @en The space in row-to-row
     */
    rowGap: {
      type: [Number, Object],
      default: 0
    },
    /**
     * @zh 列与列之间的间距
     * @en The space in column-to-column
     */
    colGap: {
      type: [Number, Object],
      default: 0
    },
    /**
     * @zh 是否折叠
     * @en Whether to collapsed
     */
    collapsed: {
      type: Boolean,
      default: false
    },
    /**
     * @zh 折叠时显示的行数
     * @en Number of rows displayed when collapsed
     */
    collapsedRows: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const {
      cols: propCols,
      rowGap: propRowGap,
      colGap: propColGap,
      collapsedRows,
      collapsed
    } = toRefs(props);
    const cols = useResponsiveState(propCols, 24);
    const colGap = useResponsiveState(propColGap, 0);
    const rowGap = useResponsiveState(propRowGap, 0);
    const prefixCls = getPrefixCls("grid");
    const classNames = computed(() => [prefixCls]);
    const style = computed(() => [
      {
        gap: `${rowGap.value}px ${colGap.value}px`,
        "grid-template-columns": `repeat(${cols.value}, minmax(0px, 1fr))`
      }
    ]);
    const itemDataMap = reactive(/* @__PURE__ */ new Map());
    const itemDataList = computed(() => {
      const list = [];
      for (const [index2, itemData] of itemDataMap.entries()) {
        list[index2] = itemData;
      }
      return list;
    });
    const gridContext = reactive({
      overflow: false,
      displayIndexList: [],
      cols: cols.value,
      colGap: colGap.value
    });
    watchEffect(() => {
      gridContext.cols = cols.value;
      gridContext.colGap = colGap.value;
    });
    watchEffect(() => {
      const displayInfo = setItemVisible({
        cols: cols.value,
        collapsed: collapsed.value,
        collapsedRows: collapsedRows.value,
        itemDataList: itemDataList.value
      });
      gridContext.overflow = displayInfo.overflow;
      gridContext.displayIndexList = displayInfo.displayIndexList;
    });
    provide(GridContextInjectionKey, gridContext);
    provide(GridDataCollectorInjectionKey, {
      collectItemData(index2, itemData) {
        itemDataMap.set(index2, itemData);
      },
      removeItemData(index2) {
        itemDataMap.delete(index2);
      }
    });
    return {
      classNames,
      style
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 6);
}
const Grid = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__scopeId", "data-v-2d20ef04"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "input-group",
  setup(__props) {
    const { b } = useBemClass();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(b)("input-group"))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-cf0ab87b"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "input-search",
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "请选择" },
    disabledHideButton: { type: Boolean, default: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["search", "clear"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const emit = __emit;
    const { b } = useBemClass();
    const showButton = computed(() => {
      if (props.readonly) return false;
      if (props.disabled) {
        return !props.disabledHideButton;
      }
      return true;
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createBlock(InputGroup, {
        class: normalizeClass(unref(b)("input-search"))
      }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            modelValue: model.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            disabled: props.disabled,
            readonly: !props.disabled,
            placeholder: props.placeholder
          }, null, 8, ["modelValue", "disabled", "readonly", "placeholder"]),
          showButton.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            icon: unref(search_default),
            disabled: props.disabled,
            onClick: _cache[1] || (_cache[1] = ($event) => emit("search"))
          }, null, 8, ["icon", "disabled"])) : createCommentVNode("", true),
          showButton.value ? (openBlock(), createBlock(_component_el_button, {
            key: 1,
            icon: unref(close_default),
            disabled: props.disabled,
            onClick: _cache[2] || (_cache[2] = ($event) => emit("clear"))
          }, null, 8, ["icon", "disabled"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const InputSearch = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-710ef897"]]);
const _hoisted_1 = {
  key: 0,
  class: "w-full"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "form",
  props: {
    modelValue: {},
    columns: {
      default: () => []
    },
    fc: {
      default: () => ({})
    },
    gridProps: {},
    gridItemProps: {
      default: () => ({
        span: {
          xs: 24,
          sm: 24,
          md: 12
        }
      })
    },
    search: {
      type: Boolean,
      default: false
    },
    searchText: {
      default: "查询"
    },
    hideFoldBtn: {
      type: Boolean,
      default: false
    },
    defaultCollapsed: {
      type: Boolean,
      default: void 0
    },
    model: {},
    rules: {},
    labelPosition: {},
    requireAsteriskPosition: {},
    labelWidth: {
      default: "auto"
    },
    labelSuffix: {},
    inline: {
      type: Boolean
    },
    inlineMessage: {
      type: Boolean
    },
    statusIcon: {
      type: Boolean
    },
    showMessage: {
      type: Boolean
    },
    validateOnRuleChange: {
      type: Boolean
    },
    hideRequiredAsterisk: {
      type: Boolean
    },
    scrollToError: {
      type: Boolean,
      default: true
    },
    scrollIntoViewOptions: {},
    size: {},
    disabled: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "search", "reset"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const attrs = useAttrs();
    const {
      b
    } = useBemClass();
    const collapsed = ref((props == null ? void 0 : props.defaultCollapsed) ?? props.search);
    const instance = getCurrentInstance();
    const globalConfig = instance == null ? void 0 : instance.appContext.config.globalProperties.$config;
    const clearable2 = (globalConfig == null ? void 0 : globalConfig.clearable) ?? false;
    const dictData = ref({});
    const STATIC_PROPS = /* @__PURE__ */ new Map([["input", {
      clearable: clearable2,
      maxlength: 20
    }], ["textarea", {
      clearable: clearable2,
      type: "textarea",
      maxlength: 200,
      showWordLimit: true
    }], ["input-number", {}], ["input-tag", {
      clearable: clearable2
    }], ["select", {
      clearable: clearable2
    }], ["select-v2", {
      clearable: clearable2
    }], ["tree-select", {
      clearable: clearable2
    }], ["cascader", {
      clearable: clearable2
    }], ["slider", {}], ["switch", {}], ["rate", {}], ["checkbox-group", {}], ["checkbox", {}], ["radio-group", {}], ["radio", {}], ["date-picker", {
      clearable: clearable2
    }], ["time-picker", {
      clearable: clearable2
    }], ["time-select", {
      clearable: clearable2
    }], ["color-picker", {}], ["transfer", {}], ["autocomplete", {}], ["upload", {}], ["title", {}]]);
    const loadDictData = async () => {
      var _a;
      const dictCodes = [];
      (_a = props.columns) == null ? void 0 : _a.forEach((item) => {
        if (item.dictCode) {
          dictCodes.push(item.dictCode);
        }
      });
      if (!dictCodes.length) return;
      if (!(globalConfig == null ? void 0 : globalConfig.dictRequest)) {
        return El.ElMessage.error("请配置全局字典请求方法dictRequest");
      }
      try {
        const dictResponses = await Promise.all(dictCodes.map((code) => globalConfig.dictRequest(code).then((response) => ({
          code,
          response
        }))));
        dictResponses.forEach(({
          code,
          response
        }) => {
          dictData.value[code] = response;
        });
      } catch (error) {
        console.error("获取字典数据失败:", error);
        El.ElMessage.error("获取字典数据失败");
      }
    };
    onMounted(() => {
      loadDictData();
    });
    function getComponentBindProps(item) {
      var _a;
      const defaultProps = STATIC_PROPS.get(item.type) || {};
      defaultProps.placeholder = getPlaceholder(item);
      if (item.type === "date-picker") {
        defaultProps.valueFormat = ((_a = item == null ? void 0 : item.props) == null ? void 0 : _a.type) === "datetime" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
      }
      if (item.dictCode && dictData.value[item.dictCode]) {
        defaultProps.options = dictData.value[item.dictCode];
      }
      return {
        ...defaultProps,
        ...item.props
      };
    }
    const formProps = computed(() => {
      return {
        ...attrs,
        ...props,
        columns: void 0,
        gridProps: void 0,
        gridItemProps: void 0,
        search: void 0,
        searchText: void 0,
        hideFoldBtn: void 0,
        defaultCollapsed: void 0
      };
    });
    const getClass = computed(() => {
      const arr = [b("form")];
      if (props.search) {
        arr.push(b("form--search"));
      }
      return arr.join(" ");
    });
    const CompMap = {
      input: El.ElInput,
      textarea: El.ElInput,
      "input-number": El.ElInputNumber,
      "input-tag": El.ElInputTag,
      "input-search": InputSearch,
      select: El.ElSelect,
      "select-v2": El.ElSelectV2,
      "tree-select": El.ElTreeSelect,
      cascader: El.ElCascader,
      slider: El.ElSlider,
      switch: El.ElSwitch,
      rate: El.ElRate,
      "checkbox-group": El.ElCheckboxGroup,
      checkbox: El.ElCheckbox,
      "radio-group": El.ElRadioGroup,
      radio: El.ElRadio,
      "date-picker": El.ElDatePicker,
      "time-picker": El.ElTimePicker,
      "time-select": El.ElTimeSelect,
      "color-picker": El.ElColorPicker,
      transfer: El.ElTransfer,
      autocomplete: El.ElAutocomplete,
      upload: El.ElUpload,
      title: El.ElAlert
    };
    const formRef = ref();
    const getPlaceholder = (item) => {
      if (!item.type) return void 0;
      if (["input", "input-number", "input-tag"].includes(item.type)) {
        return `请输入${item.label}`;
      }
      if (["textarea"].includes(item.type)) {
        return `请填写${item.label}`;
      }
      if (["select", "select-v2", "tree-select", "cascader", "time-select", "input-search"].includes(item.type)) {
        return `请选择${item.label}`;
      }
      if (["date-picker"].includes(item.type)) {
        return `请选择日期`;
      }
      if (["time-picker"].includes(item.type)) {
        return `请选择时间`;
      }
      return void 0;
    };
    function getFormItemRules(item) {
      var _a, _b, _c, _d;
      if (item.required) {
        return [{
          required: true,
          message: `${item.label}为必填项`
        }, ...Array.isArray(item.rules) ? item.rules : []];
      }
      if ((_b = (_a = props.fc) == null ? void 0 : _a[item.field]) == null ? void 0 : _b.required) {
        return [{
          required: (_d = (_c = props.fc) == null ? void 0 : _c[item.field]) == null ? void 0 : _d.required,
          message: `${item.label}为必填项`
        }, ...Array.isArray(item.rules) ? item.rules : []];
      }
      return item.rules;
    }
    function isHide(item) {
      var _a, _b;
      if (typeof item.hide === "boolean") return item.hide;
      if (typeof item.hide === "function") {
        return item.hide(props.modelValue);
      }
      if ((_b = (_a = props.fc) == null ? void 0 : _a[item.field]) == null ? void 0 : _b.hidden) return true;
      if (item.hide === void 0) return false;
    }
    function isDisabled(item) {
      var _a, _b, _c, _d;
      if (((_a = item == null ? void 0 : item.props) == null ? void 0 : _a.disabled) !== void 0) return (_b = item == null ? void 0 : item.props) == null ? void 0 : _b.disabled;
      if (((_d = (_c = props.fc) == null ? void 0 : _c[item.field]) == null ? void 0 : _d.edit) === false) return true;
      return false;
    }
    function updateModelValue(value, item) {
      emit("update:modelValue", Object.assign(props.modelValue, {
        [item.field]: value
      }));
    }
    watch(() => props.modelValue, () => {
      console.log("form", toRaw(props.modelValue));
    }, {
      deep: true
    });
    __expose({
      formRef
    });
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_text = resolveComponent("el-text");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_space = resolveComponent("el-space");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        class: getClass.value
      }, formProps.value, {
        model: props.modelValue
      }), {
        default: withCtx(() => [createVNode(unref(Grid), mergeProps({
          class: "w-full",
          "col-gap": 12
        }, props.gridProps, {
          collapsed: collapsed.value
        }), {
          default: withCtx(() => {
            var _a;
            return [(openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (item, index2) => {
              var _a2, _b;
              return openBlock(), createElementBlock(Fragment, null, [item.type === "title" ? (openBlock(), createBlock(unref(GridItem), {
                key: `title${index2}`,
                span: 100
              }, {
                default: withCtx(() => [createVNode(_component_el_form_item, {
                  "label-width": "0"
                }, {
                  default: withCtx(() => [createVNode(unref(Card), {
                    title: typeof item.label === "string" ? item.label : "",
                    "header-style": {
                      padding: 0
                    },
                    "body-style": {
                      display: "none"
                    }
                  }, null, 8, ["title"])]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1024)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [!isHide(item) ? (openBlock(), createBlock(unref(GridItem), mergeProps({
                key: item.field + index2
              }, {
                ref_for: true
              }, item.gridItemProps || props.gridItemProps, {
                span: item.span || ((_a2 = item.gridItemProps) == null ? void 0 : _a2.span) || ((_b = props == null ? void 0 : props.gridItemProps) == null ? void 0 : _b.span)
              }), {
                default: withCtx(() => [(openBlock(), createBlock(_component_el_form_item, mergeProps({
                  key: item.field + index2,
                  prop: item.field,
                  label: item.label,
                  rules: getFormItemRules(item)
                }, {
                  ref_for: true
                }, item.formItemProps), createSlots({
                  default: withCtx(() => [item.type === "slot" ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, item.field, {
                    item
                  }, void 0, true)])) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(unref(b)("form-item__content"))
                  }, [createElementVNode("div", {
                    class: normalizeClass(unref(b)("form-item__component"))
                  }, [(openBlock(), createBlock(resolveDynamicComponent(CompMap[item.type] || item.type), mergeProps({
                    disabled: isDisabled(item),
                    class: "w-full"
                  }, {
                    ref_for: true
                  }, getComponentBindProps(item), {
                    "model-value": props.modelValue[item.fieldName || item.field],
                    "onUpdate:modelValue": ($event) => updateModelValue($event, item)
                  }), createSlots({
                    _: 2
                  }, [renderList((item == null ? void 0 : item.slots) || {}, (slotValue, slotKey) => {
                    return {
                      name: slotKey,
                      fn: withCtx((scope) => [typeof slotValue === "string" ? (openBlock(), createElementBlock(Fragment, {
                        key: 0
                      }, [createTextVNode(toDisplayString(slotValue), 1)], 64)) : slotValue ? (openBlock(), createBlock(resolveDynamicComponent(slotValue(scope)), {
                        key: 1
                      })) : createCommentVNode("", true)])
                    };
                  })]), 1040, ["disabled", "model-value", "onUpdate:modelValue"])), item.tip ? (openBlock(), createBlock(_component_el_text, {
                    key: 0,
                    class: normalizeClass(unref(b)("form-item__tip")),
                    type: "info",
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.tip), 1)]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)], 2), item.extra ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(unref(b)("form-item__extra"))
                  }, [typeof item.extra === "string" ? (openBlock(), createBlock(_component_el_text, {
                    key: 0,
                    type: "info",
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.extra), 1)]),
                    _: 2
                  }, 1024)) : item.extra ? (openBlock(), createBlock(resolveDynamicComponent(item.extra), {
                    key: 1
                  })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2))]),
                  _: 2
                }, [(item == null ? void 0 : item.labelRender) ? {
                  name: "label",
                  fn: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.labelRender)))]),
                  key: "0"
                } : void 0]), 1040, ["prop", "label", "rules"]))]),
                _: 2
              }, 1040, ["span"])) : createCommentVNode("", true)], 64))], 64);
            }), 256)), props.search ? (openBlock(), createBlock(unref(GridItem), {
              key: 0,
              suffix: props.search,
              span: (_a = props == null ? void 0 : props.gridItemProps) == null ? void 0 : _a.span
            }, {
              default: withCtx(() => [createVNode(_component_el_space, {
                class: normalizeClass(unref(b)("form__search-btns"))
              }, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("search"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.searchText), 1)]),
                  _: 1
                }), createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("reset"))
                }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" 重置 ", -1)])]),
                  _: 1
                }), !props.hideFoldBtn ? (openBlock(), createBlock(_component_el_button, {
                  key: 0,
                  class: "form__fold-btn",
                  type: "primary",
                  icon: collapsed.value ? unref(arrow_down_default) : unref(arrow_up_default),
                  text: "",
                  size: "small",
                  onClick: _cache[2] || (_cache[2] = ($event) => collapsed.value = !collapsed.value)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(collapsed.value ? "展开" : "收起"), 1)]),
                  _: 1
                }, 8, ["icon"])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["class"])]),
              _: 1
            }, 8, ["suffix", "span"])) : createCommentVNode("", true)];
          }),
          _: 3
        }, 16, ["collapsed"])]),
        _: 3
      }, 16, ["class", "model"]);
    };
  }
});
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-99aa931d"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "split-button",
  props: {
    collapsed: { type: Boolean, default: false },
    type: { default: "circle" },
    iconSize: { default: 10 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["click", "update:collapsed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { b } = useBemClass();
    const getClass = computed(() => {
      const arr = [b("split-button"), b(`split-button--${props.type}`)];
      if (props.collapsed) {
        arr.push(b("split-button--collapsed"));
      }
      if (props.disabled) {
        arr.push(b("split-button--disabled"));
      }
      return arr.join(" ");
    });
    const handleClick = () => {
      if (props.disabled) return;
      emit("click");
      emit("update:collapsed", !props.collapsed);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClass.value),
        onClick: handleClick
      }, [
        createVNode(_component_el_icon, {
          size: props.iconSize
        }, {
          default: withCtx(() => [
            _ctx.collapsed ? (openBlock(), createBlock(unref(arrow_right_bold_default), {
              key: 0,
              size: _ctx.iconSize
            }, null, 8, ["size"])) : (openBlock(), createBlock(unref(arrow_left_bold_default), {
              key: 1,
              size: _ctx.iconSize
            }, null, 8, ["size"]))
          ]),
          _: 1
        }, 8, ["size"])
      ], 2);
    };
  }
});
const SplitButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-867b4d21"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "page-layout",
  props: {
    size: { default: 270 },
    bordered: { type: Boolean, default: false },
    collapse: { type: Boolean, default: true },
    leftStyle: { default: () => ({}) },
    headerStyle: { default: () => ({}) },
    toolStyle: { default: () => ({}) },
    bodyStyle: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { b } = useBemClass();
    const size = ref(props.size);
    const collapsing = ref(false);
    const getClass = computed(() => {
      const arr = [b("page-layout")];
      if (props.bordered) {
        arr.push(b("page-layout--bordered"));
      }
      if (slots.header) {
        arr.push(b("page-layout--has-header"));
      }
      if (slots.tool) {
        arr.push(b("page-layout--has-tool"));
      }
      if (collapsing.value) {
        arr.push(b("page-layout--collapsing"));
      }
      return arr.join(" ");
    });
    function handleClick() {
      collapsing.value = true;
      setTimeout(() => {
        collapsing.value = false;
      }, 300);
      size.value = Number(size.value) > 30 ? 0 : props.size;
    }
    return (_ctx, _cache) => {
      const _component_el_splitter_panel = resolveComponent("el-splitter-panel");
      const _component_el_splitter = resolveComponent("el-splitter");
      return openBlock(), createBlock(_component_el_splitter, {
        class: normalizeClass(getClass.value)
      }, {
        default: withCtx(() => [
          unref(slots).left ? (openBlock(), createBlock(_component_el_splitter_panel, {
            key: 0,
            size: size.value,
            "onUpdate:size": _cache[0] || (_cache[0] = ($event) => size.value = $event)
          }, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: normalizeClass(unref(b)("page-layout__left")),
                style: normalizeStyle(props.leftStyle)
              }, [
                renderSlot(_ctx.$slots, "left", {}, void 0, true)
              ], 6)
            ]),
            _: 3
          }, 8, ["size"])) : createCommentVNode("", true),
          unref(slots).left && props.collapse ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(b)("page-layout__split"))
          }, [
            createVNode(SplitButton, {
              collapsed: Number(size.value) === 0,
              onClick: handleClick
            }, null, 8, ["collapsed"])
          ], 2)) : createCommentVNode("", true),
          createVNode(_component_el_splitter_panel, null, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: normalizeClass(unref(b)("page-layout__right"))
              }, [
                unref(slots).header ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(unref(b)("page-layout__header")),
                  style: normalizeStyle(props.headerStyle)
                }, [
                  renderSlot(_ctx.$slots, "header", {}, void 0, true)
                ], 6)) : createCommentVNode("", true),
                unref(slots).tool ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(b)("page-layout__tool")),
                  style: normalizeStyle(props.toolStyle)
                }, [
                  renderSlot(_ctx.$slots, "tool", {}, void 0, true)
                ], 6)) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: normalizeClass(unref(b)("page-layout__body")),
                  style: normalizeStyle(props.bodyStyle)
                }, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ], 6)
              ], 2)
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const PageLayout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6a7ada5f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableColumn",
  props: {
    column: {}
  },
  setup(__props) {
    const props = __props;
    const columnProps = computed(() => {
      const { slotName, render, children, ...restProps } = props.column;
      return restProps;
    });
    return (_ctx, _cache) => {
      const _component_el_table_column = resolveComponent("el-table-column");
      return openBlock(), createBlock(_component_el_table_column, normalizeProps(guardReactiveProps(columnProps.value)), createSlots({
        default: withCtx(() => [
          _ctx.column.children && _ctx.column.children.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.column.children, (child) => {
            return openBlock(), createBlock(_sfc_main$2, {
              key: child.prop || child.label,
              column: child
            }, createSlots({ _: 2 }, [
              renderList(_ctx.$slots, (_, slotName) => {
                return {
                  name: slotName,
                  fn: withCtx((scope) => [
                    renderSlot(_ctx.$slots, slotName, mergeProps({ ref_for: true }, scope))
                  ])
                };
              })
            ]), 1032, ["column"]);
          }), 128)) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        _ctx.column.render ? {
          name: "default",
          fn: withCtx((scope) => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.column.render(scope))))
          ]),
          key: "0"
        } : _ctx.column.slotName ? {
          name: "default",
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, _ctx.column.slotName, normalizeProps(guardReactiveProps(scope)))
          ]),
          key: "1"
        } : void 0
      ]), 1040);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "table",
  props: {
    columns: { default: () => [] },
    pagination: { default: () => ({}) },
    data: {},
    size: {},
    width: {},
    height: {},
    maxHeight: {},
    fit: {},
    stripe: {},
    border: {},
    rowKey: {},
    context: {},
    showHeader: {},
    showSummary: {},
    sumText: {},
    summaryMethod: {},
    rowClassName: {},
    rowStyle: {},
    cellClassName: {},
    cellStyle: {},
    headerRowClassName: {},
    headerRowStyle: {},
    headerCellClassName: {},
    headerCellStyle: {},
    highlightCurrentRow: {},
    currentRowKey: {},
    emptyText: {},
    expandRowKeys: {},
    defaultExpandAll: {},
    defaultSort: {},
    tooltipEffect: {},
    tooltipOptions: {},
    spanMethod: {},
    selectOnIndeterminate: {},
    indent: {},
    treeProps: {},
    lazy: {},
    load: {},
    className: {},
    style: {},
    tableLayout: {},
    scrollbarAlwaysOn: {},
    flexible: {},
    showOverflowTooltip: {},
    tooltipFormatter: {},
    appendFilterPanelTo: {},
    scrollbarTabindex: {},
    nativeScrollbar: {}
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const { b } = useBemClass();
    const tableProps = computed(() => {
      return {
        ...attrs,
        ...props,
        columns: void 0,
        pagination: void 0
      };
    });
    const paginationProps = computed(() => {
      return {
        background: true,
        layout: "prev, pager, next, sizes, total",
        pageSizes: [10, 20, 50, 100],
        ...props.pagination
      };
    });
    function handleSizeChange(size) {
      props.pagination.pageSize = size;
    }
    function handleCurrentChange(page) {
      props.pagination.currentPage = page;
    }
    return (_ctx, _cache) => {
      const _component_el_table = resolveComponent("el-table");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_table, mergeProps(tableProps.value, {
          data: props.data
        }), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (item) => {
              return openBlock(), createBlock(_sfc_main$2, {
                key: item.prop || item.label,
                column: item
              }, createSlots({ _: 2 }, [
                renderList(_ctx.$slots, (_, slotName) => {
                  return {
                    name: slotName,
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, slotName, mergeProps({ ref_for: true }, scope), void 0, true)
                    ])
                  };
                })
              ]), 1032, ["column"]);
            }), 128))
          ]),
          _: 3
        }, 16, ["data"]),
        createVNode(_component_el_row, {
          justify: "end",
          class: normalizeClass(unref(b)("table-pagination"))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_pagination, mergeProps(paginationProps.value, {
              "current-page": paginationProps.value.currentPage,
              "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => paginationProps.value.currentPage = $event),
              "page-size": paginationProps.value.pageSize,
              "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => paginationProps.value.pageSize = $event),
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }), null, 16, ["current-page", "page-size"])
          ]),
          _: 1
        }, 8, ["class"])
      ]);
    };
  }
});
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-11dc0c88"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tabs",
  props: /* @__PURE__ */ mergeModels({
    type: { default: "" },
    options: { default: () => [] },
    size: { default: "medium" },
    inner: { type: Boolean, default: false },
    stretch: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["tabClick", "tabChange"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { b } = useBemClass();
    const getClass = computed(() => {
      const arr = [b("tabs")];
      arr.push(b(`tabs--${props.size}`));
      if (props.inner) {
        arr.push(b("tabs--inner"));
      }
      return arr.join(" ");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClass.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(b)("tabs__default"))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(_component_el_tabs, {
              modelValue: model.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
              type: props.type,
              stretch: props.stretch,
              onTabClick: _cache[1] || (_cache[1] = (p, e) => emits("tabClick", p, e)),
              onTabChange: _cache[2] || (_cache[2] = ($event) => emits("tabChange", $event))
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (item) => {
                  return openBlock(), createBlock(_component_el_tab_pane, {
                    key: item.name,
                    name: item.name,
                    disabled: item == null ? void 0 : item.disabled
                  }, {
                    label: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { data: item }, () => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ], true)
                    ]),
                    _: 2
                  }, 1032, ["name", "disabled"]);
                }), 128))
              ]),
              _: 3
            }, 8, ["modelValue", "type", "stretch"])
          ], true)
        ], 2),
        unref(slots).extra ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(b)("tabs__extra"))
        }, [
          renderSlot(_ctx.$slots, "extra", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8637fa39"]]);
const createSelectDialog = (params) => {
  return function(options) {
    const { multiple = false, onOk, onBeforeOk, queryParams } = options;
    const DialogTableRef = ref();
    Dialog.open({
      title: params.title || options.title,
      content: () => h(params.component, {
        ref: (e) => DialogTableRef.value = e,
        multiple,
        queryParams,
        ...params.componentProps
      }),
      onBeforeOk: async () => {
        var _a;
        if (!DialogTableRef.value.getSelectedData) {
          ElMessage.error("组件必须暴露getSelectedData方法");
          return false;
        }
        const data = (_a = DialogTableRef.value) == null ? void 0 : _a.getSelectedData();
        if (!data.length) {
          ElMessage.warning(params.tip || "请选择数据");
          return false;
        }
        if (onBeforeOk) {
          return await onBeforeOk(data);
        } else {
          onOk == null ? void 0 : onOk(data);
          return true;
        }
      }
    });
  };
};
const components = {
  Button: _sfc_main$d,
  Card,
  Tabs,
  InputGroup,
  InputSearch,
  Grid,
  GridItem,
  Form,
  PageLayout,
  Dialog: _sfc_main$b,
  EditTable,
  Table
};
const GiButton = _sfc_main$d;
const GiCard = Card;
const GiTabs = Tabs;
const GiInputGroup = InputGroup;
const GiInputSearch = InputSearch;
const GiGrid = Grid;
const GiGridItem = GridItem;
const GiForm = Form;
const GiPageLayout = PageLayout;
const GiDialog = _sfc_main$b;
const GiEditTable = EditTable;
const GiTable = Table;
function capitalizeWord(word) {
  if (typeof word !== "string" || word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
const index = {
  install(app, options) {
    const prefix = (options == null ? void 0 : options.prefix) || "Gi";
    Object.entries(components).forEach(([name, component]) => {
      app.component(`${capitalizeWord(prefix)}${name}`, component);
    });
    app.config.globalProperties.$config = options;
  }
};
export {
  Dialog,
  GiButton,
  GiCard,
  GiDialog,
  GiEditTable,
  GiForm,
  GiGrid,
  GiGridItem,
  GiInputGroup,
  GiInputSearch,
  GiPageLayout,
  GiTable,
  GiTabs,
  createDialog,
  createSelectDialog,
  index as default,
  useBemClass
};
//# sourceMappingURL=index.es.js.map
