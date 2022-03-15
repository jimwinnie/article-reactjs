import { useState } from "react";
import { FormulaireArticle } from "./FormulaireArticle";
import { TitreCom } from "./TitreCom";
export const Article = () => {
    const [data,setData] = useState({
        id:0,
        articles: [{titre:"premier titre",commentaire:"premier commentaire"}]
    })
    const [show,setShow] = useState(true)
    return <article>
        <button onClick={() => setShow(true)}>Afficher le formulaire</button>
        <br></br>
        <br></br>
        {show === true && <FormulaireArticle setData={setData}/>}
        <br></br>
        <button onClick={() => setShow(false)}>Masquer le formulaire</button>
        <hr></hr>
        <div className="row">
            {data.articles.map((article,index) => {
                return <div className="col-lg-3" key={index}><TitreCom data={article}></TitreCom>
                </div>
            })}
        </div>
    </article>
}