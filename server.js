import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger  from './middleware/logger.js';
import errorHandeler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8080

const app = express();
// Body parser middleare
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// add logger middleware
app.use(logger);
//setup static folder
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/api/posts',posts);
// use not found error handler middleware
app.use(notFound)
// adding error handler middleware 
app.use(errorHandeler)


app.listen(port, ()=> console.log(`Server is running on port ${port}`))