import type { Meta, StoryObj } from "@storybook/react";

import { Headline } from "../";

const meta = {
  title: "ui_elements/Headline",
  component: Headline,
  tags: ["autodocs"],
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_XL: Story = {
  args: {
    children: "HEADLINE",
    size: "xl",
    color: "primary",
  },
};
