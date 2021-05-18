import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Insert() {
  useEffect(async () => {
    let product = {
      title: {
        fa: `لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - SB`,
        en: `Lenovo IdeaPad 330`,
      },
      shortDescription: {
        fa: `<ul>
          <li>ظرفیت حافظه RAM:
      4 گیگابایت</li>
      <li>
      ظرفیت حافظه داخلی:
      یک ترابایت 
      </li>
      <li>
      سازنده پردازنده گرافیکی:
      Intel
      </li>
      <li>
      اندازه صفحه نمایش:
      15.6 اینچ
      </li>
      <li>
      طبقه‌بندی:
      کاربری عمومی   
      </li>
      </ul>`,
        en: `<ul>
          <li>HIGH PERFORMANCE LAPTOP: The IdeaPad 330 15 is equipped with an Intel Core i5-8250U Processor, Windows 10 Home, 8 GB DDR4, 1TB HDD + 16 GB intel Optane Memory and so much more</li><li>SLEEK DESIGN: This powerful everyday laptop is designed with a special protective finish to guard against wear and tear, as well as rubber detailing on the bottom to maximize ventilation and extend component life</li><li>MAXIMUM PRODUCTIVITY: With the latest generation of Intel processing and integrated Intel UHD graphics, you’ll enjoy seamless multitasking, immersive gaming, faster bootups, and more on your laptop computer</li>
          </ul>`,
      },
      longDescription: {
        fa: `لپ تاپ IP330 جزء سری های میان رده شرکت لنوو قرار دارد و در حال حاضر یکی از جدیدترین لپ تاپ سری Ideapad این شرکت محسوب می شود که در سال 2018 رونمایی گردید. این لپ تاپ جایگزین سری پرفروش IP320 گردیده و با سخت افزار مناسب و وزن نه چندان بالا مناسب امور روزمره، خانگی، اداری و مهندسی با پردازش پایین می باشد. ضخامت این دستگاه کمتر از 23mm و وزن دستگاه 2.2Kg می باشد که اعدادی مناسب برای یک لپ تاپ 15.6 اینچی میان رده محسوب می شوند البته ازاین حیث چندان گزینه مناسبی برای کسانی که حمل و نقل زیادی با دستگاه خود دارند نمی باشد. قاب پشتی لپ تاپ IP330 از جنس پلاستیک باکیفیت بالا می باشد که علاوه بر استحکام مطلوب در مقابل خط و خش نیز تا حدود زیادی مقاوم است. مات بودن قاب پشتی باعث گردیده تا اثر انگشت تا حدودی بر روی آن باقی بماند که این یکی از معدود نقاط منفی این لپ تاپ می باشد. البته جنس قاب پشتی نسبت به مدل IP320 مقاومت بیشتری در مقابل خط و خش دارد. برای ساخت قسمت زیرین لپ تاپ IP330 از پلاستیک با کیفیت نسبتا مطلوب استفاده شده است و اثر انگشت برای آن باقی نمی ماند و استحکام آن نیز مناسب است. 2 اسپیکر دستگاه نیز که از تکنولوژی دالبی بهره می برند، در قسمت زیرین و در جلوی آن قرار دارند. جنس قاب زیرین چندان لیز نمی باشد و هنگامی که دستگاه را بر روی پای خود قرار می دهید احساس سور خوردن دستگاه را نخواهید داشت. در قسمت داخل دستگاه نیز لنوو از جنس پلاستیک با کیفیت استفاده کرده که برای یک لپ تاپ میان رده انتخاب مناسبی می باشد. طراحی قاب داخلی در عین سادگی جذاب بوده و نسبت به نسل قبلی تفاوت های زیادی ندارد و تنها خطوطی افقی کمرنگی که بر روی این قاب وجود دارند تنها تفاوت آن با نسل قبلی می باشند. فضا برای کار با صفحه کلید و تاچ پد و همچنین محل قرار گیری دست ها بسیار مناسب در نظر گرفته شده است و برای کسانی که روزانه تایپ بالایی دارند گزینه بسیار ایده آلی می باشد. طراحی داخلی این لپ تاپ تا حدود زیادی مشابه لپ تاپ IP320 این شرکت می باشد. طراحی کیبرد لپ تاپ IP330 از نوع جزیره ای و فضای بین دکمه ها برای کارهای روزمره و تایپ مناسب است.اندازه دکمه ها استاندارد بوده و جنس آنها نیز مناسب می باشد.`,
        en: `<h4>Lenovo IdeaPad 330 Summary</h4><p>Lenovo IdeaPad 330 is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Celeron Dual Core processor and it comes with 8GB of RAM. The Lenovo IdeaPad 330 packs 128GB of HDD storage.

          Graphics are powered by AMD Radeon R2. Connectivity options include Bluetooth, Ethernet and it comes with 3 USB ports (2 x USB 3.0), Mic In, RJ45 (LAN) ports.
          
          As of 18th May 2021, Lenovo IdeaPad 330 price in India starts at Rs. 16,990.</p>`,
      },
    };
    try {
      let res = await axios.post("/api/product", product);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>A basic multilanguage website</title>
        <meta
          name="description"
          content="let's build a multilanguage website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
    </div>
  );
}
