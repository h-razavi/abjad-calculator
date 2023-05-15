import React from "react";
import Modal from "./Modal";
import ValueIndicator from "./ValueIndicator";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function AbjadTable({ isOpen, onClose }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal>
      <h2 className="text-black font-extrabold text-lg md:text-4xl mb-8">
        شماره‌گذاری حروف بر اساس سیستم ابجد
      </h2>
      <div className="flex justify-end px-2">
        <ValueIndicator l="د" n={4} />
        <ValueIndicator l="ج" n={3} />
        <ValueIndicator l="ب" n={2} />
        <ValueIndicator l="ا" n={1} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ز" n={7} />
        <ValueIndicator l="و" n={6} />
        <ValueIndicator l="ه" n={5} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ی" n={10} />
        <ValueIndicator l="ط" n={9} />
        <ValueIndicator l="ح" n={8} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ن" n={50} />
        <ValueIndicator l="م" n={40} />
        <ValueIndicator l="ل" n={30} />
        <ValueIndicator l="ک" n={20} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ص" n={90} />
        <ValueIndicator l="ف" n={80} />
        <ValueIndicator l="ع" n={70} />
        <ValueIndicator l="س" n={60} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ت" n={400} />
        <ValueIndicator l="ش" n={300} />
        <ValueIndicator l="ر" n={200} />
        <ValueIndicator l="ق" n={100} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="ذ" n={700} />
        <ValueIndicator l="خ" n={600} />
        <ValueIndicator l="ث" n={500} />
      </div>
      <div className="flex mt-4 justify-end px-2">
        <ValueIndicator l="غ" n={1000} />
        <ValueIndicator l="ظ" n={900} />
        <ValueIndicator l="ض" n={800} />
      </div>
      <p className="mt-12 italic text-black font-extralight px-2">
        در خصوص حروف فارسی //گ،چ،پ،ژ// جهت شماره‌گذاری معادل آن //ک،ج،ب،ز//
        استفاده می‌شود
      </p>
      <button
        className="relative top-2 right-2 bg-red-500 text-white w-12 h-12 rounded-full text-center text-4xl leading-6 focus:outline-none hover:bg-red-600"
        onClick={onClose}
      >
        &times;
      </button>
    </Modal>
  );
}

export default AbjadTable;
