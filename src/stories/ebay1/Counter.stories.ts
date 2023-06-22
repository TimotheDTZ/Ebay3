import { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Ebay1/Counter/Counter',
    component: Counter,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['lg', 'sm', 'md'],
            },
        },
        dustbin: {
            control: {
                type: 'boolean',
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['Default', 'Hover', 'Disabled'],
            },
        },
        initialValue: {
            control: {
                type: 'number',
                min: 0,
            },
        },
    },
} as Meta;

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    args: {
        size: 'md',
        dustbin: false,

        state: 'default',
        initialValue: 0,
    },
};

export const WithDustbin: Story = {
    args: {
        size: 'md',
        dustbin: true,

        state: 'default',
        initialValue: 0,
    },
};

export const Disabled: Story = {
    args: {
        size: 'md',
        dustbin: false,
        state: 'default',
        initialValue: 0,
    },
};
