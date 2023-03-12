import Image from "next/image";
import one from "../../../public/one.jpg";
import two from "../../../public/two.jpg";
import three from "../../../public/three.jpg";
import four from "../../../public/four.jpg";
import five from "../../../public/five.jpg";
import Link from "next/link";

export const data = [
  {
    id: 1,
    src: one,
    heading: "Quarter I (Core)",
    text: "Course Description:  We will start the program by learning the fundamental Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. Duration: 13 Weeks",
    link: "/syllabus/quater1",
  },
  {
    id: 2,
    src: two,
    heading: "Quarter II (Core)",
    text: "Course Description: The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).",
    link: "/syllabus/quater2",
  },
  {
    id: 3,
    src: three,
    heading: "Quarter III (Core)",
    text: "Course Description: In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
    link: "/syllabus/quater3",
  },
  {
    id: 4,
    src: four,
    heading: "Quarter IV (Core)",
    text: "Course Description: The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
    link: "/syllabus/quater4",
  },
  {
    id: 5,
    src: five,
    heading: "Quarter IV (Core)",
    text: "Course Description: The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
    link: "/syllabus/quater5",
  },
];
