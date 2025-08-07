function Calendario(){
    const date = new Date();
    let year = date.getFullYear();
    return <>
        <p>{year}</p>
    </>
}

export default Calendario;