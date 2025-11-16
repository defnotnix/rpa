"use client";

import { PinnedAnnouncements } from "@/components/PinnedAnnouncements";
import { PinnedFakeNews } from "@/components/PinnedFakeNews";
import { PostCard } from "@/components/PostCard";
//mantine
import { Center, Divider, Grid, Stack } from "@mantine/core";

export function ModuleFeed() {
  return (
    <>
      <Grid.Col span={{ base: 12, lg: 6, xl: 7 }} py={32}>
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
              <Divider />
              <PostCard aspectratio={9 / 9} />
              <Divider />
              <PostCard aspectratio={9 / 6} />
              <Divider />
              <PostCard aspectratio={9 / 4} />
            </Stack>
          </div>
        </Center>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 3, xl: 2.5 }} py={32}>
        <Stack gap="xs">
          <PinnedAnnouncements />
          <PinnedFakeNews />
        </Stack>
      </Grid.Col>
    </>
  );
}
