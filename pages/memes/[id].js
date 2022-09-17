

export default function Mem({ mem: {name, url} }) {
    console.log("Jestem na Froncie")
    return (
        <>
            <h1>mem</h1>
            <img src={url} alt={`Memo ${name}`}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const response = await fetch('https://api.imgflip.com/get_memes');
    const { data, success } = await response.json();

    if (!success) {
        return {
            redirect: {
                destination: '/',
                pernament: false,
            }
        }
    }

    const mem = data.memes.find(mem => mem.id === id);

    return {
        props: {
            mem,
        }
    }
}