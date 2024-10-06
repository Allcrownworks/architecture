import Header from "../Component/Header"
import Footer from "../Component/Footer"
interface props {
    children: React.ReactNode
}
const Layout = ({children}: props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">{children}</div>  
        <Footer />   
    </div>
  )
}

export default Layout

