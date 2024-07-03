import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface CommonDialogProps {
    open: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
    open,
    title,
    content,
    onClose,
    onConfirm,
    confirmText = 'Confirm',
    cancelText = 'Cancel'
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="common-dialog-title"
            aria-describedby="common-dialog-description"
        >
            <DialogTitle id="common-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="common-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    {cancelText}
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommonDialog;
