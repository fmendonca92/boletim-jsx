import React from 'react';
import './visit_schedule.css';

const VisitSchedule = () => {
  const scheduleData = {
    headers: ['Mês', 'Dia', 'Itamaracá', 'Nazaré', 'Aliança', 'Vicência', 'Itambé', 'Goiana', 'Paudalho'],
    rows: [
      {
        month: 'Ago',
        day: '25',
        itamaraca: 'Pb Nosan',
        nazare: 'Pb Raul',
        alianca: 'Pb Sandro',
        vicencia: 'Pb Bruno',
        itambe: 'Pb Davi das Mêrces',
        goiana: 'Pb Edson',
        paudalho: 'Pb Esdras',
      },
      {
        month: 'Set',
        day: '08',
        itamaraca: 'Pr Laurindo',
        nazare: 'Pr Luciano',
        alianca: 'Pr Lutero',
        vicencia: 'Pr Sócrates',
        itambe: 'Pr Cláudio',
        goiana: 'Pr Daniel',
        paudalho: 'Pr José Mário',
      },
    ],
  };

  return (
    <div className="visit-schedule-container">
      <h2>Visitas às Congregações</h2>
      <table>
        <thead>
          <tr>
            {scheduleData.headers.map((header, index) => (
              <th key={index} className="centered-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.month}</td>
              <td>{row.day}</td>
              <td>{row.itamaraca}</td>
              <td>{row.nazare}</td>
              <td>{row.alianca}</td>
              <td>{row.vicencia}</td>
              <td>{row.itambe}</td>
              <td>{row.goiana}</td>
              <td>{row.paudalho}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitSchedule;
