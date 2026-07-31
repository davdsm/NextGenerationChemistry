import type { MetaFunction } from "@remix-run/node";
import { lazy } from "react";
import Video from "~/components/home/video";
import { buildMeta, SITE_DESCRIPTION } from "~/lib/seo";

const Achievements = lazy(() => import("~/components/home/achievements"));
const Chemistry = lazy(() => import("~/components/home/chemistry"));
const Future = lazy(() => import("~/components/home/future"));
const Harmony = lazy(() => import("~/components/home/harmony"));
const OnGoing = lazy(() => import("~/components/home/ongoing"));

export const meta: MetaFunction = () => {
  return buildMeta({
    description: SITE_DESCRIPTION,
    path: "/",
    image: "/images/home.jpg",
  });
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
