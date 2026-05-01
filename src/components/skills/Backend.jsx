import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=php" alt="skill-icon" />

            <div>
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=laravel" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Laravel</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=mysql" alt="skill-icon" />

            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=docker" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Docker</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=java" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src="https://skillicons.dev/icons?i=python" alt="skill-icon" />

            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;