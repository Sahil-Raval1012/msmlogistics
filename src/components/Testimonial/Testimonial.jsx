import React from "react";

const testimonialData = [
  {
    name: "Sahil Raval",
    image: "",
    description: "MSMTransLink has been a game-changer for our logistics operations. Their team is highly professional, and their tracking system ensures we always know where our shipments are. We've reduced delays by over 30% since partnering with them. Highly recommended!",
    aosDelay: "0",
  },
  {
    name: "Nandan Kothari",
    image: "",
    description: "We were impressed by MSMTransLink’s commitment to meeting deadlines and ensuring the safety of our goods. Their customer service team is always available to address our concerns promptly. Their reliability makes them stand out in the industry.",
    aosDelay: "300",
  },
  {
    name: "Viral Rathod",
    image: "",
    description: "From start to finish, MSMTransLink exceeded our expectations. Their logistics solutions are not only efficient but also cost-effective. Partnering with them has allowed us to focus more on growing our business rather than worrying about transportation challenges.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
            
              className="text-3xl font-semibold text-center text-secondary sm:text-4xl font-serif"
            >
              What our client's say about us!
            </p>
            <p className="text-center sm:px-44">
            At MSMTransLink, our clients are at the heart of everything we do. We pride ourselves on delivering reliable, efficient, and tailored logistics solutions that empower businesses to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                // data-aos="fade-up"
                // data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 text-secondary-200 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-3xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center text-secondary-100 font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
