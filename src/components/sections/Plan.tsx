import { PortableTextBlock } from 'sanity'

import CTAButton from '../ui/CTAButton'
import { CustomPortableText } from '../ui/CustomPortableText'

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

function Plan(props: PlanProps) {
  const { title, description, planSteps } = props
  return (
    <div className="py-md md:py-xl">
      <div className="container">
        <div className="max-w-lg flex flex-col space-y-4">
          <div>
            <h3 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
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
                      <CustomPortableText value={step.description} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-16">
            <CTAButton
              url="https://calendly.com/bjhdev/intro-call"
              text="Schedule a call today!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Plan
