import { Anchor, Avatar, Group, Text } from "@mantine/core";

export const RowTable = ({item}) => {
    return (
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
    );
};