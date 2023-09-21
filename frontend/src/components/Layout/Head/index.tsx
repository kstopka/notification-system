import React from "react";
import { Helmet } from "react-helmet-async";

const siteBasic = {
  title: "",
  description: "",
  lang: "",
};

// const seoBasic = {
//   title: "Page",
//   opengraphTitle: "",
//   metaKeywords: "",
//   metaDesc: "",
//   metaRobotsNofollow: "",
//   metaRobotsNoindex: "",
//   opengraphDescription: "",
//   opengraphImage: null,
// };

interface HeadProps {
  seo: Record<string, any>;
  ogType?: string;
  location: Record<string, any>;
}

const Head: React.FC<HeadProps> = ({
  seo = {},
  ogType = "website",
  location,
}) => (
  <Helmet
    htmlAttributes={{
      lang: "pl",
    }}
    title={seo.title}
    meta={[
      {
        name: "title",
        content: seo.title,
      },
      {
        name: "description",
        content: seo.opengraphDescription || siteBasic.description,
      },
      {
        name: "keywords",
        content: seo.focuskw || "",
      },
      {
        property: "og:title",
        content: seo.title || siteBasic.title,
      },
      {
        property: "og:description",
        content: seo.opengraphDescription || siteBasic.description,
      },
      {
        property: "og:image",
        content: seo.opengraphImage ? seo.opengraphImage.sourceUrl : "",
      },
      {
        property: "og:image:alt",
        content: seo.title,
      },
      {
        property: "og:type",
        content: ogType,
      },
      {
        property: "og:url",
        content: location.href,
      },
    ]}
  >
    {/* favicon */}
    <link rel="icon" href="" />

    {/* FONTS */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
