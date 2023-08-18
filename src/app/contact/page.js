import Map from '@/components/Map'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-[100px]">
      <Nav />
      <h1>contact page</h1>
      <Map />
      <Footer />
    </div>
  )
}

export default page
