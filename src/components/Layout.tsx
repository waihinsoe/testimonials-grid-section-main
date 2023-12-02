import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="p-5 bg-lightGray grid grid-cols-1 desktop:grid-cols-12 desktop:grid-rows-2  desktop:h-[100vh] gap-5 font-barlow ">
      {children}
    </div>
  );
};

export default Layout;
