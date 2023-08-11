"use client";

import Script from "next/script";

export function Analytics() {
    if (process.env.NODE_ENV != "production") {
        return <></>;
    }

    return (
        <Script
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code="I8J4sxKqD9FwjClcEN6HGjkakwQx3mJx"
            strategy="afterInteractive"
        />
    );
}
