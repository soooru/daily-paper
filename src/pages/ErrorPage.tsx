import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const goMainPage = () => {
        navigate('/');
    };

    return (
        <div className="pt-10 text-center">
            <h1>존재하지 않는 페이지입니다.</h1>
            <p>페이지 경로가 잘못 되었을 수 있습니다.</p>
            <Button variant="outlined" size="large" onClick={goMainPage}>
                메인 페이지로 이동하기
            </Button>
        </div>
    );
};

export default NotFoundPage;
