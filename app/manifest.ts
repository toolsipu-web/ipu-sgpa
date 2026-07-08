import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IPU SGPA Calculator",
    short_name: "IPU SGPA",
    description:
      "Calculate your GGSIPU semester SGPA instantly with the latest IPU grading pattern.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0a1a",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
