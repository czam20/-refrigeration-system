import React from "react";
import {
  ScrollArea,
  Table,
  LoadingOverlay,
  Center,
} from "@mantine/core";
import { useUsers } from "../../../hooks/useUsers";
import { RowTable } from "./RowTable";

export const TableUsers = () => {
  const { users, loading, error } = useUsers();

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
        <tbody>
          {users.map((item,index) => (
            <RowTable item={item} key={index}></RowTable>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
};
