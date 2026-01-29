import './styles/reset.css';
import './styles/App.css';
import { Button, Card, Sheet, Stack, Typography, Box, Chip, RadioGroup, Radio, Select, Option, Input } from '@mui/joy';
import heroSectionImg from './assets/images/hero_section.png';
import detailSectionImg1 from './assets/images/detail_1.png';
import detailSectionImg2 from './assets/images/detail_2.png';
import detailSectionImg3 from './assets/images/detail_3.png';
import detailSectionImg4 from './assets/images/detail_4.png';
import guideSectionImg1 from './assets/images/mockup_1.png';
import guideSectionImg2 from './assets/images/mockup_2.png';
import guideSectionImg3 from './assets/images/mockup_3.png';

import { Modal } from './component/Modal'
import { useState } from 'react';
function App() {

  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDownload, setIsOpenDownload] = useState(false);

  const getInfo = () => {
    setIsOpen(false);
  }

  return (
    <Stack>
      {isOpen && 
        <Modal>
          <Stack gap={2}>
            <Stack>
              <Typography fontSize={'16px'} fontWeight={400} fontFamily={'Fredoka One'} textAlign={'center'}>dogwithus</Typography>
            </Stack>
            <Stack alignItems={'center'}>
              <Typography fontWeight={500} fontSize={'18px'} sx={{color: '#85AF11'}}>잘 맞는 산책 메이트를 추천해드릴게요</Typography>
              <Typography fontWeight={600} fontSize={'24px'} fontStyle={'semi-bold'}>성별과 연령대를 선택해주세요</Typography>
            </Stack>
            <Stack gap={1}>
              <Typography fontWeight={600} fontSize={'18px'}>성별</Typography>
              <RadioGroup defaultValue="female" orientation="horizontal" sx={{display: 'flex'}}>
                <Radio value="female" label="여자" sx={{flex: 1}}/>
                <Radio value="male" label="남자" sx={{flex: 1}}/>
              </RadioGroup>
            </Stack>
            <Stack gap={1}>
              <Typography fontWeight={600} fontSize={'18px'}>태어난 해</Typography>
              <Select placeholder="태어난 해를 선택해주세요">
                {
                  Array.from({length: 38}, (_, index) => (
                    <Option value={2007 - index}>{2007 - index}</Option>
                  ))
                }
              </Select>
            </Stack>
            <Button sx={{backgroundColor: '#B9DF52', color: '#fff', height: '50px', fontWeight: '500', fontSize: '18px'}} onClick={getInfo}>선택완료</Button>
          </Stack>
        </Modal>
      }

      {isOpenDownload && 
        <Modal>
          <Stack gap={1}>
            <Stack alignItems={'center'}>
              <Chip size='sm' sx={{backgroundColor: '#B9DF52', color: '#fff'}}>BETA</Chip>
              <Typography fontSize={'16px'} fontWeight={400} fontFamily={'Fredoka One'} textAlign={'center'}>dogwithus</Typography>
            </Stack>
            <Stack alignItems={'center'}>
              <Typography fontWeight={600} fontSize={'24px'}>현재 소수 인원으로</Typography>
              <Typography fontWeight={600} fontSize={'24px'} sx={{position: 'relative', top: '-5px'}}>
                <span style={{color: '#85AF11'}}>베타</span> 운영 중이예요
              </Typography>
            </Stack>
            <Stack alignItems={'center'}>
              <Typography fontWeight={400} fontSize={'18px'}>더 나은 산책 메이트 경험을 만들기 위해</Typography>
              <Typography fontWeight={400} fontSize={'18px'}>현재는 <span style={{fontWeight: 700}}>제한된 인원</span>만 참여하고 있어요.</Typography>
            </Stack>
            <Stack alignItems={'center'}>
              <Typography fontWeight={400} fontSize={'18px'}>지금은 바로 참여가 어렵지만,</Typography>
              <Typography fontWeight={400} fontSize={'18px'}>연락처를 남겨주시면 <span style={{fontWeight: 700}}>정식 오픈 소식</span>을</Typography>
              <Typography fontWeight={400} fontSize={'18px'}>가장 먼저 알려드릴게요.</Typography>
            </Stack>
            <Stack gap={1} sx={{marginTop: '1rem'}}>
              <Typography fontWeight={600} fontSize={'18px'}>전화번호 <span style={{color: '#A6A6A6', fontWeight: 400}}>(문자발송)</span></Typography>
              <Input placeholder='`-`없이 숫자만 입력해주세요.' sx={{height: '50px'}} />
              <Typography fontWeight={400} fontSize={'14px'}>💡 알림은 편하게 받아보실 수 있게 보내드릴게요.<br />‘소개팅’ 같은 부담스러운 표현은 사용하지 않아요.</Typography>
            </Stack>
          </Stack>
          <Stack gap={1} sx={{marginTop: '1rem'}}>
            <Button sx={{backgroundColor: '#B9DF52', color: '#fff', height: '50px', fontWeight: '500', fontSize: '18px'}} onClick={getInfo}>오픈 알림 받기</Button>
            <Button sx={{backgroundColor: '#fff', color: '#B9DF52', height: '50px', fontWeight: '500', fontSize: '18px', border: '1px solid #B9DF52'}} onClick={() => setIsOpenDownload(false)}>그냥 둘러볼게요</Button>
          </Stack>
        </Modal>
      }

      {/* header */}
      <Sheet className='section' sx={{backgroundColor: '#fff', color: '#171917', position: 'sticky', top: 0, zIndex: 100}}>
        <Stack padding={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{boxSizing: 'border-box'}}>
          <Typography fontSize={'22px'} fontWeight={'bold'} fontFamily={'Fredoka One'}>dogwithus</Typography>
          <Button sx={{borderRadius: '16px', background: '#000'}} onClick={() => setIsOpenDownload(true)}>앱 다운로드</Button>
        </Stack>
      </Sheet>

      {/* hero section */}
      <Sheet className='section' sx={{backgroundColor: '#E7F3BE', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Stack sx={{position: 'absolute', top: '12%'}} gap={1.5}>
          <Typography fontSize={'33px'} fontWeight={700} lineHeight={'42px'} textAlign={'center'} fontFamily={'NEXON Lv1 Gothic'} >
            강아지와 함께<br />산책으로 시작하는 만남
          </Typography>
          <Typography fontSize={'20px'} fontWeight={500} lineHeight={'14px'} textAlign={'center'} sx={{color: '#3B3D3B'}}>
            강아지를 사랑하는 사람들끼리, 독위드어스
          </Typography>
        </Stack>
        <img src={heroSectionImg} style={{width: '100%', display: 'block'}}/>
      </Sheet>

      {/* detail section */}
      <Sheet className='section' sx={{backgroundColor: '#F4F4F4', padding: '5rem 1rem'}}>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Typography fontWeight={700} fontSize={'28px'} fontFamily={'NEXON Lv1 Gothic'}>산책 소개팅이 편한 이유</Typography>
          <Typography fontWeight={400} fontSize={'18px'} sx={{color: '#3B3D3B'}}>어색함/거절 부담/코스 고민을 산책이 줄여줘요</Typography>
        </Stack>
        <Stack gap={2} sx={{marginTop: '2rem', maxWidth: '320px'}}>
          <Card className="detail-section-card">
            <img src={detailSectionImg1} />
            <Stack>
              <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'} textAlign={'center'}>어색해도 괜찮아</Typography>
              <Typography fontWeight={400} fontSize={'18px'} textAlign={'center'} sx={{color: '#3B3D3B'}}>산책이 대화의 공백을 메워줘요</Typography>
            </Stack>
          </Card>
          <Card className="detail-section-card">
            <img src={detailSectionImg2} />
            <Stack>
              <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'} textAlign={'center'}>자연스러운 거절</Typography>
              <Typography fontWeight={400} fontSize={'18px'} textAlign={'center'} sx={{color: '#3B3D3B'}}>산책하고 자연스럽게 마무리 가능</Typography>
            </Stack>
          </Card>
          <Card className="detail-section-card">
            <img src={detailSectionImg3} style={{width: '90%'}} />
            <Stack>
              <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'} textAlign={'center'}>시간 낭비가 적어요</Typography>
              <Typography fontWeight={400} fontSize={'18px'} textAlign={'center'} sx={{color: '#3B3D3B', whiteSpace: 'nowrap'}}>인연이 아니어도, 산책은 좋은 시간이 돼요</Typography>
            </Stack>
          </Card>
          <Card className="detail-section-card">
            <img src={detailSectionImg4} />
            <Stack>
              <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'} textAlign={'center'}>데이트 코스 고민 끝</Typography>
              <Typography fontWeight={400} fontSize={'18px'} textAlign={'center'} sx={{color: '#3B3D3B'}}>만남 자체가 코스 : 산책로/공원</Typography>
            </Stack>
          </Card>
        </Stack>
      </Sheet>

      {/* guide section */}
      <Sheet className='section' sx={{backgroundColor: '#FFF'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem 0', gap: '16px'}}>
          <Chip size='lg' sx={{backgroundColor: '#B9DF52', color: '#fff'}}>STEP 01</Chip>
          <Stack alignItems={'center'}>
            <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'}>매일 이성 카드 2장 받기</Typography>
            <Typography fontWeight={400} fontSize={'18px'} fontFamily={'Pretendard'}>강아지를 키우는 보호자 2명을 추천해줘요</Typography>
          </Stack>
          <img src={guideSectionImg1} style={{marginTop: '1rem'}}/>
        </Box>
      </Sheet>

      <Sheet className='section' sx={{backgroundColor: '#F8FFE4'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem 0', gap: '16px'}}>
          <Chip size='lg' sx={{backgroundColor: '#B9DF52', color: '#fff'}}>STEP 02</Chip>
          <Stack alignItems={'center'}>
            <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'}>프로필 상세정보 확인</Typography>
            <Typography fontWeight={400} fontSize={'18px'} fontFamily={'Pretendard'}>보호자 정보 + 강아지 정보까지 확인</Typography>
          </Stack>
          <img src={guideSectionImg2} style={{marginTop: '1rem'}}/>
        </Box>
      </Sheet>

      <Sheet className='section' sx={{backgroundColor: '#FFF'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem 0', gap: '16px'}}>
          <Chip size='lg' sx={{backgroundColor: '#B9DF52', color: '#fff'}}>STEP 03</Chip>
          <Stack alignItems={'center'}>
            <Typography fontWeight={700} fontSize={'24px'} fontFamily={'NEXON Lv1 Gothic'}>대화 후 산책 약속</Typography>
            <Typography fontWeight={400} fontSize={'18px'} fontFamily={'Pretendard'}>어디서 만나실래요? 장소/시간만 정하면 끝</Typography>
          </Stack>
          <img src={guideSectionImg3} style={{marginTop: '1rem'}}/>
        </Box>
      </Sheet>

      {/* download section  */}
      <Sheet className='section' sx={{backgroundColor: '#E7F3BE', padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight={700} fontSize={'28px'} fontFamily={'NEXON Lv1 Gothic'} textAlign={'center'}>
          산책으로 시작하는 만남<br />지금 바로 만나보세요
        </Typography>
        <Typography fontWeight={400} fontSize={'18px'} textAlign={'center'} sx={{color: '#3B3D3B'}}>
          강아지를 사랑하는 사람들끼리<br/>가볍게 걷고, 자연스럽게 알아가요
        </Typography>
        <Button onClick={() => setIsOpenDownload(true)} sx={{backgroundColor: '#000', color: '#fff', height: '58px', width: '260px', borderRadius: '100px', fontWeight: '500', fontSize: '20px', fontFamily: 'Pretendard', marginTop: '2rem'}}>
          앱 다운로드
        </Button>
      </Sheet>

      {/* footer */}
      {/* <Sheet className='section' sx={{backgroundColor: '#333', padding: '2rem 1rem 3rem'}}>
        <Typography fontSize={'22px'} fontWeight={400} fontFamily={'Fredoka One'} sx={{color: '#fff'}}>dogwithus</Typography>
      </Sheet> */}

    </Stack>
  )
}

export default App
