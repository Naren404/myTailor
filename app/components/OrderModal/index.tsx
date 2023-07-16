import { Form, useLoaderData } from "@remix-run/react";
import Tooltip from "../Tooltip";

interface OrderModalProps {
  item: typeof useLoaderData<'item'>
  setState: (arg: boolean) => void,
}

const OrderModal = (props: OrderModalProps) => {
  const { item: {measurements = {}}, setState } = props

  return ( 
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center items-end justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
              <div className="p-6 px-4 pt-5 pb-4 bg-white">
                  <div className="text-center sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add Measurements <i>[in cms]</i></h3>
                    
                    <Form method="post" className="mt-2">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
                        {Object.keys(measurements).map((measurementKey) =>
                          <div>
                            <label htmlFor="first-name" className="flex items-center block text-sm font-medium leading-6 text-gray-900 capitalize">
                              {measurementKey}
                              
                              <Tooltip measurementKey={measurementKey} tip={measurements[measurementKey]}/>

                            </label>
                            <input type="number" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        )}
                      </div>
                    </Form>

                  </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                <button 
                  type="button" 
                  className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-primary hover:bg-pink-400 sm:ml-3 sm:w-auto">Order</button>
                
                <button 
                  type="button" 
                  className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={()=> setState(false)}
                  >
                    Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default OrderModal