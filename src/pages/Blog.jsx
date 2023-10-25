import { Link } from 'react-router-dom';
import article1 from '../assets/article-1.png';
import article2 from '../assets/article-2.png';
import article3 from '../assets/article-3.png';
import blogs from '../assets/blogs.png';

const Blog = () => {

    return (
        <div className='pt-16'>
            <div className="">
                <div className="flex relative items-center justify-center">
                    <img src={blogs} alt="" />
                    <div className="absolute text-center -mt-5">
                        <h1 className="text-7xl text-white font-bold">Blogs</h1>
                    </div>
                </div>
            </div>

            <div className="mx-20 my-20 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                {/* card */}
                <div className=" border bg-base-100 ">
                    <figure><img src={article1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                          <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={article2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                        <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                           
                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={article3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                        <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                           
                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={article1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                        <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                           
                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={article2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                        <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                           
                        </div>
                    </div>
                </div>
                <div className=" border  bg-base-100 ">
                    <figure><img src={article3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>March 23, 2019</p>
                        </div>
                        <h2 className="card-title">
                            Policy to Balance Development and Conservation Finalized
                        </h2>
                        <p className='text-gray-400'>I must say I was thoroughly impressed. The website is visually appealing and user-friendly</p>
                        <div className="card-actions justify-start">
                        <Link to={"/blog_details"}> <p className='underline'>Read More</p></Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;