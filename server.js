import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'public/uploads/' });

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	// res.sendFile('public/index.html');
});

app.post(
	'/upload-profile-pic',
	upload.single('profile_pic'),
	(req, res, next) => {
		// req.file is the `profile_pic` file
		console.log(req.file);
		try {
			// res.send(req.file)
			res.send(`<img src="uploads/${req.file.filename}" alt=""/>`);
		} catch (error) {
			console.log(error);
			res.send(400);
		}
	}
);

app.listen(port, () => console.log(`The server is listening on port ${port}`));
