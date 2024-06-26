"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { redirect } from "next/navigation";

function Search() {
  const [searchOpen, setSearchOpen] = useState(false);
  const submitFn = (e: any) => {
    e.preventDefault();
    // window.location.replace = "/SearchResults";
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
          placeholder=" Search"
          className="h-6 w-full rounded-md bg-gray-800 focus:bg-slate-300 focus:text-gray-800 outline-none transition-all ease-in duration-300"
        />
      )}
    </form>
  );
}

export default Search;
