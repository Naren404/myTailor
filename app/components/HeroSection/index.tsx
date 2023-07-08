import Container from "../Container";
import hereoImage from '../../assets/heroImage.gif'

const HeroSection = () => {
  return ( 
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
          <div className="relative ml-auto">
            <div className="text-center mx-auto">
              <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 xs:py-2 place-items-center">
                <img src={hereoImage} />

                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  You Click 
                  <p className="text-primary dark:text-white">We Sew</p>
                </h1>
              </div>
            </div>
          </div>
      </Container>
</div>
   );
}
 
export default HeroSection;