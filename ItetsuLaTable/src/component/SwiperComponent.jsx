import  {Swiper} from "swiper/react";
import { Navigation, Pagination, A11y} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y' ;
import {useRef} from "react";
export default function SwiperComponent ({children}) {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            modules={[Navigation,Pagination,A11y]}
            navigation

            loop={true}
            slidesPerView={1}
            pagination={{clickable: true}}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            {children}

        </Swiper>
    )

}