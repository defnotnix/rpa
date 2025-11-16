import { PropAdminShellHeader } from "./components/Header/AdminShell.Header.type";
import { PropAdminNavShellNavbar } from "./components/Navbar/AdminShell.Navbar.type";

export type AdminShellBreadcrumb = {
  label: string;
  url?: string;
};

export type PropAdminShellContext = {
  breadcrumbs?: AdminShellBreadcrumb[];
  moduleName?: string;
  moduleDescription?: string;
};

export type PropAdminShell = {
  children: React.ReactNode;
  //styles
  classNames?: any;
} & PropAdminNavShellNavbar &
  PropAdminShellHeader;
