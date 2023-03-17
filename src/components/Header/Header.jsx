import {
  Header as MantineHeader,
  Group,
  Button,
  Image,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { headerStyles } from "../../styles/headerStyles";

export const Header = () => {
  const { classes } = headerStyles();

  return (
    <MantineHeader height={80}>
      <Group spacing={5} className={classes.header}>
        <Image
          maw={45}
          src={require("../../assets/images/logo.png")}
          alt="logo"
        />
        <Group spacing={5} className={classes.buttons}>
          <Button leftIcon={<IconBrandGoogle />} color="yellow">
            Acceder
          </Button>
        </Group>
      </Group>
    </MantineHeader>
  );
};
