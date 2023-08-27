import Image from 'next/image'

import CTAButton from '../ui/CTAButton'

type GuideProps = {
  title: string
  description: string
  metrics: {
    id: number
    emphasis: string
    stat: string
    rest: string
  }[]
}

function Guide(props: GuideProps) {
  const { title, description, metrics } = props
  return (
    <div className="relative bg-gray-200 dark:bg-gray-800">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="relative h-full xl:col-start-2">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
              fill
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-200 dark:from-gray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="container xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h4 className="font-ext-bold uppercase text-rose-600">A snapshot</h4>
          <h2 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
            {title}
          </h2>
          <p className="mt-5">{description}</p>
          <div className="my-12 grid grid-cols-1 gap-y-12 gap-x-12 sm:grid-cols-2">
            {metrics.map((item) => (
              <div key={item.id}>
                {item.stat && (
                  <span className="block font-exp-bold text-2xl">
                    {item.stat}
                  </span>
                )}
                <span className="block text-sm">
                  <span className="underline font-ext-bold decoration-rose-600 decoration-2 underline-offset-4">
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </div>
            ))}
          </div>
          <p className="my-6 border-t border-gray-700 py-6 text-xs">
            Some of our work remains confidential. Not all victories are
            celebrated in public. We&apos;re happy to talk with you about our
            process and work over a call.
          </p>
          <CTAButton />
        </div>
      </div>
    </div>
  )
}

export default Guide
