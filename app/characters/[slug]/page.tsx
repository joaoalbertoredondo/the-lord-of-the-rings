import { CharacterFullProfile } from "@/app/interface";
import { client, urlFor } from "@/lib/sanity";
import characters from "@/sanity/schemaTypes/characters";
import Image from "next/image";
import React from "react";

async function getData(slug: string): Promise<CharacterFullProfile> {
  const query = `*[_type == "characters" && slug.current == "${slug}"][0] {
    _id,
    description,
    weapons,
    race,
    name,
    "slug": slug.current,
    "race": race->name,
    "imageUrl": images[0].asset->url
    }`;

  const data = await client.fetch(query);

  return data;
}

async function CharacterProfile({ params }: { params: { slug: string } }) {
  const data: CharacterFullProfile = await getData(params.slug);

  return (
    <div className="">
      <div>
        <Image
          height={500}
          width={500}
          src={urlFor(data.imageUrl).url()}
          alt="Image"
        />{" "}
      </div>
      <div className="text-white">{data.name}</div>
      <div className="text-gray-500">Race: <span className="font-bold text-gray-400">{data.race}</span></div>
      <div className="text-yellow-300">{data.description}</div>
      <div className="text-red-300">{data.weapons}</div>
    </div>
  );
}

export default CharacterProfile;
