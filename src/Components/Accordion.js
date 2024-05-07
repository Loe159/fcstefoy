import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import {IoFootball, IoLocationOutline, IoPerson} from "react-icons/io5";
import {FaLocationDot} from "react-icons/fa6";
import {FaHandsHelping} from "react-icons/fa";

export default function AccordionBasicExample() {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <>
            <div id="accordionExample">
                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${
                                activeElement === "element1" &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-xl`}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <span className={"flex flex-row"}><FaLocationDot className={"mr-3"} /> Où se situe le club ?</span>
                            <span
                                className={`${
                                    activeElement === "element1"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element1"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <p className="px-5 py-4 font text-lg text-slate-800 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur corporis, cupiditate delectus eligendi error esse est facere illo ipsa laudantium magni officiis quod quos, sequi, similique soluta vel voluptatibus.
                        </p>
                    </TECollapse>
                </div>
                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${
                                activeElement === "element2" &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-xl`}
                            type="button"
                            onClick={() => handleClick("element2")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <span className={"flex flex-row"}><IoPerson className={"mr-3"} /> Comment être bénévole ?</span>
                            <span
                                className={`${
                                    activeElement === "element2"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <p className="px-5 py-4 font text-lg text-slate-800 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, corporis deserunt ducimus exercitationem hic libero maxime modi nisi officiis quas recusandae repellendus ut vitae! Minus nulla obcaecati praesentium!
                        </p>
                    </TECollapse>
                </div>
                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${
                                activeElement === "element3" &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-xl`}
                            type="button"
                            onClick={() => handleClick("element3")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <span className={"flex flex-row"}><FaHandsHelping className={"mr-3"} /> Comment devenir licencié ?</span>
                            <span
                                className={`${
                                    activeElement === "element3"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <p className="px-5 py-4 font text-lg text-slate-800 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cupiditate deleniti eius esse eum excepturi hic, mollitia omnis provident quibusdam, ratione similique sit tempora veritatis! At laudantium nam repellendus?
                        </p>
                    </TECollapse>
                </div>
                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${
                                activeElement === "element4" &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-xl`}
                            type="button"
                            onClick={() => handleClick("element4")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <span className={"flex flex-row"}><IoFootball className={"mr-3"} /> Comment devenir entraîneur ?</span>
                            <span
                                className={`${
                                    activeElement === "element4"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element4"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <p className="px-5 py-4 font text-lg text-slate-800 text-justify">
                            Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                            rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                            ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                            ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                            metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                            Curabitur non sollicitudin neque.
                        </p>
                    </TECollapse>
                </div>
            </div>

        </>
    );
}