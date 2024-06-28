import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../contexts/AppContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const Modal = ({ onClose, action }) => {
  const { podcast } = useAppContext();
  return (
    <div className="w-full h-screen fixed top-0 left-0 blurry expand bg-black/80 py-[80px] overflow-y-auto flex flex-col items-center z-[999]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="bg-primary1 rounded-lg p-3 absolute top-3 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#fff" />
      </div>
      <div className="w-[90%] md:w-[600px] h-fit relative bg-primary1 text-white p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg">
        <div className="flex md:flex-row flex-col gap-3">
          <img
            alt={`image-${podcast?.id}`}
            src={podcast?.thumbnail}
            className="w-[200px] h-[200px] rounded-md object-cover border"
          />
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[1.25rem] md:text-[2rem]">
              {capitalizeFirstLetter(podcast?.title)}
            </h4>
            <small className="font-medium">{podcast?.duration}</small>
            <p className="leading-relaxed text-[.9rem] md:text-[1rem]">
              {capitalizeFirstLetter(podcast?.description)}...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <p className="font-bold">Listen on:</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
            <a href={podcast?.spotifyLink} target="_blank" rel="noreferrer">
              <button className="btn-custom4 w-fit">
                Spotify{" "}
                <img
                  alt="icon"
                  src="/images/icons8-spotify.png"
                  className="w-7 h-auto"
                />
              </button>
            </a>
            <a href={podcast?.appleLink} target="_blank" rel="noreferrer">
              <button className="btn-custom4 w-fit">
                Apple{" "}
                <img
                  alt="icon"
                  src="/images/apple-podcast.png"
                  className="w-7 h-auto"
                />
              </button>
            </a>
            <a href={podcast?.youtubeLink} target="_blank" rel="noreferrer">
              <button className="btn-custom4 w-fit">
                Youtube{" "}
                <img
                  alt="icon"
                  src="/images/icons8-youtube-music-48.png"
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
