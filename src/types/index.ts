export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}