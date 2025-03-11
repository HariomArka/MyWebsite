import Layout from "@/app/layout"

export default function Home() {
  return (
    <div className="p-6 text-center">
      {/* <h1 className='text-5xl italic  text-yellow-800 mb-4'>Welcome Guys, What's Going on ?</h1> */}
      <h1 className="text-5xl italic  font-serif pb-3">Welcome Guys, What's Going on ?</h1>
      <div className="flex items-center gap-[20px]">
        <div className="w-[50%] bg-green-300 h-[400px] ">
          <img src="/iitkgp.jpg" alt="IIT KGP" />
        </div>
        <div className="w-[50%] text-justify">
          <p className="p-2">Let's talk about me here. </p>
          <p className="p-2">I am a KGPian 2027. My name is Arka Ghosh. I am persuing my B.Tech degree from IIT Kharagpur since 2023. I am a student of the department of Electrical Engineering, enrolled in its B.Tech course of Instrumentation Engineering. </p>
          <p className="p-2">I am interested in Web Development and DSA until I grow my interest in others like, finance or Data.</p>
          <p className="p-2">That's not all for me, there are many more. But that's all for now. You can reach me through various social media platforms to know more. Lets begin..... </p>
        </div>
      </div>
    </div>
  );
}
