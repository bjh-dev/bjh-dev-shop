import ScrollUp from '@/components/ScollUp'
import ColourSection from '@/components/sections/ColourSection'
import Features from '@/components/sections/Features'
import HeroFullImage from '@/components/sections/FullHeroImage'
import Guide from '@/components/sections/Guide'
import Plan from '@/components/sections/Plan'
import Steps from '@/components/sections/Steps'
import { metrics, mistakes, outcomes, planSteps } from '@/lib/data'
import { HomePagePayload } from '@/lib/types'

export interface HomePageProps {
  data: HomePagePayload
}

function HomePage({ data }: HomePageProps) {
  return (
    <>
      {data?.pageBuilder.map((s) => {
        let el = null
        switch (s._type) {
          case 'hero':
            el = <HeroFullImage key={s._key} {...s} />
            break
          case 'cta':
            el = <p key={s._key}>Cta</p>
            break
          case 'feature':
            el = <p key={s._key}>Feature</p>
            break
          default:
            el = null
        }
        return el
      })}
      <Steps
        title="In brief, here's what we deliver for you…"
        steps={outcomes}
      />
      <Plan
        title="The Plan"
        description="No one should buy a website they can't understand. We've removed the technical jargon and perfected our processes so you get an amazing website and the results you need faster."
        features={planSteps}
      />
      <Guide
        title="Our proudest metrics aren't about us."
        description="We've had the privilege of
            serving some amazing leaders, businesses and not-for-profits over 10+ years. Ordinary people making a big differences for their customers and their communities."
        metrics={metrics}
      />
      <Features title="Avoid Costly Mistakes" features={mistakes} />
      <ColourSection text="We help business owners and not-for-profits grow using a proven framework that results in blazing-fast websites, marketing that works & stunning designs." />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}

export default HomePage
