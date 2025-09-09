import { App } from 'vue';
import { ButtonProps as ButtonProps_2 } from 'element-plus';
import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { CSSProperties } from 'vue';
import { default as default_2 } from './src/form.vue';
import { default as default_3 } from './src/edit-table.vue';
import { DefineComponent } from 'vue';
import { DialogProps as DialogProps_2 } from 'element-plus';
import type * as El from 'element-plus';
import { ExtractPropTypes } from 'vue';
import { FormProps as FormProps_2 } from 'element-plus';
import { ModelRef } from 'vue';
import { PaginationProps } from 'element-plus';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { Slots } from 'vue';
import { SplitterPanelProps } from 'element-plus';
import { TableColumnCtx } from 'element-plus';
import { TableColumnInstance } from 'element-plus';
import { TableColumnItem as TableColumnItem_2 } from './type';
import { TableProps as TableProps_2 } from 'element-plus';
import { TabPaneName } from 'element-plus';
import { TabsProps as TabsProps_2 } from 'element-plus';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<ButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
click: (event: MouseEvent) => any;
}, string, PublicProps, Readonly<ButtonProps> & Readonly<{
onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
type: "add" | "edit" | "delete" | "search" | "reset" | "upload" | "download" | "print" | "" | ButtonProps_2["type"];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_2: DefineComponent<CardProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<CardProps> & Readonly<{}>, {
size: "small" | "middle";
title: string;
extra: string;
bordered: boolean;
headerBordered: boolean;
headerStyle: CSSProperties;
bodyStyle: CSSProperties;
inner: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: (string | number) | undefined) => any;
} & {
tabClick: (pane: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly disabled: boolean;
readonly label: string;
readonly lazy: boolean;
readonly closable: boolean;
readonly name?: (string | number) | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}, ev: Event) => any;
tabChange: (value: string) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
"onUpdate:modelValue"?: ((value: (string | number) | undefined) => any) | undefined;
onTabClick?: ((pane: {
uid: number;
getVnode: () => VNode;
slots: Slots;
props: {
readonly disabled: boolean;
readonly label: string;
readonly lazy: boolean;
readonly closable: boolean;
readonly name?: (string | number) | undefined;
};
paneName: TabPaneName | undefined;
active: boolean;
index: string | undefined;
isClosable: boolean;
isFocusInsidePane: () => boolean | undefined;
}, ev: Event) => any) | undefined;
onTabChange?: ((value: string) => any) | undefined;
}>, {
size: "small" | "medium";
type: TabsProps_2["type"];
inner: boolean;
options: TabsOptionItem[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_5: DefineComponent<PageLayoutProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<PageLayoutProps> & Readonly<{}>, {
size: string | number;
bordered: boolean;
headerStyle: CSSProperties;
bodyStyle: CSSProperties;
collapse: boolean;
leftStyle: CSSProperties;
toolStyle: CSSProperties;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_6: DefineComponent<__VLS_PublicProps_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_3> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
footer: boolean | (() => VNode);
readonly closeOnClickModal: boolean;
readonly width: string | number;
readonly alignCenter: boolean;
readonly showClose: boolean;
okText: string;
cancelText: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_7: DefineComponent<TableProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<TableProps> & Readonly<{}>, {
columns: TableColumnItem_2[];
pagination: Partial<PaginationProps>;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_Props = TabsProps;

declare type __VLS_Props_2 = InputSearchProps;

declare type __VLS_Props_3 = DialogProps;

declare type __VLS_PublicProps = {
    modelValue?: TabsProps_2['modelValue'];
} & __VLS_Props;

declare type __VLS_PublicProps_2 = {
    modelValue?: typeof model['value'];
} & __VLS_Props_2;

declare type __VLS_PublicProps_3 = {
    'modelValue'?: typeof visible['value'];
} & __VLS_Props_3;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default: () => void;
        title: () => void;
        extra: () => void;
        footer: () => void;
    }> & {
        default: () => void;
        title: () => void;
        extra: () => void;
        footer: () => void;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default: () => void;
        extra: () => void;
        label: (e: {
            data: TabsOptionItem;
        }) => void;
    }> & {
        default: () => void;
        extra: () => void;
        label: (e: {
            data: TabsOptionItem;
        }) => void;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_5(): any;

declare function __VLS_template_6(): {
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

declare function __VLS_template_7(): {
    attrs: Partial<{}>;
    slots: any;
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_TemplateResult_6 = ReturnType<typeof __VLS_template_6>;

declare type __VLS_TemplateResult_7 = ReturnType<typeof __VLS_template_7>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface ButtonProps extends Partial<Omit<ButtonProps_2, 'type'>> {
    type?: 'add' | 'edit' | 'delete' | 'search' | 'reset' | 'upload' | 'download' | 'print' | '' | ButtonProps_2['type'];
}

declare interface CardProps {
    title?: string;
    extra?: string;
    bordered?: boolean;
    size?: 'small' | 'middle';
    headerBordered?: boolean;
    headerStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    inner?: boolean;
}

export declare type ColumnItemProps = El.InputProps & El.InputNumberProps & El.InputTagProps & El.ISelectProps & El.ISelectV2Props & El.TreeInstance['$props'] & El.CascaderProps & El.SliderProps & El.SwitchProps & El.RateProps & El.CheckboxGroupProps & El.CheckboxProps & El.RadioGroupProps & El.RadioProps & El.DatePickerProps & El.TimePickerDefaultProps & El.TimeSelectProps & El.ColorPickerProps & El.TransferProps & El.AutocompleteProps & El.UploadProps;

export declare interface Config {
    prefix?: string;
    clearable?: boolean;
    dictRequest?: () => Promise<any>;
}

export declare function createDialog(): {
    _context: {};
    create(options: DialogOptions): DialogReturnObject;
    /** 对话框-打开 */
    open(options: DialogOptions): DialogReturnObject;
};

/**
 * 创建选择弹窗
 * @description component组件必须暴露一个getSelectedData方法
 */
export declare const createSelectDialog: <T, Q extends DefOption = DefOption>(params: CreateSelectDialogParams) => (options: DialogOption<T, Q>) => void;

declare type CreateSelectDialogParams = {
    title: string;
    component: Component;
    componentProps?: Record<string, any>;
    tip?: string;
};

declare const _default: {
    install(app: App, options?: Config): void;
};
export default _default;

declare const _default_10: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;

declare const _default_11: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

declare const _default_3: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

declare const _default_4: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

declare const _default_5: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

declare const _default_6: DefineComponent<__VLS_PublicProps_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string | undefined) => any;
} & {
clear: () => any;
search: () => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_2> & Readonly<{
onClear?: (() => any) | undefined;
onSearch?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
disabled: boolean;
placeholder: string;
readonly: boolean;
disabledHideButton: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

/**
 * @version 2.15.0
 * @zh 响应式配置从 `2.18.0` 开始支持，具体配置 [ResponsiveValue](#responsivevalue)
 * @en Responsive configuration has been supported since `2.18.0`, the specific configuration [ResponsiveValue](#responsivevalue)
 */
declare const _default_7: DefineComponent<ExtractPropTypes<    {
/**
* @zh 每一行展示的列数
* @en Number of columns displayed in each row
*/
cols: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 行与行之间的间距
* @en The space in row-to-row
*/
rowGap: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 列与列之间的间距
* @en The space in column-to-column
*/
colGap: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 是否折叠
* @en Whether to collapsed
*/
collapsed: {
type: BooleanConstructor;
default: boolean;
};
/**
* @zh 折叠时显示的行数
* @en Number of rows displayed when collapsed
*/
collapsedRows: {
type: NumberConstructor;
default: number;
};
}>, {
classNames: ComputedRef<string[]>;
style: ComputedRef<    {
gap: string;
'grid-template-columns': string;
}[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
/**
* @zh 每一行展示的列数
* @en Number of columns displayed in each row
*/
cols: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 行与行之间的间距
* @en The space in row-to-row
*/
rowGap: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 列与列之间的间距
* @en The space in column-to-column
*/
colGap: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 是否折叠
* @en Whether to collapsed
*/
collapsed: {
type: BooleanConstructor;
default: boolean;
};
/**
* @zh 折叠时显示的行数
* @en Number of rows displayed when collapsed
*/
collapsedRows: {
type: NumberConstructor;
default: number;
};
}>> & Readonly<{}>, {
rowGap: number | ResponsiveValue;
cols: number | ResponsiveValue;
collapsed: boolean;
collapsedRows: number;
colGap: number | ResponsiveValue;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

/**
 * @version 2.15.0
 * @zh 响应式配置从 `2.18.0` 开始支持，具体配置 [ResponsiveValue](#responsivevalue)
 * @en Responsive configuration has been supported since `2.18.0`, the specific configuration [ResponsiveValue](#responsivevalue)
 */
declare const _default_8: DefineComponent<ExtractPropTypes<    {
/**
* @zh 跨越的格数
* @en Number of grids spanned
*/
span: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 左侧的间隔格数
* @en Number of grids on the left
*/
offset: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 是否是后缀元素
* @en Is it a suffix element
*/
suffix: {
type: BooleanConstructor;
default: boolean;
};
}>, {
classNames: ComputedRef<string[]>;
style: ComputedRef<({
'margin-left': string;
} | {
'margin-left'?: undefined;
} | {
'grid-column': string;
display?: undefined;
} | {
display: string;
'grid-column'?: undefined;
})[]>;
domRef: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
overflow: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
/**
* @zh 跨越的格数
* @en Number of grids spanned
*/
span: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 左侧的间隔格数
* @en Number of grids on the left
*/
offset: {
type: PropType<number | ResponsiveValue>;
default: number;
};
/**
* @zh 是否是后缀元素
* @en Is it a suffix element
*/
suffix: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{}>, {
span: number | ResponsiveValue;
offset: number | ResponsiveValue;
suffix: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const _default_9: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

declare interface DefOption {
    queryParams: Record<string, any>;
}

export declare const Dialog: {
    _context: {};
    create(options: DialogOptions): DialogReturnObject;
    /** 对话框-打开 */
    open(options: DialogOptions): DialogReturnObject;
};

export declare type DialogInstance = InstanceType<typeof _default_10>;

declare type DialogOption<T, Q extends DefOption = DefOption> = {
    title?: string;
    multiple?: boolean;
    queryParams?: Q['queryParams'];
    onOk?: (data: T) => void;
    onBeforeOk?: (data: T) => Promise<boolean>;
};

declare type DialogOptions = Partial<DialogInstance['$props']>;

export declare interface DialogProps extends Partial<DialogProps_2> {
    content?: string | (() => VNode);
    footer?: boolean | (() => VNode);
    okText?: string;
    cancelText?: string;
    okButtonProps?: Partial<ButtonProps_2>;
    cancelButtonProps?: Partial<ButtonProps_2>;
    style?: CSSProperties;
    simple?: boolean;
    onOk?: () => void;
    onBeforeOk?: () => Promise<boolean>;
    onCancel?: () => void;
}

export declare interface DialogReturnObject {
    close: () => void;
    update: (newProps?: Record<string, any>) => void;
}

export declare interface EditTableColumnItem {
    type?: EditTableColumnItemType;
    title: string;
    dataIndex: string;
    width?: number | string;
    required?: boolean;
    rules?: El.FormItemRule[];
    props?: ColumnItemProps;
    columnProps?: El.TableColumnInstance['$props'];
    formItemProps?: El.FormItemProps;
    slotName?: string;
}

export declare type EditTableColumnItemType = 'input' | 'textarea' | 'input-number' | 'input-tag' | 'select' | 'select-v2' | 'tree-select' | 'cascader' | 'slider' | 'switch' | 'rate' | 'checkbox-group' | 'checkbox' | 'radio-group' | 'radio' | 'date-picker' | 'time-picker' | 'time-select' | 'color-picker' | 'transfer' | 'autocomplete' | 'upload' | 'slot' | 'cecw-input-search';

export declare type EditTableInstance = InstanceType<typeof default_3>;

export declare interface EditTableProps {
    rowKey?: string;
    data?: any[];
    columns?: EditTableColumnItem[];
    cellDisabled?: any;
}

export declare interface FormColumnItem<F = any> {
    type: FormColumnType;
    label?: string;
    labelRender?: () => VNode;
    field: string;
    fieldName?: string;
    span?: number;
    props?: FormColumnProps & {
        options?: El.RadioProps & El.CheckboxProps & El.SelectProps;
    };
    formItemProps?: El.FormItemProps;
    gridItemProps?: any;
    required?: boolean;
    rules?: El.FormItemRule[];
    hide?: FormColumnItemHide<F>;
    tip?: string;
    dictCode?: string;
    slotName?: string;
    slots?: FormColumnSlots;
    extra?: string | (() => VNode);
}

export declare type FormColumnItemHide<F> = boolean | ((form: F) => boolean);

export declare type FormColumnProps = El.InputProps & El.InputNumberProps & El.InputTagProps & El.SelectProps & El.SelectV2Props & El.TreeInstance['$props'] & El.CascaderProps & El.SliderProps & El.SwitchProps & El.RateProps & El.CheckboxGroupProps & El.CheckboxProps & El.RadioGroupProps & El.RadioProps & El.DatePickerProps & El.TimePickerDefaultProps & El.TimeSelectProps & El.ColorPickerProps & El.TransferProps & El.AutocompleteProps & El.UploadProps & InputSearchInstance['$props'];

export declare type FormColumnSlots = El.InputInstance['$slots'] & El.InputNumberInstance['$slots'] & El.InputTagInstance['$slots'] & El.AutocompleteInstance['$slots'] & El.CascaderInstance['$slots'] & El.DatePickerInstance['$slots'];

export declare type FormColumnType = 'input' | 'textarea' | 'input-number' | 'input-tag' | 'input-search' | 'select' | 'select-v2' | 'tree-select' | 'cascader' | 'slider' | 'switch' | 'rate' | 'checkbox-group' | 'checkbox' | 'radio-group' | 'radio' | 'date-picker' | 'time-picker' | 'time-select' | 'color-picker' | 'transfer' | 'autocomplete' | 'upload' | 'title' | 'slot';

export declare type FormInstance = InstanceType<typeof default_2>;

export declare interface FormProps extends Partial<FormProps_2> {
    modelValue: any;
    columns?: FormColumnItem[];
    fc?: Record<string, {
        edit: boolean;
        hidden?: boolean;
        required?: boolean;
    }>;
    gridProps?: GridProps;
    gridItemProps?: GridItemProps;
    search?: boolean;
    searchText?: string;
    hideFoldBtn?: boolean;
    defaultCollapsed?: boolean | undefined;
}

export declare const GiButton: typeof _default_2;

export declare const GiCard: typeof _default_3;

export declare const GiDialog: typeof _default_10;

export declare const GiEditTable: typeof default_3;

export declare const GiForm: typeof default_2;

export declare const GiGrid: typeof _default_7;

export declare const GiGridItem: typeof _default_8;

export declare const GiInputGroup: typeof _default_5;

export declare const GiInputSearch: typeof _default_6;

export declare const GiPageLayout: typeof _default_9;

export declare const GiTable: typeof _default_11;

export declare const GiTabs: typeof _default_4;

declare interface GridItemProps {
    span?: number | ResponsiveValue;
    offset?: number | ResponsiveValue;
    suffix?: boolean;
}

declare interface GridProps {
    cols?: number | ResponsiveValue;
    rowGap?: number | ResponsiveValue;
    colGap?: number | ResponsiveValue;
    collapsed?: boolean;
    collapsedRows?: number;
}

declare type InputSearchInstance = InstanceType<typeof _default_6>;

declare interface InputSearchProps {
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    disabledHideButton?: boolean;
}

declare const model: ModelRef<string | undefined, string, string | undefined, string | undefined>;

declare interface PageLayoutProps {
    size?: SplitterPanelProps['size'];
    bordered?: boolean;
    collapse?: boolean;
    leftStyle?: CSSProperties;
    headerStyle?: CSSProperties;
    toolStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
}

declare interface ResponsiveValue {
    /**
     * @zh >= 1600px 响应式配置
     * @en >= 1600px responsive configuration
     */
    xxl?: number;
    /**
     * @zh >= 1200px 响应式配置
     * @en >= 1200px responsive configuration
     */
    xl?: number;
    /**
     * @zh >= 992px 响应式配置
     * @en >= 992px responsive configuration
     */
    lg?: number;
    /**
     * @zh >= 768px 响应式配置
     * @en >= 768px responsive configuration
     */
    md?: number;
    /**
     * @zh >= 576px 响应式配置
     * @en >= 576px responsive configuration
     */
    sm?: number;
    /**
     * @zh < 576px 响应式配置
     * @en <576px responsive configuration
     */
    xs?: number;
}

export declare interface TableColumnItem extends Omit<TableColumnInstance['$props'], never> {
    slotName?: string;
    children?: TableColumnItem[];
    render?: (scope: TableColumnCtx<any>) => VNode | VNode[] | string;
}

export declare type TableInstance = InstanceType<typeof _default_11>;

export declare interface TableProps extends ExtractPropTypes<TableProps_2<Record<string | number | symbol, any>>> {
    columns?: TableColumnItem[];
    pagination?: Partial<PaginationProps>;
}

declare type TabsOptionItem = {
    label: string;
    name: string;
    disabled?: boolean;
};

declare interface TabsProps extends Partial<Pick<TabsProps_2, 'type' | 'stretch'>> {
    type?: TabsProps_2['type'];
    options?: TabsOptionItem[];
    size?: 'small' | 'medium';
    inner?: boolean;
}

export declare function useBemClass(): {
    b: (name?: string) => string;
};

declare const visible: ModelRef<boolean, string, boolean, boolean>;

export { }
