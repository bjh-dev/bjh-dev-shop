import { PortableTextBlock } from 'sanity'

import CustomPortableText from '@/components/ui/CustomPortableText'

import CTAButton from '../ui/CTAButton'

interface Step {
    _key: string
    title: string
    description: PortableTextBlock[]
}

interface PlanProps {
    title: string
    description: PortableTextBlock[]
    planSteps: Step[]
}

const Plan = (props: PlanProps) => {
    const { title, description, planSteps } = props
    return (
        <div className="py-12 md:py-24">
            <div className="container">
                <div className="flex max-w-lg flex-col space-y-4">
                    <div>
                        <h3 className="font-plantin text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl">
                            {title}
                        </h3>
                    </div>
                    <div>
                        <CustomPortableText value={description} />
                    </div>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {planSteps.map((step, i) => {
                            return (
                                <div
                                    key={step._key}
                                    className="bg-gray-50 px-6 py-12 shadow-md dark:bg-gray-700"
                                >
                                    <div className="flow-root">
                                        <div>
                                            <span className="mb-6 inline-flex items-center justify-center rounded-md bg-blue-600 p-2">
                                                <span className="mx-3 font-plantin text-2xl font-bold">
                                                    {i + 1}
                                                </span>
                                            </span>
                                            <h3 className="font-plantin text-xl font-bold tracking-tight">
                                                {step.title}
                                            </h3>
                                            <div className="mb-6 w-24 border-b-2 border-rose-600 pb-6" />
                                            <CustomPortableText
                                                value={step.description}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="my-16">
                        Booked Through 2025
{/*                         <CTAButton
                            url="https://calendar.app.google/zhTWfyn9ebyruuMk7"
                            text="Schedule a call today!"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plan
