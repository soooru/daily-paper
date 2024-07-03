import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface DialogLoginProps {
    open: boolean;
    onClose: () => void;
}

const DialogLogin: React.FC<DialogLoginProps> = ({
    open,
    onClose,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="common-dialog-title"
            aria-describedby="common-dialog-description"
        >
            <DialogTitle id="common-dialog-title">로그인</DialogTitle>
            <DialogContent>
                {/* TODO: 로그인 폼 추가 */}
                <div>로그인 폼(추가할것)</div>
                <div>회원가입</div>
                <div>비밀번호 찾기</div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogLogin;
