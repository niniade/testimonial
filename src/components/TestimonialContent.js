import React from 'react'
import './testimonial.css'
import './testimonial-mobile.css'
import shareexperience from './shareexperience.png';
import sharestory from './sharestory.png';
import sharestory2 from './sharestory2.png';
import joseph from './joseph.png';
import adetola from './adetola.png';
import emmanuel from './emmanuel.png';
import chidi from './chidi.png';
import chisom from './chisom.png';
import adunoluwa from './adunoluwa.png';
import womanshoppingbag from './woman-shoppingbag.png';
import temi from './temi.png';
import karen from './karen.png'
import promise from './promise.png'
import amos from './amos.png'
import feyisola from './feyisola.png'
import oluchi from './oluchi.png'
import { Subcription } from './Subcription';
import { Footer } from './Footer';

function TestimonialContent() {
  return (
    <div className='testimonial-content'>

       <div className='hero-section'>
            <div className='hero-content'>
                <h3>
                Amazing<br/>
                Experiences from Our Wonderful Customers
                </h3>

                <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>

            <div className='hero-image-div'>
            </div>
       </div>

       <section>
       {/* Share your experience section */}
           <div className='share-experience-div'>

            <div className='se-image'>
                <img src={shareexperience} alt="image-of- happy-vaniti-customers" />
            </div>

            <div className='se-content'>
                <div>
                <h3>Tolu & Joy's Experience</h3>
                <div className='badgee'>Customer</div>
                </div>

                <div>
                <p className='mt-5'>
                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, 
                an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. 
                Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                </p>
                </div>

               <div className='mt-5'><a href="#"><img src={sharestory} alt="Share Your Own Story"/></a></div>
            </div>

           </div>

       </section>

      <div className='spacer'></div>
      {/* testimonial grid section */}
       <section className='p-4'>
          <div className='testimonials-wrapper'>

            <div className='testimonial-line'>

              <div>
                <div className='img'>
                  <img src={joseph} alt="joseph" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Joseph Ike</h5>
                  <p><span className='location'>In Ikeja</span> <span className='tag'>Customer</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

              <div>
                <div className='img'>
                  <img src={adetola} alt="joseph" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Adetola Fashina</h5>
                  <p><span className='location'>Ibadan</span> <span className='tag'>Customer</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

              <div>
                <div className='img'>
                  <img src={emmanuel} alt="joseph" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Emmanuel Fayemi</h5>
                  <p><span className='location'>In Akoka</span> <span className='tag'>Customer</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

            </div>


            <div className='testimonial-line pt-4'>

            <div>
              <div className='img'>
                <img src={chisom} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Chisom Obilor</h5>
                <p><span className='location'>In Magodo</span> <span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            <div>
              <div className='img'>
                <img src={adunoluwa} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Adunoluwa Adeyemi</h5>
                <p><span className='location'>Iwo Road</span> <span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            <div>
              <div className='img'>
                <img src={chidi} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Chidi Okeke</h5>
                <p><span className='location'>In Somolu</span> <span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            </div>

          </div>
       </section>


      {/* Josiah's experience section */}
      <section className='josiahs'>
       {/* Share your experience section */}
           <div className='share-experience-div josiah'>

            <div className='se-image'>
                <img src={womanshoppingbag} alt="image-of- happy-vaniti-customers" />
            </div>

            <div className='se-content'>
                <div>
                <h3>Josiah's Experience</h3>
                <div className='badgee'>Vendor</div>
                </div>

                <div>
                <p className='mt-5'>
                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, 
                an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. 
                Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                </p>
                </div>

               <div className='mt-5'><a href="#"><img src={sharestory2} alt="Share Your Own Story"/></a></div>
            </div>

           </div>

       </section>

      <div className='spacer'></div>
       {/* testimonial grid section */}
       <section className='p-4 t-grid-2'>
          <div className='testimonials-wrapper'>

            <div className='testimonial-line'>

              <div>
                <div className='img'>
                  <img src={temi} alt="joseph" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Temi Obadofin</h5>
                  <p><span className='tag'>Vendor</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

              <div>
                <div className='img'>
                  <img src={promise} alt="promise" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Promise Ejiofor</h5>
                  <p><span className='tag'>Vendor</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

              <div>
                <div className='img'>
                  <img src={feyisola} alt="joseph" />
                </div>

                <div className='info'>
                  <h5 className='pt-2'>Feyisola Arinola</h5>
                  <p><span className='tag'>Vendor</span></p>
                </div>

                <div className='details'>
                  <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                  </p>
                </div>
              </div>

            </div>


            <div className='testimonial-line pt-4'>

            <div>
              <div className='img'>
                <img src={karen} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Karen Ibeh</h5>
                <p><span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            <div>
              <div className='img'>
                <img src={oluchi} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Oluchi Uzo</h5>
                <p><span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            <div>
              <div className='img'>
                <img src={amos} alt="joseph" />
              </div>

              <div className='info'>
                <h5 className='pt-2'>Amos Okafor</h5>
                <p><span className='tag'>Vendor</span></p>
              </div>

              <div className='details'>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
            </div>

            </div>

          </div>
       </section>


        {/* Subscribe section */}
      <Subcription />
      <Footer />
      
    </div>
  )
}

export default TestimonialContent