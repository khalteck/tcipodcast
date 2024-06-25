/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { useFetchNextImmigrantsClientQuery } from "../../redux/features/firebaseSlice";
import ImmigrantsCornerCard from "./ImmigrantsCornerCard";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { setNextImmigrantsCorner } from "../../redux/features/dataManagementSlice";

const Section2 = () => {
  const { dispatch } = useAppContext();
  const { allImmigrantsCorner, infoData } = useSelector(
    (state) => state.dataManagement
  );

  // State to control when to trigger the query
  const [shouldFetch, setShouldFetch] = useState(false);

  // Conditionally fetch data using the skip option
  const { data, isLoading, isSuccess } = useFetchNextImmigrantsClientQuery(
    undefined,
    {
      skip: !shouldFetch,
    }
  );

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setNextImmigrantsCorner(data));
      localStorage.setItem(
        "lastVisibleImmigrantsClient",
        JSON.stringify(data?.slice(-1)[0])
      );
    }
    if (!isLoading && data) {
      setShouldFetch(false);
    }
  }, [data, isSuccess, isLoading]);

  useEffect(() => {
    const dataEnd =
      infoData?.total_immigrants_corner === allImmigrantsCorner?.length;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dataEnd) {
            setShouldFetch(true);
          }
        });
      },
      {
        root: null, // use the viewport as the container
        rootMargin: "0px",
        threshold: 0.8, // trigger when 80% of the target is visible
      }
    );

    const lastItemId = allImmigrantsCorner?.slice(-1)?.[0]?.id;
    const lastCardElement = document.getElementById(lastItemId);

    if (lastCardElement) {
      observer.observe(lastCardElement);
    }

    return () => {
      if (lastCardElement) {
        observer.unobserve(lastCardElement);
      }
    };
  }, [infoData, allImmigrantsCorner]);

  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] pt-10 md:pt-0">
      <section className="w-full">
        <h3 className="text-center mb-5">
          Share Your Journey in the
          <br /> Immigrants Corner
        </h3>
        <p className="w-full mx-auto text-[1.1rem] mb-10 text-center">
          Get featured in our Immigrants Corner! We’re highlighting the diverse
          stories and incredible journeys of immigrants from every corner of the
          globe. Whether you’re in the UK or anywhere else around the world,
          reach out to us! You never know, we might be visiting your city next,
          and we’d love to share your unique story.
          <br />
          <p className="flex gap-2 center-flex text-center underline mt-5">
            {/* <MdEmaill color="#fff" size="20px" /> */}
            <a href="mailto:hello@tcipod.com" className="cursor-pointer">
              hello@tcipod.com
            </a>
          </p>
        </p>
      </section>

      <div
        id="immigrants-container"
        className="w-full max-w-[1550px] mx-auto lg:px-14"
      >
        {!allImmigrantsCorner?.length === 0 && (
          <section className="w-full h-[300px] mt-10 center-flex border-white/30 border rounded-md gap-10 md:gap-[80px]">
            Nothing to see here...
          </section>
        )}

        {allImmigrantsCorner?.map((item, index) => {
          const isOdd = (index + 1) % 2 === 1;
          return <ImmigrantsCornerCard key={index} item={item} isOdd={isOdd} />;
        })}

        {isLoading && (
          <div className="mt-14 center-flex font-bold text-[1.5rem] pt-5 border-t border-white/50">
            <div className="flex flex-col items-center gap-3">
              Loading more... <ClipLoader size={"50px"} color="white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
