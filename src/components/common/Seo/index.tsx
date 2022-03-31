import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import settings from "../../../settings";

const socialTags = ({
    type,
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
}: any) => {
    const metaTags = [
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:site",
            content:
                settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
            name: "twitter:creator",
            content:
                settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:image:src", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "og:title", content: title },
        { name: "og:type", content: type },
        { name: "og:url", content: url },
        { name: "og:image", content: image },
        { name: "og:description", content: description },
        {
            name: "og:site_name",
            content: settings && settings.meta && settings.meta.title,
        },
        {
            name: "og:published_time",
            content: createdAt || new Date().toISOString(),
        },
        {
            name: "og:modified_time",
            content: updatedAt || new Date().toISOString(),
        },
    ];

    return metaTags;
};

const SEO = (props: any) => {
    const { url, title, description, image, schemaType } = props;
    return (
        <Head>
            <title>{title} | App</title>
            <meta name="description" content={description} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />
            {socialTags(props).map(({ name, content }) => {
                return <meta key={name} name={name} content={content} />;
            })}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": schemaType,
                        name: title,
                        about: description,
                        url: url,
                    }),
                }}
            />
        </Head>
    );
};

SEO.defaultProps = {
    url: "/",
    type: "article",
    title: settings && settings.meta && settings.meta.title,
    description: settings && settings.meta && settings.meta.description,
    image:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.graphic,
    openGraphType: "website",
    schemaType: "article"
};

SEO.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    schemaType: PropTypes.string,
    image: PropTypes.string,
    openGraphType: PropTypes.string,

};

export default SEO;