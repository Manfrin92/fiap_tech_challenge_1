import React from 'react';

const InvestimentsCardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
      className="flex flex-col 
        bg-[url('/images/investiments-mobile.png')] 
        md:bg-[url('/images/investiments-tablet.png')] 
        lg:bg-[url('/images/investiments-desktop.png')]
        bg-no-repeat 
        bg-cover 
        bg-bottom
        md:bg-bottom-right
        lg:bg-bottom
        pb-[141px] 
        rounded-lg 
        min-h-[633px] md:min-h-[629px] lg:min-h-100
        p-4 md:p-8 lg:p-8"
    >
      {children}
    </section>
  );
};

export default InvestimentsCardLayout;
