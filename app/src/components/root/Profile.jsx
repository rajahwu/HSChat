import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function ProfilePage() {
    const { user, updateUserProfile, updateUserPassword } = useAuth();
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdateProfile = async () => {
        try {
            await updateUserProfile({ displayName, email });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            await updateUserPassword(newPassword);
            alert('Password changed successfully!');
        } catch (error) {
            console.error('Error changing password:', error);
            alert('Failed to change password. Please try again.');
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            <TextField
                label="Display Name"
                fullWidth
                margin="normal"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
            />
            <Button variant="contained" color="primary" onClick={handleUpdateProfile} sx={{ mt: 2 }}>
                Update Profile
            </Button>
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Change Password
            </Typography>
            <TextField
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleChangePassword} sx={{ mt: 2 }}>
                Change Password
            </Button>
        </Box>
    );
}
