import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LoginForm from './LoginForm';
import { useNavigate, useLocation } from 'react-router-dom';


interface DialogLoginProps {
    open: boolean;
    onClose: () => void;
}

const DialogLogin: React.FC<DialogLoginProps> = ({
    open,
    onClose,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLoginSuccess = () => {
        navigate(from, { replace: true }); // 로그인 성공 후 원래 가려던 페이지로 리디렉션
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="common-dialog-title"
            aria-describedby="common-dialog-description"
        >
            <DialogTitle id="common-dialog-title">로그인</DialogTitle>
            <DialogContent>
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            </DialogContent>
        </Dialog>
    );
};

export default DialogLogin;
