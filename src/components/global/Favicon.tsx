const Favicon = () => {
    return (
        <>
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
            <link rel="manifest" href="/site.webmanifest.json" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#e11d48"
            />
            <meta name="msapplication-TileColor" content="#e11d48" />
            <meta name="theme-color" content="#ffffff" />
        </>
    )
}

export default Favicon
