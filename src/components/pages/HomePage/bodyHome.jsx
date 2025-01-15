import React from 'react'
import heroImg from '../../../assets/hero_img.svg'

const BodyHome = () => {
  return (
    <div>
        <div className=''>
            <div>
                <img src={heroImg} alt="hero_img" height={557} width={698} className='pt-16 pl-56'/>
            </div>

            <div className='text-center text-2xl w-1'>
                Discover reliable health insights, authored by experts. Connect, learn, and take charge of your well-being with HealoScope.
            </div>
        </div>
    </div>
  )
}

export default BodyHome