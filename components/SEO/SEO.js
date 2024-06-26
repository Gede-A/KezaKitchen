import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
    const metaDescription =
        description || process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
    const metaKeywords = keywords || process.env.NEXT_PUBLIC_SITE_KEYWORDS;
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
    const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE;
    const imagePreview = process.env.NEXT_PUBLIC_SITE_IMAGE_PREVIEW_URL
        ? `${siteURL}/${process.env.NEXT_PUBLIC_SITE_IMAGE_PREVIEW_URL}`
        : null;

    const pageTitle = title
        ? `${title} - KezaKitchen`
        : "KezaKitchen - A landing page";

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Twitter */}
            <meta
                name="twitter:card"
                content="summary_large_image"
                key="twcard"
            />
            <meta
                name="twitter:creator"
                content={twitterHandle}
                key="twhandle"
            />

            {/* Open Graph */}
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta
                property="og:description"
                content={metaDescription}
                key="ogdesc"
            />
            {imagePreview && (
                <meta
                    property="og:image"
                    content={imagePreview}
                    key="ogimage"
                />
            )}
            <meta property="og:site_name" content={siteURL} key="ogsitename" />

            {/* Favicons and App Icons */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />

            {/* Title */}
            <title>{pageTitle}</title>

            {/* Theme Color */}
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
};

export default SEO;
