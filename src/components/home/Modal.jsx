import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../contexts/AppContext";
import { FaPlay } from "react-icons/fa";

const Modal = ({ onClose, action }) => {
  const { podcast } = useAppContext();
  return (
    <div className="w-full h-screen fixed top-0 left-0 blurry expand bg-black/80 py-[80px] flex flex-col items-center z-[999]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="bg-primary1 rounded-lg p-3 absolute top-3 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#fcea10" />
      </div>
      <div className="w-[90%] md:w-[600px] h-fit relative bg-primary1 text-secondary p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg overflow-y-auto">
        <div className="flex gap-3">
          <img
            alt={`image-${podcast?.id}`}
            src={podcast?.thumbnail}
            className="w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-md object-cover"
          />
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[1.25rem] md:text-[2rem]">
              {podcast?.title}
            </h4>
            <small>
              By{" "}
              {podcast?.authors?.map(
                (x, ind, arr) =>
                  `${x}${arr?.length === 2 && ind === 0 ? " & " : ""}`
              )}
            </small>
            <small className="font-medium">{podcast?.duration}</small>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-7 leading-relaxed text-[.9rem] md:text-[1rem]">
            {podcast?.description}...
          </p>
          <p className="font-bold">Listen on:</p>
          <div className="flex gap-4 items-center">
            <a href="" target="_blank" rel="noreferrer">
              <button className="btn-custom4 w-fit">
                Spotify{" "}
                <img
                  alt="icon"
                  src="/images/icons8-spotify.png"
                  className="w-7 h-auto"
                />
              </button>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <button className="btn-custom4 w-fit">
                Apple{" "}
                <img
                  alt="icon"
                  src="/images/icons8-podcast-96.png"
                  className="w-7 h-auto"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
