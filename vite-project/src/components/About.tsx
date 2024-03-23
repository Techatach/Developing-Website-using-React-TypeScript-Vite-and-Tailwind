// import React from "react";

function About() {
  return (
    <div>
      <div className="flex justify-center p-4">
        <div className="flex flex-col justify-center items-center ">
          {/* <div className="text-stone-600  font-medium">Testimonials</div> */}
          <div className="text-green-500 text-3xl md:text-5xl font-medium">
            What Our Clients Say
          </div>
          <div className="text-stone-600 my-4 md:font-medium text-center w-3/4 md:w-1/2">
            We place huge value on our relationships and have seen the benefit
            they bring to our business. Customer feedback is vital in helping
            Tailblocks.
          </div>
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/100x100/?man,boy"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes. It has
                      upto 60+ free components for front-end Web Development.
                    </div>
                    <div className="font-bold text-green-500">John Doe</div>
                    <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                      <a href="#">Board Director of Tailblocks</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/100x100/?girl"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes. It has
                      upto 60+ free components for front-end Web Development.
                    </div>
                    <div className="font-bold text-green-500">Emily Watson</div>
                    <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                      <a href="#">Secretary</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/100x100/?boy"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes. It has
                      upto 60+ free components for front-end Web Development.
                    </div>
                    <div className="font-bold text-green-500">Paul Wesley</div>
                    <div className="text-sm font-medium text-stone-500 hover:text-green-500">
                      <a href="#">Sales Manager, Tailblocks</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
