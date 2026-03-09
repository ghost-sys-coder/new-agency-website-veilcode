"use client";
import { DEEP_DIVES } from "@/constants";
import { ServiceDeepDiveCard } from "./ServicesDeepDiveCard";


export function ServiceDeepDives() {
  return (
    <>
      {DEEP_DIVES.map((d, i) => (
        <ServiceDeepDiveCard key={d.id} data={d} flipped={i % 2 !== 0} />
      ))}
    </>
  );
}