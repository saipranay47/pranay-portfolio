import React from "react";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { SimpleLayout } from "@/components/SimpleLayout";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  BehanceIcon,
} from "@/components/SocialIcons";
import { Button } from "@/components/Button";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none fill-zinc-500 " />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

export default function contact() {
  return (
    <>
      <Head>
        <title>Sai Pranay | Contact</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Get in Touch"
        intro="Interested in discussing a project, collaborating, or simply want to connect? Reach out to me, Sai Pranay, and let's start a conversation. I'm excited to hear from you and explore how we can create something amazing together."
      >
        <div className="w-full justify-between flex ">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/saipranay47"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/pranay.webdev/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/saipranay47"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/saipranay47/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.behance.net/adepusaipranay"
              icon={BehanceIcon}
              className="mt-4"
            >
              Follow on Behance
            </SocialLink>
            <SocialLink
              href="mailto:saipranayadepu07@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              saipranayadepu07@gmail.com
            </SocialLink>
          </ul>
          {/* <Newsletter /> */}
        </div>
      </SimpleLayout>
    </>
  );
}

