import React from 'react';
import './Bulletin.css';
import TextoPastoral from './pastoral.jsx';
import Noticias from './noticias.jsx';
import DutyRoster from './escala.jsx';
import VisitSchedule from './visit_schedule.jsx';
import PrayerRequests from './requests.jsx';
import BirthdayList from './aniversarios.jsx';
import WeddingAnniversaries from './aniversarioCasamento.jsx';
import Liturgy from './liturgia.jsx';

const Bulletin = () => {
    return (
        <div className="bulletin">
            <header className="bulletin-header">
                <h2>Boletim dominical: dd/mm/yyy</h2>
                <p>Date: August 18, 2024</p>
                <hr />
                <TextoPastoral />
                <hr />
                <Noticias />
                <hr />
                <img src="banner_relacionamentos.png" className="banner-event" />
                <hr />

            </header>
            <section className="bulletin-content">
                <DutyRoster />
                <VisitSchedule />
                <PrayerRequests />
                <BirthdayList />
                <WeddingAnniversaries />
                <Liturgy />
            </section>

            <footer className="bulletin-footer">
                <p>NOSSO ENDEREÇO: Rua das Creoulas, 156 - Graças - Recife/PE - CEP: 52011-270</p>
                <p>Contato: (81) 3221.1583 e 99615-1339 (Secretaria - segunda a sexta)</p>
                <p>Web: http://www.primeiraigreja.org.br e http://www.youtube.com/@presbiterianadorecife</p>
                <p>Email: pipr@primeiraigreja.org.br</p>
            </footer>
        </div>
    );
};

export default Bulletin;
