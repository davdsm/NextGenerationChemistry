import type { MetaFunction } from "@remix-run/node";
import { lazy } from "react";

const Achievements = lazy(() => import('~/components/home/achievements'));
const Chemistry = lazy(() => import('~/components/home/chemistry'));
const Future = lazy(() => import('~/components/home/future'));
const Harmony = lazy(() => import('~/components/home/harmony'));
const OnGoing = lazy(() => import('~/components/home/ongoing'));
const Video = lazy(() => import('~/components/home/video'));

export const meta: MetaFunction = () => {
  return [
    { title: "Next Generation Chemistry" },
    { name: "description", content: "Welcome to Next Generation Chemistry!" },
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
