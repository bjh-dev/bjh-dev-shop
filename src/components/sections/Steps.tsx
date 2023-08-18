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
    <section className="relative -mt-24 py-12">
      <div className="container">
        <div className="mx-4 border-b-2 border-gray-50 bg-gray-50 shadow-md dark:border-blue-600 dark:bg-gray-700 md:mx-12 lg:mx-auto lg:border-b-2 lg:border-rose-600">
          <h2 className="relative top-11 -left-4 mb-16 block max-w-xl bg-rose-500 py-6 px-6 font-ext-light text-xl text-white shadow-lg md:-left-8 lg:-left-0 xl:-left-12">
            {title}
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 space-y-12 py-6 lg:max-w-none lg:grid-cols-3 lg:space-x-12 lg:space-y-0 lg:px-6">
            {steps.map((step, i) => (
              <Animation
                key={step.title}
                fade
                duration={0.3}
                delay={i + 0.3}
                slideInRight
              >
                <div className="mx-6 border-blue-600 px-6 last:border-none sm:border-b lg:border-b-0 lg:border-r">
                  <h3 className="font-plantin text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="py-6 text-sm">{step.copy}</p>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
