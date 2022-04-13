import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";



const ListOfSessions = ({id}) => {
    const router = useNavigate()
    const clientList = JSON.parse(localStorage.getItem('clientList'))
    const [sessions, setSessions] = useState(clientList.find(client => client.id === id).sessions)

    useEffect(() => {
        clientList
            .find(client => client.id === id)
            .sessions = sessions
        localStorage.setItem('clientList', JSON.stringify(clientList))
    }, [sessions])

    return (
        <div>
            {!sessions.length
                ? <h1>There are no training sessions yet</h1>
                : sessions.map((session, index) =>
                    <div className='session' key={session.date}>
                        <div className='session-content'>
                            <div className='session-date'>
                                Date: {session.date}
                            </div>
                            <div className='session-title'>
                                {session.exercises.length} exercises total
                            </div>
                        </div>
                        <div className='session-buttons'>
                            <button
                                onClick={() => router(`/user/${id}/${session.date}`)}
                            >
                                Expand
                            </button>
                            <button
                                style={{background: '#F44336'}}
                                onClick={() => window.confirm('Delete session?')
                                    ? setSessions(sessions.filter((e,i) => i !== index))
                                    : console.log('Canceled')}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ListOfSessions;