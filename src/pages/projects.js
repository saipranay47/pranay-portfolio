import Image from "next/image";
import Head from "next/head";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import amazoncloneBanner from "@/images/banners/amazonclone.png";
import ticketBanner from "@/images/banners/ticket.png";
import vtappBanner from "@/images/banners/vtapp.png";
import aatmannBanner from "@/images/banners/aatmann.png";
import webcraftsbanner from "@/images/banners/webcraftsbanner.png";

const projects = [
  {
    name: "Web Crafts",
    description:
      "Web Crafts is a web development community platform aimed at connecting web developers from around the world. This platform allows developers to share their knowledge, collaborate with others, expand their skills, get feedback on their work, and seek inspiration from other developer projects",
    link: {
      href: "https://github.com/saipranay47/webcrafts",
      label: "github.com/saipranay47/webcrafts",
    },
    logo: webcraftsbanner,
  },
  {
    name: "Amazon Clone",
    description:
      "The Amazon Clone project is a sleek e-commerce web app built with React, Next.js, Node.JS, Firebase, Tailwind CSS, and Stripe Payment Checkout. Users can browse products, manage their cart, and securely checkout with Stripe. The frontend utilizes React and Next.js, while Node.JS and Firebase power the backend.",
    link: {
      href: "https://github.com/saipranay47/Amazon-clone",
      label: "github.com/saipranay47/Amazon-clone",
    },
    logo: amazoncloneBanner,
  },
  {
    name: "Aatmann Farm Stay Website",
    description:
      "This project showcases a marketing website for Aatmann Farm Stay in Mumbai. I learned to adapt to the brand style and add a personal touch while highlighting the location, amenities, and offerings. The site displays accommodations, activities, and services, exemplifying my ability to create visually appealing websites that cater to client needs.",
    link: {
      href: "https://aatmann.pages.dev/",
      label: "aatmanndahanu.com",
    },
    logo: aatmannBanner,
  },
  {
    name: "Ticket generator",
    description:
      "This web app generates personalized tickets for a club event using Next.js and GitHub authentication. Attendees log in with their GitHub account to download a shareable digital ticket, streamlining the ticketing process and promoting easy sharing on social media.",
    link: {
      href: "https://github.com/saipranay47/ticket-generator",
      label: "github.com/saipranay47/ticket-generator",
    },
    logo: ticketBanner,
  },
  {
    name: "VTAPP - A Dynamic Web Platform for College Tech Fest",
    description:
      "VTAPP is a user-friendly web platform developed for the technical fest of our college. This platform is designed to utilize React, Tailwind CSS, and Firebase to provide a dynamic and efficient experience to users. The website features an integrated ticketing system that includes QR scanning capabilities to ensure efficient event entry and management.",
    link: {
      href: "https://github.com/VTAPP2022/vtapp",
      label: "github.com/VTAPP2022/vtapp",
    },
    logo: vtappBanner,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
// turn above svg into component

function BehanceIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Sai Pranay | Projects</title>
        <meta
          name="description"
          content="When Code, Creativity & Caffeine Collide: My Web Dev Adventures"
        />
      </Head>
      <SimpleLayout
        title="My Web Dev Adventures"
        intro="Explore my collection of web development projects, showcasing my expertise in creating engaging, functional, and visually appealing web applications. For design projects, please visit my Behance profile. Each project demonstrates my dedication to crafting tailored solutions that meet clients' unique requirements."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                />
            </div> */}
              <div className="relative z-10 flex h-28 w-full items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
