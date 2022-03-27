import React from 'react'
import mulher from '../imagens/Jovem.png'
import idosa from '../imagens/maisIdade.png'
import agua from '../imagens/agua.png'


function Discover() {

  const [slider, setSlider] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSlider(true);
      } else {
        setSlider(false);
      }
    });
    if (window.innerWidth < 768) {
      setSlider(true);
    }
  }, [])

  function threeProducts() {
    return (
      <div className='flex justify-center gap-8 mt-8 mx-auto'>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={mulher} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={idosa} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={agua} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='xl:w-[1134px] mx-auto' data-aos="zoom-in" data-aos-duration="2000">
      <div className='flex justify-center'>
        <h1 className='text-blue font-bold text-[31px] tracking-[.4px] mt-8 text-center'>keep up to date with our discoveries</h1>
      </div>
    
    </div>
  )
}

export default Discover