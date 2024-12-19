import React from 'react';
import './Bulletin.css';
import TextoPastoral from './pastoral.jsx';
import Noticias from './noticias.jsx';
import DutyRoster from './escala.jsx';

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
                <h2>Announcements</h2>
                <ul>
                    <li>Announcement 1</li>
                    <li>Announcement 2</li>
                    <li>Announcement 3</li>
                </ul>
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Event 1 - Date</li>
                    <li>Event 2 - Date</li>
                </ul>
            </section>
            <footer className="bulletin-footer">
                <p>Contact us at: info@example.com</p>
            </footer>
        </div>
    );
};

export default Bulletin;
