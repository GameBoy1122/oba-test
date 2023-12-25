import type { Meta, StoryObj } from "@storybook/react";

import MaintenanceAlert from "./MaintenanceAlert";

const meta: Meta<typeof MaintenanceAlert> = {
  component: MaintenanceAlert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MaintenanceAlert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const maintenance: Story = {
  args: {
    show: true,
    handleClose: () => {},
  },
};
