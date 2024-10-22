import React from 'react';
import "./education.css";
import Image1 from"../Component2/images/pexels-photo-301920.webp";
import Image2 from"../Component2/images/pexels-photo-1205651.jpeg";
function Education() {
  return (
    <section id="education" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ height: '100vh', padding: '20px' }}>
    <div >
        <div className='horizontal-line'></div>
           <div className="head-p">
               <p className='years-of-exp'> Masters and Bachealor</p>
               <h1 className='my-experiances'>My Education</h1>
           </div>
           <div className="container-exp">
             <div className="last-gondar">
             <img src={Image2} alt="Student" className='image1'/>
               <div className="lists">
               <p>2016-2021</p>
                <h2>Uiversity of Gondar, (2017-2021)<br />
                   Bachelor of Pharmacy (BPharm) <br />
                   GPA: 3.82/4 (Excellent)
               </h2>
                
               </div>
                
             </div>
             <div className="currunt">
                  <div>
                  <img src={Image1} alt="Student" className='image2'/>
                  </div>
                 <div className="learning">
                     <p>2022-Present </p>
                     <h2>Jimma University, (October 2022-now) <br />
                      Master of Science (MSc) in Pharmaceutics (Ongoing) <br />
                     Current GPA: 3.9/4</h2>
                    
                </div>
             </div>

        </div>

       
    </div>
    </section>
  )
}

export default Education