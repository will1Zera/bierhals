import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=html" alt="skill-icon" />

            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=css" alt="skill-icon" />

            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          
          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=javascript" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=bootstrap" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=vue" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Vue</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=react" alt="skill-icon" />

            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;