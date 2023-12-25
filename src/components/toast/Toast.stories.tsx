import type { Meta, StoryObj } from "@storybook/react";

import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const success: Story = {
  args: {
    message: "test toast message",
    variant: "success",
  },
};
export const error: Story = {
  args: {
    message: "test toast message",
    variant: "error",
  },
};
export const warning: Story = {
  args: {
    message: "test toast message",
    variant: "warning",
  },
};
