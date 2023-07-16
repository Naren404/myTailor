import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
  title: string,
}

const Section = (props: SectionProps) => {
  const { children, title } = props
  return ( 
    <div className="mx-auto my-12">
      <div className="text-center title my-4">{title}</div>
      
      {children}
    </div>
   );
}
 
export default Section;