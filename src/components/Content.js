import { Component } from 'react';
import getRandomColor from "../scripts/getRandomColor";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            birthDate: "05.07.2003",
            birthPlace: "смт Високопілля",
            education: "Високопільський ліцей, НТУУ «КПІ» (поточна)",
            hobbies: ["Біг", "Вело", "Дослідження роботи різного ПЗ", "Комп'ютерні ігри"],
            favoriteMovies: ["Драйв (2011)", "Той, хто біжить по лезу 2049 (2017)", "Ла Ла Ленд (2016)"],
            favoriteCity: "Київ",
            cityDescriptionFirst: "Київ, столиця та найбільше місто України, є одним з найстаріших і культурно насичених міст Європи. Заснований за легендою у V столітті, Київ є важливим історичним, економічним та політичним центром країни. Розташований на обох берегах Дніпра, Київ охоплює площу понад 800 квадратних кілометрів і населений більше ніж 2,8 мільйонами людей.",
            cityDescriptionSecond:"Історичний центр Києва, Поділ, Печерськ та інші райони міста вражають своєю архітектурною різноманітністю. Вулична архітектура поєднує старовинні будівлі з сучасними хмарочосами, створюючи неповторний образ міста. Знаменита вулиця Києва - Хрещатик - є центральною артерією міста, де можна знайти широкий вибір ресторанів, кафе, магазинів та розважальних закладів.",
        };
    }

    onClickColorChange = () => {
        this.setState({
            colorsStyle: {
                color: getRandomColor(),
                backgroundColor: getRandomColor(),
            }
        });
    }

    render() {
        return (
            <>
                <p onClick={this.onClickColorChange}
                   style={this.state.colorsStyle}>
                    Дата й місце народження: {this.state.birthDate}, {this.state.birthPlace}
                </p>
                <p>Освіта: {this.state.education}</p>
                <p>Хобі:</p>
                <ul>
                    {this.state.hobbies.map((hobby) => (
                        <li key={hobby}>{hobby}</li>
                    ))}
                </ul>
                <p>Улюблені фільми:</p>
                <ol>
                    {this.state.favoriteMovies.map((movie) => (
                        <li key={movie}>{movie}</li>
                    ))}
                </ol>
                <p>З-поміж відвіданих міст, найбільш мені сподобався {this.state.favoriteCity}</p>
                <p>{this.state.cityDescriptionFirst}</p>
                <p>{this.state.cityDescriptionSecond}</p>
            </>
        );
    }
}

export default Content;