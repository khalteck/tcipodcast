import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../contexts/AppContext";
import { useState } from "react";
import {
  useAddNewPodcastMutation,
  useEditPodcastMutation,
} from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";

const CreatePodcasts = ({ onClose }) => {
  const { addpodcast, reRenderApp } = useAppContext();
  const mode = typeof addpodcast === "string" ? "Add" : "Edit";

  const [validationError, setValidationError] = useState(false);

  const [formData, setFormData] = useState({
    title: mode === "Edit" ? addpodcast?.title : "",
    description: mode === "Edit" ? addpodcast?.description : "",
    spotifyLink: mode === "Edit" ? addpodcast?.spotifyLink : "",
    appleLink: mode === "Edit" ? addpodcast?.appleLink : "",
    duration: mode === "Edit" ? addpodcast?.duration : "",
    thumbnail: mode === "Edit" ? addpodcast?.thumbnail || "" : "",
  });

  function handleChange(e) {
    setValidationError(false);
    const { id, value, files } = e.target;

    setFormData((prev) => {
      if (id === "thumbnail" && files && files[0]) {
        // Save the file object
        return {
          ...prev,
          [id]: files[0],
        };
      } else {
        // Save the value as a string
        return {
          ...prev,
          [id]: value,
        };
      }
    });
  }

  const [addNewPodcast, { isLoading, isSuccess, isError }] =
    useAddNewPodcastMutation(formData);

  const [
    editPodcast,
    {
      isLoading: isLoadingEdit,
      isSuccess: isSuccessEdit,
      isError: isErrorEdit,
    },
  ] = useEditPodcastMutation(formData);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      formData?.title &&
      formData?.description &&
      formData?.spotifyLink &&
      formData?.appleLink &&
      formData?.duration &&
      formData?.thumbnail
    ) {
      mode === "Edit"
        ? editPodcast({ id: addpodcast?.id, formData })
        : await addNewPodcast(formData);

      setTimeout(() => {
        reRenderApp(); //to rerender app to refetch admin info

        onClose();
      }, 500);
    } else {
      setValidationError(true);
    }
  }

  return (
    <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 blurry expand bg-black/80 py-10 lg:py-[80px] items-center z-[999]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="w-fit mx-auto mb-3 bg-slate-100 rounded-lg p-3 border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#481297" />
      </div>
      <div className="w-[90%] mx-auto md:w-[600px] relative bg-slate-100 text-black p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg flex flex-col gap-3">
        <h4 className="font-bold text-center">{mode} Podcast</h4>

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
            id="description"
            placeholder="Description"
            value={formData?.description}
            onChange={handleChange}
            className="w-full h-[150px] p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <input
            type="file"
            id="thumbnail"
            onChange={handleChange}
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent cursor-pointer"
          />

          <input
            type="text"
            id="spotifyLink"
            placeholder="Spotify link"
            value={formData?.spotifyLink}
            onChange={handleChange}
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <input
            type="text"
            id="appleLink"
            placeholder="Apple link"
            value={formData?.appleLink}
            onChange={handleChange}
            className="w-full p-3 border border-primary1 rounded-md text-[.85rem] outline-none bg-transparent"
          />

          <input
            type="text"
            id="duration"
            placeholder="Duration in format - '3hr 30m 15s'"
            value={formData?.duration}
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

export default CreatePodcasts;
