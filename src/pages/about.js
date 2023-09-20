import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  BehanceIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/Pranay.jpeg";

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

export default function About() {
  return (
    <>
      <Head>
        <title>Sai Pranay | About</title>
        <meta
          name="description"
          content="Hi, I am Sai Pranay a design-minded front-end developer who loves to create beautiful interfaces and experiences and I build things for the web."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Sai Pranay, I build things for the web.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Hey there 👋</p>
              <p>
                I'm Sai Pranay, a design-minded front-end developer who takes
                pleasure in crafting exquisite interfaces and delivering
                exceptional user experiences. Currently in my final year of
                computer science engineering at Vellore Institute of Technology
                AP campus, I have honed my skills in developing and designing
                websites, spanning from elegant landing pages to cutting-edge
                progressive web applications. My mission is to create scalable
                and efficient applications, always striving for pixel-perfect
                perfection in user interactions.
              </p>
              <p>
                While my journey began with a keen interest in technology, I'm
                now eager to explore its diverse applications and delve deeper
                into the fascinating world of web development. With an
                insatiable thirst for learning new techniques to create seamless
                user experiences through clean, efficient, and scalable code, I
                see my work as an ongoing learning journey. I'm constantly on
                the lookout for opportunities to collaborate with like-minded
                individuals who are as eager to share their knowledge as I am to
                absorb it. Ultimately, my primary goal is to collaboratively
                create something exceptional with those who bring out the best
                in me.
              </p>
              <p>
                In addition to my development skills, I'm also a content creator
                who has built a personal brand through my Instagram page. There,
                I share my journey in web development, valuable developer
                resources, and insights into various tech topics with a thriving
                community of over 100k+ followers. This experience has allowed
                me to connect with numerous individuals, expand my knowledge,
                and broaden my presence in the tech world.
              </p>
              <p>
                As I'm currently in my fourth year of BTech studies, I'm
                actively seeking job opportunities to apply my skills and
                contribute to innovative projects.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
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
          </div>
        </div>
      </Container>
    </>
  );
}
