import About from '@/components/About'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-[100px]">
      <Nav />
      <About />
      <Footer />
    </div>
  )
}

export default page
