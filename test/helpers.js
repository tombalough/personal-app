const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "Tom Balough",
    heading: "ABOUT THIS SITE",
  },
  {
    route: "/about",
    title: "About | Tom Balough",
    heading: "ABOUT ME",
  },
  {
    route: "/projects",
    title: "Projects | Tom Balough",
    heading: "PROJECTS",
  },
  {
    route: "/stats",
    title: "Stats | Tom Balough",
    heading: "STATS",
  },
  {
    route: "/contact",
    title: "Contact | Tom Balough",
    heading: "CONTACT",
  },
];

export { pages, randomString };
