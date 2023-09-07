import React from 'react';

const ThreatDetails = ({ threat, onClose }) => {
    return (
        <div>
            <h2>{threat.name}</h2>
            <p>Beschreibung: <b> {threat.description}</b></p>
            <p>Kritikalität: <b> {threat.level}</b></p>
            <p>cvs: <b> {threat.cvs}</b></p>
            <p>cvss score: <b> {threat.cvss}</b></p>
            <p>Lösung: <b> {threat.solution}</b></p>
            <p>Betriebssysteme: <b> {threat.os}</b></p>
            <p>Risk-Level: <b> {threat.riskLevel}</b></p>
            {/* Display other details */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ThreatDetails;
