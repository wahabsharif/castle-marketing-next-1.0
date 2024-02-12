import icon from "@/images/icons/close-1-1.png";
import logo1 from "@/images/caslte-marketing-landscape-white.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
};

const navItems = [
  home,
  // {
  //   id: 2,
  //   name: "About Us",
  //   href: "/about",
  // },
  {
    id: 3,
    name: "Commercial Projects",
    href: "",
    subNavItems: [
      { id: 1, name: "Castle Heights", href: "/castle-heights" },
      {
        id: 2,
        name: "Elanza Mall & Residencia",
        href: "/elanza-mall-and-residencia",
      },
      { id: 3, name: "The Arcadia", href: "#" },
    ],
  },
  {
    id: 4,
    name: "Housing Societies",
    href: "#",
    subNavItems: [
      { id: 1, name: "Parkviewcity Islamabad", href: "#" },
      { id: 2, name: "Silver City", href: "#" },
      { id: 3, name: "Gulberg Islamabad", href: "#" },
      { id: 4, name: "Faisal Town", href: "#" },
      { id: 5, name: "Faisal hills", href: "#" },
      { id: 6, name: "New metro city", href: "#" },
      { id: 7, name: "Avalon city", href: "#" },
      { id: 8, name: "Nova city", href: "#" },
      { id: 9, name: "Blue World City", href: "#" },
    ],
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "https://www.facebook.com/castlemarketingofficial",
  },
  {
    id: 2,
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/castlemarketingofficial/",
  },
  {
    id: 3,
    icon: "fab fa-youtube",
    href: "https://www.youtube.com/@castlemarketing",
  },
  {
    id: 4,
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/company/castle-markring/",
  },
];

const headerData = {
  title: "Castle Marketing",
  title2: "",
  title3: "",
  logo1,
  navItems,
  address:
    "Office # 7,8 Ground floor Elanza Mall and residency Gulberg D Markaz Islamabad.",
  phone: "+92 345 5151765",
  email: "castlemarketing6@gmail.com",
  icon,
  socials,
  text: "Office # 7,8 Ground floor Elanza Mall and residency Gulberg D Markaz Islamabad.",
};

export default headerData;
