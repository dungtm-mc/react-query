import { Link } from '@nextui-org/react'

const Header: React.FC = () => {
  return (
    <div className="h-20 border-b border-gray-300 bg-white text-gray-900">
      <div className="mx-auto flex h-full items-center justify-between px-8">
        <span className="text-xl font-bold">Query Music</span>
        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
