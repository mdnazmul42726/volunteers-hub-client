import ecover from '../assets/events-cover.png';
import event1 from '../assets/event-1.png';
import event2 from '../assets/event-2.png';
import event3 from '../assets/event-3.png';
import event4 from '../assets/event-4.png';
import event5 from '../assets/event-5.png';
import event6 from '../assets/event-6.png';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className='pt-16 mb-52'>
            <div className="">
                <div className="flex relative items-center justify-center">
                    <img src={ecover} alt="" />
                    <div className="absolute text-center -mt-5">
                        <h1 className="text-7xl text-white font-bold">Events</h1>
                    </div>
                </div>
            </div>
            <div className="mx-20 my-20 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                <div className=" border bg-base-100 ">
                    <figure><img src={event1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                            <Link to={'/event_details'}><p className='underline'>Read More</p></Link>
                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={event2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                        <Link to={'/event_details'}><p className='underline'>Read More</p></Link>

                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={event3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                        <Link to={'/event_details'}><p className='underline'>Read More</p></Link>

                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={event4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                        <Link to={'/event_details'}><p className='underline'>Read More</p></Link>


                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={event5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                        <Link to={'/event_details'}><p className='underline'>Read More</p></Link>


                        </div>
                    </div>
                </div>
                <div className=" border bg-base-100 ">
                    <figure><img src={event6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p>09 September</p>

                        </div>
                        <div className="flex gap-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=''>9.00 AM - 7.00 PM Uttara</p>
                        </div>
                        <h2 className="card-title">
                        Help to get water in Africa
                        </h2>
                        <div className="card-actions justify-start mt-3">
                        <Link to={'/event_details'}><p className='underline'>Read More</p></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;