import Container from '../Container';

import deliveryStepLogo from '../../assets/deliveryStepLogo.png'
import designStepLogo from '../../assets/designStepLogo.png'
import measureStepLogo from '../../assets/measureStepLogo.png'
import sewStepLogo from '../../assets/sewStepLogo.png'

const HowItWorks = () => {
  return ( 
    <Container>
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <img src={designStepLogo} alt="" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Select Your Design</h3>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <img src={measureStepLogo} alt="" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Upload Your Measurements</h3>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <img src={sewStepLogo} alt="" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">We Sew It</h3>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <img src={deliveryStepLogo} alt="" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Delivered To You</h3>
                </div>
            </div>
        </div>
    </Container>
   );
}
 
export default HowItWorks;