"use client";

import { Button } from "@/components/ui/button";
import { chunks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

interface Tweet {
    imageUrl: string;
    url: string;
}

interface Testimonial {
    title: string;
    authorUrl?: string;
    text: string | React.JSX.Element;
    author: string;
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

function RenderPornDefinition() {
    return (
        <div className="relative font-serif h-auto max-w-full border-solid border-[1px] border-slate-200 rounded-lg shadow-lg shadow-slate-300 p-5 flex flex-col bg-slate-700 text-white">
            <div className="text-3xl">
                <b>P</b>orn
            </div>
            <div className="text-xl mt-5">
                <p>
                    If you are angry at me or think that porn is a bad word. I
                    have bad news for you. Porn is not defined by how you expect
                    it to be defined:
                </p>
                <p className="mt-5 italic">
                    &quot;Porn is denoting written or visual material that
                    emphasizes the sensuous or sensational aspects of a
                    non-sexual subject, appealing to its audience in a manner
                    likened to the titillating effect of pornography.&quot;
                </p>
                <p className="mt-5 text-sm">
                    <Link
                        href="https://doi.org/10.1093/OED/6367306340"
                        target="_blank"
                        className="underline hover:no-underline"
                    >
                        Oxford English Dictionary, Oxford University Press, July
                        2023
                        <span className="absolute inset-0"></span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="relative font-serif h-auto max-w-full border-solid border-[1px] border-slate-200 rounded-lg shadow-lg shadow-slate-300 p-5 flex flex-col text-slate-700">
            <div className="text-xl">
                <div className="text-3xl">
                    <b>L</b>ove
                </div>
                <p className="mt-5">
                    Hi, I am{" "}
                    <Link
                        className="underline hover:no-underline"
                        href="https://twitter.com/DmytroKrasun"
                    >
                        Dmytro Krasun
                    </Link>
                    , the maker behind MRRPorn. If I make you smile for a
                    second, I am happy.
                </p>
                <p className="mt-5">
                    For days and nights, I am building serious, and some call
                    them &quot;boring&quot; businesses. But some days, an artist
                    who is a comedian (?) speaks inside me. Today, I decided to
                    unleash that artist.
                </p>
                <p className="mt-5">
                    And as a result, you see this project. If you like it, share
                    it with your friends or{" "}
                    <Link
                        className="underline hover:no-underline"
                        href="https://www.producthunt.com/posts/mrrporn"
                    >
                        upvote on Product Hunt
                    </Link>
                    .
                </p>
                <p className="mt-5">
                    I don&apos;t plan to make any money from it. I am healing my
                    heart by producing &quot;art&quot;, or &quot;jokes&quot;.
                </p>
                <p className="mt-5">And have a nice day.</p>
            </div>
        </div>
    );
}

export default function Home() {
    const testimonials: Testimonial[] = [
        {
            title: "To inspire",
            text: "I am a simple folk. I don't want to brag or show how cool I am. I just want to inspire others. It also helps to grow a following on Twitter.",
            author: "Anonymous",
        },
        {
            title: "Works like a charm",
            text: "Sharing MRR screenshots has worked great for my business. I shared a screenshot of my first sale, and then it attracted more attention. And I made more sales.",
            author: "Anonymous",
        },
        {
            title: "Cheap engagement trick",
            authorUrl: "https://twitter.com/DmytroKrasun",
            text: "Every time I feel that my engagements on X (Twitter) drop, I post MRR screenshots. It gives me peace of mind and validation that people still care about me.",
            author: "Dmytro Krasun",
        },
        {
            author: "Philipp Keller",
            authorUrl: "https://twitter.com/philkellr",
            title: "Fairy tales",
            text: (
                <>
                    MRR screenshots are like fairy tales:
                    <br />
                    They tell a fascinating story.
                    <br />
                    They are inspirational.
                    <br />
                    But they also leave out important details.
                    <br />
                    They look like an overnight success.
                    <br />
                    But they don&apos;t tell you what the actors needed to go
                    through before.
                </>
            ),
        },
        {
            author: "Dan Mindru",
            authorUrl: "https://twitter.com/d4m1n",
            title: "Beautiful screenshots",
            text: (
                <>
                    Too much MRR and too little engagement? You got played by
                    the algorithm. Even the best do.
                    <br />
                    <br />
                    These don&apos;t work.
                    <br />
                    <br />
                    ❌ beautiful screenshots
                    <br />
                    ❌ gifs
                    <br />
                    ❌ insightful threads about AI that you copy pasted
                    <br />
                    <br />
                    🙍‍♂️ no followers. no $19 course for you. no luck.
                    <br />
                    <br />
                    Times are changing and you got left in the dust. <br />
                    Swap to MRR videos - glorious 10, 20 or 30s videos with
                    [woooosh 💨] - did you see that? Finger licking animations
                    <br />
                    <br />
                    $1000 MRR today will be $2000 MRR tomorrow.
                    <br />
                    Tech bros knocking on your DMs every minute.
                    <br />
                    Followers for days.
                    <br />
                    <br />
                    You&apos;ll either be on mrrporn or have no MRR to brag
                    about before you can say monthly rec… [woooshhhhh 💨]!
                </>
            ),
        },
        {
            title: "Nothing wrong",
            text: "Remember! There is nothing wrong with sharing MRR screenshots.",
            author: "Anonymous",
        },
    ];

    const items = useMemo(() => {
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

        const items = tweets.map((t) => <RenderTweet key={t.url} tweet={t} />);
        items.splice(1, 0, <RenderPornDefinition key="porn-definition" />);
        items.splice(8, 0, <About key="about" />);
        return items;
    }, []);

    const blocks = chunks(chunks(items, 4), 3);

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
                    All these juicy, sweet MRR screenshots in one place. Get
                    inspired now.
                </h2>
            </div>
            <div className="mt-20 flex">
                <div className="mx-auto">
                    <a
                        href="https://www.producthunt.com/posts/mrrporn?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mrrporn"
                        target="_blank"
                    >
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=409288&theme=neutral"
                            alt="MRRPorn - Your&#0032;daily&#0032;safe&#0032;dose&#0032;of&#0032;MRR&#0032;screenshots | Product Hunt"
                            style={{ width: "250px", height: "54px" }}
                            width="250"
                            height="54"
                        />
                    </a>
                </div>
            </div>
            <div className="mt-20 container mx-auto">
                {blocks.map((groups, b) => (
                    <div
                        key={b}
                        className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-5"
                    >
                        {groups.map((items, g) => (
                            <div key={g} className="grid gap-5">
                                {items.map((i) => i)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="my-40">
                <div className="text-6xl font-bold tracking-tighter text-center">
                    Confessions
                </div>
                <div className="mt-20 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((t) => (
                        <div
                            key={t.title}
                            className="relative font-serif h-auto max-w-full border-solid border-[1px] border-slate-200 rounded-lg shadow-lg shadow-slate-300 p-5 flex flex-col bg-slate-700 text-white"
                        >
                            <div className="text-3xl">{t.title}</div>
                            <div className="text-xl mt-2">
                                <p className="mt-5 italic">
                                    &quot;{t.text}&quot;
                                </p>
                                <p className="mt-5 text-sm">
                                    {t.authorUrl ? (
                                        <Link
                                            href={t.authorUrl}
                                            className="underline hover:no-underline"
                                        >
                                            {t.author}
                                        </Link>
                                    ) : (
                                        t.author
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
            <div className="mt-20">
                <div className="text-6xl font-bold tracking-tighter text-center">
                    Now, it is your turn.
                </div>
                <div className="mt-5 text-3xl text-muted-foreground text-center">
                    Boost your marketing.
                </div>
                <div className="mt-20 text-center">
                    <Link
                        href="https://twitter.com/intent/tweet?text=Friends%2C%20I%20want%20to%20share%20with%20you%20my%20MRR%20update%3A%20%0A%0A%3Cpaste%20your%20number%20here%20and%20upload%20a%20screenshot%3E%0A%0A"
                        target="_blank"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 md:px-10 py-5 text-center mr-2 mb-2 md:text-2xl"
                    >
                        Show off your MRR now. It is free.
                    </Link>
                </div>
            </div>
            <div className="my-40 flex px-10">
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
