const multer = require('multer');

const uploads = multer({
    storage: multer.memoryStorage(), // Store files in memory
    fileFilter: (req, file, cb) => {
        // Check if the file is an image
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only image files are allowed'), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
}).single('file'); // Expect a single file with the field name 'file'

// const uploads = (req, res, next) => {
//     if (!req.file) {
//         return res.status(400).send({ message: "Please upload a file" });
//     }

//     // Check if the file is an image
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     if (!allowedTypes.includes(req.file.mimetype)) {
//         return res.status(400).send({ message: "Only image files are allowed" });
//     }

//     next();
// }

module.exports = uploads;