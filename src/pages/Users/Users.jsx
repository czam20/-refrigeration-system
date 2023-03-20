import React from "react";
import { Card, Title } from "@mantine/core";
import { TableUsers } from "./components/TableUsers";
import { userStyles } from "../../styles/userStyles";

export const Users = () => {
  const { classes } = userStyles();

  return (
    <div>
      <Title className={classes.title}>Usuarios registrados</Title>
      <Card withBorder radius="md" padding="xl">
        <TableUsers />
      </Card>
    </div>
  );
};
