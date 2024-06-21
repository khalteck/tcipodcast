import { GiSplash } from "react-icons/gi";
import { ClipLoader } from "react-spinners";
import { useLogoutUserMutation } from "../../redux/features/firebaseSlice";
import { useEffect } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { removeUser } from "../../redux/features/userSlice";

const Section1 = () => {
  const { dispatch, navigate } = useAppContext();
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  async function handleLogout() {
    await logoutUser();
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(removeUser());
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="relative">
      <section className="w-full relative bg-primary1 pb-[100px] md:pb-[200px] lg:pb-[300px] text-secondary">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mt-5 text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-center font-bold leading-[3rem] md:leading-[5rem] lg:leading-[10rem] font-gluten">
            ADMIN DASHBOARD
          </h1>
          <div className="center-flex">
            <button
              onClick={() => handleLogout()}
              className="w-fit btn-custom3 text-[.75rem] md:text-[1rem]"
            >
              {isLoading ? (
                <ClipLoader color="black" size={"20px"} />
              ) : (
                "Log out"
              )}
            </button>
          </div>
        </div>
      </section>
      <div className="w-full absolute bottom-0 left-0">
        <img
          alt="wave"
          src="/images/wavey2.png"
          className="w-full h-auto relative -bottom-[1px]"
        />
      </div>

      {/* decor */}
      <GiSplash
        size={"80px"}
        color="#481297"
        className="absolute -bottom-[100px] -right-1 rotate-[270deg]"
      />
    </div>
  );
};

export default Section1;
