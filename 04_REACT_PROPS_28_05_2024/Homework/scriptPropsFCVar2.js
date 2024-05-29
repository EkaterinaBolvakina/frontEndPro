const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = ({ titleText }) => {
    return (
        <>
            <h1>{titleText}</h1>
        </>
    )
}

const TableHead = ({ columns }) => {
    return (
        <>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
        </>
    )
}

const Champion = ({ number, name, year, country }) => {
    return (
        <>
            <tr>
                <td>{number}</td>
                <td>{name}</td>
                <td>{year}</td>
                <td>{country}</td>
            </tr>
        </>
    )
}

const ChampionList = ({ champions }) => {
    return (
        <table style={{textAlign: 'center'}}>
            <TableHead columns={['#', 'Name', 'Year', 'Country']} />
            <tbody>
                {champions.map((champion, index) => (
                    <Champion
                        key={index}
                        number={champion.number}
                        name={champion.name}
                        year={champion.year}
                        country={champion.country}
                    />
                ))}
            </tbody>
        </table>
    )
}

const champions = [
    { number: 1, name: 'Anatoly Karpov', year: '1993–1999', country: 'Russia' },
    { number: 2, name: 'Alexander Khalifman', year: '1999–2000', country: 'Russia' },
    { number: 3, name: 'Viswanathan Anand', year: '2000–2002', country: 'India' },
    { number: 4, name: 'Ruslan Ponomariov', year: '2002–2004', country: 'Ukraine' },
    { number: 5, name: 'Rustam Kasimdzhanov', year: '2004–2005', country: 'Uzbekistan' },
    { number: 6, name: 'Veselin Topalov', year: '2005–2006', country: 'Bulgaria' }
];

root.render(
    <>
        <Title titleText={'FIDE world champions 1993–2006'} />
        <ChampionList champions={champions} />
    </>
)