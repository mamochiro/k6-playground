import app from './app';

const NODE_ENV = process.env.NODE_ENV || 'development'
const NODE_PORT = process.env.NODE_PORT || 3000

app.listen(NODE_PORT, () => {
    console.log(`Server is running on port ${NODE_PORT} (${NODE_ENV})`)
})