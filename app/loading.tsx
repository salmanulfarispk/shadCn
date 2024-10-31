import SkeletoCard from "@/components/ui/skeletoCard"

 const Loadingss = () => {
  return (
    <main>
    <div className="grid grid-cols-3 gap-8">
        {"123456789".split('').map(i => (
           <SkeletoCard key={i}/>
        ))}
    </div>
    </main>
  )
}

export default Loadingss