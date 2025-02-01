import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  // { name: "Testimonials", link: "#testimonials" },
   { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
 
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a WordPress Web App",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fanmode",
    des: "Fanmode enables remote fans watching games from their homes or mobile phones to actively participate in the games from their locations. Players can experience comprehensive fan support from worldwide audiences in real-time during the game. The services have progressed to enable fans to express support beyond the game and outside the realm of sports, providing new digital tools that bring fans closer to their interests.",
    img: "./Fanmode.png",
    iconLists: ["./Html.png","./Css.png","./Figma.png","./Bootstrap.png"],
    link: "https://www.fanmode.com",
  },
  {
    id: 2,
    title: "MarketSpark",
    des: "MarketSpark leads in offering analog replacement solutions by substituting static and expensive copper telephone lines (POTS) with a managed wireless solution prepared for 5G integration in the enterprise. The MarketSpark Command Center, a cloud-enabled platform, offers comprehensive visibility and absolute control over all wireless services, delivering actionable insights.",
    img: "./MarketSpark.png",
    iconLists: ["./Html.png","./Css.png","MaterialUi.png","./ts.svg","./re.svg"],
    link: "https://www.marketspark.com/product/",
  },
  {
    id: 3,
    title: "Vinayak",
    des: "Vinayak is scaffold service provider company, The site supervisor gives an order, and the manager approves it. After the manager's approval, the storeman processes the order based on stock availability, arranging the driver and vehicle. Once the supervisor receives the material, they perform construction work with it. After completing the construction work, they return the material to the warehouse, where the stock is validated and tracked by the storeman.",
    img: "./Vinayak.png",
    iconLists: ["./Html.png","./Css.png","./Js.png","./ts.svg","./re.svg"],
    link: "https://vinayak.com.sg",
  },
  {
    id: 4,
    title: "Arii(Web App)",
    des: "The Students Academic Performance Tracker (Web Client) is an online tool for monitoring students' academic progress. It provides real-time access to grades, attendance, and assignments. User-friendly interfaces and visual aids like charts make data easy to understand. The tool supports personalized learning by highlighting trends and areas for improvement. It enhances communication among teachers, students, and parents, promoting better academic outcomes.",
    img: "./Arii(web).png",
    iconLists: ["./Html.png","./Css.png","./Js.png","./ts.svg","./re.svg"],
    link: "https://www.arii.in",
  },
  {
    id:5,
    title: "Arii(Mobile App)",
    des: "The Students Academic Performance Tracker (Mobile Client) is a mobile app designed to monitor students' academic progress. It provides real-time access to grades, attendance, and assignments on-the-go. The app features user-friendly interfaces and visual aids like charts for easy data understanding. By highlighting trends and areas needing improvement, it supports personalized learning. This tool enhances communication between teachers, students, and parents, promoting better academic outcomes",
    img: "./Arii(mobile).png",
    iconLists: ["./Html.png","./Css.png","./Js.png","./ts.svg","./re.svg"],
    link: "https://play.google.com/store/apps/details?id=com.paabulumdiscoveries.arii&hl=en",
  },
  {
    id:6,
    title: "Confidential Project",
    des: "Due to confidentiality agreements, I am unable to disclose the name, details or specific requirements of the project",
    img: "./ProductFinder.jpg",
    iconLists: ["./Html.png","./Css.png","./Js.png","./ts.svg","./re.svg"],
    link: "null",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Successfully delivered multiple high-quality projects, resulting in positive client feedback.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Capacitor.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Figma Design Expertise",
    desc: "I have experience in Figma, designing user interfaces and creating prototypes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "WordPress development",
    desc: "Currently building a web application using WordPress.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link:"https://github.com/PradeepKumar111999"
  },
  {
    id: 2,
    img: "./link.svg",
    link:"https://www.linkedin.com/in/pradeep-kumar-904192221"
  },
];
