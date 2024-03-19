import { Links } from "@/data/enums"


export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">For entrepreneurs by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#637ee0] to-[#d699ed]">entrepreneurs</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Master the art of fundraising with top 1% speakers in a 6-week program. Connect with fellow visionaries, and redefine what’s possible for your business.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <p className="w-full text-3xl font-bold sm:w-auto text-center">April 25th - May 31st</p>
                <p className="w-full my-2 text-3xl text-[#d966ed] font-bold sm:w-auto text-center">100% Free</p>
                <div>
                  <a className="rounded-3xl btn text-[#637EE0] bg-white border-[#637EE0] hover:text-white hover:bg-[#637EE0] focus:bg-[#3F61AA] focus:text-white duration-150 w-full mb-4 sm:w-auto sm:mb-0" href={Links.JoinLink} target="_blank" rel="noopener">Discover more</a>
                </div>
                {/* <a className="rounded-3xl btn text-[#d699ed] bg-white border-[#d699ed] border hover:bg-[#d699ed] hover:text-white duration-150 w-full sm:w-auto sm:ml-4" href="#0">Discover More</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}