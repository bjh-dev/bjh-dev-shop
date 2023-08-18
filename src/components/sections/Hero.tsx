import Animation from '../ui/Animation'
import BodyPortableText from '../ui/BodyPortableText'
import CTAButton from '../ui/CTAButton'
import HeaderPortableText from '../ui/HeaderPortableText'
import Media from '../ui/Media'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Hero(props: any) {
  const { title, subtitle, media, ctas = [] } = props

  return (
    <section className="relative bg-gray-200 py-xl">
      <div className="container">
        <div className="flex flex-col-reverse space-y-reverse lg:space-y-0 md:space-y-reverse space-y-12 md:space-y-16 lg:grid lg:grid-cols-2 lg:gap-x-24">
          <div className="col-span-1 flex items-center">
            <div className="relative w-full h-full">
              {media && <Media {...media} />}
            </div>
          </div>
          <div className="col-span-1 lg:flex lg:items-center">
            <div className="max-w-prose">
              <div className="pb-12">
                <Animation fade duration={0.3} slideInLeft>
                  <HeaderPortableText text={title} />
                </Animation>
              </div>
              <div>
                <Animation fade duration={0.8}>
                  <BodyPortableText text={subtitle} />
                </Animation>
              </div>
              <Animation fade delay={1} duration={0.3} slideInBottom>
                <div className="pt-12 flex space-x-6">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {ctas.map((c: any) => (
                    <CTAButton key={c._key} {...c} />
                  ))}
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
