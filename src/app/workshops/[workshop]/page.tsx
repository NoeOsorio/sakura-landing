"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const workshops: { [key: string]: JSX.Element } = {
  "git-y-github": <div data-tf-live="01J0SFAZA11BHM0QGVWEXS9Z29"></div>,
  "programacion-basica": <div data-tf-live="01J0SHJGFV16SE2M40HH8Z2Y7E"></div>,
};

export default function WorkshopsPage({
  params,
}: {
  params: { workshop: string };
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log("Client");
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    setIsClient(true);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { workshop } = params;
  if (!workshop || !workshops[workshop.toString()]) {
    return redirect("/404");
  }
  console.log(workshops[workshop.toString()]);
  return <div>{isClient && workshops[workshop.toString()]}</div>;
}
