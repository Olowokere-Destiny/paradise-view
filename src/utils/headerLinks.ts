interface Props {
  text: string;
  href: string;
}

const links: Props[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Explore",
    href: "/explore",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];
export default links;