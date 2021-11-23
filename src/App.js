import React, {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import Asosiy from "./components/Asosiy/Asosiy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Aloqalar from "./pages/Aloqalar/Aloqalar";
import Biznes from "./pages/BiznesReja/Biznes";
import Jam from "./pages/JamiyatHujjatlar/Jam";
import Nizom from "./pages/Nizom/Nizom";
import Norm from "./pages/NorXuquqiyBaza/Norm";
import Rahbariyat from "./pages/Rahbariyat/Rahbariyat";
import Sertifikat from "./pages/Sertifikat/Sertifikat";
import Tarix from "./pages/Tarix/Tarix";
import Tashkiliy from "./pages/TashkiliyTuzulma/Tashkiliy";
import UmumiyMalumot from "./pages/UmumiyMalumot/UmumiyMalumot";

function App() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {

      window.addEventListener("scroll", () => {
          setScroll(window.scrollY)
      })
        
    }, [scroll])


  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Asosiy} />
        <Route path = "/tarix" exact component = {Tarix} />
        <Route path = "/umumiy" exact component = {UmumiyMalumot} />
        <Route path = "/rahbariyat" exact component = {Rahbariyat} />
        <Route path = "/tashkiliytuzulma" exact component = {Tashkiliy} />
        <Route path = "/nizomlar" exact component = {Nizom} />
        <Route path = "/sertifikat" exact component = {Sertifikat} />
        <Route path = "/normxuquqiybaza" exact component = {Norm} />
        <Route path = "/jamiyathujjatlari" exact component = {Jam} />
        <Route path = "/biznesreja" exact component = {Biznes} />
        <Route path = "/aloqalar" exact component = {Aloqalar} />
      </Switch>
      {scroll > 700 && <ScrollToTop /> }
    </div>
  );
}

export default App;
