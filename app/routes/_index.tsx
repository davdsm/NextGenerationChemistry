import type { MetaFunction } from "@remix-run/node";
import Achievements from "~/components/home/achievements";
import Chemistry from "~/components/home/chemistry";
import Future from "~/components/home/future";
import Harmony from "~/components/home/harmony";
import OnGoing from "~/components/home/ongoing";
import Video from "~/components/home/video";

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
