import { FaCheck, FaTimes } from 'react-icons/fa'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '../ui/CustomPortableText'

interface Feature {
  _key: string
  title: string
  description: PortableTextBlock[]
  direction: 'positive' | 'negative'
}

interface FeaturesProps {
  description: PortableTextBlock[]
  features: Feature[]
}

function Features(props: FeaturesProps) {
  const { features, description } = props
  console.log('feature Props: ', props)

  return (
    <div className="light:bg-gray-200 py-16 lg:py-24">
      <div className="container lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="col-span-1">
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
                Avoid{' '}
                <span className="underline decoration-gray-800 decoration-4 underline-offset-8 text-rose-600">
                  Costly
                </span>{' '}
                Mistakes
              </h2>
            </div>
          </div>
          {description && (
            <div>
              <CustomPortableText value={description} />
            </div>
          )}
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="flex flex-col space-y-6 md:grid md:space-y-0 md:grid-cols-2 md:gap-y-12 md:gap-x-6 ">
            {features.slice(0, -1).map((feature) => (
              <div key={feature._key}>
                <dt>
                  {feature.direction === 'positive' ? (
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
                    {feature.title}
                  </p>
                </dt>
                <dd className="light:text-gray-500 mt-2 ml-9 text-sm dark:text-gray-300">
                  <CustomPortableText value={feature.description} />
                </dd>
              </div>
            ))}
          </dl>
          {features.slice(-1).map((lastfeature) => (
            <dl
              key={lastfeature._key}
              className="relative col-span-2 mt-12 rounded-md border border-rose-600 py-4 px-6"
            >
              <dt>
                {lastfeature.direction === 'positive' ? (
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
                  {lastfeature.title}
                </p>
              </dt>
              <dd className="light:text-gray-500 mt-2 ml-9 text-sm dark:text-gray-300">
                <CustomPortableText value={lastfeature.description} />
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
