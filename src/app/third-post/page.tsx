import BlogPost from "@/components/Blog-post"

export default function Page() {
  return (
    <BlogPost 
      date="January 3, 2025"
      title="Third Post"
      paragraphs={[
        "First paragraph goes here...",
        "Second paragraph goes here...",
        "Third paragraph goes here..."
      ]}
    />
  )
}