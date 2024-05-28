const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = ({ titleText }) => {
    return (
        <>
            <h1>{titleText}</h1>
        </>
    )
}

const TableHead = ({ oneTh, twoTh, threeTh, fourTh }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>{oneTh}</th>
                        <th>{twoTh}</th>
                        <th>{threeTh}</th>
                        <th>{fourTh}</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

const Champion = ({ number, name, year, country }) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>{number}</td>
                        <td>{name}</td>
                        <td>{year}</td>
                        <td>{country}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

root.render(
    <>
        <Title titleText={'FIDE world champions 1993–2006'} />
        <TableHead oneTh={'#'} twoTh={'| ----- Name----- '} threeTh={'| --- Year ---'} fourTh={'| --- Country --- |'} />

        <Champion number={1} name={'|      Anatoly Karpov'} year={'| 1993–1999'} country={'| Russia'} />
        <Champion number={2} name={'| Alexander Khalifman'} year={'| 1999–2000'} country={'| Russia'} />
        <Champion number={3} name={'|   Viswanathan Anand'} year={'| 2000–2002'} country={'| India'} />
        <Champion number={4} name={'| 	Ruslan Ponomariov'} year={'| 2002–2004'} country={'| Ukraine'} />
        <Champion number={5} name={'| Rustam Kasimdzhanov'} year={'| 2004–2005'} country={'| Uzbekistan'} />
        <Champion number={6} name={'| 	  Veselin Topalov'} year={'| 2005–2006'} country={'| Bulgaria'} />
    </>
)