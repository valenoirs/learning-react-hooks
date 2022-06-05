import useFetch from './hook/useFetch'

const CustomHook = (props) => {
    const [data] = useFetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avenger')

    return (
        <div>
            {data && 
            data.map(element => <p key={element.imdbID}>{element.Title}</p>)}
        </div>
    )
}

export default CustomHook