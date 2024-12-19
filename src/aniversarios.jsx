import React from 'react';
import './aniversarios.css';

const BirthdayList = () => {
  const birthdays = {
    "Domingo - 18/08": [
      "Benjamin Alitto Siqueira",
      "Luziman Barros do Valle",
    ],
    "Segunda-feira - 19/08": [
      "Daniel Reinaux Gomes Filho",
      "Kamila da Silva Sousa Cunha",
      "Maria do Socorro Arcoverde Silva",
      "Noah Abelenda Frade",
      "Pedro Henrique Araújo Rego",
    ],
    "Terça-feira - 20/08": [
      "Beatriz B. B. Castro Lima dos Santos",
      "Isabela Cunha da Costa Bezerra Cahu",
    ],
    "Quarta-feira - 21/08": [
      "Benjamim Lima Belém de Carvalho",
    ],
    "Quinta-feira - 22/08": [
      "Alexon Soares Fonseca",
      "Kezia Patrícia Mestre Carvalho",
      "Lucas de Luna Lima",
      "Lucas Gabriel Pereira Santos",
      "Samuel Gois Pereira Nascimento",
    ],
    "Sexta-feira - 23/08": [
      "Andrea Rodrigues da Silva",
      "Katiana Araújo Paes Barreto",
      "Polyana Farias de Holanda",
    ],
    "Sábado 24/08": [
      "Antônio Ricardo Barbosa Júnior",
      "Bernardo Araújo Paes Barreto",
    ],
  };

  return (
    <div className="birthday-list-container">
      <h2>Aniversariantes da Semana</h2>
      <p>"Tu pois, filho meu, fortifica-te na graça que está em Cristo Jesus." II Tm 2:1</p>
      <div className="birthday-columns">
        {Object.entries(birthdays).map(([day, names]) => (
          <div key={day} className="birthday-column">
            <h3>{day}</h3>
            <ul>
              {names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayList;
