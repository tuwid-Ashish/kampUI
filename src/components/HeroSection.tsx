import OrbitingCircles from "@/components/ui/orbiting-circles";
import { IconArrowAutofitContent, IconArrowAutofitLeft, IconArrowRight, IconBrand4chan, IconBrandAndroid, IconBrandAngular, IconBrandAws, IconBrandBootstrap, IconBrandCss3, IconBrandGithub, IconBrandGitlab, IconBrandGolang, IconBrandHtml5, IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";
import { delay } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const OrbitIcon = [
    {
      icon: <IconBrandGitlab className="size-60 text-orange-200"/>,
      radius: 200,
      delay:32,
    },
    {
      icon: <IconBrandCss3 className="size-48 text-blue-500"/>,
      radius: 200,
      delay:59,
    },
    {
      icon: <IconBrandReact className="text-blue-500 size-72"/>,
      radius: 380,
      delay:94,
    },
    {
      icon: <IconBrandAws className="size-72 text-gray-400"/>,
      radius: 380,
      delay:23,
      },
      {
      },
      {
        icon: <IconBrandGolang className="text-blue-400 size-72"/>,
        radius: 510,
        delay:16,
      },
      {
    icon: <IconBrandNodejs className="text-green-400 size-72"/>,
    radius: 510,
    delay:30,
  },
  {
  },
  {
    icon: <IconBrandAndroid className="text-green-400 size-72"/>,
    delay:28,
    radius: 610,
     },
      {
    icon: <IconBrandHtml5 className="text size-72"/>,
    radius: 610,
    delay:82,
  },
      {
        icon: <IconBrandGithub className="text-green-400 size-72"/>,
        radius: 690,
        delay:50,
     },
      {
    icon: <IconBrandBootstrap className="text-purple-800 size-72" size={40}/>,
    radius: 690,
    delay:60,
     },
      {
     },
  
  ]
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
       
       <div className='relative z-10 p-10 w-full text-center'>
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-[#475467]">We’ve really sped up our workflow</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-gray-800 max-w-5xl mx-auto'> <span className="font-bold">We’ve just released a new update!</span> Check out the all new dashboard view. Pages and now load faster.you can try us for free for 30 days.
                Join 4,000+ companies already growing</p>
                <p className='mt-4 font-normal text-base md:text-lg text-gray-800 max-w-lg mx-auto'>
                Join 4,000+ companies already growing</p>
                <div className="mt-4 flex justify-center gap-2 w-full">
                    <Link href="/courses">
                    <button
                    className="bg-slate-200 rounded-lg text-black p-4 border-gray-400 border-2  dark:border-slate-800 flex "
                    >
                   <IconArrowRight/>  Start Learning Today
                    </button>
                    </Link>
                    <Link href="/courses">
                    <button
                    className="bg-purple-500 rounded-lg p-4 text-white  border-neutral-200 dark:border-slate-800"
                    >
                    Join Now
                    </button>
                    </Link>
                </div>
            </div>
          {OrbitIcon.map((item, index) => (
            <OrbitingCircles
            key={index}
              className="h-[50px] w-[50px] border-none bg-transparent "
              duration={20}
              delay={item.delay}
              radius={item.radius}
            >
              {item.icon}
            </OrbitingCircles>
          ))}
      
    </div>
  );
}
