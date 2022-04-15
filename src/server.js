import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/data', (req, res) => {
  res.send({ hello: 'world' })
  console.log('get responded to')
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on')
  })
}
