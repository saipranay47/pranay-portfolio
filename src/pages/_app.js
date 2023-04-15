import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useRef } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    </div>
  );
}

// export default function App({ Component, pageProps }) {

//   return (
//     <>
//       <div className="fixed inset-0 flex justify-center sm:px-8">
//         <div className="flex w-full max-w-7xl lg:px-8">
//           <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
//         </div>
//       </div>
//       <div className="relative">
//         <Header />
//         <main>
//           <Component {...pageProps} />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }