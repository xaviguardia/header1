import { DetailGroup } from ".";

export default {
  title: "Components/DetailGroup",
  component: DetailGroup,
  argTypes: {
    ambient: {
      options: ["inverse", "standard"],
      control: { type: "select" },
    },
    quantity: {
      options: ["two", "three"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    ambient: "inverse",
    quantity: "two",
    className: {},
  },
};
