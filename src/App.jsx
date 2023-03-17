import { AppShell, Header, Text } from "@mantine/core";
import React from "react";
import HeaderSimple from "./components/Header/Header";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const { pathname = "" } = useLocation();
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={<Header height={60} p="xs">{
        <HeaderSimple></HeaderSimple>
        }</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default App;
