import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import useTopClasses from "../../../Hooks/useTopClasses";
import { Link } from "react-router-dom";

const TopClasses = () => {
  const [topClasses] = useTopClasses();

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {topClasses?.map((cls) => (
          <SwiperSlide key={cls._id}>
            {" "}
            {/* Add a unique key to each slide */}
            <div className="relative h-72">
              <div className="absolute "></div>
              <img
                className="h-full w-full object-cover "
                src={cls?.classImage}
                alt=""
              />
              <div className="absolute flex items-center justify-between bottom-0 text-black w-full p-5  bg-opacity-60 bg-black">
                <div>
                  {cls?.className && (
                    <h1 className="text-fuchsia-500 text-md md:text-2xl  font-bold">
                      {cls?.className}
                    </h1>
                  )}
                  <p className="text-xs md:text-lg text-white">
                    <span className="text-fuchsia-500">Instructor:</span>{" "}
                    {cls?.instructorName}
                  </p>
                  <p className="text-indigo-100">
                    <span className="text-fuchsia-500">Price:</span> ${cls?.price}
                  </p>
                </div>
                <Link to="/allClasses">
                  <button className="btn text-fuchsia-500 rounded-full btn-outline ml-5">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="bg-indigo-200">
          <Link to="/allClasses">
            <button className="text-fuchsia-500 text-2xl font-bold mx-auto mt-32 flex items-center justify-center gap-3">
              Show All <FaArrowRight></FaArrowRight>{" "}
            </button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopClasses;
