import LOGO from "/logoFill.png";

export const Footer = () => {
  return (
    <div className="flex justify-center">
    <footer className="flex justify-center md:justify-between mx-5 my-3 w-1/3 ">
      <div className="flex items-center gap-2">
       <a href="https://portfolio-joacoromero.vercel.app/"><img src={LOGO} alt="logo" className="w-10 h-10" /></a> 
        <a href="https://github.com/JDR89" className="font-nunito text-[#fafafa] ">@JDR89</a>
      </div>

      <div className="items-center hidden md:flex">
        <a
          href="https://portfolio-joacoromero.vercel.app/"
          className="font-nunito text-[#fafafa]"
        >
          -Go to portfolio-
        </a>
      </div>
    </footer>
    </div>
  );
};
