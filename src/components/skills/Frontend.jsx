import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-git'></i>

            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-trello'></i>

            <div>
              <h3 className="skills__name">Jira</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-bootstrap'></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-javascript'></i>

            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-typescript'></i>

            <div>
              <h3 className="skills__name">Typescript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-react'></i>

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