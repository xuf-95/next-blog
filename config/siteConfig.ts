// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE


// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  },
  {
    name: 'Friends',
    href: '/friends'
  },
  {
    name: 'Changelog',
    href: '/changelog'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  }
]
