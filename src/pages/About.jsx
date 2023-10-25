import aboutUs from '../assets/about-us.png';
import checkMark from '../assets/check-mark.svg';
import aboutImg from '../assets/about.png'

const About = () => {

    return (
        <div className='pt-16'>
             <div className="">
                <div className="flex relative items-center justify-center">
                    <img src={aboutUs} alt="" />
                    <div className="absolute text-center -mt-10">
                        <h1 className="text-7xl text-white font-bold">About Us</h1>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default About;