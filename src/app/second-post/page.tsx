import BlogPost from "@/components/Blog-post"

export default function Page() {
  return (
    <BlogPost 
      date="January 2, 2025"
      title="Second Post"
      paragraphs={[
        "First paragraph goes here...",
        "Second paragraph goes here...",
        "Third paragraph goes here..."
      ]}
    />
  )
}