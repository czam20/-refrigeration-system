import { createStyles } from "@mantine/core";

export const navbarStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "#1F2937",
    padding: theme.spacing.md,
  },
  navbar_item: {
    ...theme.fn.focusStyles(),
    color: "#FFF",
    textDecoration: "none",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    transition: "all ease-in 200ms",

    "&:hover": {
      color: "#4ADE80",
    },
  },
  navbar_item_active: {
    backgroundColor: "#4ADE80",

    "&:hover": {
      color: "#FFF",
    },
  },
  text: {
    fontSize: theme.fontSizes.md,
    fontWeight: "500",
  },
}));
