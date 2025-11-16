"use client";

import React from "react";
//next

//mantine
import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Group,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";

//mantine

//icons

//styles
import classes from "./AdminShell.Header.module.css";

//components

//ptop
import { PropAdminShellHeader } from "./AdminShell.Header.type";
import { ArrowLeft, Atom } from "@phosphor-icons/react";
import { useAdminShellContext } from "../../AdminShell.context";

export function _Header({ pl, headerActions }: PropAdminShellHeader) {
  // * DEFINITIONS

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  const { state } = useAdminShellContext();

  // * ANIMATIONS

  return (
    <>
      <Box pl={pl}>
        <header className={classes.root}>
          <SimpleGrid cols={3}>
            <Group gap="xs">
              {/* <ActionIcon size="sm" variant="light">
                <ArrowLeft />
              </ActionIcon> */}
              <Breadcrumbs
                separatorMargin={6}
                separator={
                  <Text opacity={0.3} size="xs" fw={600}>
                    |
                  </Text>
                }
              >
                <Atom
                  size={12}
                  weight="duotone"
                  color="var(--mantine-color-brand-5)"
                />

                {state?.breadcrumbs?.map((bread: any, index: number) => {
                  const _isLast = index < (state?.breadcrumbs?.length || 0) - 1;

                  return (
                    <Anchor
                      size="xs"
                      c="dark"
                      key={index}
                      opacity={_isLast ? 0.5 : 1}
                      fw={_isLast ? 600 : 700}
                    >
                      {bread.label}
                    </Anchor>
                  );
                })}
              </Breadcrumbs>
            </Group>

            <Group justify="center" gap="xs" wrap="nowrap">
              <Text size="xs" fw={700}>
                {state?.moduleName}
              </Text>
              <Text size="xs" fw={600} opacity={0.5}>
                {state?.moduleDescription}
              </Text>
            </Group>

            <Group gap="xs" justify="flex-end">
              {headerActions}

              <Avatar
                src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"
                size={30}
                radius="sm"
              />
            </Group>
          </SimpleGrid>
        </header>
      </Box>
    </>
  );
}
