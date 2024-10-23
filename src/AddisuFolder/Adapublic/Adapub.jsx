import React, { useState, useEffect } from "react";
import "./adapub.css";
import { IoMdDocument } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOrcid } from "react-icons/si";

function Adapub(){
     
    const[intaial1, setInitial1]=useState(false);
    const[intaial2, setInitial2]=useState(false);
    const[intaial3, setInitial3]=useState(false);
    const[intaial4, setInitial4]=useState(false);
    const[intaial5, setInitial5]=useState(false);
    const[intaial55, setInitial55]=useState(false);


    const getcite1=()=>{
        setInitial1(prevIndex => !prevIndex);
        
    }
    const getcite2=()=>{
        setInitial2(prevIndex => !prevIndex);
    }
    const getcite3=()=>{
        setInitial3(prevIndex => !prevIndex);
    }
    const getcite4=()=>{
        setInitial4(prevIndex => !prevIndex);
    }
    const getcite5=()=>{
        setInitial5(prevIndex => !prevIndex);
    }
    const getcite55=()=>{
        setInitial55(prevIndex => !prevIndex);
    }
    


    return(
        <section className="pub-containerall" >
            <div className="pub-container">
             <div className="pubhead">
                <h1>
                    Publications
                </h1>
             </div>
             <div className="papers">
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/363090392_Perception_Towards_COVID-19_Related_Symptoms_and_Traditional_Medicine_Used_for_Their_Management_Among_Patients_and_Their_Attendants_in_Ethiopian_Comprehensive_Specialized_Hospitals_A_Cross-Sectional_S"> <IoMdDocument className='IoMdDocumen'/> Towards COVID-19 Related Symptoms and Traditional Medicine Used for Their Management Among Patients and Their Attendants 
                  in Ethiopian Comprehensive Specialized Hospitals: A Cross-Sectional Study</a>
                     <div className="buttuns" >
                     <button onClick={getcite1}>Cite</button>
                    <button ><a href="https//:DOI: 10.2147/IDR.S380211" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial1 === true && (
                        <p className="dispalaycite"> Tegegne AA, Mulugeta A, Genetu B, Endale A, Elias A. Perception towards COVID-19 related symptoms and traditional medicine used for their management among patients and their attendants in Ethiopian comprehensive specialized hospitals: 
                        a cross-sectional study. Infection and Drug Resistance. 2022 Jan 1:5023-34.</p>
                        )}
                         
                     </div>
                </div>
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/377727859_Substandard_and_falsified_antimicrobials_in_selected_east_African_countries_A_systematic_review" target="_blank" rel="noopener noreferrer"> <IoMdDocument className='IoMdDocumen'/> Substandard and falsified antimicrobials in selected east African countries: A systematic review</a>
                     <div className="buttuns" >
                     <button onClick={getcite2}>Cite</button>
                    <button ><a href="https//:DOI: 10.1371/journal.pone.0295956" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial2 === true && (
                        <p className="dispalaycite"> Tegegne AA, Feissa AB, Godena GH, Tefera Y, Hassen HK, Ozalp Y, Suleman S. Substandard and falsified antimicrobials in selected east African countries: 
                        A systematic review. Plos one. 2024 Jan 26;19(1):e0295956.</p>
                        )}
                         
                     </div>
                </div>
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/378004205_Evaluation_of_Seven_Different_Brands_of_Metformin_Hydrochloride_Tablets_Available_in_the_Market_in_Gondar_City_Ethiopia" target="_blank" rel="noopener noreferrer"> <IoMdDocument className='IoMdDocumen'/> Evaluation of Seven Different Brands of Metformin Hydrochloride Tablets Available in the Market in Gondar City, Ethiopia</a>
                     <div className="buttuns" >
                     <button onClick={getcite3}>Cite</button>
                    <button ><a href="https//:DOI: 10.2147/DHPS.S419522" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial3 === true && (
                        <p className="dispalaycite"> Flatie Alemu A, Tegegne AA, Getaw NS. Evaluation of Seven Different Brands of Metformin Hydrochloride Tablets Available in the Market in Gondar City, Ethiopia. Drug, Healthcare and Patient Safety. 2024 Dec 31:19-28.</p>
                        )}
                         
                     </div>
                </div>
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/381386390_Public_awareness_knowledge_and_attitude_regarding_proper_disposal_of_unused_medicines_and_associated_factors_in_Gondar_city_northwest_Ethiopia?_sg%5B0%5D=SzzO9oOJdIOvVtrN2MnUmNyK4ipcpyfC09zsm49rOcijUSJqU8ueCyRSVZNC6BC5Z5nK1gsjFh2PRuVAK38_D44Uw1UfEr5i5j4zg-8E.BzDMMlLCRRKhgOe0uN3G-VjBQ83gDf8x3Vi-Iebbhk2dIIWHh0jKaNZeIxJPPkwIHOclpXVLc3lcmDLZew_BMQ&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSIsInBvc2l0aW9uIjoicGFnZUNvbnRlbnQifX0" target="_blank" rel="noopener noreferrer"> <IoMdDocument className='IoMdDocumen'/>Public awareness, knowledge, and attitude regarding proper disposal of unused medicines and associated factors in Gondar city, northwest Ethiopia</a>
                     <div className="buttuns" >
                     <button onClick={getcite4}>Cite</button>
                    <button ><a href="https//:DOI: 10.3389/fpubh.2024.1372739" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial4 === true && (
                        <p className="dispalaycite"> Tegegne AA, Genet G, Workie Limenh L, Yohannes L, Mohammed Seid A, Alemayehu TT, Ayenew W, Simegn W. Public awareness, knowledge, and attitude regarding proper disposal of unused medicines and associated factors in Gondar city, northwest Ethiopia. Frontiers in Public Health. 2024 Jun 12;12:1372739.</p>
                        )}
                         
                     </div>
                </div>
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/383292861_Effect_of_cold_chain_management_practices_on_health_centers_operational_performance_A_facility_Based_cross-sectional_study?_sg%5B0%5D=qjJBdizYM8r8Am89FNQKso-fajll23yDnhhQWr1Vzs_TZakC8DQNINMVjXC2MWMLCCJI0kpQYb0e9fnEWaX98bmjNIOkv7ickVxgrHpK.yyeDJwJMjceJFlNSEKthQobtbzunhHY0gVqt0Rdz8T3W7TMjy86S69pAZ2bx_Bd9AKq6ulHjJeyOk-l7zALpOQ&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSIsInBvc2l0aW9uIjoicGFnZUNvbnRlbnQifX0" target="_blank" rel="noopener noreferrer"> <IoMdDocument className='IoMdDocumen'/>Effect of cold chain management practices on health centers operational performance: A facility Based cross-sectional study</a>
                     <div className="buttuns" >
                     <button onClick={getcite55}>Cite</button>
                    <button ><a href="https//:DOI: 10.21203/rs.3.rs-4786064/v1" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial55 === true && (
                        <p className="dispalaycite"> Girma M, Mekasha YT, Yami MF, Tegegne AA, Asfaw A, Beyene G, Usure RE. Effect of cold chain management practices on health centers operational performance: A facility Based cross-sectional study.</p>
                        )}
                         
                     </div>
                </div>
                <div className="firstpaper">
                <a href="https://www.researchgate.net/publication/384624716_A_narrative_review_on_problems_in_product_quality_regulatory_system_constraints_and_the_concept_of_quality_by_design_as_a_solution_for_quality_assurance_of_African_medicines?_sg%5B0%5D=CjL3dDQN3FZhvVjnPrf0gHqb4BX3wni7s3lHYKXBTBInj_w-8GpUoggv0RY23-j0lfljl2uu9SMclqCcTb34XBKia9nCoU5WNFBVG9Xv.Ylr4wmbE7hDti9P8zTvHcQa7W0JhQwjWdDuEnw-BA5r5wiXZiAnNC3OomeX6uw3DrXmrfA_Ud4_sWcvjqhiDPg&_tp=eyJjb250ZXh0Ijp
                   7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSIsInBvc2l0aW9uIjoicGFnZUNvbnRlbnQifX0" target="_blank" rel="noopener noreferrer"> <IoMdDocument className='IoMdDocumen'/>A narrative review on problems in product quality, regulatory system constraints, 
                    and the concept of quality by design as a solution for quality assurance of African medicines</a>
                     <div className="buttuns" >
                     <button onClick={getcite5}>Cite</button>
                    <button ><a href="https//:10.3389/fmed.2024.1472495" target="_blank" rel="noopener noreferrer">doi</a></button>
                     {intaial5 === true && (
                        <p className="dispalaycite"> Hassen HK, Mekasha YT, Tegegne AA, Ozalp Y. A narrative review on problems in product quality, regulatory system constraints, and the concept of quality by design as a solution for quality assurance 
                        of African medicines. Frontiers in Medicine. 2024 Oct 3;11:1472495.</p>
                        )}
                         
                     </div>
                </div>
            
                </div>
                </div>
                <div className="alllinks">
        <h2>Addisu Afrasa</h2>
         <div className="links">
            <FaLinkedin className="linkdinabout"/>
            <MdEmail className="linkdinabout"/>
            <SiOrcid className="linkdinabout"/>
        </div>
        <p> &copy; {new Date().getFullYear()} All right reserved by low. </p>
       </div>
            
         </section>
    )
}

export default Adapub