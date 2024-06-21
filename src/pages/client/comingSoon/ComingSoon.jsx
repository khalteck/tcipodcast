const ComingSoon = () => {
  return (
    <>
      <section className="flex  justify-center items-center flex-col gap-10 w-full min-h-screen py-10">
        <img
          alt="illustration"
          src="/images/coming-soon.png"
          className="w-full md:w-[400px] h-auto"
        />
        <p className="text-secondary font-gluten text-center text-[2rem] font-bold">
          Site is Under Construction
        </p>
      </section>
    </>
  );
};

export default ComingSoon;
