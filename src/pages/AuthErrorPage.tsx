import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const AuthErrorPage: React.FC = () => {
    const navigate = useNavigate();

    const goMainPage = () => {
        navigate('/');
    };

    return (
        <div className="pt-10 text-center">
            <h1>접근하기 위해서는 로그인이 필요합니다.</h1>
            <p>로그인 후 이용해 주세요</p>
            <Button variant="outlined" size="large" onClick={goMainPage}>
                메인 페이지로 이동하기
            </Button>
        </div>
    );
};

export default AuthErrorPage;
