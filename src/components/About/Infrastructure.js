import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imageUrls = [
  "https://www.sobtispublicschool.com/images/infra1.jpg",
  "https://www.vedasinternationalschool.com/wp-content/uploads/2018/04/classroom.jpg",
  "https://www.ashokaschools.org/icse-wadala/image-basket/physics-lab-ashoka-school-1546012677.jpg",
  "https://www.stlukesschoolhp.com/images/lib_new.jpg", 
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2019/12/Desk/2019_12$largeimg_1996425410.jpg"
];

const Infrastructure = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our Infrastructure</h3>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1 lg:pr-8">
            <p className="text-lg text-gray-700 mb-4">
              Our state-of-the-art facilities include well-equipped classrooms, modern laboratories, a well-stocked library, and spacious playgrounds. We strive to provide a learning environment that inspires and supports every student.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From advanced technology in classrooms to recreational areas that promote physical well-being, our infrastructure is designed to cater to the diverse needs of our students.
            </p>
          </div>
          <div className="flex-shrink-0 mb-6 lg:mb-0 w-full lg:w-1/2">
            <Slider {...settings}>
              {imageUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Infrastructure ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
