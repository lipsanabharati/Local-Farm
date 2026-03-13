export default function CartCard()
{
    return(
        <div className="flex flex-row justify-start p-5 gap-5 md:gap-10 border-t border-b border-gray-400 m-2 mt-5 lg:mb-10 h-50">
              {/*Image */}
              <div className=" lg:w-1/2 md:w-1/5 w-1/2  flex justify-center bg-white p-2">
                     <img className="object-contain" src="/bee.png"></img>
              </div>

              {/*Info */}
              <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl text-[#93C553]">100% Natural Bee Pollen</p>

                    <p className="text-[#93C553]">Rs.400</p>
                    
                    {/*Plus and minus*/}
                    <div className="flex flex-row w-1/2">
                        <div className="bg-black text-white w-1/3 flex justify-center hover:cursor-pointer hover:bg-gray-600">
                        +
                        </div>
                        <div className="bg-white text-black w-1/3 flex justify-center">
                        1
                        </div>
                        <div className="bg-black text-white w-1/3 flex justify-center hover:cursor-pointer hover:bg-gray-600">
                        -
                        </div>
                    </div>
              </div>
        </div>
    )
}