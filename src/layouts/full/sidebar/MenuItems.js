import {
  IconAirBalloon,
  IconAperture,
  IconBike,
  IconBrandAdobe,
  IconCopy,
  IconLayoutDashboard,
  IconLockSquare,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
    sub: null,
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
    sub: null,
  },
  {
    navlabel: true,
    subheader: "Projects",
    sub: null,
  },
  {
    id: uniqueId(),
    title: "Opscape",
    icon: IconAperture,
    href: "",
    sub: [
      {
        id: uniqueId(),
        title: "Total hours logged",
        icon: IconTypography,
        href: "/projects/chart/64de1141-d0af-4044-94a4-f1fca800ef19",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "GT",
    icon: IconBrandAdobe,
    href: "",
    sub: [
      {
        id: uniqueId(),
        title: "Number of quotations",
        icon: IconTypography,
        href: "/projects/chart/ed4916d3-d8da-4eb5-9fce-5ce68442c59b",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Ordering System",
    icon: IconAirBalloon,
    href: "",
    sub: [
      {
        id: uniqueId(),
        title: "Number of quotations",
        icon: IconTypography,
        href: "/projects/chart/341c56d1-34b4-4597-ba79-471f1711c692",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Locket",
    icon: IconLockSquare,
    href: "",
    sub: [
      {
        id: uniqueId(),
        title: "Total images shared",
        icon: IconTypography,
        href: "/projects/chart/26494bf5-634f-4c37-a4e0-107550a8098c",
      },
      {
        id: uniqueId(),
        title: "User profile details",
        icon: IconTypography,
        href: "/projects/chart/3e638f0a-87f8-43fa-ac70-5c6908f3f0e1",
      },
      {
        id: uniqueId(),
        title: "Total image in trash",
        icon: IconTypography,
        href: "/projects/chart/b982ac02-5626-409b-b009-1bb5ed9007c9",
      },
      {
        id: uniqueId(),
        title: "Total images shared",
        icon: IconTypography,
        href: "/projects/chart/62d995b4-c7ca-43fe-86d3-346042e73dbd",
      },
      {
        id: uniqueId(),
        title: "Users affiliated",
        icon: IconTypography,
        href: "/projects/chart/c2c56a82-19a2-40e4-98be-4c10735aeacd",
      },
      {
        id: uniqueId(),
        title: "Total User Count",
        icon: IconTypography,
        href: "/projects/chart/9f731d80-4ce4-477f-8bf4-ea3f29928830",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Order my care",
    icon: IconBike,
    href: "",
    sub: [
      {
        id: uniqueId(),
        title: "Appointment count",
        icon: IconTypography,
        href: "/projects/chart/650b1083-0f71-483e-a5b5-0993bdc293ae",
      },
      {
        id: uniqueId(),
        title: "Appointment count/month",
        icon: IconTypography,
        href: "/projects/chart/674d6f29-e96b-4e8a-8999-407a1617bb51",
      },
      {
        id: uniqueId(),
        title: "Care provider rating",
        icon: IconTypography,
        href: "/projects/chart/db968bfb-8411-4102-b83f-a3bedfb982dd",
      },
    ],
  },
];

export default Menuitems;
