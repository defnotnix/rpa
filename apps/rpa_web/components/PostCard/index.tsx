"use client";

import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  BookmarkIcon,
  ChatDotsIcon,
  DotsThreeVerticalIcon,
  ExclamationMarkIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "@phosphor-icons/react";

export function PostCard({ aspectratio = 9 / 10 }: any) {
  return (
    <>
      <Stack gap="xs">
        <Stack gap="xs">
          <Group justify="space-between">
            <Group gap="6px">
              <Avatar
                bg="red.2"
                src="https://letsbuildnepal.com/_astro/lbn_logo.B7zNA3a9.png"
                size="xs"
                mr="md"
              />
              <Text size="xs">@rpa.official</Text>
              <Text>•</Text>
              <Text size="xs" opacity={0.5}>
                18 minutes ago.
              </Text>
            </Group>

            <Group gap={0}>
              <Badge
                px="xs"
                size="22"
                radius="sm"
                variant="light"
                mr="3px"
                style={{
                  fontSize: 10,
                }}
              >
                News
              </Badge>

              <ActionIcon variant="light" size="sm">
                <ExclamationMarkIcon />
              </ActionIcon>
              <ActionIcon variant="subtle" size="sm">
                <DotsThreeVerticalIcon weight="bold" />
              </ActionIcon>
            </Group>
          </Group>

          <Text size="xl">
            Let's talk about the comming changes for Nepal.s
          </Text>
        </Stack>

        <Paper
          withBorder
          radius="md"
          style={{
            overflow: "hidden",
          }}
        >
          <AspectRatio ratio={aspectratio}>
            <Image src="https://i.pinimg.com/736x/d5/41/dc/d541dcde655547c5f169a94446e7c715.jpg" />
          </AspectRatio>

          <Group justify="space-between">
            <Group gap={0}>
              <Button
                variant="subtle"
                radius={0}
                leftSection={<ThumbsUpIcon weight="bold" />}
              >
                3.6 K
              </Button>
              <Button
                variant="subtle"
                radius={0}
                leftSection={<ThumbsDownIcon weight="bold" />}
              >
                3.6 K
              </Button>

              <Button
                variant="light"
                radius={0}
                leftSection={<ChatDotsIcon weight="bold" />}
              >
                2.3K
              </Button>
            </Group>

            <Group gap={0}>
              <Button
                variant="subtle"
                radius={0}
                leftSection={<BookmarkIcon weight="bold" />}
              >
                Save
              </Button>
              <Button
                variant="subtle"
                radius={0}
                leftSection={<ShareIcon weight="bold" />}
              >
                Share
              </Button>
            </Group>
          </Group>
        </Paper>

        <Text size="xs">
          This artwork captures the haunting persistence of conflict through
          time — blending medieval and modern warfare into a single, grim
          vision. A lone knight, weary and wounded, kneels amid a field of
          blood-red flowers under a violent crimson sky. The typography and
          scattered historical dates echo centuries of battles — from 1300 to
          2024 — reminding us that despite progress, humanity’s struggle with
          war remains unchanged. It’s a visceral reflection on loss, sacrifice,
          and the futility of violence, framed as a letter from the frontlines
          of history itself.
        </Text>
      </Stack>
    </>
  );
}
