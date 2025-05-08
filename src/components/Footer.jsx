import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideYoutube,
  MessageCircle,
} from "lucide-react";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
              Contact Us
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
            <div className="flex gap-4 text-[#FFFFFF] text-2xl">
              <Link to=" https://web.facebook.com" target="_blank">
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/p/DJKYHvWxWU3/"
                target="_blank"
              >
                <AiFillInstagram />
              </Link>
              <Link
                to="https://www.youtube.com/watch?v=1GoRIlHALYc&list=WL&index=1&t=26s"
                target="_blank"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://www.tiktok.com/@jago.ki?_r=1&_d=ehegmah091gca5&sec_uid=MS4wLjABAAAA-g3r7z4eCzGMZ2moM38nz73CInqo5ja7hqcZevDgptlpS5wF3biqdqldeu8Piz-d&share_author_id=7478971989022983174&sharer_language=en&source=h5_m&u_code=ej68k9h901ad7l&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA-g3r7z4eCzGMZ2moM38nz73CInqo5ja7hqcZevDgptlpS5wF3biqdqldeu8Piz-d&utm_source=more&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=more&user_id=7478971989022983174&enable_checksum=1&share_link_id=26E67122-EB5D-44C9-9363-D9E27C3D0EEC&share_app_id=1233
"
                target="_blank"
              >
                <IoLogoTiktok />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm uppercase mb-6 text-[#D9D9D9]">FIND US</h3>
            <p className="text-[#FFFFFF]">
              1, Eremition Dr, No Man’s Land, Timbuktuland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComp;
