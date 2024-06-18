import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../contexts/AppContext";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";

const CreateImmigrantsCorner = ({ onClose }) => {
  const { addImmigrantsCorner } = useAppContext();
  const mode = typeof addImmigrantsCorner === "string" ? "Add" : "edit";

  const [formData, setFormData] = useState({
    title: mode === "edit" ? addImmigrantsCorner?.title : "",
    body: mode === "edit" ? addImmigrantsCorner?.body : "",
    timestamp:
      mode === "edit" ? addImmigrantsCorner?.timestamp : serverTimestamp(),
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  return (
    <div className="w-full h-screen fixed top-0 left-0 blurry expand bg-black/80 py-[80px] flex flex-col items-center z-[999]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="bg-slate-100 rounded-lg p-3 absolute top-3 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#481297" />
      </div>
      <div className="w-[90%] md:w-[600px] min-h-[400px] relative bg-slate-100 text-black p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg overflow-y-auto flex flex-col gap-3">
        <h4 className="font-bold text-center">{mode} Immigrants Corner</h4>

        <form className="w-full flex flex-col gap-3">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <textarea
            id="title"
            placeholder="Body"
            className="w-full h-[150px] p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateImmigrantsCorner;
