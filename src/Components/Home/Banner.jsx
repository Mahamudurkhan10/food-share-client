

import 'swiper/css/bundle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="relative p-2">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper lg:h-[500px] h-[240px] rounded-lg "
            >
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen  opacity-80 hero-overlay "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/WW1dwHh/Summer-fruit-and-cheese-platter-4.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4  text-xl bg-gradient-to-r from-green-700 via-pink-900 to-blue-600 text-transparent bg-clip-text animate-gradient'>Nourishing Communities: Food Sharing Initiatives Bringing People Together</h1>
                            <NavLink to={'/availableFoods'}>
                                <button className=" px-4 py-2 font-medium group">

                                    <span className=" text-yellow-300 btn btn-success ">Read More</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-90"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/ykg11W3/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-gray-800 text-xl '>Sustainable Solutions: How Food Sharing Cultivates Resilient Communities</h1>
                            <NavLink to={'/availableFoods'}>
                                <button className="relative inline-block px-4 py-2 font-medium group">

                                <span className=" text-yellow-300 btn btn-success ">Read More</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/6YvXk5m/176132-slow-cooker-buffalo-chicken-sandwiches-DDMFS-4x3-340-8946a0eef3a242e18746425348cd17dc.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-gray-400 text-xl '>From Plate to Purpose: Harnessing the Power of Food Sharing for Social Good </h1>
                            <NavLink to={'/availableFoods'}>
                                <button className="relative inline-block px-4 py-2 font-medium group">

                                <span className=" text-yellow-300 btn btn-success ">Read More</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-80"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/Ph6ZLyy/Vegetable-Soup-main.webp')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-blue-300 text-xl'>Ending Hunger, Building Hope: The Impact of Food Sharing Programs Worldwide</h1>
                            <NavLink to={'/availableFoods'}><button className="relative inline-block px-4 py-2 font-medium group">
                            <span className=" text-yellow-300 btn btn-success ">Read More</span>
                            </button></NavLink>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

