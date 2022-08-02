import { Button } from '../Button';
import { Container, Row, Tag, Heading, Content } from './styles';

export function ContentCar() {
  return (
    <Container>
      <Row>
        <Tag>NEW</Tag>
        <span>Monograph dashboard</span>
      </Row>
      <Content>
        <Heading>
          Powerful insights <br />
          into your team
        </Heading>
        <p>
          Project planning and time trancking <br />
          for agile teams
        </p>
      </Content>
      <Row>
        <Button variant='solid'>SCHEDULE A DEMO</Button>
        <span>To see a preview</span>
      </Row>
    </Container>
  );
}
