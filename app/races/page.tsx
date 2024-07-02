import { client, urlFor } from "@/lib/sanity";
import races from "@/sanity/schemaTypes/races";
import Link from "next/link";
import React from "react";
import { RacesPage } from "../interface";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "races"] {
    _id,
    name,
    image,
    "slug": slug.current,
    "imageUrl": image[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

async function Races() {
  const data: RacesPage[] = await getData();

  console.log(data);

  return (
    <div className="p-6">
      <div className="">
        <h1 className="text-4xl font-ring text-slate-200 tracking-wide">
          races
        </h1>
      </div>
      {data.map((races) => (
        <div key={races._id} className="mt-5">
          <div>
            {/* <Image
              height={300}
              width={300}
              src={races.imageUrl}
              alt="Race Image"
            /> */}
            <Link
              href={`/races/${races.slug}`}
              className="mx-2 font-bold font-middle text-xl hover:text-slate-700"
            >
              {races.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Races;
