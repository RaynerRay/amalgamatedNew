import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "./data/Data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Project = (props) => {
  const params = useParams();
  const id = params.id;

  const thisProduct = list.find((prod) => prod.id == id);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="md:flex items-start justify-center mt-12 py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src={thisProduct.cover}
          />
          <img
            className="mt-6 w-full"
            alt="img of a girl posing"
            src={thisProduct.cover2}
          />
        </div>
        <div className="md:hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src={thisProduct.cover}
          />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src={thisProduct.cover2}
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src={thisProduct.cover}
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src={thisProduct.cover2}
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src={thisProduct.cover}
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {thisProduct.location}
            </p>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              {thisProduct.name}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base  leading-4 text-gray-800">Crop</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none font-bold text-gray-800">
                {thisProduct.type}
              </p>
              <div
                className="
								w-6
								h-6
								bg-gradient-to-b
								from-yellow-200
								to-yellow-600
								ml-3
								mr-4
								cursor-pointer
                                
							"
              ></div>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Total Size</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">
                5 Hectares
              </p>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Link to="/timeline">
            <button
              className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
            >
              Progress : 10%
              <span className="text-yellow-400">View More</span>
            </button>{" "}
          </Link>
          <div>
            <p className=" lg:leading-tight leading-normal text-gray-600 mt-7">
              {thisProduct.benefits}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Start date: <span className="font-bold">12 April 2024</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Duration: <span className="font-bold">3-4 months</span>
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Estimated Returns: <span className="font-bold">20-30 %</span>
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center mb-2"
              >
                <p className="text-base leading-4 text-gray-800">
                  Quarter Hectare :{" "}
                  <span className="text-green-800 font-bold">$1000</span>
                </p>
                <div className="flex items-center">
                  <button
                    className=" text-sm
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    buy
                  </button>
                </div>
              </div>
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center mb-2"
              >
                <p className="text-base leading-4 text-gray-800">
                  Half Hectare :{" "}
                  <span className="text-green-800 font-bold">$1900</span>
                </p>
                <div className="flex items-center">
                  <button
                    className=" text-sm
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    buy
                  </button>
                </div>
              </div>
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center "
              >
                <p className="text-base leading-4 text-gray-800">
                  Hectare :{" "}
                  <span className="text-green-800 font-bold">$3500</span>
                </p>
                <div className="flex items-center">
                  <button
                    className=" text-sm
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    buy
                  </button>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="m-auto">
                  <img src="../images/visa.jpg" alt="" />
                </div>
                <div className="m-auto">
                <img src="../images/eco.png" alt="" />
                </div>
                <div className="mx-2">
                <img src="../images/onemoney.jpg" style={{height:40, width:300}} alt="" />
                </div>
                <div className="m-auto">
                <img src="../images/innbucks.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div> */}

          {/* //comment section */}
        </div>
      </div>
    </div>
  );
};

export default Project;
