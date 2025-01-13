import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Box } from "../";

const meta = {
  title: "ui_elements/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box_sample: Story = {
  args: { children: "Box" },
};

export const Box_sample_hover: Story = {
  args: {
    children: "Box",
    onClick: fn(),
  },
};
