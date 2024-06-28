"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const submitFn = (e: any) => {
    console.log("click");
    e.preventDefault();
    router.push(`/search-results/${searchValue}`);
  };

  return (
    <form onSubmit={submitFn} className="flex items-start space-x-3">
      {searchOpen === false && (
        <MagnifyingGlassIcon
          onClick={() => setSearchOpen(true)}
          className="h-6 w-6 text-gray-300 hover:text-gray-600 duration-300 md:hidden"
        />
      )}

      {searchOpen && (
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          className="pl-2 h-6 w-full rounded-md bg-gray-800 focus:bg-slate-300 focus:text-gray-800 outline-none transition-all ease-in duration-300"
        />
      )}
    </form>
  );
}

export default Search;
