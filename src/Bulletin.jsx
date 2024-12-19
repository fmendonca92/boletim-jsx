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
                <img src="banner_relacionamentos.png" className="banner-event"/>
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
                <p>Contact us at: info@example.com</p>
            </footer>
        </div>
    );
};

export default Bulletin;
