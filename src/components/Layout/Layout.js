import Navbar from "../navbar/NavBar"
import { LayoutContainer } from "./LayoutStyles"

const Layout = ({ children }) => {

  return (
    <LayoutContainer>
      <Navbar />

      {children}
    </LayoutContainer>
  )
}
export default Layout