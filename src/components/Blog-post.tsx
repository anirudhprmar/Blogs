import Link from "next/link";

interface BlogPostProps {
  date: string;
  title: string;
  paragraphs: string[];
}

export default function BlogPost({ date, title, paragraphs }: BlogPostProps) {
    return (
      <div className=" max-h-full flex flex-col">
        <div className="flex-1 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl max-h-full">
            <header className="py-8">
              <nav className="flex justify-between items-center">
                <p className="font-bold text-2xl tracking-tight text-gray-900">Anirudh Parmar</p>
                <Link href={'/'} className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
              </nav>
            </header>

            <main>
              <article className="py-8">
                <div className="space-y-6">
                  <time className="text-sm text-gray-500 font-medium block" dateTime={date}>
                    {date}
                  </time>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {title}
                  </h1>
                  <div className="space-y-4 text-gray-600">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="break-words">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>

        <hr className="py-4 bg-white" />

        <footer className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                <a href="https://x.com/anirudhprmar" className="text-gray-500 hover:text-gray-900 transition-colors">X</a>
                <a href="mailto:anirudhparmar2004@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors">email</a>
              </div>
              <p className="text-center text-sm text-gray-500">&copy; 2025 Anirudh Parmar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    )
}