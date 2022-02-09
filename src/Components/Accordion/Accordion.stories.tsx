import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>;

export const FirstAccordionStory = Template.bind({});
const onClickCallBack=action('some items was clicked')

FirstAccordionStory.args = {
    title:'TestAccordion',
    collapsed:true,
    onClick:onClickCallBack
    /*👇 The args you need here will depend on your component */
};