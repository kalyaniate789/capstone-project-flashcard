import react, {useEffect} from "react";
import Header from "./header/Header";
import CreateFlashcard from "./createFlashcard/CreateFlashcard";
import MyFlashcard from "./myFlashcard/MyFlashcard";
import FlashcardDetails from "./flashcardDetails/flashcardDetails";
import {Routes, Route} from "react-router-dom";
import FlashCardView from "./FlashCardView";
import '../index.css'

const Main = () => {

 
  
  // const [data,setData] = useState([{}])
  const callbackAddData = (data1, data2) => {
      // setData({...data,data1,data2})
      var flashItem = {
        "id" : 1,
        "group" : data1,
        "terms" : data2
      }
      var flashCards = [];
      var storageData = JSON.parse(localStorage.getItem('flashCard'));
      
      if(storageData){
        var lastFlashCardData = storageData[storageData.length - 1];
        flashItem.id = lastFlashCardData.id + 1
        flashCards.push(...storageData, flashItem)
      }else{

        flashCards.push(flashItem);
      }
      // var storageData = localStorage.getItem('flashCard')
      
      console.log(flashCards);
        localStorage.setItem('flashCard',JSON.stringify(flashCards))
        
  };

  

  return (
    <>
      <Header />
      {/* <=======Pages Routing=====> */}
      <Routes>
        <Route
          path="/"
          element={<CreateFlashcard callbackAddData={callbackAddData} />}
        />
        <Route path="/myflashcard" element={<MyFlashcard />} />
        <Route path="/flashcarddetails" element={<FlashcardDetails />}/>
        <Route path="/myflashcard/:cardId/:termId" element={<FlashCardView />}></Route>
    
      </Routes>
    </>
  );
};

export default Main;
