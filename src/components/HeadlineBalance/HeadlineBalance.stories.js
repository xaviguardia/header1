import { HeadlineBalance } from ".";

export default {
  title: "Components/HeadlineBalance",
  component: HeadlineBalance,
  argTypes: {
    ambient: {
      options: ["main", "inverse"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    level1: "pre-title",
    status: false,
    level4: true,
    level2: "title",
    fig1: false,
    level3: "Subtitle",
    ambient: "main",
    className: {},
  },
};
