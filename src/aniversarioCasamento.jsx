import React from 'react';
import './aniversarioCasamento.css';

const WeddingAnniversaries = () => {
  const anniversaries = {
    "Domingo - 15/12": [
      { couple: "Luiz Augusto do Vale Doria e Ana Nayra Narciso Doria", years: 29 },
      { couple: "Roger Marques Ferreira da Silva e Juliane Maria Ferreira da Silva", years: 8 },
    ],
    "Segunda-feira - 16/12": [
      { couple: "Edson Monteiro Mendonça e Sue Elisabete Vitalino Mendonça", years: 36 },
      { couple: "Alexandre Magno Rodrigues Alves e Mirian Lúcia Vitalino Rodrigues Alves", years: 36 },
      { couple: "Antônio de Carvalho de Barros Lira e Glaucia Amélia Vitalino Lira", years: 36 },
    ],
    "Terça-feira - 17/12": [
      { couple: "Severino Bernardino Gomes Filho e Azenate Moraes Arcoverde Gomes", years: 42 },
      { couple: "Clodoveu Silva e Cláudia Junia Soares Vilela Silva", years: 47 },
    ],
    "Quarta-feira - 18/12": [
      { couple: "Washington Moura de Amorim Júnior e Maraçane de França Amorim", years: 53 },
      { couple: "Lucas Gomes Gueiros e Maria Thereza Figueiredo Gueiros", years: 16 },
      { couple: "Brivaldo Feliciano da Silva e Jacqueline Soraya M. dos Santos Silva", years: 31 },
      { couple: "Herbert de Lucena Carlos e Letícia Saeger Victalino de Mello Carlos", years: 25 },
      { couple: "Lucas Andrade de Oliveira Bacelar e Joyce Brena Gomes Amarante Barcelar", years: 3 },
      { couple: "Jadson Trajano de Araújo e Renata Cristina Medeiros Trajano de Araújo", years: 14 },
    ],
    "Quinta-feira-19/12": [
      { couple: "Ivson Vilela Guerra e Flávia Roberta de Araújo Guerra", years: 37 },
      { couple: "Fernando Trajano de Arruda Júnior e Ana Henriqueta Vitalino Trajano", years: 32 },
      { couple: "Roberto Limeira Correia Lima e Andreza Carine Lacerda de Oliveira", years: 22 },
      { couple: "Fabiano José Alves Barbosa e Leonice Janaína Pereira da Silva", years: 17 },
    ],
    "Sexta-feira - 20/12": [
      { couple: "Edson Vieira Santos e Lídia Carneiro Vieira Santos", years: 33 },
      { couple: "Daniel Reinaux Gomes e Rute Carneiro Gomes", years: 33 },
    ],
    "Sábado-21/12": [
      { couple: "José Roberto Guedes Cabral e Denise Medeiros Guedes Cabral", years: 23 },
    ],
  };

  return (
    <div className="wedding-anniversaries-container">
      <h2>Aniversário de Casamento</h2>
      <p>"Por isso o homem deixará pai e mãe e se unirá a sua mulher, e os dois serão uma só carne" Ef 5:31</p>
      <div className="anniversary-list">
        {Object.entries(anniversaries).map(([day, couples]) => (
          <div key={day} className="anniversary-item">
            <h3>{day}</h3>
            <ul> {/* Use a list to display multiple couples */}
              {couples.map((details, index) => (
                <li key={index}> {/* Key is important when mapping lists */}
                  {details.couple} - {details.years} anos
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingAnniversaries;
