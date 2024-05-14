import {
    FaBullseye,
    FaCamera,
    FaChartLine,
    FaEye,
    FaLaptop,
    FaPen,
} from 'react-icons/fa'

const features = [
    {
        name: 'Copywriting',
        description:
            'Clear communication is key to a success. Using the <StoryBrand> framework, we can help you craft the perfect message for your audience.',
        href: '#',
        icon: FaPen,
    },
    {
        name: 'Visual Identity',
        description:
            'We can help you create a visual identity that is unique to your brand. From logos to color palettes, we can help you stand out.',
        href: '#',
        icon: FaEye,
    },
    {
        name: 'Custom Websites',
        description:
            'We can help you create a custom website that is tailored to your brand. From design to development, we can help you every step of the way.',
        href: '#',
        icon: FaLaptop,
    },
    {
        name: 'Photography & Videography',
        description:
            'We can help you create stunning visuals for your brand. From product photography to promotional videos, we can help you create content that stands out.',
        href: '#',
        icon: FaCamera,
    },
    {
        name: 'Strategy & Planning',
        description:
            'We can help you create a strategy that is tailored to your brand. From social media to email marketing, we can help you create a plan that works for you.',
        href: '#',
        icon: FaChartLine,
    },
    {
        name: 'SEO & Marketing',
        description:
            'We can help you create a marketing plan that is tailored to your brand. From SEO to social media, we can help you create a plan that works for you.',
        href: '#',
        icon: FaBullseye,
    },
]

const Services = () => {
    return (
        <section className="py-12 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col gap-6 lg:text-center">
                    <div>
                        <h2 className="font-ext-bold uppercase text-blue-600">
                            Full-Service
                        </h2>
                        <h3 className="font-plantin text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl">
                            Everything you need for your website.
                        </h3>
                    </div>
                    <p>
                        We collaborate with you to craft a unique website that
                        reflects your brand. Unlike many, we provide a
                        comprehensive solution encompassing copywriting, visual
                        identity, custom websites, multimedia content, strategic
                        planning, and SEO & marketing. Our goal is to help your
                        brand shine amidst the competition.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map(feature => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-3">
                                    <feature.icon
                                        className="h-5 w-5 flex-none text-blue-600"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                    {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-blue-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Services
