// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AboutMe = () => {
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(imageRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 3,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 80%",
//       },
//     });

//     gsap.from(contentRef.current, {
//       opacity: 0,
//       x: 50,
//       duration: 2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: contentRef.current,
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <section
//       id="aboutme"
//       className="w-full flex justify-center items-center px-5 md:px-20 pt-20 "
//     >
//       {/* Outer Container */}
//       <div className="w-full max-w-7xl bg-black-50 rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10">
//         {/* Left: Profile Image */}
//         <div ref={imageRef} className="flex justify-center items-center">
//           <img
//             src="/images/Abhinav_Menon.jpg"
//             alt="Profile"
//             className="rounded-2xl shadow-md w-72 md:w-96 object-cover"
//           />
//         </div>

//         {/* Right: About Text */}
//         <div
//           ref={contentRef}
//           className="flex flex-col justify-center text-white md:text-left text-center space-y-6 max-w-2xl"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
//           <p className="text-lg">
//             Hey, I'm <span className="text-white-50">Abhinav Menon</span> — a
//             developer who loves building systems that are as fun to piece
//             together as they are to use. I recently graduated with a{" "}
//             <span className="text-white-50">
//               Master's degree in Computer Science
//             </span>{" "}
//             from Rochester Institute of Technology, and I’m always looking for
//             the next challenge that gets me thinking.
//           </p>
//           <p className="text-lg">
//             I approach software a lot like I approach a Rubik’s Cube: figure it
//             out one layer at a time, and keep tweaking until everything clicks.
//             Whether I’m working on a{" "}
//             <span className="text-white-50">Full-Stack</span> web app, designing{" "}
//             <span className="text-white-50">APIs</span>, or building a{" "}
//             <span className="text-white-50">Backend</span> that can actually
//             scale, I enjoy solving those little problems that stack up to
//             something big.
//           </p>
//           <p className="text-lg">
//             Along the way, I've also explored{" "}
//             <span className="text-white-50">Machine Learning</span> and{" "}
//             <span className="text-white-50">Computer Vision</span>, giving me
//             new ways to look at complex problems. But at the end of the day, my
//             real passion is simple: building cool, useful things that actually
//             make a difference.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import { useRef } from "react";

const AboutMe = () => {
  const aboutRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = aboutRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <section
      className="w-full flex justify-center items-center px-5 md:px-20 py-20"
      id="aboutme"
    >
      <div
        ref={aboutRef}
        onMouseMove={handleMouseMove}
        className="card card-border rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 relative overflow-hidden"
      >
        {/* Glow Background */}
        <div className="glow" />

        {/* Left: Profile Image */}
        <div className="flex justify-center items-center">
          <img
            src="/images/Abhinav_Menon.jpg" // Your image path
            alt="Profile"
            className="rounded-2xl shadow-md w-72 md:w-96 object-cover"
          />
        </div>

        {/* Right: About Text */}
        <div className="flex flex-col justify-center text-white md:text-left text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg">
            Hey, I'm <span className="text-white-50">Abhinav Menon</span> — a
            developer who loves building systems that are as fun to piece
            together as they are to use. I recently graduated with a{" "}
            <span className="text-white-50">
              Master's degree in Computer Science
            </span>{" "}
            from Rochester Institute of Technology, and I’m always looking for
            the next challenge that gets me thinking.
          </p>
          <p className="text-lg">
            I approach software a lot like I approach a Rubik’s Cube: figure it
            out one layer at a time, and keep tweaking until everything clicks.
            Whether I’m working on a{" "}
            <span className="text-white-50">Full-Stack</span> web app, designing{" "}
            <span className="text-white-50">APIs</span>, or building a{" "}
            <span className="text-white-50">Backend</span> that can actually
            scale, I enjoy solving those little problems that stack up to
            something big.
          </p>
          <p className="text-lg">
            Along the way, I've also explored{" "}
            <span className="text-white-50">Machine Learning</span> and{" "}
            <span className="text-white-50">Computer Vision</span>, giving me
            new ways to look at complex problems. But at the end of the day, my
            real passion is simple: building cool, useful things that actually
            make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
