import Counter from '../components/Counter';
import Description from '../components/Description';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <Counter incrementValue={1} buttonColor="blue" />
      <Counter incrementValue={2} buttonColor="green" />
      <Description />
      <ProductSearch />
    </div>
  );
}
