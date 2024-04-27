import React from 'react'
import { supabase } from './supabase'

const addLog = async (typeOfFace, name, timestamp, cameraID) => {
    try {
        // Add log entry to Supabase
        const { data, error } = await supabase.from('logs').insert([
            { type_of_face: typeOfFace, name, timestamp, camera_id: cameraID }
        ]);
        if (error) {
            throw error;
        }
        console.log('Log added successfully:', data);
        return data;
    } catch (error) {
        console.error('Error adding log:', error.message);
        return null;
    }
};

export default addLogs
