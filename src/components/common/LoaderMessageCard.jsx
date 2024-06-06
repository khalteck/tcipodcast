import { BeatLoader } from "react-spinners";

const LoaderMessageCard = () => {
  return (
    <div className="loader-message-card">
      <p className="text-center opacity-80">
        One moment please, <br />
        we are downloading some good vibes…
      </p>
      <BeatLoader color={"#fcea10"} size={60} />
    </div>
  );
};

export default LoaderMessageCard;
