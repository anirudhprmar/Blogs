import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-900">
      

      <div className="max-w-2xl w-full space-y-12 mt-auto">
        <header className="flex justify-between items-start">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Anirudh Parmar</h1>

          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium text-right">Connect</p>
            <ul className="flex gap-4 items-center justify-end">
              <li>
                <a href="https://x.com/anirudhprmar" 
                   className="text-gray-500 hover:text-gray-900 transition-colors">X</a>
              </li>
              <li>
                <a href="mailto:anirudhparmar2004@gmail.com" 
                   className="text-gray-500 hover:text-gray-900 transition-colors">email</a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <ul className="space-y-4">
            <li className="flex justify-between items-center"> 
              <Link href='/first-post' className="text-gray-900 hover:text-gray-500 transition-colors">first post</Link> 
              <time dateTime="2025-01-01" className="text-sm text-gray-500">Jan 1, 2025</time>
            </li>
            <li className="flex justify-between items-center"> 
              <Link href='/second-post' className="text-gray-900 hover:text-gray-500 transition-colors">second post</Link> 
              <time dateTime="2025-01-02" className="text-sm text-gray-500">Jan 2, 2025</time>
            </li>
            <li className="flex justify-between items-center"> 
              <Link href='/third-post' className="text-gray-900 hover:text-gray-500 transition-colors">third post</Link> 
              <time dateTime="2025-01-03" className="text-sm text-gray-500">Jan 3, 2025</time>
            </li>
            
          </ul>
        </main>
      </div>
    </div>
  );
}