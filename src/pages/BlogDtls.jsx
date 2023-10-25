import blogDtls from '../assets/blog-details.png';
import helpingHand from '../assets/helping-hand.png';
import blogDtls2 from '../assets/blog-details-2.png';
import blogDtls1 from '../assets/blog-details-1.png';

const BlogDtls = () => {

    return (
        <div className='pt-20'>
            <div className="">
                <div className="flex relative items-center justify-center">
                    <img src={blogDtls} alt="" />
                    <div className="absolute text-center -mt-5">
                        <h1 className="text-7xl text-white font-bold">Blog Details</h1>
                    </div>
                </div>
            </div>
            <div className="my-20 mx-20">
                <div className="flex w-full justify-between">
                    <div className="w-3/4 mr-10">
                        <h1 className='text-3xl font-semibold mb-6'>Help to get water in Africa</h1>
                        <p>Italy is a country located in Southern Europe, bordered by France, Switzerland, Austria, and Slovenia to the north. It is known for its rich history, culture, cuisine, and stunning natural landscapes. Italy has a population of over 60 million people and is divided into 20 regions, each with its own unique identity and traditions. The capital of Italy is Rome, which is home to iconic landmarks such as the Colosseum, the Pantheon, and the Trevi Fountain. Other major cities in Italy include Milan, Florence, Venice, and Naples. Italy's official language is Italian, and the country's currency is the Euro. Italy has a Mediterranean climate, with hot summers and mild winters, making it a popular destination for tourists seeking sunshine and warmth. The country is renowned for its delicious cuisine, which includes pizza, pasta, gelato, and wine. Italian fashion is also world-famous, with Milan being one of the fashion capitals of the world.</p>
                      <div className="flex gap-3 mt-3">
                      <img src={blogDtls1} alt="" />
                        <img src={blogDtls2} alt="" />
                      </div>
                      <p className='mt-3'>Italy is a country located in southern Europe, known for its rich history, beautiful architecture, stunning landscapes, delicious cuisine, and vibrant culture. The country is home to some of the world's most iconic landmarks, such as the Colosseum, the Leaning Tower of Pisa, and the Vatican City. Italy has a population of over 60 million people and is divided into 20 regions, each with its own unique character and traditions. The capital city of Italy is Rome, which is also the country's largest city. Other major cities include Milan, Naples, Turin, Florence, and Venice. Italy has a Mediterranean climate, which means that summers are hot and dry, and winters are mild and rainy. The country is famous for its beautiful coastlines and beaches, as well as its picturesque countryside, including the rolling hills of Tuscany and the rugged mountains of the Alps.</p>
                      <h1 className='text-3xl mt-4 font-semibold mb-3'>Photo Gallery</h1>
                      <img src="https://i.ibb.co/g6d0LVr/Screenshot-2023-10-24-203428.png" alt="" />
                    </div>
                    <div className="">
                        <img src={helpingHand} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDtls;