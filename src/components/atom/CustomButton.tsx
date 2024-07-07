import React from 'react';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = styled('button')(({ theme }) => ({
    backgroundColor: teal[500],
    color: 'white',
    border: `2px solid ${teal[500]}`,
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: teal[700],
        border: `2px solid ${teal[700]}`,
    },
}));

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default CustomButton;
