import { Container, Divider } from './styles';

export function MenuList() {
  return (
    <Container>
      <ul>
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <Divider />
      <button>Login</button>
    </Container>
  );
}
