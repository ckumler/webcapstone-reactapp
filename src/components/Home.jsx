import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Hero from "../assets/entrance.jpg";

const Home = () => {
  return (
    <div name="home">
      <img src={Hero} alt="" />
      {/*Section*/}
      <div className="w-full bg-[#FAEBAD] pb-[60px]">
        {/*Container*/}
        <div className="max-w-[1200px] mx-auto px-[30px] flex flex-col justify-center h-full bg-[#FAEBAD]">
          <p>Welcome to</p>
          <h1 className="text-4xl sm:text-7xl font-bold">Katie's Place</h1>
          <p className="py-4">
            Something exciting is happening in Shippensburg. A spirit of
            cooperation is blossoming among a broad network of people leading
            toward the development of a place where the community can come
            together to meet, build relationships and help each other reach our
            full potential together.
          </p>
          <p>
            Katie’s Place exists to serve as a gathering place for people of all
            ages and as a distribution site for charitable human services for
            the people of the Shippensburg community and the surrounding area.
            We are incorporated under the Pennsylvania Nonprofit Corporation Law
            and are organized exclusively for tax-exempt purposes as such
            purposes are defined by Section 501(c)(3) of the Internal Revenue
            Code of 1954 (or the corresponding section of any future Internal
            Revenue Law of the United States). Katie’s Place is registered with
            the Pennsylvania Department of State.
          </p>
          <p>
            In addition to the thriving and diverse Thrift Shop at Katie’s
            Place, the building houses a number of community organizations. Your
            support of both the organizations that are housed within the
            building, and Katie’s Place of  Shippensburg, Inc. is vital to the
            continued success of the Katie’s Place dream. Learn more about this
            by visiting the links at the bottom.
          </p>
          <div>
            <button className="border-2 group border-gray-800 px-6 py-3 my-2 flex items-center hover:bg-[#EB4F31] hover:border-[#EB4F31]">
              View Inventory
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
