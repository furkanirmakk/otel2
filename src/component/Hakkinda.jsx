
import React from "react";
import Womco from "../assets/womco.jpg"

function Hakkinda() {
    return (
        <div>

            <div className='grid grid-cols-2  gap-4 flex justify-center items-center   m-10 mt-11 max-sm:grid-cols-1 max-sm:m-4 max-md:grid-cols-1
             max-md:m-3 max-lg:m-1 gap-4'>

                <div

                >
                    <img className='w-full   h-auto rounded-md' src={Womco} alt="" />

                </div>
                <div className="text-xl max-sm:text-l font-sans text-yz2 pl-8 max-sm:pl-2 max-md:pl-4 max-sm:pr-4 max-lg:text-lg text-left" >
                    <h1 className="pr-3 pb-8 font-bold text-center text-yz">HAKKIMIZDA</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus vero,
                        exercitationem enim, iusto ipsum repellendus aperiam consequatur ut quibusdam ullam
                        consequuntur minima illum rerum? Recusandae vitae repudiandae earum, molestias pariatur
                        debitis officia velit omnis qui corporis explicabo, doloribus aut ab blanditiis! Tempore,
                        id? Repellat dolor consequatur facilis consectetur maxime fugit quaerat quibusdam soluta
                        id atque quo corrupti eaque quidem deleniti commodi unde accusantium eligendi dicta, corporis
                        facere. Quas facere mollitia explicabo quisquam non itaque aperiam atque alias, aliquid quos.
                        Modi magni est ipsam assumenda possimus corrupti itaque perferendis. Amet odio minima eos
                        nulla laborum ad voluptatem quo aut sunt.</p>
                </div>
               


            </div>




            {/* 
            <div className='flex'>
                <div className="w-6 flex-1  p-4 ">
                    <img src={Womco} alt="" />
                </div>
                <div className="flex-1 p-4">
                    <p className="text-xl font-sans text-yz2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus vero,
                        exercitationem enim, iusto ipsum repellendus aperiam consequatur ut quibusdam ullam
                        consequuntur minima illum rerum? Recusandae vitae repudiandae earum, molestias pariatur
                        debitis officia velit omnis qui corporis explicabo, doloribus aut ab blanditiis! Tempore,
                        id? Repellat dolor consequatur facilis consectetur maxime fugit quaerat quibusdam soluta
                        id atque quo corrupti eaque quidem deleniti commodi unde accusantium eligendi dicta, corporis
                        facere. Quas facere mollitia explicabo quisquam non itaque aperiam atque alias, aliquid quos.
                        Modi magni est ipsam assumenda possimus corrupti itaque perferendis. Amet odio minima eos
                        nulla laborum ad voluptatem quo aut sunt.</p>
                </div>
            </div>*/}
        </div>
    );
}
export default Hakkinda