import Animation from '../ui/Animation'

type StepsProps = {
  title: string
  steps: {
    title: string
    copy: string
  }[]
}
function Steps(props: StepsProps) {
  const { title, steps } = props
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative border-b-2 border-gray-50 bg-gray-50 shadow-md dark:border-blue-600 dark:bg-gray-700 lg:border-b-2 lg:border-rose-600">
          <h2 className="absolute -top-5 -left-5 right-5 mb-16 block max-w-xl bg-rose-500 py-6 px-6 font-ext-light text-xl text-white shadow-lg">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 pt-28 pb-6">
            {steps.map((step) => {
              return (
                <Animation
                  className="col-span-1"
                  key={step.title}
                  fade
                  slideInLeft
                >
                  <div className="border-blue-600 px-6 last:border-none sm:border-b lg:border-b-0 lg:border-r">
                    <h3 className="font-plantin text-xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="py-6 text-sm">{step.copy}</p>
                  </div>
                </Animation>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
