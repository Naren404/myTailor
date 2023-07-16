import Container from '../Container';

import deliveryStepLogo from '../../assets/deliveryStepLogo.png'
import designStepLogo from '../../assets/designStepLogo.png'
import measureStepLogo from '../../assets/measureStepLogo.png'
import sewStepLogo from '../../assets/sewStepLogo.png'
import Section from '../Section';

const HowItWorks = () => {
  return ( 
    <Container>
        <Section title='How does it work?'>
            <div className="relative">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <img src={designStepLogo} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className="sub-title">Select Your Design</h3>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <img src={measureStepLogo} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className="sub-title">Upload Your Measurements</h3>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <img src={sewStepLogo} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className="sub-title">We Sew It</h3>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <img src={deliveryStepLogo} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className="sub-title">Delivered To You</h3>
                    </div>
                </div>
            </div>
        </Section>
    </Container>
   );
}
 
export default HowItWorks;