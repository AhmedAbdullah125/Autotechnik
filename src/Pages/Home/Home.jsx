import Banner from './Banner';
import CategoriesSamples from './CategoriesSamples';
import MostPopularAll from './MostPopularAll';
import SmallBanner from './SmallBanner';

export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <CategoriesSamples></CategoriesSamples>
      <SmallBanner></SmallBanner>
      <MostPopularAll></MostPopularAll>
      <SmallBanner></SmallBanner>
      <MostPopularAll></MostPopularAll>
      
    </div>
  )
}
