import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

function FooterComp() {
  return (
    <section className="bg-[#000000] w-full py-16 font-sans text-white">
      <div className="w-[90%] max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img
              src="/assets/images/logo.svg"
              alt="Tiimbooktu"
              className="h-12 mb-4"
            />
            <p className="mt-4 text-[#D9D9D9]">Stories. Alliance. Art.</p>
          </div>

          <div className="col-span-1 ">
            <h3 className="text-sm uppercase mb-6 text-[#D9D9D9]">
              Contacts Us
            </h3>
            <div className="flex flex-col gap-2 text-[#FFFFFF]">
              <a href="tel:+2349015019295">+[234] 901 501 9295</a>
              <a href="mailto:kijagoban@tiimbooktu.com">
                kijagoban@tiimbooktu.art
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:flex lg:items-center lg:flex-col">
            <h3 className="text-sm uppercase mb-6 text-[#D9D9D9]">
              Social Media
            </h3>
            <div className="flex gap-4 text-[#FFFFFF]">
              <Link to="/facebook">
                <Facebook />
              </Link>
              <Link to="/instagram">
                <Instagram />
              </Link>
              <Link to="/linkedin">
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm uppercase mb-6 text-[#D9D9D9]">Address</h3>
            <p className="text-[#FFFFFF]">
              303, Suite D, Millennium Plaza, Central Business District,Abuja,
              FCT, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComp;
