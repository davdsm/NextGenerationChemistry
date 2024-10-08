import type { MetaFunction } from "@remix-run/node";
import { lazy } from "react";
import Video from "~/components/home/video";

const Achievements = lazy(() => import("~/components/home/achievements"));
const Chemistry = lazy(() => import("~/components/home/chemistry"));
const Future = lazy(() => import("~/components/home/future"));
const Harmony = lazy(() => import("~/components/home/harmony"));
const OnGoing = lazy(() => import("~/components/home/ongoing"));

export const meta: MetaFunction = () => {
  return [
    { title: "Next Generation Chemistry" },
    {
      name: "description",
      content:
        "iWe are redefining the future of the textile industry through the power of nature. Our mission is to transform the textile sector into a cleaner, more sustainable, and environmentally-friendly industry by replacing traditional chemical products with innovative bio-based alternatives.",
    },
    {
      property: "og:image",
      content: "/images/home.png",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Video />

      <Chemistry />

      <Harmony />

      <OnGoing />

      <Achievements />

      <Future />
    </>
  );
}
