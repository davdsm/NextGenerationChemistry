import type { MetaFunction } from "@remix-run/node";
import Chemistry from "~/components/home/chemistry";
import Harmony from "~/components/home/harmony";
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
    </>
  );
}
