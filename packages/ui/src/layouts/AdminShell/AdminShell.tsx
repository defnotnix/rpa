"use client";

import React, { useEffect, useReducer, useState } from "react";
//next

//mantine
import { AppShell } from "@mantine/core";
//mantine

//icons

//styles
import cx from "clsx";
import classes from "./AdminShell.module.css";
//components
import { AdminShellHeader } from "./components/Header";
import { AdminShellNavbar } from "./components/Navbar";

//context
import {
  AdminShellContext,
  AdminShellProvider,
  useAdminShellContext,
} from "./AdminShell.context";

//type
import { PropAdminShell, PropAdminShellContext } from "./AdminShell.type";
import { PropAdminNavShellNavbar } from "./components/Navbar/AdminShell.Navbar.type";

const defaultShellProps = {
  header: {
    height: 50,
  },
  navbar: {
    width: {
      sm: 200,
      lg: 280,
    },
    breakpoint: "sm",
  },
};

export function AdminShell({
  children,
  //classes
  classNames,
  //sidenav
  ...props

  //styles
}: PropAdminShell & PropAdminNavShellNavbar) {
  // * DEFINITIONS

  // * CONTEXT

  // * STATE

  const shellProps = defaultShellProps;

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <AdminShellProvider>
        <AppShell
          className={cx(classes.root, classNames?.root)}
          {...shellProps}
        >
          <AppShell.Header className={cx(classes.header, classNames?.header)}>
            <AdminShellHeader pl={defaultShellProps.navbar.width} {...props} />
          </AppShell.Header>

          <AppShell.Navbar
            style={{
              height: "100vh",
              top: 0,
            }}
            className={cx(classes.navbar, classNames?.navbar)}
          >
            {/* <AdminShellNavbar {...props} /> */}
          </AppShell.Navbar>

          <AppShell.Main className={cx(classes.main, classNames?.main)}>
            {children}
          </AppShell.Main>
        </AppShell>
      </AdminShellProvider>
    </>
  );
}
