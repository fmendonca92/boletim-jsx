import React from 'react';

const DutyRoster = () => {
  const rosterData = {
    headers: ['', '18 a 24 de agosto', '25 a 31 de agosto'],
    rows: [
      {
        category: 'Presbíteros',
        week1: ['• David das Mercês', '• Daniel Reinaux', '• Jorge Osvaldo', '• Klaus Wagner'],
        week2: ['• Jether Peixoto', '• Antônio Carlos', '• Heitor Arôxa', '• Israel Selva'],
      },
      {
        category: 'Diáconos',
        week1: ['• Manoel Rubens', '• Vitor Gomes'],
        week2: ['• Ivaldo Moraes', '• José Bartolomeu', '• Pedro Selva'],
      },
    ],
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}> {/* Added basic styling */}
      <h2>Plantões</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {rosterData.headers.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: '8px',
                  textAlign: 'center',
                  borderBottom: '1px solid #ddd',
                  backgroundColor: index === 0 ? 'transparent' : '#f2f2f2', // Alternating background
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rosterData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {row.category}
              </td>
              <td
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {row.week1.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </td>
              <td
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {row.week2.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DutyRoster;
