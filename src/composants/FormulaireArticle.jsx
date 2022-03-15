import { useState } from "react";

export const FormulaireArticle = (props) => {
    const [article,setArticle] = useState({titre: "", commentaire: ""})
    function handleChange(e) {
        const {name,value} = e.target;
        setArticle({...article, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (article.titre.length > 0 && article.commentaire.length > 0) {
            props.setData((prevData) => {
                prevData.articles.push({article})
                return {...prevData,articles : prevData.articles}
            })
        }
    }
    return <div>
        <form onSubmit={handleSubmit}>
        <label for="titre">Titre</label>
        <input type="text" name="titre" onChange={handleChange} value={article.titre}/>
        <textarea id="" cols="30" rows="10" className="form-control my-3" name="commentaire" onChange={handleChange} value={article.commentaire}></textarea>
        <label for="titre">Commentaire</label>
        <button type="submit" className="btn btn-outline-dark">Confirmer</button>
        </form>
        
    </div>
}