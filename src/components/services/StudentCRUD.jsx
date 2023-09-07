import React from 'react'

const StudentCRUD = () => {
  return (
    <div className="services__content">
      <h3 className="services__title">STUDENTCRUD</h3>
      <img src="https://github.com/will1Zera/studentCRUD/raw/master/img/crudGif.gif?raw=true" alt="Gif do studentcrud" />

      <div className="services__box">
        <div className="services__group">
          <div className="services__data">
            <div>
              <p className="services__name">É um CRUD capaz de mostrar a tabela de alunos, criar um novo aluno, editar e apagar. O sistema possui uma área de login, permitindo o acesso apenas ao admin.</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <p className="services__technologies">PHP | MySQL | Bootstrap</p>
            </div>
          </div>

          <div className="services__data">
            <div>
              <a href="https://github.com/will1Zera/studentCRUD" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCRUD;