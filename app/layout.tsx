import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { GlobeIcon } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

const docsLayout: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      text: "Website",
      url: "https://wms-liquid8.online",
      active: "nested-url",
      icon: <GlobeIcon />,
    },
  ],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;

        return {
          ...option,
          icon: (
            <div
              className="rounded-md border bg-gradient-to-t from-fd-background/80 p-1 shadow-md [&_svg]:size-5"
              style={{
                color: `var(--${meta.file.dirname}-color)`,
                backgroundColor: `color-mix(in oklab, var(--${meta.file.dirname}-color) 40%, transparent)`,
              }}
            >
              {node.icon}
            </div>
          ),
        };
      },
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout {...docsLayout}>{children}</DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
