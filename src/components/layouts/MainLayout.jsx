import { Header } from './Header'
import { Footer } from './Footer'
import { TertiaryHeader } from './TertiaryHeader'
export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TertiaryHeader />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}