import React from "react";

function LogoCloud() {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="mx-auto">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12"
                    src="https://i.imgur.com/ZHKKrw6.png object-contain"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12 object-contain"
                    src="https://i.imgur.com/BpaJNlY.png object-contain"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12 object-contain"
                    src="https://i.imgur.com/cYDVyFw.png"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12 object-contain"
                    src="https://i.imgur.com/tynTvaf.png"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12 object-contain"
                    src="https://i.imgur.com/hlZsnGZ.png"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 bg-gray-100 rounded-lg dark:bg-zinc-800">
                  <img
                    className="max-h-12"
                    src="https://i.imgur.com/IYvjjPf.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogoCloud;
