import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Example = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface TiltCardProps {
    className?: string;
    skill?: string;
}

// const TiltCard = ({ className = "", skill }: TiltCardProps) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const xSpring = useSpring(x);
//   const ySpring = useSpring(y);
//   const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
//     const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
//     const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
//     const rY = mouseX / width - HALF_ROTATION_RANGE;
//     x.set(rX);
//     y.set(rY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transformStyle: "preserve-3d", transform }}
//       className={`relative h-36 w-72 rounded-xl transition-all duration-300 bg-gradient-to-br from-pink-500 to-purple-500 dark:from-pink-800 dark:to-purple-800 shadow-xl hover:shadow-2xl ${className}`}
//     >
//       <div
//         style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
//         className="absolute inset-4 grid place-content-center rounded-xl bg-white dark:bg-gray-900 shadow-inner dark:shadow-gray-800 transition-colors"
//       >
//         <p
//           style={{ transform: "translateZ(50px)" }}
//           className="text-center text-2xl font-bold text-gray-800 dark:text-white"
//         >
//           {skill || "Skill Name"}
//         </p>
//       </div>
//     </motion.div>
//   );
// };


const TiltCard = ({className, skill}:TiltCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-36 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 dark:from-indigo-800 dark:to-violet-800 shadow-xl hover:shadow-2xl ${className}"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg dark:bg-gray-900 shadow-inner dark:shadow-gray-800 transition-colors"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100"
        >
        {skill || "Skill Name"}
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;