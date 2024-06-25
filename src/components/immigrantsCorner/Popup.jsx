import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const Popup = ({ onClose }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 expand bg-black/80 py-[80px] flex flex-col items-center z-[300]">
      {/* Close button */}
      <div
        onClick={() => onClose()}
        className="bg-slate-100 rounded-lg p-3 absolute top-5 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        {/* Close icon */}
        <IoClose size={"20px"} color="#481297" />
      </div>
      <div className="w-[90%] md:w-[550px] relative bg-slate-100 text-black p-3 pb-5 lg:px-5 lg:py-7 border border-neutral-500/40 rounded-lg overflow-y-auto flex flex-col gap-3">
        <h4 className="text-center font-bold">
          Immigrants Corner: Sharing Our Stories
        </h4>

        <div className="mt-19 flex flex-col gap-3">
          <img
            alt="image-"
            src="/images/coming-soon.png"
            className="w-[200px] h-auto mx-auto"
          />
          <p className="text-center">
            We’re excited to announce our new mini-series, Immigrants Corner!
            This is where we bring you the heartfelt and inspiring stories of
            immigrants from all over the world. Real people, real journeys, real
            emotions.
            <br />
            <br /> Stay tuned as we get ready to launch. Whether you’re in the
            UK or anywhere else on this globe, your story matters to us, and we
            want to share it with everyone. This isn’t just a series – it’s a
            celebration of our shared experiences and a chance to connect with a
            community that truly understands.
            <br />
            <br /> We can’t wait to bring you along on this incredible journey.
            Keep an eye out, because Immigrants Corner is coming soon, and we’d
            love for you to be a part of it!
          </p>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func,
};

export default Popup;
