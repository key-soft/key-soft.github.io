export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Key-Software",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
	],
	links: {
		github: "https://github.com/key-soft",
	},
};
