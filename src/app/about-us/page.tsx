import AppLayout from "@/components/Layout";
import Image from "next/image";

const Aboutus = () => {
  return (
    <AppLayout>
      <div className="font-suse md:text-lg text-base space-y-4">
        <p className="text-center test-sm md:text-base">
          <strong>Dansam Travels</strong> is a dedicated educational travel
          agency based in Nigeria, specializing in facilitating access to
          quality education for Nigerian students in Russia, Belarus, and China.
          We bridge the gap between aspiring students and international
          educational institutions, providing comprehensive support services
          that simplify the often complex process of studying abroad. We
          understand the unique challenges and exciting opportunities that come
          with international education, and we are dedicated to empowering
          students to achieve their academic goals in a supportive and enriching
          environment.
        </p>
        <div className="flex items- flex-col md:flex-row gap-4 h-full">
          <div className="space-y-1">
            <p className="test-base md:text-lg">
              <strong>Our Mission</strong> is to empower students and
              individuals to achieve their academic aspirations by providing
              reliable and comprehensive educational travel services to Russia,
              Belarus, and China.
            </p>
            <p className="test-base md:text-lg">
              <strong>Our vision</strong> is to be the leading educational
              travel agency in Nigeria, recognized for our expertise,
              personalized service, and commitment to student success
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-[30%] flex md:items-center">
            <Image src="/expandhorizon.png" alt="" width={450} height={450} />
          </div>
          <div className="md:w-[70%]">
            <p className="text-center font-bold font-mulish text-xl md:text-3xl">
              About the Founder/CEO
            </p>
            <div className="text-justify">
              <p className="font-bold font-mulish text-lg md:text-2xl">
                Personal Profile
              </p>{" "}
              <p>
                Ayobami Samuel is a transformative leader, seamlessly merging
                the worlds of travel and education to foster global
                understanding and growth. As the founder of DanSam Travels &
                Educonsult, Samuel crafts immersive travel experiences that go
                beyond sightseeing, bridging cultural divides and inspiring new
                perspectives in travelers. He believes that firsthand cultural
                exchange is a powerful catalyst for personal and intellectual
                development. As an education consultant, Samuel empowers both
                educators and learners. He works with educational institutions
                to develop innovative programs that promote academic excellence
                and equip students with the skills they need to thrive in a
                globalized world. He also provides personalized guidance to
                students, helping them navigate the complexities of
                international education and achieve their academic aspirations.
                With a unique blend of industry expertise, a deep understanding
                of cultural dynamics, and a genuine passion for lifelong
                learning, Ayobami Samuel continues to innovate and inspire,
                shaping the future of travel and education, one transformative
                experience at a time.
              </p>
            </div>
            <div className="text-justify">
              <p className="font-bold font-mulish text-lg md:text-2xl">
                Early Life
              </p>
              <p>
                Ayobami Samuel, born in Ibadan, Oyo State, Nigeria, to Nigerian
                parents, is the second child in a family of four. He attended
                primary and secondary school in Oyo State before pursuing higher
                education at Financial University under the Government of the
                Russian Federation, where he is currently studying Business
                Analysis, Taxes and Audits. His multicultural upbringing and
                international academic background have played a pivotal role in
                shaping his leadership style and innovative vision for travel
                and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Aboutus;
