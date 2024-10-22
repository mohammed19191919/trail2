import React, { useState } from 'react';
import "./publications.css";

const originalArt = [
  {
    title: "Original Article",
    descriptions: [
      "1. Knowledge of Abebe Beso Nemalajd",
      "2. Kebede is working on things to work.",
      "3. Good things come with the method."
    ]
  },
  {
    title: "Review Article",
    descriptions: [
      "1. Review of research findings.",
      "2. Understanding community health initiatives.",
      "3. Analysis of child care practices."
    ]
  },
  {
    title: "Projects",
    descriptions: [
      "1. Community service projects.",
      "2. Health awareness campaigns.",
      "3. Child nutrition projects."
    ]
  },
  {
    title: "Community Service",
    descriptions: [
      "1. Volunteer activities.",
      "2. Support for local health clinics.",
      "3. Awareness programs for families."
    ]
  }
];

function Publications() {
  const [visibleSection, setVisibleSection] = useState(originalArt[0].title); // Show the first section by default

  const toggleVisibility = (title) => {
    setVisibleSection(title); 
  };

  return (
    <section id="publication" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className='horizontal-line'></div>
      <div className="head-p">
        <p className='years-of-exp'>Two publications</p>
        <h1 className='my-experiances'>My Publications</h1>
      </div>
      <div className="subheaders">
        {originalArt.map((art, index) => (
          <div key={index} className='publication-section'>
            <button onClick={() => toggleVisibility(art.title)}>{art.title}</button>
            {visibleSection === art.title && ( 
              <div className='descriptions'>
                {art.descriptions.map((desc, descIndex) => (
                  <p key={descIndex}><a href="">{desc}</a> <a href="https://cegh.net/article/S2213-3984(22)00039-2/fulltext" target='_blanck' rel="noopener noreferrer">Get</a></p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;