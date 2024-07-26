import React from "react";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Resources = () => {
  const images = [
    "https://png.pngtree.com/background/20211217/original/pngtree-school-library-picture-image_1558719.jpg",
    "https://edtechmagazine.com/k12/sites/edtechmagazine.com.k12/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/201811/Untitled-2_1.png.jpg?itok=9R6FTAxF",
    "https://png.pngtree.com/background/20230528/original/pngtree-empty-student-lab-in-high-school-science-class-picture-image_2780987.jpg"
  ];

  return (
    <section className="py-16 px-4 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Carousel */}
        <div className="mb-12">
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="relative h-64">
                <img
                  src={src}
                  alt={`Educational Resource ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Educational Resources Section */}
        <h3 className="text-4xl font-semibold text-center mb-12">Educational Resources</h3>
        <div className="space-y-4">
          <p className="text-lg text-gray-800">
            Our resources include digital classrooms, interactive learning modules, and various online educational platforms to enrich the learning experience.
          </p>
          <p className="text-lg text-gray-800">
            We ensure that students have access to the best tools and facilities to excel academically and develop essential skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
