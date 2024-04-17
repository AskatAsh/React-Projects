import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
import './Slider.css';
// import required modules
import { EffectCoverflow } from 'swiper/modules';


const Slider = () => {
    return (
        <section className="my-14">
            {/* title and get in touch button */}
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold my-5">It&apos;s time to celebrate! the best <span className="text-yellow-500">event organizers</span></h1>
                <Link to="/contact" className="btn bg-[#2A3140] rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold mt-5">Get in Touch <BsArrowUpRightCircle className="text-xl" />
                </Link>
            </div>

            {/* image slider using swiper js */}
            <Swiper
                effect={'coverflow'}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src="https://img.freepik.com/free-photo/view-3d-cinema-theatre-room_23-2150866033.jpg?t=st=1700724662~exp=1700728262~hmac=a6fe73b955a7c2cdb2e5ad1fe110a77974a4d9d1ca0493b33c4105f1e8788341&w=360"
                        alt="image of trade show" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951439.jpg?t=st=1700724729~exp=1700728329~hmac=094f855bcc633a598a9d89091cb9051d1419fbd068ae7def7ffecc8a612c30b6&w=360"
                        alt="image of business meeting" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951253.jpg?t=st=1700724862~exp=1700728462~hmac=7d6b0719f2ab8016481401616aa7146fbcc986e59a3e5968afaa4c3d32cb7c0e&w=360"
                        alt="image of seminar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/view-3d-cinema-theatre-room_23-2150866033.jpg?t=st=1700724662~exp=1700728262~hmac=a6fe73b955a7c2cdb2e5ad1fe110a77974a4d9d1ca0493b33c4105f1e8788341&w=360"
                        alt="image of award ceremony" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/business-entrepreneur-man-presenting-company-statistics-using-tablet-financial-presentation_482257-4608.jpg?w=360&t=st=1700725153~exp=1700725753~hmac=066adeb9a26675aef36a02ee093083ffe2a9cb06a7cd11664623d300990448d2"
                        alt="image of product showcase" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/colleagues-having-fun-business-event_23-2149370499.jpg?w=360&t=st=1700725269~exp=1700725869~hmac=7627837a5ceb0e5a7eaf87df11058b1e7cdcf7608fd4df891c965fa30f54768c"
                        alt="image of team building wordshop" />
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Slider;