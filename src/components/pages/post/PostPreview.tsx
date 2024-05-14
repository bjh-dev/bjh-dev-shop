'use client'

import { useLiveQuery } from 'next-sanity/preview'

import PostPage from '@/components/pages/post/Post'
import { postBySlugQuery } from '@/lib/queries'
import { PostPayload } from '@/lib/types/sanity'

type PostsProps = {
    post: PostPayload
}

const PostPreview = ({ post: initialData }: PostsProps) => {
    const [post] = useLiveQuery<PostPayload | null>(
        initialData,
        postBySlugQuery
    )

    if (!post) {
        return (
            <div>
                Please start editing your Post document to see the preview!
            </div>
        )
    }
    return <PostPage post={post} />
}

export default PostPreview
