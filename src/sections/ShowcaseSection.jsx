import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  // Refs for glow cards
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center pb-10">
          Developer Projects
        </h2>
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            {/* Image Section */}
            <a
              href="https://github.com/menon-abhinav"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="image-wrapper">
                <img src="/images/dev-project-1.jpeg" alt="EchoHire" />
              </div>
            </a>

            {/* Glow Card Section */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              onMouseMove={handleMouseMove(0)}
              className="card card-border relative overflow-hidden rounded-xl p-8 mt-5"
            >
              <div className="glow"></div>
              <div className="text-content space-y-4">
                <h2 className="text-white-50 md:text-xl">
                  EchoHire - Your Personal AI Interview Coach (Currently
                  Building)
                </h2>
                <p>
                  EchoHire is a real-time AI voice platform designed to help
                  users practice and improve their interview skills through
                  natural, conversation-based mock sessions. It's especially
                  useful for individuals who have struggled with important
                  interviews in the past and want a safe, realistic way to build
                  confidence and sharpen their communication. By simulating real
                  interview scenarios with AI-driven voice agents, EchoHire
                  offers an engaging way to prepare for both technical and
                  behavioral interviews.
                </p>

                <p>
                  Built with Next.js, TailwindCSS, Firebase, Vapi, and Google
                  Gemini, the platform features secure authentication, dynamic
                  session generation, and real-time voice interactions.
                  Leveraging the power of serverless functions and AI workflows,
                  EchoHire delivers a seamless, scalable experience that adapts
                  to users' needs and provides instant feedback to help them
                  level up their performance.
                </p>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2 */}
            <div className="project" ref={libraryRef}>
              <a
                href="https://github.com/menon-abhinav/VAMS-Fitness-FullStack-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/dev-project-2.jpg"
                    alt="Fitness Management System"
                  />
                </div>
              </a>

              <div
                ref={(el) => (cardRefs.current[1] = el)}
                onMouseMove={handleMouseMove(1)}
                className="card card-border relative overflow-hidden rounded-xl p-8 mt-5"
              >
                <div className="glow"></div>
                <div className="text-content space-y-4">
                  <h2 className="text-white-50 md:text-xl">
                    Fitness Management System
                  </h2>
                  <p>
                    Fitness Management System is a web application built with
                    Laravel, PHPMyAdmin, and Bootstrap to manage fitness
                    content, user queries, and workouts. Featuring a
                    mobile-friendly design and hosted on Heroku, it includes
                    dynamic blogs, videos, and an interactive query section to
                    boost user engagement and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project" ref={ycDirectoryRef}>
              <a
                href="https://github.com/menon-abhinav/Employee-Leave-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img
                    src="/images/dev-project-3.jpeg"
                    alt="Employee Leave Management System"
                  />
                </div>
              </a>

              <div
                ref={(el) => (cardRefs.current[2] = el)}
                onMouseMove={handleMouseMove(2)}
                className="card card-border relative overflow-hidden rounded-xl p-8 mt-5"
              >
                <div className="glow"></div>
                <div className="text-content space-y-4">
                  <h2 className="text-white-50 md:text-xl">
                    Employee Leave Management System
                  </h2>
                  <p>
                    Employee Leave Management System is a desktop application
                    built with JavaFX, Java, and PostgreSQL that streamlines
                    leave requests, approvals, and history tracking. Designed
                    with MVC architecture and integrated with automated email
                    alerts, it ensures efficient data handling and enhances
                    communication across the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
