import Container from "../Container/Container";
import { Title, PresentsList, PresentsItem } from "./Presents.styled";
import Image from 'next/image';

import CERT500 from '../../images/certificate/certificate-500.jpg';
import CERT1500 from '../../images/certificate/certificate-1500.jpg';
import CERT3000 from '../../images/certificate/certificate-3000.jpg';

export default function Presents() {
  return (
    <div>
      <Container>
        <Title>Certificates</Title>
        <PresentsList>
          <PresentsItem>
            <Image
              src={CERT500}
              alt="Certificate 500 UAH" 
            />
          </PresentsItem>
          <PresentsItem>
            <Image
              src={CERT1500}
              alt="Certificate 1500 UAH" 
            />
          </PresentsItem>
          <PresentsItem>
            <Image
              src={CERT3000}
              alt="Certificate 3000 UAH" 
            />
          </PresentsItem>
        </PresentsList>
      </Container>
    </div>
  )
}