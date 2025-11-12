import React, { PropsWithChildren } from "react";
//mantine
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
//modals
import { ModalsProvider } from "@mantine/modals";
//notifications
import { Notifications } from "@mantine/notifications";
//styles

import "@mantine/core/styles.css";
import { configThemeMantine } from "@/config/theme";

export function LayoutApp({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ColorSchemeScript
            nonce="8IBTHwOdqNKAWeKl7plt8g=="
            defaultColorScheme={"auto"}
          />
          <title>Rastriya Parwartan Abhiyan</title>
        </head>
        <body>
          <MantineProvider
            theme={configThemeMantine}
            defaultColorScheme={"auto"}
          >
            <ModalsProvider>
              <Notifications />
              {children}
            </ModalsProvider>
          </MantineProvider>
        </body>
      </html>
    </>
  );
}
