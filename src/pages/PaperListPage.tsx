
import React, { useEffect, useState } from 'react';
import { db } from '../service/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { PaperType } from '../types/paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const PaperListPage: React.FC = () => {
  const [data, setData] = useState<PaperType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!db) return;
        const querySnapshot = await getDocs(collection(db, 'papers'));
        const docsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            contents: data.contents,
            createTime: data.createTime,
            paperId: data.paperId,
            tag: data.tag,
            title: data.title
          } as PaperType;
        });
        setData(docsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const goDetailPage = (item: PaperType) => {
    console.log('goDetailPage', item)
  };

  return (
    <div>
      <h2 className="py-4 ma-0">데일리 페이퍼 목록</h2>
      {data.length === 0 && <div> 데이터가 없거나 데이터를 불러오지 못했습니다. </div>}
      <ul>
        {data.map((item) => (
          <li key={item.paperId} className="border-radius-xs border mb-3 d-flex-center-between px-4 py-3">
            <div>
              <div className="text-subtitle">{item.title}</div>
              <div>{item.createTime}</div>
              <ul className="d-flex">
                {item.tag.map((tag, index) => (
                  <li key={index}>
                    {index !== 0 && <span className="mx-1">, </span>}
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Button onClick={() => { goDetailPage(item) }} color="primary" >
                <ChevronRightIcon />
              </Button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PaperListPage;

