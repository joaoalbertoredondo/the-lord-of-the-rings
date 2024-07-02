import { CharacterFullProfile } from "@/app/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex justify-center p-5 py-10">
      <div className="p-5 bg-slate-300/30 rounded-lg flex flex-col md:flex-row items-center">
        <div className="h-[300px] w-[300px] overflow-hidden rounded-md shadow-lg">
          <Image
            height={500}
            width={500}
            src={urlFor(data.imageUrl).url()}
            alt="Image"
          />{" "}
        </div>
        <div className="md:w-[600px] pt-5 md:p-5">
          <div className="flex justify-center font-bold text-3xl font-ring lowercase underline tracking-wide">
            <div>{data.name}</div>
          </div>
          <div className="pt-5">
            <div className="text-justify indent-5">{data.description}</div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="text-gray-900">
              Race:{" "}
              <span className="font-bold text-black">
                <Link href={"/races/hobbits"}>{data.race}</Link>
              </span>
            </div>
            <div className="text-gray-900">
              Weapons:{" "}
              <span className="text-black font-bold">{data.weapons}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterProfile;
