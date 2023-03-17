import { Anchor, Avatar, Group, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";

function TableUsers(data) {

    console.log(data.users)

    var rows = data.users.map((item) => {
        return <tr key={item.name}>
            <td>
            <Group spacing="sm">
                <Avatar size={30} src={item.avatar} radius={30} />
                <Text fz="sm" fw={500}>
                    {item.name}
                </Text>
            </Group>
            </td>
            <td>
                <Anchor component="button" size="sm">
                    {item.email}
                </Anchor>
            </td>
        </tr>
    });
    return(
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
}

export default TableUsers;