import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../contexts/AppContext";
import { useState } from "react";
import {
  useAddNewImmigrantsCornerMutation,
  useEditImmigrantsCornerMutation,
} from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";

const CreateImmigrantsCorner = ({ onClose }) => {
  const { addImmigrantsCorner, reRenderApp } = useAppContext();
  const mode = typeof addImmigrantsCorner === "string" ? "Add" : "Edit";

  const [validationError, setValidationError] = useState(false);

  const [formData, setFormData] = useState({
    title: mode === "Edit" ? addImmigrantsCorner?.title : "",
    body: mode === "Edit" ? addImmigrantsCorner?.body : "",
    embedLink: mode === "Edit" ? addImmigrantsCorner?.embedLink : "",
    youtubeLink: mode === "Edit" ? addImmigrantsCorner?.youtubeLink : "",
  });

  function handleChange(e) {
    setValidationError(false);
    const { id, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [addNewImmigrantsCorner, { isLoading, isSuccess, isError }] =
    useAddNewImmigrantsCornerMutation(formData);

  const [
    editImmigrantsCorner,
    {
      isLoading: isLoadingEdit,
      isSuccess: isSuccessEdit,
      isError: isErrorEdit,
    },
  ] = useEditImmigrantsCornerMutation(formData);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      formData?.title &&
      formData?.body &&
      formData?.embedLink &&
      formData?.youtubeLink
    ) {
      mode === "Edit"
        ? editImmigrantsCorner({ id: addImmigrantsCorner?.id, formData })
        : await addNewImmigrantsCorner(formData);

      setTimeout(() => {
        reRenderApp(); //to rerender app to refetch admin info

        onClose();
      }, 500);
    } else {
      setValidationError(true);
    }
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
            value={formData?.title}
            onChange={handleChange}
            autoFocus
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <textarea
            id="body"
            placeholder="Body"
            value={formData?.body}
            onChange={handleChange}
            className="w-full h-[150px] p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <input
            type="text"
            id="embedLink"
            placeholder="Embed link"
            value={formData?.embedLink}
            onChange={handleChange}
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <input
            type="text"
            id="youtubeLink"
            placeholder="Youtube link"
            value={formData?.youtubeLink}
            onChange={handleChange}
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          {validationError && (
            <p className="w-full p-3 bg-red-500/30 font-medium text-[.85rem] rounded-md text-red-500">
              All fields are required!
            </p>
          )}

          {(isError || isErrorEdit) && (
            <p className="text-red-500 text-sm w-full bg-red-200 p-2 rounded-sm">
              An error occured!
            </p>
          )}

          {(isSuccess || isSuccessEdit) && (
            <p className="text-green-700 text-sm w-full bg-green-500/30 p-2 rounded-sm">
              Success!
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={isLoading || isLoadingEdit}
            className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md center-flex"
          >
            {isLoading || isLoadingEdit ? (
              <ClipLoader size={"20px"} color="black" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateImmigrantsCorner;
