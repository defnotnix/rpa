"use client";

import React from "react";
//next
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Indicator,
  Menu,
  NavLink,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
//icons
import {
  Atom,
  Bell,
  CaretRight,
  Circle,
  MagnifyingGlass,
  Plus,
  ShuffleAngular,
  SlidersHorizontal,
} from "@phosphor-icons/react";
//styles
import cx from "clsx";
import classes from "./AdminShell.Navbar.module.css";
import classesNavLink from "./AdminShell.Navbar.NavLiink.module.css";
//props
import { PropAdminNavShellNavbar } from "./AdminShell.Navbar.type";

export function _Navbar({
  navModules = [],
  navItems = [],
}: PropAdminNavShellNavbar) {
  const Router = useRouter();
  const Pathname = usePathname();

  const RenderModules = () => {
    return (
      <Menu
        position="right-start"
        withArrow
        shadow="md"
        radius="md"
        offset={-16}
        arrowOffset={24}
      >
        <Menu.Target>
          <div>
            <Paper
              withBorder
              p="xs"
              mx="sm"
              mb={4}
              radius="md"
              style={{
                borderColor: "var(--mantine-color-gray-4)",
              }}
            >
              <div>
                <Group justify="space-between">
                  <Group gap="xs">
                    <ThemeIcon size="md" radius="md" color="brand">
                      <Atom
                        weight="duotone"
                        color="var(--mantine-color-gray-0)"
                      />
                    </ThemeIcon>
                    <div>
                      <Text size="xs" c="gray.9" fw={700}>
                        vframework Core Mods.
                      </Text>
                      <Text size="10px" c="dark.9" opacity={0.4}>
                        vframework Inc.
                      </Text>
                    </div>
                  </Group>
                  {navModules?.length > 0 && (
                    <ActionIcon variant="subtle" color="dark.9">
                      <ShuffleAngular weight="bold" />
                    </ActionIcon>
                  )}
                </Group>
              </div>
            </Paper>
          </div>
        </Menu.Target>

        {navModules?.length > 0 && (
          <Menu.Dropdown>
            <Group px="md" py="xs" justify="space-between">
              <Text fw={600} size="xs">
                vframework Core Modules.
              </Text>
              <ActionIcon size="xs" variant="subtle">
                <ShuffleAngular />
              </ActionIcon>
            </Group>

            <Divider opacity={0.5} />

            {navModules.map((navModule, index) => (
              <Menu.Item
                key={index}
                leftSection={
                  <ThemeIcon variant="light" color={navModule.color}>
                    {React.createElement(navModule.icon, { weight: "bold" })}
                  </ThemeIcon>
                }
              >
                <Group justify="space-between" wrap="nowrap" align="flex-start">
                  <div
                    style={{
                      width: 200,
                    }}
                  >
                    <Text size="xs" fw={799}>
                      {navModule.label}
                    </Text>
                    <Text size="10px" opacity={0.5}>
                      {navModule.description}
                    </Text>
                  </div>

                  <Badge
                    size="xs"
                    variant="light"
                    color="gray"
                    style={{
                      border: "1px solid rgba(0,0,0,.1)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 8,
                      }}
                    >
                      ⌘
                    </span>{" "}
                    + 1
                  </Badge>
                </Group>
              </Menu.Item>
            ))}

            <Divider opacity={0.5} />

            <Button
              fullWidth
              variant="light"
              leftSection={<Plus />}
              justify="space-between"
              mt="4px"
              fw={600}
            >
              Add New Integration
            </Button>
          </Menu.Dropdown>
        )}
      </Menu>
    );
  };

  const ModuleSearch = () => (
    <Box px="sm">
      <TextInput
        radius="md"
        size="sm"
        leftSection={<MagnifyingGlass />}
        rightSection={
          <ActionIcon variant="subtle" color="gray.9">
            <SlidersHorizontal />
          </ActionIcon>
        }
        placeholder="Search Modules"
      />
    </Box>
  );

  const renderNavItems = (items: any[]) =>
    items.map((navMain: any, index: number) => {
      const subnavlinks = navMain.children?.map(
        (navChild: any, index: number) => {
          return navChild.url;
        }
      );

      if (navMain?.divider) {
        return <Divider my={6} key={index} opacity={0.2} />;
      }

      return (
        <NavLink
          className={classes.navmain}
          fw={800}
          label={
            <Group gap="xs">
              {navMain.label}
              {navMain.side ? (
                <Badge {...(navMain.sideProps || {})} size="xs">
                  {navMain.side}
                </Badge>
              ) : null}
            </Group>
          }
          key={index}
          leftSection={
            navMain.icon ? <navMain.icon size={14} weight="duotone" /> : null
          }
          childrenOffset={26}
          active={
            navMain?.children
              ? subnavlinks.includes(Pathname)
              : Pathname === navMain.url
          }
          classNames={classesNavLink}
          href={navMain.url}
        >
          {navMain?.children?.map((navChild: any, index: number) => {
            const _active = navChild.url == Pathname;

            return (
              <NavLink
                className={classes.subnav}
                c={_active ? "dark.9" : "dark.6"}
                label={
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: 15.3,
                      }}
                    >
                      <Circle size={6} weight="fill" />
                    </div>
                    <Group gap="xs">
                      {navChild.label}
                      {navChild.side ? (
                        <Badge {...(navChild.sideProps || {})} size="xs">
                          {navChild.side}
                        </Badge>
                      ) : null}
                    </Group>
                  </>
                }
                key={index}
                classNames={classesNavLink}
                active={Pathname == navChild.url}
                href={navChild.url}
                variant="light"
              />
            );
          })}
        </NavLink>
      );
    });

  const RenderNavGroups = () => {
    return navItems.map((navgroup: any, index: number) => (
      <div key={index}>
        <Text
          fw={800}
          c="dark.9"
          size="10px"
          tt="uppercase"
          pl={12}
          mt="sm"
          mb={"xs"}
        >
          {navgroup.groupname}
        </Text>
        {renderNavItems(navgroup.navs)}
      </div>
    ));
  };

  return (
    <>
      <AppShell.Section>
        <Group px="xl" h={50} justify="space-between">
          <Text size="xs" fw={600}>
            vframework <b> Admin Portal.</b>
          </Text>
          <Badge size="xs">v.1.0.0</Badge>
        </Group>

        <RenderModules />
        <ModuleSearch />
      </AppShell.Section>
      <AppShell.Section grow component={ScrollArea} p="sm">
        <RenderNavGroups />
      </AppShell.Section>
      <AppShell.Section p="sm">
        <Group wrap="nowrap" justify="space-between">
          <Indicator>
            <ActionIcon variant="subtle" color="white">
              <Bell />
            </ActionIcon>
          </Indicator>
        </Group>
      </AppShell.Section>
    </>
  );
}
