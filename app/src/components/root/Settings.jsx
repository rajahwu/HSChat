import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function SettingsPage({ onThemeChange }) {
    const { user } = useAuth();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [privacyMode, setPrivacyMode] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');

    const handleThemeChange = (event) => {
        setSelectedTheme(event.target.value);
        onThemeChange(event.target.value);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Settings
            </Typography>
            
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Account Settings
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={notificationsEnabled}
                            onChange={(e) => setNotificationsEnabled(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Enable Notifications"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={privacyMode}
                            onChange={(e) => setPrivacyMode(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Privacy Mode"
                />
            </Box>

            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Theme Settings
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        value={selectedTheme}
                        onChange={handleThemeChange}
                    >
                        <FormControlLabel value="light" control={<Radio />} label="Light" />
                        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                        <FormControlLabel value="highContrast" control={<Radio />} label="High Contrast" />
                        <FormControlLabel value="retro" control={<Radio />} label="Retro" />
                        <FormControlLabel value="modern" control={<Radio />} label="Modern" />
                        <FormControlLabel value="fun" control={<Radio />} label="Fun" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Button variant="contained" color="primary" onClick={() => alert('Settings saved!')}>
                Save Settings
            </Button>
        </Box>
    );
}
