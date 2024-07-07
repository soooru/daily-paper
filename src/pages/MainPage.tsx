import React from 'react';
import ImgMain from '../assets/images/img-main.jpg';
import styles from './MainPage.module.scss'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/atom/CustomButton';

const MainPage: React.FC = () => {

  const navigate = useNavigate();

  const goWritePage = () => {
    navigate('/write');
  };

  return (
    <div className="page-contents">
      <div className="bg-light-teal px-4 pt-2 pb-4 border-radius-sm">
        <h1 className="text-title">데일리 페이퍼</h1>
        <div className="mr-4 mb-4">당신의 창의성을 깨워줄 습관 <br /> 매일 15분, 데일리 페이퍼와 함께하세요.</div>
        <CustomButton onClick={goWritePage}> 작성하러 가기 </CustomButton>
      </div>
      <div className="d-flex-center-between mb-4 d-block-phone" >
        <div className={`${styles.imageContainer} grow-1`}>
          <img src={ImgMain} alt="메인 이미지" />
        </div>
        <div className="px-2">
          <div className="py-4">
            단순한 글쓰기를 넘어 창의성을 깨우고 자아를 발견하는 여정을 함께합니다. <br />
            매일매일, <span className="text-bg-active">당신의 생각을 기록하며 새로운 영감을 찾아보세요.</span><br /><br />
            다음과 같은 <strong> 작성 규칙</strong>을 따르세요. <br />
          </div>
          <div className={styles.writeRule}>
            <div className={styles.ruleItem}>
              매일 비슷한 시간대에 방해받지 않는 15분 정도의 시간을 확보합니다. <br />
              머릿속에 떠오르는 모든 것을 자유롭게 적습니다. "적을 것이 없다" 라고 적어도 됩니다.
            </div>
            <div className={styles.ruleItem}>
              내용이 어색하거나 부적절해 보여도 써내려가는 것이 중요합니다.<br />
              "아무에게도 보여주지 않는다"는 것을 상정하고 작성하세요.
            </div>
            <div className={styles.ruleItem}>
              위 과정을 반복합니다. <br />
              글을 쓰는 동안 당신은 자아를 정돈할 것이며, <br />
              지난날의 당신은 현재의 당신에게 새로운 영감을 줄 것입니다.
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="bg-light-teal py-2 px-3 border-radius-sm mb-4">
          과거 당신의 생각 조각들
        </div>
        <div>
          <div>점심 메뉴에 관한 고찰</div>
          <div>장마가 길어지는 날</div>
        </div>
      </div>
      <div className="py-4">
        <div className="bg-light-teal py-2 px-3 border-radius-sm mb-4">
          오늘, 시작하는 단어
        </div>
        <div>편의점 우산, 일회용 우비, 민트 캔디, 익지 않은 과일, 비어있는 파우치, 인공위성의 궤도, 저속 노화</div>
      </div>
      <div className="py-4">
        <div className="bg-light-teal py-2 px-3 border-radius-sm mb-4">
          서비스에 영감을 준 책
        </div>
        <strong>'모닝 페이지 쓰기'</strong><br /><br />
        매일 아침 노트를 폋려놓고 그 자리에서 떠오르는 생각을 세 페이지씩 쓴다. <br />
        내용은 어떤 것이든 좋다. 친구와 나눈 이야기, 빨랫감, 일 걱정 ... <br />
        몇 주, 몇달에 걸쳐 모닝 페이지를 써나가다 보면 어느새 내면의 두려움이 사라지고 <br />
        창조적 지혜의 샘이 넘쳐흐르는 자신의 모습을 발견하게 될 것이다.
      </div>
      <span className="text-small text-bg-active">[발췌] 아티스트 웨이(The Artist's Way) | 줄리아 카메론</span>
      <div className="text-small mt-4">* 이 서비스는 서비스 개발자의 개인 토이프로젝트/포트폴리오용으로 제작되었으며, 상업적 이익을 추구하지 않습니다. </div>
    </div >
  )
};

export default MainPage;
