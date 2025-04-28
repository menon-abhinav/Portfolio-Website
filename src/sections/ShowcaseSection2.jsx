// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <h2 className="text-3xl md:text-5xl font-bold text-white text-center pb-10">
//           ML & Computer Vision Projects
//         </h2>
//         <div className="showcaselayout">
//           <div ref={rydeRef} className="first-project-wrapper">
//             <a
//               href="https://github.com/menon-abhinav/Interactive-Hand-Gesture-Based-Air-Hockey-Game"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <div className="image-wrapper">
//                 <img
//                   src="/images/ml-project-1.png"
//                   alt="Hand-Gesture Based Air Hockey Game"
//                 />
//               </div>
//             </a>
//             <div className="text-content">
//               <h2 className="text-white-50 md:text-xl">
//                 Hand-Gesture Based Air Hockey Game
//               </h2>
//               <p className="text-justify">
//                 Interactive Hand-Gesture Based Gaming is a real-time air hockey
//                 game powered by computer vision, where players control mallets
//                 using natural hand gestures captured through a webcam. Designed
//                 for gamers and tech enthusiasts looking for immersive, touchless
//                 interaction, the system introduces dynamic gameplay elements
//                 like activating goal barriers and central blockers using simple
//                 gestures such as a closed fist or open palm.
//               </p>
//               <p className="text-justify">
//                 Built with Python, OpenCV, Mediapipe, and cvzone, the project
//                 leverages a 21-point hand landmark model for precise hand
//                 tracking and custom gameplay logic. Real-time frame processing
//                 defines interaction zones, detects collisions, and enables
//                 smooth control, while NumPy enhances performance through
//                 optimized vector operations and motion smoothing. The result is
//                 an engaging and intuitive gaming experience that blends
//                 AI-driven hand recognition with classic arcade gameplay.
//               </p>
//             </div>
//           </div>

//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <a
//                 href="https://github.com/menon-abhinav/Smile_Mouth_Detection"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <div className="image-wrapper bg-[#FFEFDB]">
//                   <img
//                     src="/images/ml-project-2.jpg"
//                     alt="Facial Expression Detection"
//                   />
//                 </div>
//               </a>
//               <h2 className="text-white-50 md:text-xl">
//                 Facial Expression Detection
//               </h2>
//               <p className="text-justify">
//                 Facial Expression Detection System is a lightweight real-time
//                 solution built with TensorFlow Lite, Python, and C++ to classify
//                 smiles and mouth states for biometric and emotion-based
//                 applications. Using a multi-input pipeline of VGG16-based CNNs
//                 and 124-point landmarks enhanced with an attention mechanism,
//                 the system was optimized through quantization, pruning, and
//                 learning rate scheduling. Achieving 97.56% accuracy in mouth
//                 classification and 82.97% in smile detection, it demonstrates
//                 strong real-world readiness for integration into smart devices.
//               </p>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <a
//                 href="https://github.com/menon-abhinav/Gaze-Authentication-Against-Shoulder-Surfing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <div className="image-wrapper bg-[#FFE7EB]">
//                   <img
//                     src="/images/ml-project-3.webp"
//                     alt=" Gaze Gesture Authentication System Against Shoulder Surfing
//                 Attacks"
//                   />
//                 </div>
//               </a>
//               <h2 className="text-white-50 md:text-xl">
//                 Gaze Gesture Authentication System Against Shoulder Surfing
//                 Attacks{" "}
//                 <a
//                   href="https://ijsrem.com/download/gaze-gesture-authentication-system-against-shoulder-surfing-attacks/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline italic text-blue-400"
//                 >
//                   (Published)
//                 </a>
//               </h2>
//               <p className="text-justify">
//                 Gaze Gesture Authentication System is a real-time eye-tracking
//                 solution designed to prevent shoulder-surfing attacks by
//                 replacing traditional PIN entry with secure gaze gestures. Built
//                 using OpenCV, Dlib, and Haar Cascade classifiers, the system
//                 detects 68-point facial landmarks and leverages the Eye Aspect
//                 Ratio (EAR) technique for accurate blink detection. Achieving
//                 95% real-time gaze tracking accuracy and 98% effectiveness
//                 against unauthorized access, it demonstrates strong scalability
//                 for applications like drowsiness detection, AR/VR interactions,
//                 and secure biometric logins.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;

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
          ML & Computer Vision Projects
        </h2>

        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            {/* Image Section */}
            <a
              href="https://github.com/menon-abhinav/Interactive-Hand-Gesture-Based-Air-Hockey-Game"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="image-wrapper">
                <img
                  src="/images/ml-project-1.png"
                  alt="Hand-Gesture Based Air Hockey Game"
                />
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
                  Hand-Gesture Based Air Hockey Game
                </h2>
                <p className="text-justify">
                  Interactive Hand-Gesture Based Gaming is a real-time air
                  hockey game powered by computer vision, where players control
                  mallets using natural hand gestures captured through a webcam.
                  Designed for gamers and tech enthusiasts looking for
                  immersive, touchless interaction, the system introduces
                  dynamic gameplay elements like activating goal barriers and
                  central blockers using simple gestures such as a closed fist
                  or open palm.
                </p>
                <p className="text-justify">
                  Built with Python, OpenCV, Mediapipe, and cvzone, the project
                  leverages a 21-point hand landmark model for precise hand
                  tracking and custom gameplay logic. Real-time frame processing
                  defines interaction zones, detects collisions, and enables
                  smooth control, while NumPy enhances performance through
                  optimized vector operations and motion smoothing. The result
                  is an engaging and intuitive gaming experience that blends
                  AI-driven hand recognition with classic arcade gameplay.
                </p>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2 */}
            <div className="project" ref={libraryRef}>
              {/* Image Section */}
              <a
                href="https://github.com/menon-abhinav/Smile_Mouth_Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/ml-project-2.jpg"
                    alt="Facial Expression Detection"
                  />
                </div>
              </a>

              {/* Glow Card Section */}
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                onMouseMove={handleMouseMove(1)}
                className="card card-border relative overflow-hidden rounded-xl p-8 mt-5"
              >
                <div className="glow"></div>
                <div className="text-content space-y-4">
                  <h2 className="text-white-50 md:text-xl">
                    Facial Expression Detection
                  </h2>
                  <p className="text-justify">
                    Facial Expression Detection System is a lightweight
                    real-time solution built with TensorFlow Lite, Python, and
                    C++ to classify smiles and mouth states for biometric and
                    emotion-based applications. Using a multi-input pipeline of
                    VGG16-based CNNs and 124-point landmarks enhanced with an
                    attention mechanism, the system was optimized through
                    quantization, pruning, and learning rate scheduling.
                    Achieving 97.56% accuracy in mouth classification and 82.97%
                    in smile detection, it demonstrates strong real-world
                    readiness for integration into smart devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project" ref={ycDirectoryRef}>
              {/* Image Section */}
              <a
                href="https://github.com/menon-abhinav/Gaze-Authentication-Against-Shoulder-Surfing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img
                    src="/images/ml-project-3.webp"
                    alt="Gaze Gesture Authentication System Against Shoulder Surfing Attacks"
                  />
                </div>
              </a>

              {/* Glow Card Section */}
              <div
                ref={(el) => (cardRefs.current[2] = el)}
                onMouseMove={handleMouseMove(2)}
                className="card card-border relative overflow-hidden rounded-xl p-8 mt-5"
              >
                <div className="glow"></div>
                <div className="text-content space-y-4">
                  <h2 className="text-white-50 md:text-xl">
                    Gaze Gesture Authentication System Against Shoulder Surfing
                    Attacks{" "}
                    <a
                      href="https://ijsrem.com/download/gaze-gesture-authentication-system-against-shoulder-surfing-attacks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline italic text-blue-400"
                    >
                      (Published)
                    </a>
                  </h2>
                  <p className="text-justify">
                    Gaze Gesture Authentication System is a real-time
                    eye-tracking solution designed to prevent shoulder-surfing
                    attacks by replacing traditional PIN entry with secure gaze
                    gestures. Built using OpenCV, Dlib, and Haar Cascade
                    classifiers, the system detects 68-point facial landmarks
                    and leverages the Eye Aspect Ratio (EAR) technique for
                    accurate blink detection. Achieving 95% real-time gaze
                    tracking accuracy and 98% effectiveness against unauthorized
                    access, it demonstrates strong scalability for applications
                    like drowsiness detection, AR/VR interactions, and secure
                    biometric logins.
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
