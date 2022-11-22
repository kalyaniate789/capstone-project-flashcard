import React from "react";
import {useState} from "react";

const CreateFlashcard = ({callbackAddData}) => {
  localStorage.setItem("test", "vinay");
  // =====adding more input=====>
  const [groupName, setGroupName] = useState([{}]);
  const [addMore, setAddMore] = useState([{}]);

  const addMoreitemHandler = (e) => {
    e.preventDefault();
    setAddMore([...addMore, {}]);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  // ======handling groupName data====>
  const onChangeHandler1 = async (e) => {
    var {name, value} = e.target;
    if (e.target.name == "image") {
      const myImage = await toBase64(e.target.files[0]);
      value = myImage;
      // value = myImage;
    }
    setGroupName({...groupName, [name]: value});
  };
  //  =======handling add more data====>

  const onChangeHandler = async (e, index) => {
    var {name, value} = e.target;
    const list = [...addMore];
    list[index][name] = value;

    if (e.target.name == "image") {
      const myImage = await toBase64(e.target.files[0]);
      list[index]["image_base"] = myImage;
      // value = myImage;
    }

    setAddMore(list);
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    document.getElementById("form").reset();
    callbackAddData(groupName, addMore);
  };

  return (
    <>
      {/* =========first section for group name=======> */}
      <div className="mt-5">
        <form onSubmit={onClickHandler} id="form">
          <div className="bg-white px-5 py-5">
            <div className="flex items-center">
              <div className="">
                <label>Create Group*</label> <br />
                <input
                  className="mr-2 mb-5 outline-none border border-black border-solid mr-10 w-64"
                  type="text"
                  name="groupName"
                  onChange={onChangeHandler1}
                  required
                />
              </div>
              <div>
                <input
                  onChange={onChangeHandler1}
                  className=" outline-none"
                  type="file"
                  name="image"
                  required
                />
              </div>
            </div>
            <div>
              <label className="">Add discription</label> <br />
              <textarea
                name="description"
                className=" border border-black border-solid w-8/12"
                onChange={onChangeHandler1}
              ></textarea>
            </div>
          </div>

          {/* ========second section for adding more flashcard=======> */}

          <div className="mt-5">
            <div className="bg-white relative px-16 py-5 ">
              <div>
                <div className="absolute inset-x-5 ">
                  <p className="bg-red-500 text-white w-8 h-8 font-bold flex items-center justify-center rounded-full">{addMore.length}</p>
                </div>
                {addMore.map((el, index) => (
                  <div className="flex items-center mb-5">
                    <div>
                      <label>Enter Term*</label> <br />
                      <input
                        className=" outline-none border border-black border-solid mr-10 w-64 "
                        type="text"
                        name="term"
                        // value={el.term}
                        onChange={(e) => onChangeHandler(e, index)}
                        required
                      />
                    </div>
                    <div>
                      <label>Enter Defination*</label> <br />
                      <input
                        type="text"
                        className="border border-black border-solid mr-10 w-64"
                        name="defination"
                        onChange={(e) => onChangeHandler(e, index)}
                        // value={el.defination}
                        required
                      />
                    </div>
                    <input
                      onChange={(e) => onChangeHandler(e, index)}
                      className=" outline-none "
                      type="file"
                      name="image"
                      required
                      // value={el.image}
                    />
                  </div>
                ))}
              </div>
              <button onClick={addMoreitemHandler}>+Add More</button>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className=" text-white px-6 py-1 mb-10 mt-10 bg-red-800 font-large rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateFlashcard;
