import ScrollUp from '@/components/ScollUp'
import { PostPayload } from '@/lib/types/sanity'

type PostsPageProps = {
    post: PostPayload
}
const PostPage = ({ post }: PostsPageProps) => {
    // Default to an empty object to allow previews on non-existent documents
    const { title } = post || {}

    return (
        <>
            <h1 className="text-3xl">{title}</h1>
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
        </>
    )
}

export default PostPage
