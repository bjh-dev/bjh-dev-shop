import { FaCheck, FaTimes } from 'react-icons/fa'

type FeaturesProps = {
  title: string
  features: {
    name: string
    complete: boolean
    description: string
  }[]
  complete?: boolean
}

function Features(props: FeaturesProps) {
  const { features, title, complete } = props
  const titleString = title
  const titleArray = titleString.split(/(\s+)/)
  const lastFeature = features.slice(-1)[0]

  return (
    <div className="light:bg-gray-200 py-16 lg:py-24">
      <div className="container lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
            {titleArray[0]}{' '}
            <span
              className={`underline decoration-gray-800 decoration-4 underline-offset-8 ${
                complete ? 'text-blue-600' : 'text-rose-600'
              }`}
            >
              {titleArray[2]}
            </span>{' '}
            {titleArray[4]}
          </h2>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-4 sm:space-y-0 lg:gap-x-8">
            {features.slice(0, -1).map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  {feature.complete ? (
                    <FaCheck
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaTimes
                      className="absolute h-6 w-6 text-rose-600"
                      aria-hidden="true"
                    />
                  )}
                  <p className="light:text-gray-900 ml-9 font-plantin text-lg font-bold leading-6 dark:text-gray-100">
                    {feature.name}
                  </p>
                </dt>
                <dd className="light:text-gray-500 mt-2 ml-9 text-sm dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <dl
            key="123456"
            className="relative col-span-2 mt-8 rounded-md border border-rose-600 py-4 px-6"
          >
            <dt>
              {lastFeature.complete ? (
                <FaCheck
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <FaTimes
                  className="absolute h-6 w-6 text-rose-600"
                  aria-hidden="true"
                />
              )}
              <p className="light:text-gray-900 ml-9 font-plantin text-lg font-bold leading-6 dark:text-gray-100">
                {lastFeature.name}
              </p>
            </dt>
            <dd className="light:text-gray-500 mt-2 ml-9 text-sm dark:text-gray-300">
              {lastFeature.description}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
