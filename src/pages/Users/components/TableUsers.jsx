import React from "react";
import {
  Anchor,
  Avatar,
  Group,
  ScrollArea,
  Table,
  Text,
  LoadingOverlay,
  Center,
} from "@mantine/core";
import { useUsers } from "../../../hooks/useUsers";

export const TableUsers = () => {
  const { users, loading, error } = useUsers();

  const rows = users.map((item) => (
    <tr key={item.uid}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.foto} radius={30} />
          <Text fz="sm" fw={500}>
            {item.nombre}
          </Text>
        </Group>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </td>
    </tr>
  ));

  if (loading)
    return (
      <Center h={500}>
        <LoadingOverlay
          loaderProps={{ size: "xl", color: "#4ADE80" }}
          overlayOpacity={0.3}
          visible
        />
      </Center>
    );

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
