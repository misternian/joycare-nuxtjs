<template>
  <div>
    <!-- #topbar -->
    <div class="py-2 bg-slate-900" id="top-bar">
      <div class="container mx-auto">
        <div
          class="text-sm flex justify-end md:justify-between px-2"
          id="top-bar-text"
        >
          <div class="md:flex hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            <div class="ml-1 text-white">jacksonfei@vip.163.com</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <div class="ml-1 text-white">+86 13952746510</div>
          </div>
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div class="ml-1">
              <a href="" class="text-white">CHOOSE LANGUAGE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #header -->
    <header class="bg-no-repeat bg-center bg-cover bg-fixed" id="header">
      <div class="container mx-auto pt-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="~/assets/img/logo-white-h50px-2.png"
              alt="joycare-main-logo"
            />
            <h3 class="text-white font-semibold text-xl">
              扬州洁彩口腔护理用品有限公司
            </h3>
          </div>
          <nav>
            <ul class="flex">
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >首页</a
                >
              </li>
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >公司产品</a
                >
              </li>
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >公司动态</a
                >
              </li>
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >关于我们</a
                >
              </li>
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >售后服务</a
                >
              </li>
              <li class="px-2">
                <a href="" class="text-white font-semibold hover:underline"
                  >联系我们</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="flex flex-col items-center" id="header-promo">
        <h1 class="text-5xl mb-12 text-white">健康从口腔开始，从洁彩结束</h1>
        <div class="max-w-xs block">
          <button
            class="px-4 py-2 rounded text-white font-medium bg-blue-500 border-2 border-blue-500 mr-8 hover:bg-blue-400 hover:border-blue-400"
          >
            了解我们
          </button>
          <button
            class="text-white font-medium border-2 border-white px-4 py-2 rounded hover:bg-blue-400 hover:border-blue-400"
          >
            联系我们
          </button>
        </div>
      </div>
    </header>
    <!-- #main -->
    <main class="">
      <!-- #product -->
      <div
        class="p-8 container mx-auto flex flex-col items-center bg-slate-100 border-0 border-none rounded-3xl shadow-lg mb-24"
        id="company-product"
      >
        <h2 class="text-3xl tracking-widest text-slate-900">公司产品</h2>
        <h4 class="text-slate-400">Company Product</h4>
        <div></div>
        <div class="flex">
          <div
            class="mt-8 bg-no-repeat bg-cover mr-2 bg-center bg-clip-border rounded-3xl border-0 border-none w-2/3"
            id="company-product-main"
          ></div>

          <div class="">
            <div class="grid grid-cols-3 gap-2">
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/043-2.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-blue-500 text-white rounded font-medium hover:bg-blue-400"
                >
                  更多产品
                </button>
              </div>
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/705-1.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-red-500 text-white rounded font-medium hover:bg-red-400"
                >
                  更多产品
                </button>
              </div>
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/043-2.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-lime-500 text-white rounded font-medium hover:bg-lime-400"
                >
                  更多产品
                </button>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/043-2.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-orange-500 text-white rounded font-medium hover:bg-orange-400"
                >
                  更多产品
                </button>
              </div>
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/705-1.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-cyan-500 text-white rounded font-medium hover:bg-cyan-400"
                >
                  更多产品
                </button>
              </div>
              <div class="flex flex-col items-center p-2">
                <div class="p-6">
                  <img
                    src="~/assets/img/043-2.jpg"
                    alt="joycare-product-1"
                    class="mb-2 bg-clip-border rounded-3xl border-0 border-none"
                  />
                </div>

                <h4 class="text-slate-900 text-lg font-medium mb-2">
                  牙膏漱口水
                </h4>
                <p class="text-sm text-slate-400 mb-2">
                  Health begins with oral cavity and ends with choice of JOYCARE
                </p>
                <button
                  class="text-sm px-4 py-1 bg-violet-500 text-white rounded font-medium hover:bg-violet-400"
                >
                  更多产品
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- #promo1 -->
      <div class="container mx-auto flex flex-col items-center">
        <h4 class="text-slate-900 font-semibold mb-4">
          YANGZHOU JOYCARE DENTAL PRODUCTS CO., LTD
        </h4>
        <h3 class="text-slate-900 text-3xl tracking-widest mb-4">
          口腔由洁彩护航，健康与快乐同行
        </h3>
        <h4 class="text-slate-500 mb-4">
          Oral escort by JOYCARE, health and happiness together
        </h4>
        <button
          class="px-4 py-1 rounded text-white font-medium bg-blue-500 border-2 border-blue-500 mr-8 hover:bg-blue-400 hover:border-blue-400 mb-4"
        >
          了解更多
        </button>
        <img src="~/assets/img/1.png" alt="promo1" class="w-1/2 mb-4" />
      </div>

      <!-- #promo2 -->
      <div class="bg-slate-100">
        <div class="container mx-auto py-24 flex items-center justify-center">
          <div class="w-1/3 mr-10">
            <img src="~/assets/img/7.jpg" alt="promo2" />
          </div>
          <div>
            <h3 class="text-slate-900 text-3xl tracking-widest mb-4">
              健康从口腔开始，选择到洁彩结束
            </h3>
            <h4 class="text-slate-500 mb-4">
              Health begins with oral cavity and ends with choice of JOYCARE
            </h4>
            <button
              class="text-sm px-4 py-1 bg-yellow-500 text-white rounded font-medium hover:bg-yellow-400"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>

      <!-- #promo3 -->
      <div class="">
        <div class="container mx-auto py-24 flex items-center justify-center">
          <div class="mr-10">
            <h3 class="text-slate-900 text-3xl tracking-widest mb-4">
              口腔由洁彩护航，健康与快乐同行
            </h3>
            <h4 class="text-slate-500 mb-4">
              Oral escort by JOYCARE, health and happiness together
            </h4>
            <button
              class="text-sm px-4 py-1 bg-yellow-500 text-white rounded font-medium hover:bg-yellow-400"
            >
              了解更多
            </button>
          </div>
          <div class="w-1/3">
            <img src="~/assets/img/6.jpg" alt="promo3" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
