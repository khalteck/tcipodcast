import { IoClose } from "react-icons/io5";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useAppContext } from "../../contexts/AppContext";
import {
  useDeleteImmigrantsCornerMutation,
  useDeletePodcastMutation,
} from "../../redux/features/firebaseSlice";

const DeleteModal = ({ onClose, item }) => {
  const { reRenderApp, deleteModal } = useAppContext();

  const [deleteImmigrantsCorner, { isLoading, isSuccess, isError }] =
    useDeleteImmigrantsCornerMutation(deleteModal?.id || "");

  const [
    deletePodcast,
    {
      isLoading: isLoadingPodcast,
      isSuccess: isSuccessPodcast,
      isError: isErrorPOdcast,
    },
  ] = useDeletePodcastMutation(deleteModal?.id || "");

  async function handleDelete() {
    deleteModal?.type === "immigrants"
      ? await deleteImmigrantsCorner(deleteModal?.id)
      : await deletePodcast(deleteModal?.id);
  }

  async function handleClick() {
    await handleDelete();
  }

  useEffect(() => {
    if (isSuccess || isSuccessPodcast) {
      setTimeout(() => {
        onClose();
        reRenderApp();
      }, 500);
    }
  }, [isSuccess || isSuccessPodcast]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 expand bg-black/20 py-[80px] flex flex-col items-center z-[999]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="bg-slate-100 rounded-lg p-3 absolute top-5 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#481297" />
      </div>
      <div className="w-[90%] md:w-[550px] relative bg-slate-100 text-black p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg overflow-y-auto flex flex-col gap-3">
        <h4 className="text-center">
          Delete{" "}
          {deleteModal?.type === "immigrants" ? "Immigrants Corner" : "Podcast"}{" "}
          - <strong> {capitalizeFirstLetter(item?.title)}</strong>
        </h4>

        {(isError || isErrorPOdcast) && (
          <div className="w-full p-2 rounded-sm bg-red-500/30 text-red-500 text-[.85rem]">
            An error occured!
          </div>
        )}

        {(isSuccess || isSuccessPodcast) && (
          <div className="w-full p-2 rounded-sm bg-green-500/30 text-green-700 text-[.85rem]">
            Deleted!
          </div>
        )}

        <div className="flex center-flex mt-4 gap-3">
          <button
            onClick={() => {
              handleClick();
            }}
            disabled={isLoading || isLoadingPodcast}
            className="min-w-[80px] center-flex px-5 py-2 bg-red-500 text-[.85rem] rounded-md font-medium text-white"
          >
            {isLoading || isLoadingPodcast ? (
              <ClipLoader size={"20px"} color="white" />
            ) : (
              "Delete"
            )}
          </button>
          <button
            onClick={() => onClose()}
            disabled={isLoading || isLoadingPodcast}
            className="min-w-[80px] center-flex px-5 py-2 bg-gray-300 text-[.85rem] rounded-md font-medium text-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
