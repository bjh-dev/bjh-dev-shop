import ScrollUp from '@/components/ScollUp'
import { PagePayload } from '@/lib/types/sanity'

export interface PageProps {
  data: PagePayload
}

function HomePage({ data }: PageProps) {
  const { title } = data

  return (
    <div className="mt-16">
      <div className="container">
        <h1 className="text-3xl">{title}</h1>
      </div>
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}

export default HomePage
