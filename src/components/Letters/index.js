import "./Letters.scss"

const Letters = ({ letterClass, letterArray, index}) => {
    return (
        <span>
            {
                letterArray.map((char, i) =>( 
                    <span key={char + i} className={ `${letterClass} _${i + index}` }>
                        {char}

                    </span>
                ))
            }
        </span>
    )
}

export default Letters