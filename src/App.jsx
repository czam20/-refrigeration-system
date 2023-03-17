import { AppShell, Header, Navbar, Text } from "@mantine/core";
import React from "react";
import HeaderSimple from "./components/Header/Header";

const App = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{
        <Text>Navbar</Text>
        }</Navbar>}
      header={<Header height={60} p="xs">{
        <HeaderSimple></HeaderSimple>
        }</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {
        <Text>Pages</Text>
      }
    </AppShell>
  );
};

export default App;
