import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../";

const meta = {
  title: "ui_elements/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Container_sample: Story = {
  args: {
    children: "Container",
  },
};
