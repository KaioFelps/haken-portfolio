export type Link = {
  href: string
  external: boolean
  label: string
  github: false,
} | {
  href: string
  github: true
};
