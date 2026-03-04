import React from 'react'


const testimonials = [
  {
    name: "Daniel Carter",
    role: "Product Manager",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "This platform streamlined our entire workflow. From planning to deployment, everything feels faster and more organized than ever before.",
  },
  {
    name: "Sophia Bennett",
    role: "UI/UX Designer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "The interface is beautifully designed and incredibly intuitive. It helps our team stay focused and productive without unnecessary complexity.",
  },
  {
    name: "James Walker",
    role: "Software Engineer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "The performance and reliability are outstanding. We've reduced bugs significantly and improved release cycles after switching to this tool.",
  },
];
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
     <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>  
        {/* lef side of header */}
        
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from professionals who trust our platform to power their
            workflow.
          </p>
        </div>
        {/* <div></div> */}
        {/* right side testimonials */}
        <div className=' lg:w-1/2 w-full '> 
        <div className='space-y-6 sm:space-y-8'>
          {testimonials.map((testimonials,key)=>(
            <div key={key }  className=' bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl  sm:rounded-2xl'>
              <div className=' flex items-start space-x-3 sm:space-x-4'>
                <div className='flex-shrink-0'>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                </div>
                <div className='flex-grow'>
                  <p className='text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>
                    {testimonials.content}
                  </p>
                  <div className='flex items-center space-x-2 sm:space-x-3'>
                    <img src={testimonials.image} alt={testimonials.name} className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' />
                     <div>
                    <h4 className='font-semibold text-white text-sm sm:text-base'>{testimonials.name}</h4>
                    <p className='text-xs sm:text-sm text-gray-400'>{testimonials.role}</p>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;