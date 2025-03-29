import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiCode, BiPalette, BiRocket } from "react-icons/bi";
import avatar from '/avatar.jpg'
import "./App.css";

function App() {
  const services = [
    {
      icon: <BiCode className="text-4xl" />,
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using modern technologies.",
    },
    {
      icon: <BiPalette className="text-4xl" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences with modern design principles.",
    },
    {
      icon: <BiRocket className="text-4xl" />,
      title: "Performance Optimization",
      description:
        "Enhancing web application performance for optimal user experience.",
    },
  ];

  const skills = [
    { name: "Spring Boot", level: 90 },
    { name: "Angular", level: 85 },
    { name: "React", level: 85 },
    { name: "Note.js", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 space-y-6">
          <img
            src={avatar}
            alt="Profile"
            className="w-32 h-32  rounded-full mx-auto border-4 border-white shadow-xl"
          />
          <h1 className="text-5xl font-bold text-white">Tuan Dev</h1>
          <p className="text-xl text-gray-200">Full Stack Developer & UI/UX Designer</p>
          <div className="flex justify-center space-x-4">
            <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-400" />
            <FaGithub className="text-white text-2xl cursor-pointer hover:text-gray-400" />
            <FaFacebook className="text-white text-2xl cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
