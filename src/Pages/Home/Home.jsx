import { memo } from 'react'
import MainSection from "../../Components/Home/MainSection"
import SectionTwo from '../../Components/Home/SectionTwo'
import SectionThree from '../../Components/Home/SectionThree'
// import SectionFour from '../../Components/Home/SectionFour'
import SectionFive from '../../Components/Home/SectionFive'
import SectionSix from '../../Components/Home/SectionSix'
import SectionSeven from '../../Components/Home/SectionSeven'
import SectionEight from '../../Components/Home/SectionEight'
import SectionNine from '../../Components/Home/SectionNine'
import SectionTen from '../../Components/Home/SectionTen'
import SectionEleven from '../../Components/Home/SectionEleven'
import SectionTwelve from '../../Components/Home/SectionTwelve'
import SectionThirteen from '../../Components/Home/SectionThirteen'


 function Home() {
  return (
    <div className='w-full'>
    <MainSection/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFive/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
    <SectionNine/>
    <SectionTen/>
    <SectionEleven/>
    <SectionTwelve/>
    <SectionThirteen/>
    </div>
  )
}

export default memo(Home)