import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '../ui/CustomPortableText'

interface Step {
  _key: string
  title: string
  description: PortableTextBlock[]
}

interface StepsProps {
  title: string
  description: PortableTextBlock[]
  steps: Step[]
}
function Steps(props: StepsProps) {
  const { title, description, steps } = props
  // console.log('steps Props: ', props)
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative border-b-2 border-gray-50 bg-gray-50 shadow-md dark:border-blue-600 dark:bg-gray-700 lg:border-b-2 lg:border-rose-600">
          <h2 className="absolute -top-5 -left-5 right-5 mb-16 block max-w-xl bg-rose-500 py-6 px-6 font-ext-light text-xl text-white shadow-lg">
            {title}
          </h2>
          {description && (
            <div>
              <pre>{JSON.stringify(description)}</pre>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-12 pt-28 pb-6">
            {steps.map((step) => {
              return (
                <div
                  key={step._key}
                  className="border-blue-600 mx-6 last:border-none border-b pb-6 mb-6 md:border-b-0 lg:border-r lg:mr-6 flex flex-col space-y-4"
                >
                  <div>
                    <h3 className="font-plantin text-xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  {step.description && (
                    <div>
                      <CustomPortableText value={step.description} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
