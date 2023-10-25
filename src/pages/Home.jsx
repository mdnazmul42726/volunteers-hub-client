import bannerImg from '../assets/v-banner.png'
import aboutImg from '../assets/about.png'
// import abouts from '../assets/sec-sub-title-elems.png';
import checkMark from '../assets/check-mark.svg';
import achievment from '../assets/achievment.png';

const Home = () => {

    return (
        <div className="">
            {/* banner */}
            <div className="">
                <div className="flex relative items-center justify-center">
                    <img src={bannerImg} alt="" />
                    <div className="absolute text-center -mt-10">
                        <h1 className="text-7xl text-white font-bold">Empowering Connections, <br /> Inspiring Change</h1>
                        <p className='text-xl text-gray-200 mt-5'>Bringing Together Volunteers, Communities, and Moderators to Forge Strong Bonds, Drive <br /> Collective Impact, and Create Lasting Change</p>
                        <div className="mt-5">
                            <button className='bg-[#FF6045] rounded-sm px-4 py-1 text-white font-semibold'>Check Our Events</button>
                            <button className='bg-transparent border py-1 px-3 ml-3 rounded-sm text-white font-semibold'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* about */}
            <div className="my-20 mx-16">
                <div className=" flex w-full gap-10">
                    <div className="w-1/2">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="mt-28 w-1/2">
                        <div className="flex">
                            <p className='text-xl text-[#FF6045] font-semibold'>About Us</p>
                        </div>
                        <h1 className='text-3xl font-semibold mt-1'>Our Expertise: Delivering Results <br /> for Your Goals</h1>
                        <p className='mt-3'>At VolunteersHUB we're passionate about helping volunteers and communities succeed. Our team of experts has years of <br /> experience in contributing to various social causes, and other key areas of volunteering.</p>
                        <div className="flex mt-6 gap-3">
                            <img src={checkMark} alt="" />
                            <p className='text-xl'>Facilitated 27000+ hours of volunteering</p>
                        </div>
                        <div className="flex mt-4 gap-3">
                            <img src={checkMark} alt="" />
                            <p className='text-xl'>Organized 3800+ successful events</p>
                        </div>
                        <div className="flex mt-4 gap-3">
                            <img src={checkMark} alt="" />
                            <p className='text-xl'>Raised funds for 500+ events</p>
                        </div>
                        <div className="">
                            <button className='bg-[#1F3155] text-white px-4 mt-5 rounded-sm ml-3 py-2 font-semibold'>LEARN MORE</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* caruasol */}
            <div className="w-11/12 mt-32 mx-auto">
                <div className="">
                    <h3 className='text-xl font-semibold text-[#FF6045]'>Our Recent Work</h3>
                    <h1 className='text-4xl font-semibold mb-3'>Explore Our Recent <br /> Work Projects</h1>
                </div>

                <div className="carousel  w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/s5bGhjY/Screenshot-2023-10-24-155320.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/QN1HPd9/Screenshot-2023-10-24-155344.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Wn6Cb2B/Screenshot-2023-10-24-155419.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* xxxxx */}
            <div className="mt-32 justify-center flex">
                <img className='w-[90%]' src={achievment} alt="" />
            </div>
            <div className="h-[400px] -mt-56 bg-[#1F3155]">
                <div className="flex justify-center gap-40 ">
                    <div className="pt-72">
                        <h1 className='text-4xl font-bold text-white'>8600<span className='text-[#FF6045]'>+</span> </h1>
                        <h1 className='text-xl text-white '>Events Completed</h1>
                    </div>
                    <div className="pt-72">
                        <h1 className='text-4xl font-bold text-white'>680<span className='text-[#FF6045]'>+</span> </h1>
                        <h1 className='text-xl text-white '>People Served</h1>
                    </div>
                    <div className="pt-72">
                        <h1 className='text-4xl font-bold text-white'>102<span className='text-[#FF6045]'>+</span> </h1>
                        <h1 className='text-xl text-white '>Expert People</h1>
                    </div>
                    <div className="pt-72">
                        <h1 className='text-4xl font-bold text-white'>7430<span className='text-[#FF6045]'>+</span> </h1>
                        <h1 className='text-xl text-white '>Active Volunteers</h1>
                    </div>
                </div>
            </div>
            {/* xxxxx */}
            <div className="w-11/12 mt-32 mx-auto">
                <div className="">
                    <h3 className='text-xl font-semibold text-[#FF6045]'>Our Blogs</h3>
                    <h1 className='text-4xl font-semibold mb-3'>News & Articles</h1>
                </div>

                <div className="carousel  w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/yP6Qgkf/Screenshot-2023-10-24-170031.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/5RJXdH5/Screenshot-2023-10-24-170145.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Gct83Hn/Screenshot-2023-10-24-170206.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;