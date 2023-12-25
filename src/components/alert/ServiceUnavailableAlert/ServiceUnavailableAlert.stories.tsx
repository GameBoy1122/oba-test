import type { Meta, StoryObj } from "@storybook/react";

import ServiceUnavailableAlert from "./ServiceUnavailableAlert";

const meta: Meta<typeof ServiceUnavailableAlert> = {
  component: ServiceUnavailableAlert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ServiceUnavailableAlert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const serviceUnavailable: Story = {
  args: {
    show: true,
    handleClose: () => {},
  },
};
