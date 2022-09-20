import axios from 'axios'
import { baseURL } from './baseURL'

// a) É uma função assíncrona
// b)
type news = {
    title: string,
    content: string,
    date: number
}

async function main(news: news): Promise<void> {
    const {title, content, date} = news
    axios.put(`${baseURL}/news`, {
        title,
        content,
        date
    })
}

main({"title": "Pode anotar, Brasil é Hexa", "content": "Ontem, dia 18/12/2022, o Brasil ganhou da Inglaterra, pelo placar de 2x0. O jogo aconteceu ao meio dia.", "date": 6})