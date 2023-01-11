function Guideline() {
  return (
    <div className="space-y-20 py-12 2xl:w-10/12 2xl:mx-auto">
      <div className="space-y-10">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 pb-2 font-serif">
            How to post a job
          </h1>
          <h3 className="text-gray-900 text-xl">
            It's quick to start and - learn more.
          </h3>
        </div>
        <div className="relative grid grid-cols-4">
          <hr className=" w-full absolute top-7 border border-gray-200" />
          <div className="space-y-5">
            <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
              01
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Step 1</h2>
              <h3>
                lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
              </h3>
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
              02
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Step 2</h2>
              <h3>
                lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
              </h3>
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
              03
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Step 3</h2>
              <h3>
                lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
              </h3>
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
              04
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Step 4</h2>
              <h3>
                lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-10 2xl:space-y-0">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 pb-2 font-serif">
            How to apply a job
          </h1>
          <h3 className="text-gray-900 text-xl">
            It's quick to start and - learn more.
          </h3>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 justify-between items-center">
          <div className="relative grid lg:gap-y-4 2xl:gap-y-16">
            <hr className=" h-full absolute left-7 border border-gray-200" />
            <div className="flex space-x-10 h-full">
              <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
                01
              </div>
              <div className="w-8/12 md:w-4/6 2xl:w-7/12 space-y-3">
                <h2 className="font-bold text-xl">Step 1</h2>
                <h3>
                  lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
                </h3>
              </div>
            </div>
            <div className="flex space-x-10 h-full">
              <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
                02
              </div>
              <div className="w-8/12 md:w-4/6 2xl:w-7/12 space-y-3">
                <h2 className="font-bold text-xl">Step 2</h2>
                <h3>
                  lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
                </h3>
              </div>
            </div>
            <div className="flex space-x-10 h-full">
              <div className="relative flex justify-center items-center z-10 font-mono text-2xl bg-teal-500 text-white rounded-full w-14 h-14">
                03
              </div>
              <div className="w-8/12 md:w-4/6 2xl:w-7/12 space-y-3">
                <h2 className="font-bold text-xl">Step 3</h2>
                <h3>
                  lorem ipsum dollars lorem ipsum dollars lorem ipsum dollars
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <img
              src={require("../assets/6.jpg")}
              alt="guideline"
              className="object-cover object-center w-full max-h-full md:max-h-96 2xl:max-h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Guideline;
