import Banner from './Banner';
import CategoriesSamples from './CategoriesSamples';
import MostPopularAll from './MostPopularAll';
import SmallBanner from './SmallBanner';
import SmallerBanner from './SmallerBanner';

export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <CategoriesSamples></CategoriesSamples>
      <SmallBanner></SmallBanner>
      <MostPopularAll></MostPopularAll>
      <SmallerBanner></SmallerBanner>
      <MostPopularAll></MostPopularAll>
      
    </div>
  )
}
