/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\elvis\\node_modules\\.pnpm\\@vuepress+core@1.9.9\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-8c701c94",
    path: "/handbook/ECMAScript/7.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8c701c94").then(next)
    },
  },
  {
    name: "v-632698b6",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-632698b6").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b9ab5e54",
    path: "/handbook/ECMAScript/6.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b9ab5e54").then(next)
    },
  },
  {
    name: "v-10ad6e94",
    path: "/handbook/Electron/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-10ad6e94").then(next)
    },
  },
  {
    name: "v-a07b5b54",
    path: "/handbook/Electron/Mac.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a07b5b54").then(next)
    },
  },
  {
    name: "v-d4ebb560",
    path: "/handbook/Git/Common.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d4ebb560").then(next)
    },
  },
  {
    name: "v-d6fa2d54",
    path: "/handbook/Electron/Windows.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d6fa2d54").then(next)
    },
  },
  {
    name: "v-5f93cd50",
    path: "/handbook/PowerOptimize/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5f93cd50").then(next)
    },
  },
  {
    name: "v-17619490",
    path: "/handbook/React/17.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-17619490").then(next)
    },
  },
  {
    name: "v-5f34dad4",
    path: "/handbook/ECMAScript/8.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5f34dad4").then(next)
    },
  },
  {
    name: "v-c7c20258",
    path: "/handbook/Node/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c7c20258").then(next)
    },
  },
  {
    name: "v-755187e6",
    path: "/handbook/TypeScript/BaseType.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-755187e6").then(next)
    },
  },
  {
    name: "v-16560036",
    path: "/handbook/Vue/3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-16560036").then(next)
    },
  },
  {
    name: "v-ac0b36a0",
    path: "/handbook/Webpack/Base.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ac0b36a0").then(next)
    },
  },
  {
    name: "v-189f98b8",
    path: "/handbook/Vue/2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-189f98b8").then(next)
    },
  },
  {
    name: "v-e6e6a014",
    path: "/handbook/ECMAScript/5.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e6e6a014").then(next)
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