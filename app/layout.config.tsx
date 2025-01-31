import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule="evenodd"
      clipRule={"evenodd"}
      viewBox="0 0 10.54 13.93"
    >
      <path
        fill="#0B91FF"
        d="M5.27 0c2.27,0 4.11,1.53 4.11,3.41 0,0.94 -0.46,1.79 -1.2,2.41 -0.67,-0.29 -1.63,-1.42 -1.76,-2.02l0.76 -0.11c0.09,-0.01 0.11,-0.11 0.01,-0.18l-2.58 -1.88c-0.1,-0.07 -0.23,-0.01 -0.25,0.06l-0.64 2.82c-0.03,0.11 0.04,0.15 0.12,0.11l0.59 -0.29c0.65,0.77 1.83,1.59 3.01,1.98 1.83,0.61 3.1,1.72 3.1,3.63 0,1.91 -2.36,3.99 -5.27,3.99 -2.91,0 -5.27,-1.78 -5.27,-3.99 0,-1.37 0.92,-2.58 2.31,-3.3 0.89,0.56 2.2,2.1 2.18,3.06l-1.15 0.42c-0.09,0.03 -0.11,0.11 0,0.18l2.48 1.73c0.1,0.07 0.22,0.01 0.25,-0.06l1.29 -2.65c0.05,-0.09 -0.03,-0.12 -0.11,-0.1l-1.27 0.26c-0.21,-0.88 -1.13,-2.28 -2.83,-3.21 -1.15,-0.63 -1.99,-1.3 -1.99,-2.86 0,-1.55 1.84,-3.41 4.11,-3.41z"
      />
    </svg>
  );
};

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    children: (
      <Link href="/" className="flex items-center gap-2">
        <div className="size-10 [&_svg]:size-6 flex items-center justify-center border border-gray-400 dark:border-gray-700 rounded-md shadow">
          <Logo />
        </div>
        <span className="text-foreground font-semibold">WMS - Liquid8</span>
      </Link>
    ),
  },
  links: [
    {
      text: "Website",
      url: "https://wms-liquid8.online",
      active: "nested-url",
      icon: <GlobeIcon />,
    },
  ],
};
