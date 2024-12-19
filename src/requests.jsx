import React from 'react';
import './requests.css';

const PrayerRequests = () => {
  const requests = {
    enfermosPIPR: [
      'Adélia Lyra',
      'Adriana Pessoa',
      'Amaro Souza',
      'América Elisabeth (Betinha)',
      'Ana Maria Sybalde',
      'Conceição',
      'Dustan Morais',
      'João Alves',
      'Glória Santiago',
      'Lídia Vieira',
      'Márcia Silvestre',
      'Marlene Vasconcelos',
      'Mônica de Andrade',
      'Raquel Amorim',
    ],
    outrosEnfermos: ['Rejane Lacerda', 'Reynilda Oliveira', 'Ruth Varela', 'Vanildo Lima', 'Vitória Fonseca', 'Vivilene', 'Zulmira de Carvalho','João Calvino (filho de Vera e João Alves)'],
    outrosPedidos: [
      'Pelos desempregados, subempregados e autônomos',
      'Pelos projetos sociais Filadélfia, Barnabé, Aurora, Parque dos Milagres e Vale do Senhor',
      'Pelos missionários e congregações da PIPR',
      'Por nosso país',
      'Pela Igreja perseguida',
      'Instituto Sal e Luz',
      'Pelo estado do Rio Grande do Sul',
    ],
  };

  return (
    <div className="prayer-requests-container">
      <h2>Súplica e Intercessão</h2>
      <p>"Orai uns pelos outros. Muito pode por sua eficácia a súplica do justo." Tg 5: 16</p>
      <h3>Interceda a Deus por:</h3>
      <div className="prayer-columns">
        <div className="prayer-column">
          <h4>Enfermos PIPR</h4>
          <ul>
            {requests.enfermosPIPR.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="prayer-column">
          <h4>Outros Enfermos</h4>
          <ul>
            {requests.outrosEnfermos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="prayer-column">
          <h4>Outros pedidos</h4>
          <ul>
            {requests.outrosPedidos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequests;
