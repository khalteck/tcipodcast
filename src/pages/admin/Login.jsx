import { useState } from "react";
import { useLoginUserMutation } from "../../redux/features/firebaseSlice";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { setUser } from "../../redux/features/userSlice";
import { useEffect } from "react";

const Login = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validationError, setvalidationError] = useState(false);

  const [showPassword, setshowPassword] = useState(false);

  const eye = showPassword ? (
    <BsEyeSlashFill size={"20px"} color="gray" />
  ) : (
    <BsEyeFill size={"20px"} color="gray" />
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [
    loginUser, // This is the mutation trigger
    { isLoading, data, isSuccess, isError, error }, // This is the destructured mutation result
  ] = useLoginUserMutation({ ...formData, navigate, dispatch });

  async function handleLogin() {
    if (isValidEmail && formData?.email && formData?.password) {
      await loginUser(formData);
    } else {
      setvalidationError(true);
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
      window.location.replace("/admin"); // Use window.location.replace
    }
  }, [data, isSuccess, dispatch]);

  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col bg-primary1">
      <div className="w-full h-[250px] md:h-screen bg-hero4 bg-no-repeat bg-center bg-cover relative">
        <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 flex flex-col">
          <Link to="/">
            <img
              alt=""
              src="/images/logo-secondary.png"
              className="w-[130px] h-auto md:w-[250px] rounded-sm md:rounded-b-lg"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full bg-white p-5 md:p-14">
          <h2 className="text-[1.75rem] md:text-[2em] font-[400]">
            ADMIN LOGIN
          </h2>

          <form className="mt-8 max-w-[600px] flex flex-col gap-3">
            <div>
              <p className="text-black/70">
                ALL FIELDS ARE REQUIRED, PLEASE FILL CAREFULLY!
              </p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none ${
                  isValidEmail ? "border-black/30" : "border-red-500"
                } ${!isError ? "border-black/30" : "border-red-500"}`}
                required
              />
              {!isValidEmail && (
                <p className="text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={handleChange}
                  className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none ${
                    !isError ? "border-black/30" : "border-red-500"
                  }`}
                  required
                />
                <div
                  onClick={() => {
                    setshowPassword((prev) => !prev);
                  }}
                  className="absolute top-[55%] right-3 translate-y-[-50%] cursor-pointer"
                >
                  {eye}
                </div>
              </div>
            </div>

            {validationError && (
              <p className="text-red-500">All fields are required!</p>
            )}

            {isError && (
              <p className="text-red-500">
                {error?.message?.includes("invalid-credential")
                  ? "Invalid login credentials!"
                  : "An error occured!"}
              </p>
            )}

            <div className="w-full flex justify-center my-7">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
                disabled={isLoading}
                className={`btn-secondary w-full md:w-1/3 center-flex ${
                  isLoading && "cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <ClipLoader color="black" size={"20px"} />
                ) : (
                  "LOGIN"
                )}
              </button>
            </div>

            <Link to={"/"}>
              <p className="text-center mb-3 underline">Back to home page</p>
            </Link>
          </form>
        </div>
        <div className="font-light flex flex-col gap-3 text-secondary p-5 md:p-14">
          <p className="uppercase">Hear our stories on:</p>

          <div>
            <div className="md:h-[150px] flex gap-3 md:gap-5 items-center border-t md:border-none border-white/20">
              <a
                href="https://open.spotify.com/show/2AlbaXLHC7EW1IFvsGGlcF?si=1dQ_vKAdTQaUjOMBha7OCw"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3 border-secondary/50 border rounded-lg p-3">
                  <img
                    alt="icon"
                    src="/images/icons8-spotify.png"
                    className="w-8 md:w-12 h-auto"
                  />
                  <div>
                    <p className="font-medium md:font-bold text-sm md:text-md lg:text-lg">
                      Spotify Podcast
                    </p>
                    <p className="opacity-80 text-[.75em] md:text-sm lg:text-[1rem] underline cursor-pointer">
                      Listen Now
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://podcasts.apple.com/gb/podcast/tci-the-chronicles-of-an-immigrant/id1727631336"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3 border-secondary/50 border rounded-lg p-3">
                  <img
                    alt="icon"
                    src="/images/icons8-podcast-96.png"
                    className="w-8 md:w-12 h-auto"
                  />
                  <div>
                    <p className="font-medium md:font-bold text-sm md:text-md lg:text-lg">
                      Apple Podcast
                    </p>
                    <p className="opacity-80 text-[.75em] md:text-sm lg:text-[1rem] underline cursor-pointer">
                      Listen Now
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
