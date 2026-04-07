import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../Components/ReadList/ReadList";
import WishList from "../../Components/WishList/WishList";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);
  return (
    <div className="mt-14 container mx-auto px-2">
      <div className="dropdown dropdown-start flex justify-center mb-4">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By {sortingType} ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setSortingType("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => setSortingType("rating")}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType}></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
