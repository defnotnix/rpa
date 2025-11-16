"use client";

import { Divider, Group, Paper, Stack, Text } from "@mantine/core";

export function PinnedFakeNews() {
  return (
    <>
      <Paper withBorder>
        <Text size="xs" px="md" py="sm" tt="uppercase" fw={800}>
          Recent Fake News
        </Text>
        <Divider />
        <Stack py="md">
          <Paper px="md">
            <Text size="xs">
              This artwork captures the haunting persistence of conflict through
              time — blending medieval and modern warfare into a single, grim
              vision.
            </Text>

            <Group mt="xs" justify="space-between">
              <Text size="10px" opacity={0.5}>
                12 minutes ago.
              </Text>
              <Text size="10px">@rpa.official</Text>
            </Group>
          </Paper>
          <Divider />
          <Paper px="md">
            <Text size="xs">
              This artwork captures the haunting persistence of conflict through
              time — blending medieval and modern warfare into a single, grim
              vision.
            </Text>

            <Group mt="xs" justify="space-between">
              <Text size="10px" opacity={0.5}>
                12 minutes ago.
              </Text>
              <Text size="10px">@rpa.official</Text>
            </Group>
          </Paper>
          <Divider />
          <Paper px="md">
            <Text size="xs">
              This artwork captures the haunting persistence of conflict through
              time — blending medieval and modern warfare into a single, grim
              vision.
            </Text>

            <Group mt="xs" justify="space-between">
              <Text size="10px" opacity={0.5}>
                12 minutes ago.
              </Text>
              <Text size="10px">@rpa.official</Text>
            </Group>
          </Paper>
        </Stack>
      </Paper>
    </>
  );
}
