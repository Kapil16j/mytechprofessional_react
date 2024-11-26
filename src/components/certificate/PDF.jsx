const PDF = ({ certId, name, courseName, startDate, endDate }) => {
  const formattedDate = (date) => {
    const formatted = new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const parts = formatted.split(" ");
    const day = parts[1].replace(",", "");
    const month = parts[0];
    const year = parts[2];
    const reordered = `${day} ${month}, ${year}`;

    return reordered;
  };

  return (
    <div className="relative w-[595px] h-[842px] mx-auto flex flex-col items-center justify-start">
      {/* Background image */}
 

      {/* Foreground content */}
      <div className="relative w-full h-full pt-[27px] pb-[31px] px-[27px] flex flex-col items-center justify-start">
        {/* Certificate id container */}
        <div className="w-full text-end">
          <p className="text-[8px] font-semibold leading-4 font-montserrat">
            Certificate ID :
          </p>
          <p className="text-[8px] text-[#2A3390] font-semibold">{certId}</p>
        </div>

        {/* My Tech Professionals logo */}
        <img
          src="/img/student/certificate-okkcode-logo.png"
          alt="My Tech Professionals logo"
          width={142}
          height={71}
        />

        <p className="font-aleo tracking-[3.65px] uppercase text-[55px] font-normal leading-[120px]">
          Certificate
        </p>

        {/* Container with two lines and text */}
        <div className="mt-[-45px] flex items-center justify-center gap-4">
          <div className="w-[110px] h-[1px] rounded-[1px] bg-[#DDC985]"></div>
          <p className="text-base text-black font-light font-aleo leading-[40px] tracking-[-0.5px] opacity-70">
            OF COMPLETION
          </p>
          <div className="w-[110px] h-[1px] rounded-[1px] bg-[#DDC985]"></div>
        </div>

        <p className="text-xs text-black opacity-75 font-Aleo font-medium leading-8 tracking-[1.44px]">
          PROUDLY PRESENTED TO
        </p>

        {/* Student name */}
        <p className="text-[55px] text-[#2A3390] font-normal font-greatvibes leading-[140%] pt-6">
          {name}
        </p>

        {/* Course details */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 font-montserrat text-[11px] font-medium text-black">
          <p>
            has successfully completed{" "}
            <span className="font-bold">{courseName}</span> course
          </p>
          <p>
            from{" "}
            <span className="font-bold">
              {formattedDate(startDate)} to {formattedDate(endDate)}
            </span>
          </p>
          <p>at My Tech Professionals® Pvt. Ltd. Hisar. </p>
          <p>
            The company acknowledge that she followed all the required
            specifications.
          </p>
          <p> She has worked on many real-time projects during course. </p>
          <p> We hope for her best future.</p>
        </div>

        {/* Project manager and director */}
        <div className="max-w-[492px] w-full mx-auto mt-8 flex justify-between items-center">
          <div className="relative h-[1.5px] w-[162px] bg-black flex-shrink-0">
            <p className="absolute left-[50%] translate-x-[-50%] text-center whitespace-nowrap font-montserrat font-medium text-[11px] leading-[28px]">
              Program Manager
            </p>
          </div>

          <div className="w-[74px] h-[83px]">
            <img
              src="/img/student/certificate-best-award.png"
              alt="best award"
              width={74}
              height={83}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="relative h-[1.5px] w-[162px] bg-black flex-shrink-0">
            <p className="absolute left-[50%] translate-x-[-50%] text-center whitespace-nowrap font-montserrat font-medium text-[11px] leading-[28px]">
              Director
            </p>
          </div>
        </div>

        {/* QR code section */}
        <div className="w-full flex items-center justify-start">
          <div className="flex gap-[6px] items-end mt-[75px]">
            <img
              src="/img/student/certificate-qr-code.png"
              width={85}
              height={85}
              alt="qr code"
            />
            <div className="max-w-[124px] w-full font-montserrat text-[8px] font-medium leading-[128%]">
              <p className="w-full text-[#2B2A29] max-w-[125px]">
                By scanning this code you can check the authenticity of this
                certificate or you can visit
              </p>
              <a href="#" className="w-full text-[#2A3390]">
                www.My_Tech_Professionals.com/student/certificate/verify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDF;
