import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-6 mx-auto max-w-7xl md:px-12 xl:px-6">
      {children}
    </div>
   );
}
 
export default Container