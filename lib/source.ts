import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createOpenAPI, attachFile } from "fumadocs-openapi/server";
import { createElement } from "react";
import { icons } from "lucide-react";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
});

export const openapi = createOpenAPI();
