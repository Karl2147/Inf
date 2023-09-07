import React, { useState } from 'react';
import ThreatDetails from './ThreatDetails';

const ThreatTable = () => {
    const [selectedThreat, setSelectedThreat] = useState(null);

    // Sample data
    const threats = [
        { id: 1, name: 'ryslog: Schwachstelle ermöglicht DoS',
         description: 'Description for Threat 1', level: 'High' ,
          cvs: 'CVE-2014-3634',  cvss: '7.6', solution: 'Update to Version 8.4.1',
           os: 'UNIX, Linux', riskLevel: '6' },
        { id: 2, name: 'Threat 2', description: 'Description for Threat 2', level: 'Medium' },
        // ... und so weiter
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Level</th>
                        <th>CVS</th>
                        <th>CVSS</th>
                        <th>Solution</th>
                        <th>OS</th>
                        <th>Risk Level</th>
                        {/* Other headers */}
                    </tr>
                </thead>
                <tbody>
                    {threats.map(threat => (
                        <tr key={threat.id} onClick={() => setSelectedThreat(threat)}>
                            <td>{threat.name}</td>
                            <td>{threat.description}</td>
                            <td>{threat.level}</td>
                            <td>{threat.cvs}</td>
                            <td>{threat.cvss}</td>
                            <td>{threat.solution}</td>
                            <td>{threat.os}</td>
                            <td>{threat.riskLevel}</td>
                            
                            
                             {/* Die neue Zelle */}
                            {/* Other data columns */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedThreat && <ThreatDetails threat={selectedThreat} onClose={() => setSelectedThreat(null)} />}
        </div>
    );
};

export default ThreatTable;
