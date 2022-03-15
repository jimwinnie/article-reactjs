export const TitreCom = (props) => {
    const {titre,commentaire} = props.data;
    return <div>{titre} - {commentaire}</div>
}