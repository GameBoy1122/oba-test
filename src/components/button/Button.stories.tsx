import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const primary: Story = {
  args: {
    children: "button",
    variant: "primary",
    disabled: false,
    onClick: () => {},
  },
};
export const secondary: Story = {
  args: {
    children: "button",
    variant: "secondary",
    disabled: false,
    onClick: () => {},
  },
};
export const next: Story = {
  args: {
    children: "button",
    variant: "next",
    disabled: false,
    onClick: () => {},
  },
};
export const outline: Story = {
  args: {
    children: "button",
    variant: "outline",
    disabled: false,
    onClick: () => {},
  },
};
export const previous: Story = {
  args: {
    children: "button",
    variant: "previous",
    disabled: false,
    onClick: () => {},
  },
};
