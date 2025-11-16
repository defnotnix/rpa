"use client";

import { PropsWithChildren } from "react";
//mantine
import {
  ActionIcon,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
//styles
import { PageNavigation } from "@/components/PageNavigation";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
} from "@phosphor-icons/react";
import classes from "./site.module.css";

export function LayoutSite({ children }: PropsWithChildren) {
  return (
    <>
      <nav className={classes.nav}>
        <Container>
          <SimpleGrid cols={3}>
            <Text size="sm" c="gray.0" py="lg">
              Rastriya Parwartan Abhiyan{" "}
            </Text>

            <Text ta="center" size="sm" c="gray.0" py="lg" opacity={0.5}>
              The platform built for change.
            </Text>

            <Group gap="xs" justify="flex-end">
              <ActionIcon variant="subtle" color="gray">
                <MagnifyingGlassIcon />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <MegaphoneIcon />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <BellIcon />
              </ActionIcon>
              <Button size="sm">Login | Register</Button>
            </Group>
          </SimpleGrid>
        </Container>
      </nav>

      <main>
        <Container>
          <Grid gutter={0}>
            <Grid.Col span={{ base: 12, lg: 3, xl: 2.5 }} py={32}>
              <PageNavigation />
            </Grid.Col>
            {children}
          </Grid>
        </Container>
      </main>
    </>
  );
}
