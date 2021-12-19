import createConnection from './index';
import 'dotenv/config'
import { getRepository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';
import { Genre } from '../models/Genre';

class SeederRun {
    public static async run() {
        try {
            const connection = await createConnection();
            console.log('Connection database sucessfully')

            const connectGenre = getRepository(Genre)

            const getGenres: AxiosRequestConfig = {
                url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apiKey}`,
                method:'GET',
            }

            const { data } = await axios.request(getGenres)
            const arrayGenres = []

            for (const genre of data.genres) {
                arrayGenres.push(
                    connectGenre.create({ id_reference: genre.id, name: genre.name })
                )
            }
            await connectGenre.save(arrayGenres)
            console.log(' == Gêneros cadstrados == ')
            

            // const getMovies: AxiosRequestConfig = {
            //     url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}`,
            //     method: 'GET',
            // }

            // const res = await axios.request(getMovies)
            // console.log(res.data)

        } catch (error) {
            console.log('Error connection database', error)
        }
    }

    
}

SeederRun.run()
