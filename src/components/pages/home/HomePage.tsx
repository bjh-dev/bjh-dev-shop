import ScrollUp from '@/components/ScollUp'
import ColourSection from '@/components/sections/ColourSection'
import Features from '@/components/sections/Features'
import HeroFullImage from '@/components/sections/FullHeroImage'
import Guide from '@/components/sections/Guide'
import Plan from '@/components/sections/Plan'
import Services from '@/components/sections/services'
import Steps from '@/components/sections/Steps'
import { HomePagePayload } from '@/lib/types/sanity'

export interface HomePageProps {
    data: HomePagePayload
}

const HomePage = ({ data }: HomePageProps) => {
    // console.log('data: ', data)
    return (
        <>
            {data?.pageBuilder.map(s => {
                let el = null
                switch (s._type) {
                    case 'hero':
                        el = <HeroFullImage key={s._key} {...s} />
                        break
                    case 'steps':
                        // el = <h1 className="text-lime-400 text-4xl">Steps</h1>
                        el = <Steps key={s._key} {...s} />
                        break
                    case 'plan':
                        el = <Plan key={s._key} {...s} />
                        break
                    case 'guide':
                        el = <Guide key={s._key} {...s} />
                        break
                    case 'features':
                        el = <Features key={s._key} {...s} />
                        break
                    default:
                        el = null
                }
                return el
            })}
            <Services />
            <ColourSection text="We help business owners and not-for-profits grow using a proven framework that results in blazing-fast websites, marketing that works & stunning designs." />
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
        </>
    )
}

export default HomePage
