import CTAButton from '../ui/CTAButton'

type PlanProps = {
  title: string
  description: string
  features: {
    name: string
    description: string
    icon: number
  }[]
}

function Plan(props: PlanProps) {
  const { title, description, features } = props
  return (
    <div className="py-md md:py-xl">
      <div className="container">
        <div className="max-w-lg">
          <h3 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
            {title}
          </h3>
          <p className="py-6">{description}</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-gray-50 px-6 py-12 shadow-md dark:bg-gray-700"
              >
                <div className="flow-root">
                  <div>
                    <span className="mb-6 inline-flex items-center justify-center rounded-md bg-blue-600 p-2">
                      <span className="mx-3 font-plantin text-2xl font-bold">
                        {feature.icon}
                      </span>
                    </span>
                    <h3 className="font-plantin text-xl font-bold tracking-tight">
                      {feature.name}
                    </h3>
                    <div className="mb-6 w-24 border-b-2 border-rose-600 pb-6" />
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Plan
