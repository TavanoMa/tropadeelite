import { Skull } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Skull className="h-12 w-12 text-olive-600/40 mx-auto animate-pulse" />
        <div className="mt-4 w-48 h-2 skeleton rounded-full mx-auto" />
      </div>
    </div>
  )
}
