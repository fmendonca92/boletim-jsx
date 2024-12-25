import React from 'react';
import './liturgia.css';

const Liturgy = () => {
  const liturgyData = {
    morningService: {
      time: "09h",
      items: [
        "Prelúdio Instrumental",
        "*Tu És o Meu Refúgio",
        "Leitura Bíblica: Salmo 91.1-4",
        "Oração",
        "Cântico de Adoração",
        "*Você Fez do Altíssimo a Sua Morada",
        "Leitura Bíblica: Salmo 91.5-9",
        "Oração de Confissão",
        "Cânticos",
        "*Ele Me Invocará e Eu Lhe Responderei",
        "Leitura Bíblica: Salmo 91.10-16",
        "Ofertório: NC 147 \"Vencendo Vem Jesus\"",
        "Oração de Consagração",
        "*Lhe Mostrarei a Minha Salvação",
        "Mensagem - Rev. Daniel Leite",
        "Oração",
        "Bênção Apostólica",
        "Tríplice Amém",
        "*Notícias de Primeira",
      ],
    },
    eveningService: {
      time: "18h",
      items: [
        "Prelúdio Instrumental",
        "*Chamada à Adoração",
        "Leitura Bíblica: Colossenses 3.1-4",
        "Oração",
        "Cântico de Adoração",
        "*Confissão de Pecados e Consagração",
        "Leitura Bíblica: Colossenses 3.5-11",
        "Oração de Confissão",
        "Cânticos",
        "*Dedicação dos Dízimos e Ofertas",
        "Leitura Bíblica: Colossenses 3.12-17",
        "Ofertório: NC 159 \"Bondoso Amigo\"",
        "Oração de Consagração",
        "*Exposição das Sagradas Escrituras",
        "Mensagem - Rev. Adolfo Santana",
        "Hino: NC 282 \"A Grande Comissão\"",
        "Oração & Bênção Araônica",
        "Tríplice Amém",
        "*Notícias de Primeira",
      ],
    },
  };

  return (
    <div className="liturgy-container">
      <h2>Liturgia</h2>
      <div className="liturgy-services">
        <div className="liturgy-service">
          <h3>Culto Matutino {liturgyData.morningService.time}</h3>
          <ul>
            {liturgyData.morningService.items.map((item, index) => {
              const isBold = item.startsWith("*");
              const text = isBold ? item.substring(1) : item;
              return (
                <li key={index} className={isBold ? "bold-item" : ""}>
                  {isBold && <br />}
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="liturgy-service">
          <h3>Culto Vespertino {liturgyData.eveningService.time}</h3>
          <ul>
            {liturgyData.eveningService.items.map((item, index) => {
              const isBold = item.startsWith("*");
              const text = isBold ? item.substring(1) : item;
              return (
                <li key={index} className={isBold ? "bold-item" : ""}>
                  {isBold && <br />}
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Liturgy;
