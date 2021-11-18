import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";



export default {
    title: 'UI/MyLabel',
    component: MyLabel,

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
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />


export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}


export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' // primary | secondary | tertiary
}
// decorator solo de Secondary
Secondary.decorators = [(Story) => <div style={{ margin: '4em' }}>{Story()}</div>]



export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
}