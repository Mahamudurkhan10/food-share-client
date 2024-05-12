

import 'swiper/css/bundle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


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
                            backgroundImage: "url('https://i.ibb.co/r2kRJK4/DJI-0013-1920x1080.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4  text-xl bg-gradient-to-r from-black via-green-600 to-black text-transparent bg-clip-text animate-gradient'>Art and craft encompass a wide range of creative activities</h1>
                            <button href="#_" className=" px-4 py-2 font-medium group">
                              
                                <span className=" text-white btn btn-outline ">Read More</span>
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-90"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/tKrH6nw/Interior3-1600x.webp')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-blue-300 text-xl '>Engaging in art and craft activities fosters innovation, problem-solving skills, and cognitive development</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/rcWBxhR/Gallery-Outside01-Copy1-1400x-3b2e36e9-3a3d-49d0-ab7b-c9f2a701b0c3-1600x.webp')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-blue-400 text-xl '>Art and craft projects provide opportunities for collaboration  </h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-80"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/1brzLXN/main-qimg-2afe5b42a0dfc442b3d596314609f33d.png')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-blue-300 text-xl'>Art and craft materials range from traditional mediums like paint</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

