import React from "react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function AboutAbjad({ isOpen, onClose }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal>
      <article className="text-black text-right overflow-auto md:overflow-hidden">
        <h3 className="font-bold text-lg">حروف ابجد چیست</h3>
        <p className="mb-4">
          کلمه ابجد به چهار حرف ابتدایی الفبای قدیم سامی اشاره می کند که به جای
          اعداد از آن استفاده می شد. یعنی با استفاده از حروف ابجد، ارزش عددی
          حروف مشخص می شد و در ترتیب بندی، طالع بینی و علوم غریبه از این حروف
          استفاده می شد.
        </p>
        <p className="mb-4">
          صورت هشتگانه حروف جُمَّل که با نام اولین صورت (ابجد)، معروف است. ترتیب
          حروف صامت یا بی‌صدا در این نسق، همان ترتیب عبری–آرامی است و این امر،
          مؤید آن است که عرب، الفبای خود را از آنان و از طریق نبطیان اقتباس
          کرده‌است.
        </p>
        <p className="mb-4">
          حروف اَبجَد، شیوه‌ای برای مرتب‌سازی حروف زبان عربی است که برپایه
          الفبای اولیه خط فنیقی، مرتب شده‌اند. گاهی این شیوه در شماره‌گذاری
          موارد یا صفحات به کار می‌رود
          <br />
          برای آسانی از بَر کردن ترتیب این حروف، هر چندتا حرف پیاپی، به شکل واژه
          درآمده و تلفظ می‌شوند. این واژه‌ها عبارت‌اند از: «اَبْجَدْ - هَوََّزْ
          - حُطّی - کَلَمَنْ - سَعْفَصْ - قَرَشَتْ - ثَخِذْ - ضَظِغْ» <br />
          از الفبای ابجد برای متناظر کردن اعداد و واژه‌ها نیز استفاده می‌شود. به
          این ترتیب که برای هر حرف واژه‌ای که بخواهند به عدد تبدیلش کنند، عدد
          متناظر را از جدول ابجد برمی‌دارند و اعداد به دست‌آمده را جمع می‌زنند.
          <br /> برای نمونه در این روش، واژهٔ «علی» برابر با «۱۱۰» می‌شود همچنین
          «یاعلی» برابر با «۱۲۱» می‌باشد. همزه (أ) و الف (ا) هر یک را به عدد ۱
          حساب می‌کنند و حروفی که به واسطه تشدید مکرر است، یک حرف محاسبه
          می‌شوند؛ مثلاً واژه فَعّال را ۱۸۱ می‌گیرند؛ چون ف ۸۰، ع ۷۰، ا ۱ و ل ۳۰
          است. حساب کلماتی همچون اله و رحمن صورت مکتوب است؛ نه ملفوظ. از این رو
          اله عدد ۳۶ خواهد بود و رحمن ۲۹۸. برخی افراد برای این شماره‌ها
          ویژگی‌های فراطبیعی قائلند.
        </p>
        <h3 className="font-bold text-lg">کاربرد حروف ابجد</h3>
        <p>
          الف/ صفحه‌های مقدمهٔ بعضی از کتاب‌ها را با این عددها شماره‌گذاری
          می‌کنند. <br />
          ب/ تاریخ وقایع مهم را با ترکیب حروف ابجد به صورت یک واژه یا یک عبارت
          یا یک جملهٔ معنی دار یا شعر درمی‌آورند که به خاطر سپردن آن واژه یا
          عبارت یا آن جمله یا شعر، تاریخ مزبور را حساب می‌کنند (ماده تاریخ).{" "}
          <br />
          ج/ در موسیقی پس از اسلام، در ثبت اصوات و دساتین از حروف ابجد استفاده
          شده‌است. برای نمونه نغمه‌های دستگاه شور با حروف ابجد عبارت بوده‌اند
          از: «یح یه یب ی ح ه ج ا» و فاصله‌ها و ابعاد آن‌ها: «ط ط ج‍ ج‍ ط ج‍ ج»
          که در موسیقی امروز به ترتیب نت‌های سل، لاکرن، سی بمل، دو، ر، می‌بمل،
          فا و سل را تشکیل می‌دهند. <br />
          د/ گاهی در نوشتن، برای جدا کردن مطالب مختلف از یکدیگر، آن‌ها را با
          حروف ابجد مشخص می‌کنند؛ مثلاً در همین‌جا برای جدا کردن کاربردهای حروف
          ابجد، آن‌ها را با حروف الف، ب، ج و … مشخص کردیم.
        </p>
      </article>
      <button
        className="relative top-2 right-2 bg-red-500 text-white w-12 h-12 rounded-full text-center text-4xl leading-6 focus:outline-none hover:bg-red-600"
        onClick={onClose}
      >
        &times;
      </button>
    </Modal>
  );
}

export default AboutAbjad;