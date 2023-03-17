import { createStyles, Header, Group, Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';

var useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  buttons: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));

const HeaderSimple = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} px="md">
        <Group spacing={5}  className={classes.header} sx={{ height: '100%' }}>
            <img className='logo' src="../assets/logo.png" alt="logo"/>
            <Group spacing={5} className={classes.buttons}>
              <Button leftIcon={<IconBrandGoogle />} color="yellow">Accerder</Button>                     
            </Group>
        </Group>
    </Header>
  );
}

export default HeaderSimple;