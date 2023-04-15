import Head from "next/head";

import { SimpleLayout } from "@/components/SimpleLayout";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed to Vincent Villafuerte</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <div className="felx min-h-[45vh] justify-center items-center">
        <SimpleLayout
        className= "m-auto"
          title="Thanks for subscribing."
          intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
        />
      </div>
    </>
  );
}
