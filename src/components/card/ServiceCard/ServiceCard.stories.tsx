import type { Meta, StoryObj } from "@storybook/react";

import ServiceCard from "./ServiceCard";

const meta: Meta<typeof ServiceCard> = {
  component: ServiceCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const servicecard: Story = {
  args: {
    id: "1",
    title: "ServiceCard",
    image: "/images/card-img.svg",
    disabled: false,
    disabledMessage: "message",
    active: true,
    onClick: () => {},
  },
};
