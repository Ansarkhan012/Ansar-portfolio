import React from 'react'
import Image from "next/image";


export default function page() {
  return (
    <>
 <section className="flex max-h-screen flex-col md:flex-row items-center justify-between gap-10 py-16">
  
  {/* Left Content */}
  <div className="flex-1 space-y-5">
    <h1 className="text-6xl md:text-8xl uppercase">
      Info
    </h1>

    


    <p className="text-xl md:text-2xl font-bold leading-tight">
      I’m <span className="text-primary">Ansar</span>, an independent Web Developer creating modern, high-performance websites that help brands stand out and
      grow online.
    </p>

    <p className="text-xl md:text-2xl font-bold leading-tight">
      Originally from Pakistan, I focus on turning ideas into clean, user-friendly,
      and scalable digital experiences. I enjoy working with individuals,
      startups, and businesses that want more than just an average website.
    </p>

    <p className="text-xl md:text-2xl font-bold leading-tight">
      I specialize in frontend web development, user-centered design, and
      responsive websites, ensuring every project looks professional, loads fast,
      and delivers real value.
    </p>
  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/images/ansar.png"   // apni image ka path
      alt="Ansar Web Developer"
      width={420}
      height={420}
      className="rounded-2xl object-cover mt-20 shadow-lg"
      priority
    />
  </div>

</section>

    </>
  )
}
