import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
    style: { color: "var(--color-input-text)" }, // Aplica a cor do texto usando a variável do theme
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Digite algo...",
    error: "Campo obrigatório",
    style: { color: "var(--color-input-text)" },
  },
}; 