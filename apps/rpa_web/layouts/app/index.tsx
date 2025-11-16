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
            defaultColorScheme={"light"}
          />
          <title>Rastriya Parwartan Abhiyan</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style={{
            background: "var(--mantine-color-gray-2)",
          }}
        >
          <MantineProvider
            theme={configThemeMantine}
            defaultColorScheme={"light"}
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
