import accessFromAnywhere from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";

const features = [
  {
    id: 1,
    className: "",
    rows: [
      {
        icon: accessFromAnywhere,
        iconAlt: "Access anywhere icon",
        title: "Access your file from anywhere",
        description:
          "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      },
      {
        icon: security,
        iconAlt: "Security icon",
        title: "Security you can trust",
        description:
          "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      },
    ],
  },

  {
    id: 2,
    className: "mt-28",
    rows: [
      {
        icon: collaboration,
        iconAlt: "Collaboration icon",
        title: "Real-time collaboration",
        description:
          "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      },
      {
        icon: anyFile,
        iconAlt: "Any file type icon",
        title: "Store any type of file",
        description:
          "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      },
    ],
  },
];

export default features;
