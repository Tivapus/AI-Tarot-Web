'use client';

import { BackGround } from '@/styles/BackGround.styled';
import Deck from '@/components/Deck';
import { tarotDeck } from '@/TarotDeck';
import { DefaultMenuWrapContainer, FooterTextBox, FooterTextStyle, HeaderText } from '@/styles/Shared.styled';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTarot } from '@/contexts/TarotContext.context';
import OnProcessNavBar from '@/components/OnProcessNavBar';

export default function HomePage() {
  const DeckTarot = tarotDeck;
  const router = useRouter();

  const { isInitialized, mode, numCard } = useTarot();

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    if (!mode || numCard === 0) {
      router.push('/home');
    }
  }, [isInitialized, mode, numCard, router]);

  if (!isInitialized) {
      return (
          <BackGround>
            <DefaultMenuWrapContainer>
              <HeaderText>Loading...</HeaderText>
            </DefaultMenuWrapContainer>
          </BackGround>
      );
  }
  return (
    <BackGround style={{height:'100vh'}}>
      <OnProcessNavBar/>
      <DefaultMenuWrapContainer>
        <HeaderText style={{paddingTop:'32px'}}>🔮 Tarot 🔮</HeaderText>
        <Deck cards={DeckTarot} numPicks={numCard}/>
      </DefaultMenuWrapContainer>
      <FooterTextBox style={{paddingTop:'49px'}}>
          <FooterTextStyle>เว็บไซต์นี้จัดทำขึ้นเพื่อการศึกษาเท่านั้น โปรดใช้วิจารณญาณในการใช้งาน | by MOCHA 2025</FooterTextStyle>
      </FooterTextBox>
    </BackGround>
  );
}
