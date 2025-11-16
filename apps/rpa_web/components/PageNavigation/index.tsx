"use clinet";

import {
  Badge,
  Button,
  Divider,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core";

//navitems
import { usePathname } from "next/navigation";
import { category, navitems, navResources } from "./nav.items";

export function PageNavigation() {
  const Pathname = usePathname();

  const NavButton = ({ item }: any) => (
    <Button
      color={Pathname == item.url ? "brand" : "dark"}
      variant={Pathname == item.url ? "light" : "subtle"}
      leftSection={<item.icon weight="duotone" size={16} />}
      justify="flex-start"
      size="xs"
    >
      <Group gap="xs">
        {item.title}
        {item.beta && (
          <Badge size="xs" color="orange" variant="light">
            BETA
          </Badge>
        )}
      </Group>
    </Button>
  );

  return (
    <>
      <ScrollArea
        scrollbarSize={3}
        h={"calc(100vh - 50px)"}
        color="brand"
        pb="xl"
      >
        <div
          style={{
            borderRight: "1px solid #00000011",
          }}
        >
          <Stack>
            <Stack gap={0}>
              {navitems.map((item, index) => (
                <NavButton item={item} key={index} />
              ))}
            </Stack>

            <Divider />

            <Text size="xs" fw={800}>
              Pinned Category
            </Text>

            <Divider />

            <Text size="xs" fw={800}>
              Followed Feeds
            </Text>

            <Divider />

            <Text size="xs" fw={800}>
              Browse via Category
            </Text>

            <Stack gap={0}>
              {category.map((item, index) => (
                <NavButton item={item} key={index} />
              ))}
            </Stack>

            <Divider my="xs" />

            <Text size="xs" fw={800}>
              RPA Resources
            </Text>

            <Stack gap={0}>
              {navResources.map((item, index) => (
                <NavButton item={item} key={index} />
              ))}
            </Stack>

            <Space h={100} />

            <Text size="xs" opacity={0.6}>
              Rastriyaa Pariwartan Abhiyan is a registered
              <br /> trademark of Void Labs, Inc.
            </Text>
          </Stack>
        </div>
      </ScrollArea>
    </>
  );
}
