if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb+srv://test:teste321@cluster0-q8v9x.mongodb.net/vidjot-prod?retryWrites=true&w=majority' }
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}