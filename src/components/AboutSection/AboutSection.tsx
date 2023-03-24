import React from 'react';
import SkillsProgressBarContainer from '../SkillsProgressBar/SkillsProgressBarContainer';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about_section_container">
      <div className="about_section_container_content">
        <div className="about_section">
          <div className="about_section_title">
            <h1>Motivoitunut oppimaan, sekä luomaan uutta</h1>
          </div>
          <div className="about_section_text">
            <p>
              Olen motivoitunut ja kunnianhimoinen nuori, joka etsii
              mahdollisuuksia kasvaa ja kehittyä työelämässä. Olen täynnä intoa
              ja positiivista energiaa, minä tartun rohkeasti uusiin haasteisiin
              ja pyrin aina ylittämään itseni. Kehitän jatkuvasti itseäni ja
              osaan sopeutua muuttuviin olosuhteisiin.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Yhteistyö on minulle tärkeää, ja minä pyrin aina luomaan avoimen
              ja kannustavan ilmapiirin työyhteisössä.Olen ystävällinen ja
              rehellinen joka tekee minusta helposti lähestyttävän ja olen aina
              valmis auttamaan työkavereitani tarvittaessa.
            </p>
          </div>
        </div>
        <div className="skills_section_container">
          <SkillsProgressBarContainer />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
