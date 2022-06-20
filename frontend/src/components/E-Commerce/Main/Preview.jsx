import React from "react";

const Preview = () => {
  return (
    <div className="mt-10">
      <section>
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <div class="flex items-center p-8 bg-[#F0F8FF] rounded">
              <div class="mx-auto text-center lg:text-left">
                <h2 class="text-2xl font-bold">Laptops</h2>

                <p class="mt-4 text-sm text-gray-700 max-w-[45ch]">
                  Latest and trending laptops from top brands. Shop now to get
                  some best deals and offers.
                </p>

                <a
                  href="/collections/watches"
                  class="inline-block px-6 py-3 mt-6 text-sm text-white bg-indigo-600 rounded"
                >
                  View More
                </a>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-3 lg:py-12 ml-3">
              <a href="/product/simple-watch" class="block">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    alt="Acer Nitro 5"
                    class="object-cover rounded w-64 h-48"
                    src="https://m.media-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg"
                  />
                </div>

                <div class="mt-2">
                  <h5 class="font-medium">Acer Nitro 5</h5>

                  <p class="mt-1 text-sm text-gray-700">₹60000</p>
                </div>
              </a>

              <a href="/product/simple-watch" class="block">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    alt="Dell XPS 15"
                    class="object-cover rounded  w-64 h-48"
                    src="https://m.media-amazon.com/images/I/91WgL3IbNIL.jpg"
                  />
                </div>

                <div class="mt-2">
                  <h5 class="font-medium">Dell XPS 15</h5>

                  <p class="mt-1 text-sm text-gray-700">₹65000</p>
                </div>
              </a>

              <a href="/product/simple-watch" class="block">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    alt="LG Gram"
                    class="object-cover rounded  w-64 h-48"
                    src="https://m.media-amazon.com/images/I/71Qy5NSsbnL._AC_SL1500_.jpg"
                  />
                </div>

                <div class="mt-2">
                  <h5 class="font-medium">LG Gram</h5>

                  <p class="mt-1 text-sm text-gray-700">₹75000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
