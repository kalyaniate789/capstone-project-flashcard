import React from "react";
import {useParams, NavLink, Link} from "react-router-dom";
import {TbArrowNarrowLeft} from "react-icons/tb";
import {AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai";

const TermBox = ({termItem}) => {
  return (
    <div className="term_box flex gap-10 justify-center bg-white w-5/6 h-64 px-5 py-10 ">
      <img className="w-3/5 h-40" src={termItem.image_base} />
      <p className="w-3/5 break-all ">{termItem.defination}</p>
    </div>
  );
};
const Backbtn = () => {
  return (
    <>
      <div className="text-gray-600 hover:text-green-600 ">
        <Link to="/myflashcard " className="text-4xl">
          <TbArrowNarrowLeft />
        </Link>
      </div>
    </>
  );
};

const TermPagination = ({currentTerm, allTerms, cardId}) => {
  const current_Term = parseInt(currentTerm);
  return (
    <div className="flex justify-center items-center gap-5 mt-10 font-bold text-gray-600">
      <div className="hover:text-green-600 text-3xl">
        {current_Term > 1 ? (
          <Link to={`/myflashcard/${cardId}/term${current_Term - 1}`}>
            <AiOutlineCaretLeft />
          </Link>
        ) : (
          <span>
            <AiOutlineCaretLeft />
          </span>
        )}
      </div>
      <h5>
        {current_Term}/{allTerms.length}
      </h5>
      <div className="hover:text-green-600 text-3xl">
        {current_Term != allTerms.length ? (
          <Link to={`/myflashcard/${cardId}/term${current_Term + 1}`}>
            <AiOutlineCaretRight />
          </Link>
        ) : (
          <span>
            <AiOutlineCaretRight />
          </span>
        )}
      </div>
    </div>
  );
};

const FlashCardView = () => {
  const params = useParams();
  const {cardId, termId} = params;
  const card_Id = cardId.replace("card", "");
  const term_Id = termId.replace("term", "");
  const FlashcardDeta = JSON.parse(localStorage.getItem("flashCard"));
  const currentCard = FlashcardDeta.filter((item) => item.id == card_Id)[0];

  return (
    <>
      <div className=" py-5 ">
        <div className="flex items-center gap-4 font-bold ">
          <span>
            <Backbtn />
          </span>
          <h4 className="font-bold truncate  "> {currentCard.group.groupName}</h4>
        </div>

        {currentCard.group.description && (
          <p className="mb-10">{currentCard.group.description}</p>
        )}
        <div className="flex justify-between  gap-10 ">
          <div className="bg-white px-2 py-2  w-2/6 h-56">
            <p className="">Flashcards</p>
            <div className="border border-black mb-2 "></div>
            <ul className="terms_list px-2 break-all ">
              {currentCard.terms.map((termItem, index) => (
                <li className="font-bold truncate" key={index}>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "active" : "inactive"
                    }
                    to={`/myflashcard/${cardId}/term${index + 1}`}
                  >
                    {termItem.term}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <TermBox termItem={currentCard.terms[term_Id - 1]} />
          <div className=" text-gray-600 hover:text-green-600  w-2/12 ">
            <div className="mb-2 w-full bg-white px-10 py-1 font-bold rounded">
              <Link className="  " to="#">
                Share
              </Link>{" "}
              <br />
            </div>
            <div className="mb-2 w-full bg-white px-10 py-1 font-bold   rounded ">
              <Link className="  " to={"#"}>
                Download
              </Link>{" "}
              <br />
            </div>
            <div className="w-full bg-white px-10 py-1 font-bold  rounded   ">
              <Link className=" " to={"#"}>
                Print
              </Link>
            </div>
          </div>
        </div>
        <TermPagination
          currentTerm={term_Id}
          allTerms={currentCard.terms}
          cardId={cardId}
        />
      </div>
    </>
  );
};
export default FlashCardView;
