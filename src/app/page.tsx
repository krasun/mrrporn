"use client";

import { chunks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Tweet {
    imageUrl: string;
    url: string;
}

function RenderTweet({ tweet: { imageUrl, url } }: { tweet: Tweet }) {
    return (
        <div className="relative h-auto max-w-full border-solid border-[1px] border-slate-200 rounded-lg shadow-lg shadow-slate-300 p-2 flex flex-col">
            <Image
                src={imageUrl}
                alt="It is an image of a tweet with an MRR screenshot."
                width={400}
                height={800}
                objectFit="contain"
            />
            <Link href={url} target="_blank">
                <span className="absolute inset-0"></span>
            </Link>
        </div>
    );
}

export default function Home() {
    const tweets: Tweet[] = [
        {
            imageUrl: "/images/tweets/tweet-1689599899187212288.jpg",
            url: "https://twitter.com/philkellr/status/1689599899187212288",
        },
        {
            imageUrl: "/images/tweets/tweet-1685341447590129664.jpg",
            url: "https://twitter.com/MrNick_Buzz/status/1685341447590129664",
        },
        {
            imageUrl: "/images/tweets/tweet-1688598045938663428.jpg",
            url: "https://twitter.com/NafetsWirth/status/1688598045938663428",
        },
        {
            imageUrl: "/images/tweets/tweet-1689464320965619712.jpg",
            url: "https://twitter.com/levelsio/status/1689464320965619712",
        },
        {
            imageUrl: "/images/tweets/tweet-1686401103397519361.jpg",
            url: "https://twitter.com/helloitsolly/status/1686401103397519361",
        },
        {
            imageUrl: "/images/tweets/tweet-1686000256851312640.jpg",
            url: "https://twitter.com/marc_louvion/status/1686000256851312640",
        },
        {
            imageUrl: "/images/tweets/tweet-1689417504265834496.jpg",
            url: "https://twitter.com/Timb03/status/1689417504265834496",
        },
        {
            imageUrl: "/images/tweets/tweet-1686716053659750400.jpg",
            url: "https://twitter.com/gouthamjay8/status/1686716053659750400",
        },
        {
            imageUrl: "/images/tweets/tweet-1688194276792938496.jpg",
            url: "https://twitter.com/ashleyrudland/status/1688194276792938496",
        },
    ];

    const items = tweets.map((t) => <RenderTweet tweet={t} />);
    const groups = chunks(items, 3);

    return (
        <main>
            <div className="flex flex-col mt-20">
                <h1 className="text-6xl font-bold tracking-tighter text-center">
                    Your daily safe dose of{" "}
                    <span className="bg-clip-text bg-gradient-to-r text-transparent from-green-400 to-blue-600">
                        MRR
                    </span>{" "}
                    screenshots.
                </h1>
                <h2 className="mx-auto text-3xl text-muted-foreground mt-5 text-center">
                    All these juicy sweet MRR screenshots in one place. Get
                    inspired now.
                </h2>
            </div>
            <div className="mt-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {groups.map((items) => (
                    <div className="grid gap-5">{items.map((i) => i)}</div>
                ))}
            </div>
            <div className="my-20 flex px-20">
                <div className="mx-auto">
                    The project is made by{" "}
                    <Link
                        href="https://twitter.com/DmytroKrasun"
                        className="text-blue-500 underline hover:no-underline"
                        target="_blank"
                    >
                        Dmytro Krasun
                    </Link>{" "}
                    with love, fun, laugh, and to make your smile. The code is{" "}
                    <Link
                        href="https://github.com/krasun/mrrporn"
                        className="text-blue-500 underline hover:no-underline"
                    >
                        open-sourced
                    </Link>
                    .
                </div>
            </div>
        </main>
    );
}
