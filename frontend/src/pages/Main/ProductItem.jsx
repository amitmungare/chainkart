import React from "react";

const ProductItem = () => {
  const user = false;
  return (
    <div
      class="relative max-w-screen-xl px-2 py-8 mx-auto"
      style={{ paddingBottom: "200px" }}
    >
      <div style={{ paddingTop: "60px" }}>
        <h1 class="text-2xl font-bold lg:text-3xl">
          Vector X TBD-Stealth-5 Football, Adult Size 5 (White/Red)t
        </h1>

        <p class="mt-1 text-sm text-gray-500">SKU: #012345</p>
      </div>

      <div class="grid gap-8 lg:items-start lg:grid-cols-4">
        <div class="lg:col-span-3">
          <div class="relative mt-4">
            <img
              alt=""
              src="https://m.media-amazon.com/images/I/61UyC7FVQKL._SL1100_.jpg"
              class="w-full rounded-xl h-72 lg:h-[540px] object-cover"
            />

            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
              <span class="text-xs ml-1.5">Hover to zoom</span>
            </div>
          </div>
        </div>

        <div class="lg:top-0 lg:sticky">
          <form class="space-y-4 lg:pt-8">
            <div>
              <p class="text-xl font-bold">Price: ₹1999</p>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-blue-700 rounded"
            >
              Add to cart
            </button>

            <button
              type="button"
              class="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
            >
              Notify when on sale
            </button>
          </form>
        </div>

        <div class="lg:col-span-3">
          <div class="prose max-w-none">
            <p>
              A part of Soccer International Pvt ltd , a renowned sports good
              manufacturer with a reputation par excellence which has been
              exporting to different parts of the world, we entered India in
              1999 under the brand name Vector X.2
            </p>

            <p>
              We are an official partner at Chainkart in the pursuit of tackling
              counterfeits!
            </p>

            <h3>Features</h3>

            <ul>
              <li>evoPOWER KW SNR 1 bat</li>
              <li>BStyle: 053360_27</li>
              <li>Colour: Green Glimmer-Puma Black</li>
              <li>Made from recycled materials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
