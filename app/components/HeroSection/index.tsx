import Container from "../Container";
import hereoImage from '../../assets/heroImage.gif'

const HeroSection = () => {
  return ( 
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="grid py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-6 xs:py-2 sm:place-items-center">
          <img src={hereoImage} />

          <h1 className="mt-2 text-5xl font-bold text-center text-primary dark:text-white md:text-6xl xl:text-7x">
            You Click 
            <p className="text-secondary dark:text-white">We Sew</p>
          </h1>
        </div>
      </Container>
</div>
   );
}
 
export default HeroSection;