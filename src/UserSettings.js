import React, { useEffect, useState } from 'react';

function UserSettings() {
    const [settings, setSettings] = useState({ theme: 'light' });  // default theme

    useEffect(() => {
        const savedSettings = localStorage.getItem('userSettings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    return (
        <div>
            <h1>User Settings</h1>
            <p>Theme: {settings.theme}</p>
        </div>
    );
}

export default UserSettings;
