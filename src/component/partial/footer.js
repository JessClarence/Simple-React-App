
export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer>
            <h2> Copyright © {year} </h2>
        </footer>
    )
}