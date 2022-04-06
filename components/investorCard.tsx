import {
  Card,
  Label
} from 'semantic-ui-react';
import { Investor } from '../types/investor.types';

export default function InvestorCard({ investor, setInvType, openInvestor }: {
  investor: Investor,
  setInvType: any,
  openInvestor: any
}) {

  return (
    <Card
      as='a'
      onClick={(e) => {
        openInvestor(investor);
      }}
      key={investor.slug}
      fluid
      link
      color='yellow'
      style={{ maxWidth: '360px', margin: '0.5em' }}>
      <Card.Content textAlign='left'>
        <h2 className='card-title' style={{ marginTop: 0, marginBottom: '8px' }}>{investor.name}</h2>
        <p style={{ fontSize: '1.1em', marginTop: '8px' }} className='tagline'>
          {investor.description}
        </p>
      </Card.Content>
      <Card.Content extra textAlign='right'>
        <Label
          style={{ color: '#0C5FFF', borderColor: '#0C5FFF', fontFamily: 'Nunito' }}
          onClick={(e) => {
            e.stopPropagation();
            setInvType(investor.type)
          }} circular basic>{investor.type}</Label>
      </Card.Content>
    </Card >
  )
}