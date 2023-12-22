function ContactInformation() {
  return (
    <body className="w-3/4 flex flex-col">
      <div className="pl-4 text-lg">Контакти</div>
      <div>
        <table className="my-4 block">
          <tr className="text-sm border-b font-medium  border-gray-500 block my-3 ">
            <td className=" inline-block  w-28 mx-28 ">Назва:</td>
            <td className=" inline-block ">Candy Yarn</td>
          </tr>
          <tr className="text-sm border-b font-medium  border-gray-500 block my-3 ">
            <td className="inline-block w-28 mx-28 ">Адреса:</td>
            <td className=" inline-block ">вулиця Велика Арнаутська, 119, Одеса, Одеська область, 65000</td>
          </tr>{" "}
          <tr className="text-sm border-b font-medium  border-gray-500 block my-3 ">
            <td className="inline-block mx-28  w-28">Телефони:</td>
            <td className="inline-block">
              <table>
                <tr>
                  <a href="tel:380 (97) 661-08-22">380 (97) 661-08-22</a>
                </tr>
                <tr>
                  <a href="tel:380 (95) 661-08-22">380 (95) 661-08-22</a>
                </tr>
                <tr>
                  <a href="tel:380 (93) 661-08-22">380 (93) 661-08-22</a>
                </tr>
              </table>
            </td>
          </tr>{" "}
          <tr className="text-sm border-b font-medium  border-gray-500 block my-3 ">
            <td className="inline-block mx-28  w-28">Email:</td>
            <td className="inline-block">
              <a href="mailto:email@example.com">info@candy-yarn.com.ua</a>
            </td>
          </tr>
          <tr className="text-sm border-b font-medium  border-gray-500 block my-3 ">
            <td className="inline-block mx-28  w-28">Telegram:</td>
            <td className="inline-block">
              <a href="https://t.me/youngPaperEmperor">youngPaperEmperor</a>
            </td>
          </tr>
        </table>
      </div>
      <div className="pl-4 text-lg justify-start">Локація</div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175899.96075889264!2d30.54698034798209!3d46.45985363973933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1696001341341!5m2!1sru!2sua"
        width="500"
        height="400"
        className=" pl-4  "
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </body>
  );
}
export default ContactInformation;
