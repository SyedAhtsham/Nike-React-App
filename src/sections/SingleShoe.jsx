import React from 'react'
import Button from '../components/Button.jsx';
import { heart } from '../assets/icons/index.js';
import { bigShoe1 } from '../assets/images/index.js';
import { shoes } from '../constants/index.js';
import ShoeSmall from '../components/ShoeSmall.jsx';
import { shoe11 } from '../assets/images/index.js';
import { useState } from "react"


const SingleShoe = ({shoe}) => {
    
    
    const [bigShoeImg, setBigShoeImg] = useState(shoe11)


  return (
      <section id="viewshoe"
          className="w-full flex xl:flex-row flex-col justify-center min-h-screen
      gap-10 max-container pt-60">
         
          <div className='flex flex-row justify-center items-start gap-2'>
             
             
              <div className='flex flex-col sm:gap-2 '>
                  
                      {
                          shoe.images.map((img, imgIndex) => (
                              <div key={imgIndex} className=''>

                                  <ShoeSmall 
                                      
                                      imgURL={img}
                                      changeBigShoeImage={(img) => setBigShoeImg(img)}
                                      bigShoeImg={bigShoeImg}
                                  />
                              </div>
                          ))
                          }
                          
              </div>
              <div className='flex justify-center items-center rounded-md'>
                  <img src={bigShoeImg}
                      className='rounded-md w-[600px] h-[600px] object-cover'
                  />
              </div>


                  
          </div>
          

          <div className='relative xl:w-2/5 flex flex-col justify-start items-start
          w-full max-xl:padding-x gap-20'>
                  <div>
                      <h5 className='text-coral-red text-md'>Our Sustainable Product</h5>
                      <h4 className='font-montserrat text-2xl font-medium'>Nike Pegasus 41</h4>

                      <p className='font-palanquin text-slate-gray mt-1 text-md'>Men's Road Running Shoes</p>
                      <p className='mt-10 text-xl text-gray'>$140</p>

                  </div>
                  <div className='flex flex-col gap-4'>
                      <Button label="Add to Bag" />
                      <Button label="Favorite" backgroundColor="bg-white"
                          borderColor="border-slate-gray"
                          textColor="text-slate-gray"
                          iconURL={heart}
                      />
                  </div>
              </div>


    </section>
      
  )
}

export default SingleShoe