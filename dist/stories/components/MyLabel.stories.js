"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    //decorator del componente
    // decorators: [
    //     (Story) => (
    //         <div style={{ margin: '3em' }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
    argTypes: {
        label: { control: 'text' },
        size: { control: 'inline-radio' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        allCaps: { control: 'boolean' },
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary' // primary | secondary | tertiary
};
// decorator solo de Secondary
exports.Secondary.decorators = [function (Story) { return (0, jsx_runtime_1.jsx)("div", __assign({ style: { margin: '4em' } }, { children: Story() }), void 0); }];
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
};
