import {
  Header as MantineHeader,
  Group,
  Button,
  Image,
  Text,
  Flex,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useState } from "react";
import { logoutFirebase, singInWithGoogle } from "../../firebase.config";
import { headerStyles } from "../../styles/headerStyles";

export const Header = () => {
  const { classes } = headerStyles();

  const [displayname, setDisplayName] = useState(null);

  const loginWithGoogle = async () => {
    const user = await singInWithGoogle();
    setDisplayName(user.displayName);
  }

  const logout = async () => {
    setDisplayName(null);
    logoutFirebase();
  }

  return (
    <MantineHeader height={80}>
      <Group spacing={5} className={classes.header}>
        <Image
          maw={45}
          src={require("../../assets/images/logo.png")}
          alt="logo"
        />
        <Group spacing={5} className={classes.buttons}>
          {
            !displayname && 
            <Button leftIcon={<IconBrandGoogle />} color="yellow" onClick={loginWithGoogle}>
              Acceder
            </Button>
          }    
          {
            displayname && 
              <Flex align={'center'} gap='sm'>
                <Text color={'white'}>{displayname}</Text>
                <Button color="gray" onClick={logout}>
                  Logout
                </Button>                  
              </Flex>
          }        
        </Group>
      </Group>
    </MantineHeader>
  );
};
