import React, { useState, useEffect } from "react";
import AllTeamList from "./AllTeamList";
import { TeamData } from "../common/Helper";
import SearchData from "./SearchData";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { deleteTeamMember, getTeamDataList } from "@/services/Url.service";

const TeamList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(TeamData);
  const [teams, setTeams] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getTeamData(token);
    } else {
      console.log("Token Not Found. Unable to fetch data");
      return toast.error("Unable to fetch data");
    }
  }, []);

  const getTeamData = async (token) => {
    const response = await axios.get(getTeamDataList, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.data.success) {
      setTeams(response.data.team);
    } else {
      console.log(response.data.error);
      return toast.error(response.data.error);
    }
  };

  const handleDeleteTeamMember = async (teamMemberId) => {
    const token = Cookies.get("token");
    const response = await axios.delete(`${deleteTeamMember}${teamMemberId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.data.success) {
      const newTeams = teams.filter((team) => team._id != teamMemberId);
      setTeams(newTeams);
      toast.success(response.data.message);
    } else {
      console.log(response.data.error);
      toast.error(response.data.error);
    }
  };
  return (
    <div>
      {/* <SearchData onSearch={handleSearch} /> */}
      <div className="bg-white p-5 xl:p-10 mt-10 whitespace-nowrap overflow-auto">
        <div className="min-w-[700px] w-full ">
          {teams.map((item, index) => (
            <AllTeamList
              item={item}
              key={index}
              handleDeleteTeamMember={handleDeleteTeamMember}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
