import React, { useEffect, useState } from 'react';
import { supabase } from './supabase'; // Import the initialized Supabase client

const GetLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                // Fetch logs from Supabase in descending order of timestamp
                const { data, error } = await supabase
                    .from('logs')
                    .select('*')
                    .order('timestamp', { ascending: false });

                if (error) {
                    throw error;
                }

                setLogs(data);
            } catch (error) {
                console.error('Error fetching logs:', error.message);
            }
        };

        fetchLogs();
    }, []);

    return (
        <div>
            <h2>Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log.type_of_face} - {log.name} - {log.timestamp}</li>
                ))}
            </ul>
        </div>
    );
};

export default GetLogs;
