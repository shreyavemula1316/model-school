import React from 'react';
import Slider from "react-slick";
import SlideItem from './SlideItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DescriptionSection from './DescriptionSection';

const slides = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg",
    caption: "School"
  },
  {
    src: "https://wallpapers.com/images/hd/cute-teacher-35owbvzlpeujaq7t.jpg",
    caption: "Dynamic and well qualified teaching faculty"
  },
  {
    src: "https://e0.pxfuel.com/wallpapers/736/203/desktop-wallpaper-college-student-student-learning-classroom-class-room-job-course-education-school-training.jpg",
    caption: "Global perspective to CBSE curriculum"
  },
  {
    src: "https://images.pexels.com/photos/10638069/pexels-photo-10638069.jpeg?cs=srgb&dl=pexels-ron-lach-10638069.jpg&fm=jpg",
    caption: "Modern and innovative learning environments"
  },
  {
    src: "https://c0.wallpaperflare.com/preview/456/435/782/book-read-student-students.jpg",
    caption: "Library"
  },
  {
    src: "https://wallpaperboat.com/wp-content/uploads/2020/10/30/58688/graduation-05-640x360.jpg",
    caption: "Student achievements"
  }
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
  };

  return (
    <div className="relative px-4 py-8 mx-auto mt-[10px]">
      <Slider {...settings} className="relative mb-8">
        {slides.map((slide, index) => (
          <SlideItem key={index} src={slide.src} caption={slide.caption} />
        ))}
      </Slider>
      <DescriptionSection/>
    </div>
  );
};

export default Banner;
