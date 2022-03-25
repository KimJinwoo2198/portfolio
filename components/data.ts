import projectCardProps from '../typings/projectCardProps'
import skillCardProps from '../typings/skillCardProps'
import socialLinkProps from '../typings/socialLinkProps'

export const socialLinks: Record<string, socialLinkProps> = {
  github: {
    name: 'Github',
    src: 'https://github.com/chul0721'
  },
  instagram: {
    name: 'Instagram',
    src: 'https://instagram.com/bottle___iron'
  },
  twitter: {
    name: 'Twitter',
    src: 'https://twitter.com/chul0721'
  }
}

export const skills: Record<string, skillCardProps> = {
  html: {
    name: 'HTML',
    src: 'html.png'
  },
  css: {
    name: 'CSS',
    src: 'css.png'
  },
  javascript: {
    name: 'JavaScript',
    src: 'javascript.png'
  },
  typescript: {
    name: 'TypeScript',
    src: 'typescript.png'
  },
  react: {
    name: 'React.js',
    src: 'react.webp'
  },
  next: {
    name: 'Next.js',
    src: 'nextjs.png'
  },
  svelte: {
    name: 'Svelte',
    src: 'svelte.png'
  },
  tailwind: {
    name: 'Tailwindcss',
    src: 'tailwindcss.png'
  },
  framermotion: {
    name: 'Framer Motion',
    src: 'framermotion.webp'
  },
  storybook: {
    name: 'StoryBook',
    src: 'storybook.svg'
  },
  apollo: {
    name: 'Apollo Client',
    src: 'apollo.svg'
  },
  expo: {
    name: 'Expo',
    src: 'expo.webp'
  },
  electron: {
    name: 'Electron',
    src: 'electron.png'
  },
  nest: {
    name: 'Nest.js',
    src: 'nestjs.png'
  },
  graphql: {
    name: 'GraphQL',
    src: 'graphql.png'
  },
  prisma: {
    name: 'Prisma',
    src: 'prisma.png'
  },
  go: {
    name: 'Go',
    src: 'golang.png'
  },
  postgresql: {
    name: 'PostgreSQL',
    src: 'postgresql.png'
  },
  mysql: {
    name: 'MySQL',
    src: 'mysql.png'
  },
  mongodb: {
    name: 'MongoDB',
    src: 'mongodb.webp'
  },
  linux: {
    name: 'Linux',
    src: 'linux.png'
  },
  docker: {
    name: 'Docker',
    src: 'docker.webp'
  }
}

export const projects: Record<string, projectCardProps> = {
  sotongi: {
    name: '소통이',
    desc: '새 학기 친구 걱정은 이제 그만! 학교, 반 등의 단위로 나뉜 게시판에서 친구와 친해지세요!',
    src: 'sotongi.png',
    color: 'black',
    href: 'https://github.com/sotongi'
  },
  asserlang: {
    name: '어쩔랭',
    desc: '유행어 "어쩔티비"에 영감을 받아 만든 난해한 프로그래밍 언어',
    src: 'asserlang.png',
    color: 'white',
    href: 'https://github.com/assertive-lang/asserlang'
  }
}
