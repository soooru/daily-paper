import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useAuthContext } from '../contexts/AuthContext';
import DialogLogin from './DialogLogin'; // CommonDialog 컴포넌트 임포트

interface PageType {
    title: string;
    url: string;
}

const pages: PageType[] = [
    { title: '작성하기', url: '/write' },
    { title: '데일리 페이퍼', url: '/papers' },
    { title: '기록', url: '/calender' },
];

const GlobalAppBar: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        console.log('ProtectedRoute useEffect - user:', user);
    }, [user]);

    const handleOpenDrawer = (event: React.MouseEvent<HTMLElement>) => {
        console.log('handleOpenDrawer');
    };

    const handleNavigation = (page: PageType) => {
        if (page.url) navigate(page.url);
    };

    const handleLoginClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };


    return (
        <AppBar position="fixed" color="default" elevation={0} className="border-bottom">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="d-flex-center-between">
                    <IconButton onClick={handleOpenDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <div>모바일 로고</div>
                    <IconButton>
                        <AccountBoxIcon />
                    </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="app-pc-bar d-flex-center-between">
                    <div className="d-flex">
                        <div>PC로고</div>
                        <ul className="ml-10 d-flex">
                            {pages.map((page, index) => (
                                <li className="mr-4 cursor-pointer" key={index} onClick={() => handleNavigation(page)}>
                                    {page.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {user ? (
                        <div>
                            <IconButton>
                                <AccountBoxIcon />
                            </IconButton>
                            {user.id} 님
                        </div>
                    ) : (
                        // user가 없을 때
                        <div>
                            <Button variant="outlined" size="small" onClick={handleLoginClick}>
                                로그인
                            </Button>
                        </div>
                    )}
                </Box>
            </Toolbar>
            <DialogLogin
                open={dialogOpen}
                onClose={handleCloseDialog}
            />
        </AppBar>
    );
}

export default GlobalAppBar;
