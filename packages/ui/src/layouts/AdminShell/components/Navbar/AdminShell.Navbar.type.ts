import { BadgeProps, MantineColor } from "@mantine/core";
import { Icon } from "@phosphor-icons/react";

export type PropAdminShellNavItem =
  | {
      divider: true;
    }
  | {
      divider?: false;
      label: string;
      icon?: Icon;
      url: string;
      side?: string;
      sideProps?: BadgeProps;
      children?: PropAdminShellNavItem[];
    };

export type PropAdminShellNavItems = {
  groupname: string;
  navs: PropAdminShellNavItem[];
};

export type PropAdminNavModule = {
  icon: Icon;
  label?: string;
  description?: string;
  color?: MantineColor;
};

export type PropAdminNavShellNavbar = {
  navItems: PropAdminShellNavItems[];
  navModules?: PropAdminNavModule[];
  onLogout?: () => void;
};
