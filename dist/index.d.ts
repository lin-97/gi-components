import { App } from 'vue';
import { ButtonProps } from 'element-plus';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { default as default_2 } from './src/form.vue';
import { DefineComponent } from 'vue';
import { DialogProps as DialogProps_2 } from 'element-plus';
import type * as El from 'element-plus';
import { ModelRef } from 'vue';
import { PublicProps } from 'vue';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
footer: boolean | (() => VNode);
readonly closeOnClickModal: boolean;
readonly showClose: boolean;
okText: string;
cancelText: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare type __VLS_Props = DialogProps;

declare type __VLS_PublicProps = {
    'modelValue'?: typeof visible['value'];
} & __VLS_Props;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        title: () => VNode;
        footer: () => VNode;
        default: () => VNode;
    }> & {
        title: () => VNode;
        footer: () => VNode;
        default: () => VNode;
    };
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type ColumnItemHide<F> = boolean | ((form: F) => boolean);

export declare type ColumnItemShow<F> = boolean | ((form: F) => boolean);

export declare type ColumnProps = El.InputProps & El.InputNumberProps & El.InputTagProps & El.ISelectProps & El.ISelectV2Props & El.TreeInstance['$props'] & El.CascaderProps & El.SliderProps & El.SwitchProps & El.RateProps & El.CheckboxGroupProps & El.CheckboxProps & El.RadioGroupProps & El.RadioProps & El.DatePickerProps & El.TimePickerDefaultProps & El.TimeSelectProps & El.ColorPickerProps & El.TransferProps & El.AutocompleteProps & El.UploadProps;

export declare type ColumnSlots = El.InputInstance['$slots'] & El.InputNumberInstance['$slots'] & El.InputTagInstance['$slots'] & El.AutocompleteInstance['$slots'] & El.CascaderInstance['$slots'] & El.DatePickerInstance['$slots'];

export declare type ColumnType = 'input' | 'textarea' | 'input-number' | 'input-tag' | 'select' | 'select-v2' | 'tree-select' | 'cascader' | 'slider' | 'switch' | 'rate' | 'checkbox-group' | 'checkbox' | 'radio-group' | 'radio' | 'date-picker' | 'time-picker' | 'time-select' | 'color-picker' | 'transfer' | 'autocomplete' | 'upload' | 'title' | 'slot';

export declare function createDialog(): {
    _context: {};
    create(options: DialogOptions): DialogReturnObject;
    /** 对话框-打开 */
    open(options: DialogOptions): DialogReturnObject;
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const Dialog: {
    _context: {};
    create(options: DialogOptions): DialogReturnObject;
    /** 对话框-打开 */
    open(options: DialogOptions): DialogReturnObject;
};

export declare type DialogInstance = InstanceType<typeof _default>;

declare type DialogOptions = Partial<DialogInstance['$props']>;

export declare interface DialogProps extends Partial<DialogProps_2> {
    content?: string | (() => VNode);
    footer?: boolean | (() => VNode);
    okText?: string;
    cancelText?: string;
    okButtonProps?: Partial<ButtonProps>;
    cancelButtonProps?: Partial<ButtonProps>;
    onOk?: () => void;
    onBeforeOk?: () => Promise<boolean>;
    onCancel?: () => void;
}

export declare interface DialogReturnObject {
    close: () => void;
    update: (newProps?: Record<string, any>) => void;
}

export declare interface FormColumnItem<F = any> {
    type: ColumnType;
    label?: string | VNode;
    field: string;
    fieldName?: string;
    span?: number;
    props?: ColumnProps & {
        options?: El.RadioProps & El.CheckboxProps & El.ISelectProps;
    };
    formItemProps?: El.FormItemProps;
    gridItemProps?: any;
    required?: boolean;
    rules?: El.FormItemRule[];
    hide?: ColumnItemHide<F>;
    show?: ColumnItemShow<F>;
    tip?: string;
    dictCode?: string;
    slotName?: string;
    slots?: ColumnSlots;
    extra?: string | VNode;
}

export declare type FormInstance = InstanceType<typeof default_2>;

declare const obj: {
    install(app: App, options?: {
        prefix?: string;
    }): void;
};
export default obj;

declare const visible: ModelRef<boolean, string, boolean, boolean>;

export { }
