<template>
  <div>
    <!-- #topbar -->
    <div class="bg-slate-900" id="top-bar">
      <div class="container mx-auto relative">
        <div
          class="flex justify-end px-2 text-sm md:justify-between items-center"
          id="top-bar-text"
        >
          <div class="hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
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
              class="w-5 h-5 ml-1 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <div class="ml-1 text-white">+86 13952746510</div>
          </div>
          <div
            class="flex p-2"
            v-bind:class="{ 'bg-slate-800': choose_language }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
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
              <a href="#" class="text-white" @click="chooseLanguage"
                >CHOOSE LANGUAGE</a
              >
            </div>
          </div>
        </div>
        <div class="absolute right-2" v-if="choose_language">
          <div class="overflow-hidden z-10">
            <div class="relative grid gap-4 bg-slate-800 p-4">
              <a href="#" class="text-white">简体中文</a>
              <a href="#" class="text-white">English</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #header -->
    <header class="bg-fixed bg-center bg-no-repeat bg-cover" id="header">
      <div class="container pt-6 mx-auto">
        <div class="flex items-center justify-between px-2">
          <div class="flex items-center flex-col md:flex-row">
            <img
              src="https://assets.yzjoycare.com/img/logo-2-h70.webp"
              alt="joycare-main-logo"
            />
            <h3 class="md:text-xl font-semibold text-white">
              扬州洁彩口腔护理用品有限公司
            </h3>
          </div>
          <nav class="">
            <ul class="hidden lg:flex">
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >首页</a
                >
              </li>
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >公司产品</a
                >
              </li>
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >公司动态</a
                >
              </li>
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >关于我们</a
                >
              </li>
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >售后服务</a
                >
              </li>
              <li class="px-2">
                <a href="" class="font-semibold text-white hover:underline"
                  >联系我们</a
                >
              </li>
            </ul>
          </nav>
          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center" id="header-promo">
        <h1 class="mb-12 text-3xl md:text-5xl text-white">
          健康从口腔开始，从洁彩结束
        </h1>
        <div class="block max-w-xs">
          <button
            class="px-4 py-2 mr-8 font-medium text-white bg-blue-500 border-2 border-blue-500 rounded hover:bg-blue-400 hover:border-blue-400"
          >
            了解我们
          </button>
          <button
            class="px-4 py-2 font-medium text-white border-2 border-white rounded hover:bg-blue-400 hover:border-blue-400"
          >
            联系我们
          </button>
        </div>
      </div>
    </header>
    <!-- #main -->
    <main class="">
      <!-- #product -->
      <div class="px-2">
        <div
          class="container flex flex-col items-center p-8 mx-auto mb-24 border-0 border-none shadow-lg bg-slate-100 rounded-3xl"
          id="company-product"
        >
          <h2 class="text-3xl tracking-widest text-slate-900">公司产品</h2>
          <h4 class="text-slate-400">Company Product</h4>
          <div></div>
          <div class="flex">
            <div
              class="w-2/3 mt-8 mr-2 bg-center bg-no-repeat bg-cover border-0 border-none bg-clip-border rounded-3xl"
              id="company-product-main"
            ></div>

            <div class="">
              <div class="grid grid-cols-3 gap-2">
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/043-2.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-400"
                  >
                    更多产品
                  </button>
                </div>
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/705-1.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-400"
                  >
                    更多产品
                  </button>
                </div>
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/043-2.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white rounded bg-lime-500 hover:bg-lime-400"
                  >
                    更多产品
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/043-2.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-400"
                  >
                    更多产品
                  </button>
                </div>
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/705-1.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white rounded bg-cyan-500 hover:bg-cyan-400"
                  >
                    更多产品
                  </button>
                </div>
                <div class="flex flex-col items-center p-2">
                  <div class="p-6">
                    <img
                      src="https://assets.yzjoycare.com/img/043-2.webp"
                      alt="joycare-product-1"
                      class="mb-2 border-0 border-none bg-clip-border rounded-3xl"
                    />
                  </div>

                  <h4 class="mb-2 text-lg font-medium text-slate-900">
                    牙膏漱口水
                  </h4>
                  <p class="mb-2 text-sm text-slate-400">
                    Health begins with oral cavity and ends with choice of
                    JOYCARE
                  </p>
                  <button
                    class="px-4 py-1 text-sm font-medium text-white rounded bg-violet-500 hover:bg-violet-400"
                  >
                    更多产品
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- #promo1 -->
      <div class="container flex flex-col items-center px-2 mx-auto">
        <h4 class="mb-4 font-semibold text-slate-900">
          YANGZHOU JOYCARE DENTAL PRODUCTS CO., LTD
        </h4>
        <h3 class="mb-4 text-3xl tracking-widest text-slate-900">
          口腔由洁彩护航，健康与快乐同行
        </h3>
        <h4 class="mb-4 text-slate-500">
          Oral escort by JOYCARE, health and happiness together
        </h4>
        <button
          class="px-4 py-1 mr-8 font-medium text-white bg-blue-500 border-2 border-blue-500 rounded mb-14 hover:bg-blue-400 hover:border-blue-400"
        >
          了解更多
        </button>
        <img
          src="https://assets.yzjoycare.com/img/1.webp"
          alt="promo1"
          class="mb-4"
        />
      </div>

      <!-- #promo2 -->
      <div class="bg-slate-100">
        <div
          class="container flex items-center justify-center px-2 py-24 mx-auto"
        >
          <div class="w-1/3 mr-10" data-aos="fade-right">
            <img src="https://assets.yzjoycare.com/img/7.webp" alt="promo2" />
          </div>
          <div>
            <h3 class="mb-4 text-3xl tracking-widest text-slate-900">
              健康从口腔开始，选择到洁彩结束
            </h3>
            <h4 class="mb-4 text-slate-500">
              Health begins with oral cavity and ends with choice of JOYCARE
            </h4>
            <button
              class="px-4 py-1 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-400"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>

      <!-- #promo3 -->
      <div class="">
        <div
          class="container flex items-center justify-center px-2 py-24 mx-auto"
        >
          <div class="mr-10">
            <h3 class="mb-4 text-3xl tracking-widest text-slate-900">
              口腔由洁彩护航，健康与快乐同行
            </h3>
            <h4 class="mb-4 text-slate-500">
              Oral escort by JOYCARE, health and happiness together
            </h4>
            <button
              class="px-4 py-1 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-400"
            >
              了解更多
            </button>
          </div>
          <div class="w-1/3" data-aos="fade-left">
            <img src="https://assets.yzjoycare.com/img/6.webp" alt="promo3" />
          </div>
        </div>
      </div>

      <!-- #promo4 -->
      <div class="grid grid-cols-3 h-96 bg-slate-50 mb-14">
        <div class="bg-center bg-cover" style="" id="promo4-1"></div>
        <div class="bg-center bg-cover" style="" id="promo4-2"></div>
        <div class="bg-center bg-cover" style="" id="promo4-3"></div>
      </div>

      <!-- #about-us -->
      <div class="mb-14">
        <div class="container flex flex-col items-center px-2 mx-auto">
          <h2 class="text-3xl tracking-widest text-slate-900">关于我们</h2>
          <h4 class="mb-14 text-slate-400">About Our Company</h4>
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 mb-7 md:mb-0">
              <p class="mb-2 text-slate-900">
                Yangzhou Joycare Dental Products Co.,
                Ltd位于美丽的江苏扬州，一个以生产各种牙刷而闻名的城市。
                我们的主要产品包括牙刷，舌头清洁，牙线，牙线牙签，牙科镜子，牙蜡，和牙科用套装。
              </p>
              <p class="mb-2 text-slate-900">
                Joycare专注于口腔护理产品的研发，为全人类的健康服务。我们拥有专业的团队来管理生产线，控制整体质量，拥有德国、韩国、台湾等先进的设备和技术，我们的牙刷和牙线出口到50多个国家和地区，拥有自己的标志
                “Joycare”，并提供OEM服务。
              </p>
              <p class="mb-2 text-slate-900">
                公司已通过ISO
                9001:2008国际质量管理体系认证、BSCI社会责任审核和FDA认证。
              </p>
              <p class="mb-2 text-slate-900">
                Joycare
                Dental高品质和有价格竞争力的产品，在为您服务的同时，将“诚信、创新、质量和效率”置于高位。欢迎产品代理和贸易公司与我们联系，相信您能与我们建立长久而优秀的业务合作！
              </p>
            </div>
            <div class="mx-auto">
              <img
                src="~/assets/img/video-placeholder-w360-h203.jpg"
                alt="video-placeholder-w360-h203"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- #promo5 -->
      <div
        class="bg-center bg-no-repeat bg-cover bg-slate-50 py-14 mb-14"
        id="promo5"
        style="background-image: url(https://assets.yzjoycare.com/img/15.webp)"
      >
        <div class="container flex justify-between px-2 mx-auto">
          <div class="text-4xl text-white">
            <span class="font-semibold">Join us.</span>It will only take a
            minute.
          </div>
          <button
            class="px-4 py-2 font-medium text-white border-2 border-white rounded hover:bg-blue-400 hover:border-blue-400"
          >
            联系我们
          </button>
        </div>
      </div>

      <!-- #news -->
      <div class="">
        <div class="container flex flex-col items-center mx-auto">
          <h2 class="text-3xl tracking-widest text-slate-900">企业动态</h2>
          <h4 class="mb-14 text-slate-400">Company News</h4>
          <div class="flex flex-col px-2 mb-14">
            <div
              class="flex flex-col pb-6 mb-6 border-b border-slate-100 lg:flex-row"
            >
              <div class="flex-none">
                <span class="text-xl font-semibold text-blue-500"
                  >2022-06-23</span
                >
              </div>
              <div class="flex-1 lg:px-24">
                <a
                  href=""
                  class="text-xl font-semibold text-blue-500 hover:underline"
                  >测试文章：唐李白《赠汪伦》</a
                >
                <p class="font-light text-slate-500">
                  此诗作于唐玄宗天宝十三载（754年）或天宝十四载（755年），当时李白自秋浦往泾县（今属安徽）漫游。宋本《李太白文集》题下注：“白游泾县桃花潭，村人汪伦常酝美酒以待白。伦之裔孙至今宝其诗。”
                </p>
              </div>
              <div class="flex-initial w-64">
                <img src="~/assets/img/16.jpg" alt="article-placeholder" />
              </div>
            </div>
            <div
              class="flex flex-col pb-6 mb-6 border-b border-slate-100 lg:flex-row"
            >
              <div class="flex-none">
                <span class="text-xl font-semibold text-blue-500"
                  >2022-06-23</span
                >
              </div>
              <div class="flex-1 lg:px-24">
                <a
                  href=""
                  class="text-xl font-semibold text-blue-500 hover:underline"
                  >测试文章：唐李白《赠汪伦》</a
                >
                <p class="font-light text-slate-500">
                  此诗作于唐玄宗天宝十三载（754年）或天宝十四载（755年），当时李白自秋浦往泾县（今属安徽）漫游。宋本《李太白文集》题下注：“白游泾县桃花潭，村人汪伦常酝美酒以待白。伦之裔孙至今宝其诗。”
                </p>
              </div>
              <div class="flex-initial w-64">
                <img src="~/assets/img/16.jpg" alt="article-placeholder" />
              </div>
            </div>
            <div
              class="flex flex-col pb-6 mb-6 border-b border-slate-100 lg:flex-row"
            >
              <div class="flex-none">
                <span class="text-xl font-semibold text-blue-500"
                  >2022-06-23</span
                >
              </div>
              <div class="flex-1 lg:px-24">
                <a
                  href=""
                  class="text-xl font-semibold text-blue-500 hover:underline"
                  >测试文章：唐李白《赠汪伦》</a
                >
                <p class="font-light text-slate-500">
                  此诗作于唐玄宗天宝十三载（754年）或天宝十四载（755年），当时李白自秋浦往泾县（今属安徽）漫游。宋本《李太白文集》题下注：“白游泾县桃花潭，村人汪伦常酝美酒以待白。伦之裔孙至今宝其诗。”
                </p>
              </div>
              <div class="flex-initial w-64">
                <img src="~/assets/img/16.jpg" alt="article-placeholder" />
              </div>
            </div>
          </div>
          <button
            class="px-4 py-1 font-medium text-white bg-blue-500 border-2 border-blue-500 rounded mb-14 hover:bg-blue-400 hover:border-blue-400"
          >
            更多动态
          </button>
        </div>
      </div>

      <!-- #footer -->
      <div
        class="pt-32 pb-64 bg-center bg-no-repeat bg-cover bg-slate-50"
        id="foot"
      >
        <div
          class="container flex flex-col items-center justify-between px-2 mx-auto lg:flex-row"
        >
          <div class="mb-8 lg:mb-0">
            <img
              src="https://assets.yzjoycare.com/img/logo-1.webp"
              alt="color-logo"
              class="mb-8 w-96"
            />
            <div class="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 text-white w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl font-semibold tracking-wider text-white"
                >江苏省扬州市维扬路283号</span
              >
            </div>
            <div class="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 text-white w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl font-semibold tracking-wider text-white"
                >+86 13952746510</span
              >
            </div>
            <div class="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 text-white w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="text-xl font-semibold tracking-wider text-white"
                >(0514)87870515</span
              >
            </div>
            <div class="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 text-white w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl font-semibold tracking-wider text-white"
                >jacksonfei@vip.163.com</span
              >
            </div>
            <div class="flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 text-white w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl font-semibold tracking-wider text-white"
                >Skype: jackson_fei</span
              >
            </div>
          </div>
          <div class="w-3/4 p-8 bg-white rounded lg:w-1/3">
            <div class="mb-4">
              <label
                for="customer-name"
                class="block text-sm font-medium text-slate-700"
                >称谓</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="customer-name"
                  id="customer-name"
                  class="block w-full py-2 pr-12 rounded-md border-slate-100 focus:ring-blue-500 focus:border-blue-500 pl-7 sm:text-sm"
                  placeholder="如：张先生"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                for="customer-email"
                class="block text-sm font-medium text-slate-700"
                >邮箱</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="customer-email"
                  id="customer-email"
                  class="block w-full py-2 pr-12 rounded-md border-slate-100 focus:ring-blue-500 focus:border-blue-500 pl-7 sm:text-sm"
                  placeholder="如：zhangsan@mail.com"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                for="customer-phone"
                class="block text-sm font-medium text-slate-700"
                >联系电话</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="customer-phone"
                  id="customer-phone"
                  class="block w-full py-2 pr-12 rounded-md border-slate-100 focus:ring-blue-500 focus:border-blue-500 pl-7 sm:text-sm"
                  placeholder="如：18600001111"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                for="customer-message"
                class="block text-sm font-medium text-slate-700"
                >信息内容</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <textarea
                  id="customer-message"
                  name="customer-message"
                  rows="3"
                  class="block w-full py-2 pr-12 mt-1 border border-gray-300 rounded-md shadow-sm pl-7 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="如：和我们打个招呼吧~"
                ></textarea>
              </div>
            </div>
            <button
              class="px-4 py-1 font-medium text-white bg-blue-500 border-2 border-blue-500 rounded mb-14 hover:bg-blue-400 hover:border-blue-400"
            >
              提 交
            </button>
          </div>
        </div>
      </div>
    </main>
    <!-- #bottom -->
    <footer class="py-6 bg-slate-900">
      <div class="container mx-auto">
        <p class="text-center text-white">
          Copyright © 2022 扬州洁彩口腔护理用品有限公司.
          <a href="http://beian.miit.gov.cn/" class="hover:underline"
            >苏ICP备2022024528号-1</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  name: "IndexPage",
  mixins: [aosMixin],
  data() {
    return {
      choose_language: false,
    };
  },
  methods: {
    chooseLanguage() {
      this.choose_language = !this.choose_language;
    },
  },
};
</script>
