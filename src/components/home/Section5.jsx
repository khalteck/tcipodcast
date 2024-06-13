import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useJoinCommunityMutation } from "../../redux/features/firebaseSlice";

const Section5 = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validationError, setvalidationError] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
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
      formData?.last_name &&
      formData?.phone
    ) {
      await joinCommunity(formData);
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
      });
    } else {
      setvalidationError(true);
    }
  }

  return (
    <section id="community" className="py-[80px] md:pb-[80px]">
      <h3 className="text-center">Join The Community</h3>
      <p className="mt-5 mb-7 text-center">
        Join the Tcipod community and never miss out on new and exciting
        episodes!
      </p>

      <form className="w-full md:w-[650px] mx-auto flex flex-col gap-5">
        <div className="flex md:flex-row flex-col gap-5">
          <input
            type="text"
            placeholder="First name"
            id="first_name"
            onChange={handleChange}
            value={formData?.first_name}
            className={`w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm  ${
              !isError ? "border-black/30" : "border-red-500"
            }`}
          />
          <input
            type="text"
            placeholder="Last name"
            id="last_name"
            onChange={handleChange}
            value={formData?.last_name}
            className={`w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm  ${
              !isError ? "border-black/30" : "border-red-500"
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
            className={`w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm ${
              isValidEmail ? "border-black/30" : "border-red-500"
            } ${!isError ? "border-black/30" : "border-red-500"}`}
          />
          <input
            type="number"
            placeholder="Phone number"
            id="phone"
            onChange={handleChange}
            value={formData?.phone}
            className={`w-full p-4 rounded-sm border border-primary/50 bg-transparent outline-none text-sm  ${
              !isError ? "border-black/30" : "border-red-500"
            }`}
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

        <div className="center-flex mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleJoinCommunity();
            }}
            disabled={isLoading}
            className={`btn-secondary w-full md:w-1/3 center-flex ${
              isLoading && "cursor-not-allowed"
            }`}
          >
            {isLoading ? <ClipLoader color="black" size={"20px"} /> : "Join"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Section5;
