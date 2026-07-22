import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Carregando"
          width={80}
          height={80}
          className="mx-auto animate-pulse opacity-40"
        />
        <div className="mt-4 w-48 h-2 skeleton rounded-full mx-auto" />
      </div>
    </div>
  )
}
