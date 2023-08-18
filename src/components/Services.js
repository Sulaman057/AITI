
const Services = () => {
  return (
    <div className='py-12 md:py-6 flex flex-col items-center max-w-[1250px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px]'>
      <h2 >Our Services</h2>
      <h3 className="text-center">Elevating Your Business with Next-Generation IT Services</h3>

      <div className='grid grid-rows-2 grid-cols-3 gap-6 mt-14 2xl:gap-5 xl:grid-rows-3 xl:grid-cols-2 md:flex md:flex-col  '>

        {/* item One */}
        <div className=' p-8 row-start-1 col-start-1 row-end-3 col-end-2' style={{backgroundColor:"#0C242E"}}>
          <div className='w-8 h-8 bg-slate-300 mb-6' />
          <h3 className='mb-2'>Custom Software Development</h3>
          <p>Crafting tailor-made software solutions requires a deep understanding of your unique business objectives <span className="md:hidden"> and the challenges you face in your industry. Our dedicated team of experienced professionals collaborates closely with your organization to ensure that every aspect of the software aligns perfectly with your goals.<br/>
We believe that true efficiency and growth come from not just creating software, but from creating solutions that seamlessly integrate into your existing workflows and processes.</span></p>
        </div>

        {/* item Two */}
        <div className=' p-8 row-start-1 col-start-2 row-end-2 col-end-3' style={{backgroundColor:"#0C242E"}}>
          <div className='w-8 h-8 bg-slate-300 mb-6' />
          <h3 className='mb-2'>Cloud Solutions</h3>
          <p>Harnessing the power of cloud computing to drive scalability, security, and collaboration, while reducing operational complexities.</p>
        </div>

        {/* item Three */}
        <div className=' p-8 row-start-2 col-start-2 row-end-3 col-end-3' style={{backgroundColor:"#0C242E"}}>
          <div className='w-8 h-8 bg-slate-300 mb-6' />
          <h3 className='mb-2'>Artificial Intelligence</h3>
          <p>Unleashing the potential of AI to provide insights, automation, and predictive analytics, enabling data-driven decision-making.</p>
        </div>

        {/* item Four */}
        <div className=' p-8 row-start-1 col-start-3 row-end-2 col-end-4 xl:row-start-3 xl:col-start-1 xl:row-end-4 xl:col-end-2' style={{backgroundColor:"#0C242E"}}>
          <div className='w-8 h-8 bg-slate-300 mb-6' />
          <h3 className='mb-2'>Cybersecurity Solutions</h3>
          <p>Fortifying your digital assets with state-of-the-art security measures, safeguarding your business from ever-evolving cyber threats.</p>
        </div>

        {/* item Five */}
        <div className=' p-8 row-start-2 col-start-3 row-end-3 col-end-4 xl:row-start-3 xl:col-start-2 xl:row-end-4 xl:col-end-3' style={{backgroundColor:"#0C242E"}}>
          <div className='w-8 h-8 bg-slate-300 mb-6' />
          <h3 className='mb-2'>Blockchain Integration</h3>
          <p>Implementing blockchain technology to ensure transparency, traceability, and security in your business processes.</p>
        </div>

      </div>
    </div>
  )
}

export default Services
