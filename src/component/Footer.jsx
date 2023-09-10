const Footer = () => {
  return (
    <div className="flex justify-center bg-[#000] mt-[200px] text-text-#0000">
      <div className="w-[100%] sm:w-[100%] lg:w-[1200px] flex mx-[auto]   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] rounded-lg p-[40px] ">
          <div className=" text-[#fff]">
            <div className="mb-[10px] text-[22px] font-normal ">
              Address
            </div>
            <p className="mb-[4px] font-light">
              123 Main Street, New York, NY 10001
            </p>
            <p className="mb-[4px] font-light">
              456 Elm Avenue, Los Angeles, CA 90001
            </p>
            <p className="mb-[4px] font-light">
              789 Oak Lane, Chicago, IL 60601
            </p>
            <p className="mb-[4px] font-light">
              101 Pine Road, Houston, TX 77001
            </p>
          </div>
          <div className="text-left contact-container text-[#fff]">
            <div className="contact-heading">Contact</div>
            <p className="contact-info font-light">
              <strong>Tên:</strong> John Doe
            </p>
            <p className="contact-info font-light">
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p className="contact-info font-light">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="contact-info font-light">
              <strong>Address:</strong> 123 Main Street, New
              York, NY 10001
            </p>
          </div>
          <div className="text-[#fff]">
            <h1 className="mb-[4px] text-[16px]">
              The most viewed US newspaper
            </h1>
            <p className="text-[16px]">
              Belongs to the Ministry of Science and
              Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
