import React from "react"
import Calculator from "./components/Calculator"
import logo from './assets/logo.png'

function App() {
  

  return (
    <>
      <div className="flex gap-8 items-center mt-16 w-[80vw] lg:w-[40vw] mx-auto">
        <h1 className="text-6xl font-extrabold">ماشین حساب ابجد</h1>
        <img src={logo} alt="Abjad Calculator" className="h-20" />
      </div>
      <div className="mt-12" dir="rtl">
        <h2 className="text-center my-4 text-md lg:text-xl">جهت محاسبه جمع مقدار عددی حروف بر اساس سیستم ابجد، کلمه مورد نظر خود را وارد کنید:</h2>  
        <Calculator />
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button className="bg-slate-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">درباره سیستم ابجد</button>
        <button className="bg-slate-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">جدول حروف ابجد</button>
      </div>
    </>
  )
}

export default App
