import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <h2 className="font-bold mt-5 text-2xl ">Create Flashcard</h2>
        <div className="ml-2">
          <div className=" flex items-centre mt-2  ">
            <div>
              <Link
                className="mr-14 font-bold text-gray-600 hover:text-green-600  "
                to="/"
              >
                Create New
              </Link>
            </div>
            <div>
              <Link
                className="font-bold text-gray-600 hover:text-green-600 "
                to="/myflashcard"
              >
                My Flashcard
              </Link>
            </div>
          </div>
          <div className="mt-1 border border-black border-solid"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
