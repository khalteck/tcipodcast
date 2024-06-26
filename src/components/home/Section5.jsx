/* eslint-disable react/no-unescaped-entities */
import { BsSendFill } from "react-icons/bs";
import Divider from "./Divider";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useJoinCommunityMutation } from "../../redux/features/firebaseSlice";

const Section5 = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validationError, setvalidationError] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  function handleChange(e) {
    setvalidationError(false);
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setIsValidEmail(isValidEmail);
  }

  const [joinCommunity, { isLoading, isSuccess, isError }] =
    useJoinCommunityMutation(formData);

  async function handleJoinCommunity() {
    if (
      isValidEmail &&
      formData?.email &&
      formData?.first_name &&
      formData?.last_name
    ) {
      await joinCommunity(formData);
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
      });
      setTimeout(() => {
        window.open(
          "https://chat.whatsapp.com/HoGWSQpPNMq5I57VjtwbZb",
          "_blank"
        );
      }, 1000);
    } else {
      setvalidationError(true);
    }
  }

  return (
    <div className="w-full bg-slate-50/90 text-primary1">
      <Divider />
      <section
        id="community"
        className="py-[80px] md:pb-[80px] flex flex-col md:flex-row md:items-center gap-10"
      >
        <div className="w-full md:w-1/2">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="hero"
            src="/images/YouTube Thumbnail.jpg"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            Join Our Global Community
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-5 mb-7 text-center"
          >
            No matter where you are from or where you are, you are welcome here.
            Connect with fellow immigrants, share your experiences, and be part
            of a supportive and inspiring network.
          </p>

          <form
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full mx-auto flex flex-col gap-5"
          >
            <div className="flex md:flex-row flex-col gap-5">
              <input
                type="text"
                placeholder="First name"
                id="first_name"
                onChange={handleChange}
                value={formData?.first_name}
                className={`w-full p-4 rounded-lg border bg-transparent outline-none text-sm ${
                  !isError ? "border-primary1" : "border-red-500"
                }`}
              />
              <input
                type="text"
                placeholder="Last name"
                id="last_name"
                onChange={handleChange}
                value={formData?.last_name}
                className={`w-full p-4 rounded-lg border border-primary1 bg-transparent outline-none text-sm ${
                  !isError ? "border-primary1" : "border-red-500"
                }`}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <input
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                value={formData?.email}
                className={`w-full p-4 rounded-lg border border-primary1 bg-transparent outline-none text-sm ${
                  isValidEmail ? "border-primary1" : "border-red-500"
                } ${!isError ? "border-primary1" : "border-red-500"}`}
              />
            </div>

            {validationError && (
              <p className="text-red-500 text-sm w-full bg-red-200 p-2 rounded-sm">
                All fields are required!
              </p>
            )}

            {isError && (
              <p className="text-red-500 text-sm w-full bg-red-200 p-2 rounded-sm">
                An error occured!
              </p>
            )}

            {isSuccess && (
              <p className="text-green-700 text-sm w-full bg-green-200 p-2 rounded-sm">
                You have successfully joined the TCIPOD community!
              </p>
            )}

            <div className="mt-10 center-flex">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleJoinCommunity();
                }}
                disabled={isLoading}
                className={`btn-custom5 min-w-[150px] text-[1.1rem] ${
                  isLoading && "cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <ClipLoader color="white" size={"20px"} />
                ) : (
                  <>
                    Join Community <BsSendFill color="white" size={"15px"} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section5;
