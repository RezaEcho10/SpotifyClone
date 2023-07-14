import SideBar from '@/Components/SideBar'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body> 
        <SideBar>   
          {children}
        </SideBar>
      </body>
    </html>
  )
}
