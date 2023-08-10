/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\blog\\node_modules\\.pnpm\\@vuepress+core@1.9.9\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-2346e570",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2346e570").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-47fc5f6b",
    path: "/handbook/ECMAScript/6.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-47fc5f6b").then(next)
    },
  },
  {
    name: "v-315ebe8b",
    path: "/handbook/ECMAScript/5.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-315ebe8b").then(next)
    },
  },
  {
    name: "v-7537a12b",
    path: "/handbook/ECMAScript/8.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7537a12b").then(next)
    },
  },
  {
    name: "v-5e9a004b",
    path: "/handbook/ECMAScript/7.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5e9a004b").then(next)
    },
  },
  {
    name: "v-6d93a82e",
    path: "/handbook/Electron/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d93a82e").then(next)
    },
  },
  {
    name: "v-549460eb",
    path: "/handbook/Electron/Mac.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-549460eb").then(next)
    },
  },
  {
    name: "v-513b92eb",
    path: "/handbook/Electron/Windows.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-513b92eb").then(next)
    },
  },
  {
    name: "v-1d6cc665",
    path: "/handbook/Git/Common.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1d6cc665").then(next)
    },
  },
  {
    name: "v-716a876b",
    path: "/handbook/JavaScript/eventloop.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-716a876b").then(next)
    },
  },
  {
    name: "v-ac1b0326",
    path: "/handbook/JavaScript/extend.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ac1b0326").then(next)
    },
  },
  {
    name: "v-10f0e129",
    path: "/handbook/Node/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-10f0e129").then(next)
    },
  },
  {
    name: "v-5603a465",
    path: "/handbook/PowerOptimize/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5603a465").then(next)
    },
  },
  {
    name: "v-e1b0248a",
    path: "/handbook/TypeScript/BaseType.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e1b0248a").then(next)
    },
  },
  {
    name: "v-5afbefb6",
    path: "/handbook/React/17.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5afbefb6").then(next)
    },
  },
  {
    name: "v-f8a0bfe6",
    path: "/handbook/Vue/2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f8a0bfe6").then(next)
    },
  },
  {
    name: "v-fd33f0ea",
    path: "/handbook/Vue/3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-fd33f0ea").then(next)
    },
  },
  {
    name: "v-4ecc7345",
    path: "/handbook/Webpack/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ecc7345").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]