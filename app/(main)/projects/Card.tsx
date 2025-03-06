import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AirPods",
    description: "Apple AirPods 二代",
    image: "/card/air.png", // 确保你有正确的图片路径
    link: "https://screenity.io",
  },
  {
    title: "Iphone13 Pro",
    description: "原峰蓝",
    image: "/card/iphone.png",
    link: "https://github.com/alyssaxuu/ecosnap",
  },  
  {
    title: "MacBook",
    description: "M2.",
    image: "/card/macbook.png",
    link: "https://getlater.app",
  },
  {
    title: "Build Reverse",
    description: "Bike.",
    image: "/card/vfv.png",
    link: "https://getlater.app",
  },
  {
    title: "Shokz",
    description: "Shokz",
    image: "/card/shokz.png",
    link: "https://github.com/alyssaxuu/ecosnap",
  },
  {
    title: "Spark",
    description: "Aoo",
    image: "/hero-landing.avif",
    link: "https://github.com/alyssaxuu/ecosnap",
  },
  
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-black text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
          {/* 图片链接 */}
          <Link href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-lg cursor-pointer hover:opacity-80"
            />
          </Link>
          {/* 文字部分 */}
          <div className="mt-4">
            <Link href={project.link} target="_blank">
              <h3 className="text-xl font-bold hover:underline cursor-pointer">{project.title}</h3>
            </Link>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}