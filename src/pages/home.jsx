
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import SelectedWork from '../components/selectedwork'
import image1 from '../assets/BehanceTitle.png'
import image2 from '../assets/EBookLibrary.jpg'
import image3 from '../assets/Journal.jpg'
import image4 from '../assets/MovieLibrary.jpg'


const Projects = [
  {
    title: "Velocity: Street Racer",
    descript: "Single-Player Street Racing Game",
    img: image1,
    link: "https://www.behance.net/gallery/134673003/Velocity-Street-Racer",
  },
  {
    title: "E-Book Library",
    descript: "A collection of books that you can browse and search through",
    img: image2,
    link: "https://github.com/Ayselahs/ebook-library-smith",
  },
  {
    title: "Movie Night Planner",
    descript: "Movie watchlist (The Movie Database API) with popular movies,",
    img: image4,
    link: "https://github.com/Ayselahs/com6338-10-10-pham-smith",
  },
  {
    title: "My Lovely Journal",
    descript: "Create entries into your own personal journal",
    img: image3,
    link: "https://github.com/Ayselahs/My_Lovely_Journal",
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <SelectedWork />


      <Footer />
    </>
  )
}