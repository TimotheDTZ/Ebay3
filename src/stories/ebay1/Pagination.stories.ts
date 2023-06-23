import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

// Meta information for the component
const meta: Meta<typeof Pagination> = {
    title: 'Ebay1/Pagination/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: {
                type: 'select',
                options: ['default', 'hover', 'focus', 'disabled'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Stories
export const Default: Story = {
    args: { countButtonState: {}, },
};

export const Hover: Story = {
    args: {
        state: 'hover',
        countButtonState: { 2: 'hover' },
    },
};

export const Focus: Story = {
    args: {
        state: 'focus',
        countButtonState: { 3: 'focus' },
    },
};

export const Disabled: Story = {
    args: {
        state: 'disabled',
        countButtonState: { 5: 'disabled' },
    },
};
