import Animation from '../ui/Animation'
import BodyPortableText from '../ui/BodyPortableText'
// import CTAButton from '../ui/CTAButton'
import HeaderPortableText from '../ui/HeaderPortableText'
import Media from '../ui/Media'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = (props: any) => {
    const { title, subtitle, media, ctas = [] } = props

    return (
        <section className="py-xl relative bg-gray-200">
            <div className="container">
                <div className="flex flex-col-reverse space-y-12 space-y-reverse md:space-y-16 md:space-y-reverse lg:grid lg:grid-cols-2 lg:gap-x-24 lg:space-y-0">
                    <div className="col-span-1 flex items-center">
                        <div className="relative h-full w-full">
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
                            <Animation
                                fade
                                delay={1}
                                duration={0.3}
                                slideInBottom
                            >
                                <div className="flex space-x-6 pt-12">
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
