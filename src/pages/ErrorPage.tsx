import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const errorType = searchParams.get('type');

    const [pageTitle, setTitle] = useState<string>('');
    const [pageDesc, setDesc] = useState<string>('');


    useEffect(() => {
        if (errorType === 'auth') {
            setTitle('로그인 후 이용 가능한 페이지입니다.');
            setDesc('우측 상단 로그인 버튼을 클릭하여 로그인해 주세요.');
        } else {
            setTitle('존재하지 않는 페이지입니다.');
            setDesc('페이지 경로가 잘못 되었을 수 있습니다.');

        }
    }, [errorType]);

    const goMainPage = () => {
        navigate('/');
    };

    return (
        <div className="pt-10 text-center">
            <h1>{pageTitle}</h1>
            <p>{pageDesc}</p>
            <Button variant="outlined" size="large" onClick={goMainPage}>
                메인 페이지로 이동하기
            </Button>
        </div>
    );
};

export default NotFoundPage;
