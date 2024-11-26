import React, { useState } from "react";
import { PlusIcon } from "../common/Icon";

const SearchData = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <>
      <div className="flex items-center flex-wrap gap-4 justify-end">
        <input
          type="text"
          placeholder="Search"
          className="rounded-[8px] border-[#152B4D] p-4 border max-w-[250px] w-full h-[48px] outline-none"
          value={query}
          onChange={handleInputChange}
        />

        <button
          onClick={handleSearch}
          className=" text-[18px] font-normal flex items-center gap-1.5 px-4 py-2 rounded-[8px] leading-[120%] font-poppins text-white bg-[#232065]"
        >
          <PlusIcon /> Add Member
        </button>
      </div>
    </>
  );
};

export default SearchData;
