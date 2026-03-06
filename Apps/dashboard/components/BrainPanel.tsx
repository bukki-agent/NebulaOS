import React from 'react';
export default function BrainPanel({project}:{project:string}){ return (<section className="widget"><h3>Brain / Assets</h3><div className="drop">Drag & Drop Dateien hier</div><p>Projekt: {project}</p></section>); }
