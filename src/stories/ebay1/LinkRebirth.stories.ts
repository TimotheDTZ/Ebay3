import { Meta, StoryObj } from '@storybook/react';
import { LinkRebirth } from './LinkRebirth';

const meta: Meta<typeof LinkRebirth> = {
    title: 'Ebay1/Link/LinkRebirth',
    component: LinkRebirth,
    tags: ['autodocs'],
    argTypes: {
        iconLeft: {
            control: 'boolean',
        },
        iconRight: {
            control: 'boolean',
        },
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'white'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['md', 'sm'],
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['default', 'focus', 'hover'],
            },
        },
    },
};


export default meta;
type Story = StoryObj<typeof LinkRebirth>;

export const Default: Story = {
    args: {},
};

export const WithIconLeft: Story = {
    args: {
        iconLeft: true,
    },
};

export const WithIconRight: Story = {
    args: {
        iconRight: true,
    },
};

export const WithPrimaryColor: Story = {
    args: {
        color: 'primary',
    },
};

export const WithWhiteColor: Story = {
    args: {
        color: 'white',
    },
};

export const WithMediumSize: Story = {
    args: {
        size: 'md',
    },
};

export const WithSmallSize: Story = {
    args: {
        size: 'sm',
    },
};

export const WithFocusState: Story = {
    args: {
        state: 'focus',
    },
};

export const WithHoverState: Story = {
    args: {
        state: 'hover',
    },
};
