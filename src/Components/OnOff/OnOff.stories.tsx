import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import OnOff from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const FirstOnOffStory = Template.bind({});
const onClickCallBack=action('some items was clicked')
FirstOnOffStory.args = {
   on:true,
    onClick:onClickCallBack
};