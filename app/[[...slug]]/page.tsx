import { openapi, source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound, permanentRedirect } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { PlusCircle, Trash2, ReceiptText, Drill } from "lucide-react";
import { cn } from "@/lib/utils";

const Page = async (props: { params: Promise<{ slug?: string[] }> }) => {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    permanentRedirect("/front-end");
  }

  const MdxComponent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MdxComponent
          components={{
            ...defaultMdxComponents,
            APIPage: openapi.APIPage,
            BU: (props) => (
              <b>
                <ins>{props.children}</ins>
              </b>
            ),
            ImageZoom: (props) => (
              <div className="rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 p-4 prose-no-margin w-fit">
                <ImageZoom {...(props as any)} />
              </div>
            ),
            pre: ({
              ref: _ref, // eslint-disable-line @typescript-eslint/no-unused-vars
              ...props
            }) => (
              <CodeBlock keepBackground {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
            Card,
            Cards,
            Callout,
            Steps,
            Step,
            PlusCircle: (props) => (
              <PlusCircle
                {...(props as any)}
                className={cn("size-5", props.className)}
              />
            ),
            Trash2: (props) => (
              <Trash2
                {...(props as any)}
                className={cn("size-5", props.className)}
              />
            ),
            ReceiptText: (props) => (
              <ReceiptText
                {...(props as any)}
                className={cn("size-5", props.className)}
              />
            ),
            Drill: (props) => (
              <Drill
                {...(props as any)}
                className={cn("size-5", props.className)}
              />
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
};

export default Page;

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
