"use client";

import { PinnedAnnouncements } from "@/components/PinnedAnnouncements";
import { PinnedFakeNews } from "@/components/PinnedFakeNews";
import { PostCard } from "@/components/PostCard";
//mantine
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import {
  CaretDownIcon,
  ChatDotsIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "@phosphor-icons/react";

export function ModulePost() {
  const CommentBox = () => {
    return (
      <Box>
        <Group wrap="nowrap" align="flex-staart">
          <Avatar src="https://avatar.iran.liara.run/public/32" size="sm" />
          <div>
            <Text size="xs">
              You'd be surprised how many women feel like this. I had a
              colleague in my first job whose wife was "disabled" & even though
              she could perfectly get a job she didn't because she'd lose her
              benefits & she figured that the few €100 they'd make more by her
              working part-time she could do house chores & her husband agreed.
            </Text>

            <Group mt="sm" justify="space-between" mr={-12} ml={-12}>
              <Group gap={0}>
                <Button
                  variant="subtle"
                  leftSection={<ChatDotsIcon weight="bold" />}
                  rightSection={<CaretDownIcon />}
                >
                  2.3K Replies
                </Button>
              </Group>

              <Group>
                <Button
                  variant="subtle"
                  leftSection={<ThumbsUpIcon weight="bold" />}
                >
                  3.6 K
                </Button>
                <Button
                  variant="subtle"
                  leftSection={<ThumbsDownIcon weight="bold" />}
                >
                  3.6 K
                </Button>
              </Group>
            </Group>
          </div>
        </Group>
      </Box>
    );
  };

  return (
    <>
      <Grid.Col span={{ base: 12, lg: 6, xl: 6 }} py={32}>
        <Center>
          <div
            style={{
              display: "block",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Stack gap="xl">
              <PostCard />

              <Group justify="space-between">
                <Text size="sm">12,111 Comments</Text>
              </Group>

              <Textarea rows={5} placeholder="Share your thoughts.." />

              <Stack>
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
              </Stack>
            </Stack>
          </div>
        </Center>
      </Grid.Col>
      <Grid.Col
        span={{ base: 12, lg: 3, xl: 3 }}
        py={32}
        px="md"
        style={{
          borderLeft: "1px solid #00000011",
        }}
      >
        <Stack gap="xs">
          <Text size="xs" opacity={0.5}>
            Full Article
          </Text>

          <Title size="xl">
            Let's talk about the comming changes for Nepal.s
          </Title>
          <Text size="xs">
            This artwork captures the haunting persistence of conflict through
            time — blending medieval and modern warfare into a single, grim
            vision. A lone knight, weary and wounded, kneels amid a field of
            blood-red flowers under a violent crimson sky. The typography and
            scattered historical dates echo centuries of battles — from 1300 to
            2024 — reminding us that despite progress, humanity’s struggle with
            war remains unchanged. It’s a visceral reflection on loss,
            sacrifice, and the futility of violence, framed as a letter from the
            frontlines of history itself.
          </Text>

          <Title size="xl">
            Let's talk about the comming changes for Nepal.s
          </Title>
          <Text size="xs">
            This artwork captures the haunting persistence of conflict through
            time — blending medieval and modern warfare into a single, grim
            vision. A lone knight, weary and wounded, kneels amid a field of
            blood-red flowers under a violent crimson sky. The typography and
            scattered historical dates echo centuries of battles — from 1300 to
            2024 — reminding us that despite progress, humanity’s struggle with
            war remains unchanged. It’s a visceral reflection on loss,
            sacrifice, and the futility of violence, framed as a letter from the
            frontlines of history itself.
          </Text>
        </Stack>
      </Grid.Col>
    </>
  );
}
