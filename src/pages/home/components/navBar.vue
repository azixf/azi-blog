<template>
  <header class="nav-bar flex align-center">
    <img id="logo" src="@/assets/images/logo.png" alt="logo" />
    <div class="nav-bar-title m-l-20 m-r-64">AZI</div>
    <ul class="nav-bar-center flex align-center">
      <li v-for="nav in navList" @click="navJump(nav)">{{ nav.title }}</li>
    </ul>
    <ul class="nav-bar-right flex flex-1 justify-end">
      <li v-for="link in linkList" @click="linkJump(link)">
        <el-tooltip effect="dark" :content="link.title" placement="bottom">
          <svg-icon :name="link.icon"></svg-icon>
        </el-tooltip>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
}
</script>

<script lang="ts" setup>
interface NavItem {
  title: string
  path: string
}
const navList = <NavItem[]>[
  {
    title: '博客',
    path: '',
  },
  {
    title: '音乐',
    path: '',
  },
  {
    title: '网站导航',
    path: '',
  },
  {
    title: 'PLAYGROUND',
    path: '',
  },
  {
    title: 'SPACE',
    path: '',
  },
]

interface LinkItem {
  title: string
  icon: string
  link: string
  type: 'external' | 'inner'
}

const linkList = <LinkItem[]>[
  {
    title: '学习笔记',
    icon: 'book',
    link: 'https://azi-docs.netlify.app/',
    type: 'external',
  },
  {
    title: 'Github',
    icon: 'github',
    link: 'https://github.com/azixf',
    type: 'external',
  },
]

const router = useRouter()

const navJump = (item: NavItem) => {
  router.push(item.path)
}

const linkJump = (item: LinkItem) => {
  if (item.type === 'inner') {
    router.push(item.link)
  } else {
    window.open(item.link, '_blank')
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 100px;
  #logo {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  &-title {
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
  }

  &-center {
    li {
      padding: 8px 0;
      margin: 0 16px;
      color: var(--el-color-primary);
      cursor: pointer;
      &:hover {
        border-bottom: 4px solid var(--el-color-primary);
      }
    }
  }

  &-right {
    li {
      padding: 8px;
      cursor: pointer;
      &:hover {
        filter: drop-shadow(0px 4px 10px var(--el-color-primary));
      }
    }
  }
}
</style>
