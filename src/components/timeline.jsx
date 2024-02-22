import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { TERipple } from "tw-elements-react";

const timeline = () => {
  return (
    <ol className="border-l-2 border-primary dark:border-primary-500 mx-12 p-12">
      <Link to="project/1">
      <button
        type="button"
        className="inline-block rounded m-5 bg-gray-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Back To Project Overview
      </button>
      
      </Link>
      <img src="../images/potato-farm.png" style={{height:300, width:800}} alt="potato"></img>
      <h4 className=" text-xl font-semibold mb-4">
            Agri Experts Farm{" "}
          </h4>
      {/* <!--First item--> */}
      <li>
        <div className="flex-start flex items-center mx-12">
          <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          {/* <h4 className=" text-xl font-semibold mt-20 mb-4">
            Agri Experts Farm{" "}
          </h4> */}
        </div>
        <div className="mb-6 ml-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            4 February, 2024
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
            <span className="font-bold">First Fertilizer Application: </span>A
            fertilizer with three primary nutrients: nitrogen (N), phosphorus
            (P), and potassium (K). During the initial growth phase,We opt for a
            fertilizer with a slightly higher phosphorus content to promote
            strong root development and early vigor.
          </p>

          <button
            type="button"
            className="inline-block rounded bg-green-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Verified by: John Mandizha
          </button>
        </div>
      </li>
      {/* <!--Second item--> */}
      <li>
        <div className="flex-start flex items-center">
          <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          <h4 className="-mt-2 text-xl font-semibold">
            Second Fertiliser Application
          </h4>
        </div>
        <div className="mb-6 ml-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            21 February, 2024
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
            <span className="font-bold">Second Fertilizer Application: </span>A
            fertilizer with three primary nutrients: nitrogen (N), phosphorus
            (P), and potassium (K). During the initial growth phase,We opt for a
            fertilizer with a slightly higher phosphorus content to promote
            strong root development and early vigor.
          </p>

          <button
            type="button"
            className="inline-block rounded bg-green-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Verified by: John Mandizha
          </button>
        </div>
      </li>
      {/* <!--Third item--> */}
      <li>
        <div className="flex-start flex items-center">
          <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          <h4 className="-mt-2 text-xl font-semibold">Weed Control</h4>
        </div>
        <div className="mb-6 ml-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            10 April, 2022
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
            <span className="font-bold">Weed Control: </span>
            Hand weeding perfomed to remove potato weed plants growing close to
            crop plants, in crop plant holes in a plastic mulch system.
          </p>

          <button
            type="button"
            className="inline-block rounded bg-red-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Verification Pending
          </button>
        </div>
      </li>
    </ol>
  );
};

export default timeline;
