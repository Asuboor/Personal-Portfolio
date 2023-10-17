import { MdAttachEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <div id="contact">
      <div className="text-center text-5xl mt-24 font-bold">Contact</div>
      <div className="w-2/3 m-auto border-2  p-4 space-y-4 ">
        <div className="text-center text-2xl  m-6 font-lg">
          Feel free to reach out to me for any questions or opportunities 🚀
        </div>
        <div className="flex place-content-center gap-8">
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvmZTglnnLvDJlhdtgJKdttNxMZxnVMLNzxcQRGwrGBvTFQMSZfcfdPNxQpvnvmgdTXbSV">
            <MdAttachEmail className=" w-auto h-8 mb-12" />
          </a>
          <a href="https://www.linkedin.com/in/syed-abdul-suboor-a958b1240/">
            {" "}
            <BsLinkedin className=" w-auto h-8" />
          </a>
          <a href="https://www.instagram.com/abrxr_khxn/">
            {" "}
            <BsInstagram className=" w-auto h-8" />
          </a>
          <a href="https://github.com/Asuboor">
            {" "}
            <BsGithub className=" w-auto h-8" />
          </a>
        </div>
        <div className="text-center text-lg font-lg">
          © {year} Abdul Suboor . All rights reserved.{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
