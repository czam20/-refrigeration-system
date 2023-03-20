import { IconGauge, IconUsers } from "@tabler/icons-react";

export const navbarItems = [
  {
    path: "/",
    route: "Dashboard",
    icon: <IconGauge size={30} />,
  },
  {
    path: "/users",
    route: "Usuarios",
    icon: <IconUsers size={30} />,
  },
];
