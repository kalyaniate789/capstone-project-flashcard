import React from "react";
import {Link} from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";

const MyFlashcard = () => {
  const FlashcardDeta = JSON.parse(localStorage.getItem("flashCard"));

  return (
    <>
      <div className="flex flex-wrap gap-8 items-center mt-10">
        {!FlashcardDeta && <p>No Card Found.</p>}
        {FlashcardDeta?.map((card, index) => (
          <div
            key={index}
            className="  bg-white border-solid  w-72 h-44 px-5 pt-5 relative  "
          >
            <div className="flex items-center">
              <div>
                <img
                  className="w-16 h-16 bg-indigo-100 rounded-full mr-5 "
                  src={card.group.image}
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl ">{card.group.groupName} </h3>
                <div className="flex text-center justify-center ">
                  <div className="flex text-md font-bold text-gray-600 ">
                    <p className="mr-1  ">{card.terms.length} </p>
                    <p className="">
                      {card.terms.length === 1 ? <p>Card</p> : <>Cards</>}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className=" w-10 mt-2 mb-4  w-11/12 truncate   ">
                {card.group.description}
              </p>
            </div>
            <div className="absolute bottom-0">
              <Link
                className="mr-14 font-bold text-gray-600 hover:text-green-600  "
                to={`card${card.id}/term1`}
              >
                {card.terms.length === 1 ? (
                  <p className="flex items-center">
                    View Card <span className="ml-2"><span><TbArrowNarrowRight/></span></span>{" "}
                  </p>
                ) : (
                  <p className="flex items-center">
                    View Cards <span className="ml-2"><span><TbArrowNarrowRight/></span></span>{" "}
                  </p>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyFlashcard;
