import {useState} from "react"
import Calculator from "./components/Calculator"
import logo from './assets/logo.png'
import AbjadTable from "./components/AbjadTable"
import AboutAbjad from "./components/AboutAbjad";

function App() {
const [atIsOpen , setATIsOpen] = useState(false);
const [aboutModalIsOpen , setAboutModalIsOpen] = useState(false)

function handleCloseTableModal(){
  setATIsOpen(false)
}
function handleCloseAboutModal(){
  setAboutModalIsOpen(false)
}

  return (
    <>
    <AbjadTable isOpen={atIsOpen} onClose={handleCloseTableModal} />
    <AboutAbjad isOpen={aboutModalIsOpen} onClose={handleCloseAboutModal} />
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center mt-16 w-[80vw] lg:w-[40vw] mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold">ماشین حساب ابجد</h1>
        <img src={logo} alt="Abjad Calculator" className="h-20" />
      </div>
      <div className="mt-12" dir="rtl">
        <h2 className="text-center my-4 px-6 text-md lg:text-xl">جهت محاسبه جمع مقدار عددی حروف بر اساس سیستم ابجد، کلمه مورد نظر خود را وارد کنید:</h2>  
        <Calculator />
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button className="bg-slate-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>setAboutModalIsOpen(true)}>درباره سیستم ابجد</button>
        <button className="bg-slate-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>setATIsOpen(true)}>جدول حروف ابجد</button>
      </div>
    </>
  )
}

export default App
