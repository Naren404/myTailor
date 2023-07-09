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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 p-6 pb-4">
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

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" disabled={true} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Order</button>
                
                <button 
                  type="button" 
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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