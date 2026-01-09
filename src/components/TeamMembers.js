import SectionTitle from "./Common/SectionTitle";

import choose1 from "../images/team/team-1.jpg";
import choose2 from "../images/team/team-2.jpg";
import choose3 from "../images/team/team-3.jpg";
import choose4 from "../images/team/team-4.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaBasketballBall,
  FaShareAlt,
} from "react-icons/fa";

const membersData = [
  {
    id: 1,
    name: "John Doe",
    role: "Regional Manager",
    image: choose1,
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Medical Assistant",
    image: choose2,
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "President of Sales",
    image: choose3,
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Marketing Coordinator",
    image: choose4,
  },
];

const TeamMembers = () => {
  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="visa-category-layer absolute inset-0 bg-[#FAFAFA]"></div>

        <div className="max-w-7xl mx-auto ">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="text-center">
              <SectionTitle
                title="Expert Team Members"
                subtitle={<>Our Team at Your Service</>}
                isCenter={true}
              />
            </div>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {membersData.map((e) => {
              return (
                <div
                  key={e?.id}
                  className="relative group p-4 mx-4 sm:m-0 text-center bg-white rounded-full overflow-hidden transition-all duration-500"
                >
                  {/* Hover Fill Layer */}
                  <span className="absolute inset-x-0 top-0 h-0 bg-brand-600 transition-all duration-500 ease-in-out group-hover:h-full z-0 rounded-full" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Image */}
                    <figure className="relative mb-4">
                      <img
                        src={e?.image}
                        alt={e?.name}
                        className="mx-auto rounded-full transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Social Icons Wrapper */}
                      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2">
                        <div className="relative group/social">
                          {/* Main Share Icon */}
                          <span className="w-12 h-12 flex items-center justify-center bg-white text-brand rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-brand hover:text-white">
                            <FaShareAlt />
                          </span>

                          {/* Social Icons */}
                          <ul
                            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 flex flex-col gap-3 opacity-0 scale-90 pointer-events-none transition-all duration-300
                  group-hover/social:opacity-100
                  group-hover/social:scale-100
                  group-hover/social:pointer-events-auto"
                          >
                            <li className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand hover:text-white transition">
                              <FaFacebookF />
                            </li>
                            <li className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand hover:text-white transition">
                              <FaTwitter />
                            </li>
                            <li className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand hover:text-white transition">
                              <FaBasketballBall />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </figure>

                    {/* Text */}
                    <div className="pt-10 px-4 pb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-brand transition-colors duration-500 group-hover:text-white">
                        {e?.name}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-gray-500 transition-colors duration-500 group-hover:text-white/90">
                        {e?.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
