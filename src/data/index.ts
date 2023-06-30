import Image1 from "../images/Animation1.png";
import Image2 from "../images/Animation2.png";
import Image3 from "../images/Animation3.png";
import { Services } from "../types";
import Image4 from "../images/logo4.png";
import Image5 from "../images/logo5.png";
import Image6 from "../images/logo6.png";
import { Profess } from "../types";
export const servicesData: Services[] = [
  {
    id: 1,
    title:
      "Non parturient amet, feugiat tellus sagittis, scelerisque egetnulla turpis.",
    name: "Beauty consultation",
    image: Image1,
  },
  {
    id: 2,
    title:
      "Non parturient amet, feugiat tellus sagittis, scelerisque egetnulla turpis.",
    name: "Skin treatments",
    image: Image2,
  },
  {
    id: 3,
    title:
      "Non parturient amet, feugiat tellus sagittis, scelerisque egetnulla turpis.",
    name: "Beauty product",
    image: Image3,
  },
];

export const professData: Profess[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Surgeon",
    image: Image4,
    username: "Briyan Nevalli",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Dermatologist",
    image: Image5,
    username: "Bella sebastian",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Stylist expert",
    image: Image6,
    username: "Lilly Adams",
  },
];
