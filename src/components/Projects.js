import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import amazoncloneBanner from "@/images/banners/amazonclone.png";
import ticketBanner from "@/images/banners/ticket.png";
import vtappBanner from "@/images/banners/vtapp.png";
import aatmannBanner from "@/images/banners/aatmann.png";
import { Button } from "./Button";

const projects = [
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
function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-20">
        Featured Projects
      </h1>
      <ul
        role="list"
        className="felx flex-col space-y-12 sm:space-y-16 lg:space-y-20"
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
      {/* view all button  */}
      <div className="mt-20 flex justify-center">
        <Button
          href="/projects"
          variant="primary"
        >
          View All Projects 
        </Button>
      </div>
    </div>
  );
}

export default Projects;
