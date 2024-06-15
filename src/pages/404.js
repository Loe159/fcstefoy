import React from "react";
import {Link} from "react-router-dom";


const Error404 = () => {
    return (
        <div className={"pt-32 bg-black w-full"}>
            <section className="flex items-center h-full p-16 bg-white">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl">
                            <span className="sr-only">Erreur</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl mb-8">Désolé, cette page n'existe pas...</p>
                        <Link to={""} className='font-semibold py-4 px-7 text-xl group relative text-white bg-[#d73523] rounded-sm'>
                            <div className=' buttonDiv'></div>
                            <span className='buttonSpan'>RETOURNER À L'ACCUEIL</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Error404;