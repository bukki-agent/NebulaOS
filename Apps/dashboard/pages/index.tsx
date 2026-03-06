import React, { useState } from 'react';
import BrainPanel from '../components/BrainPanel';
import AgentMatrix from '../components/AgentMatrix';
import KPIDeck from '../components/KPIDeck';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const PROJECTS = [
{ id: 'reactive', label: 'Reactive Labs' },
{ id: 'personal', label: 'Personal Brand' },
{ id: 'saas', label: 'NebulaOS SaaS' }
];

const Home: React.FC = () => {
const [active, setActive] = useState('reactive');
return (

<div className="nebula-root"> <Header onNewProject={()=>{}} /> <div className="layout-body"> <Sidebar active={active} onTab={setActive} /> <main className="content"> <h1>NebulaOS - Kommandozentrale</h1> <div className="grid"> <BrainPanel project={active} /> <AgentMatrix project={active} /> <KPIDeck project={active} /> </div> </main> </div> </div> ); };
export default Home;

