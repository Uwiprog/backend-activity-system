const validateActivity = (req, res, next) => {
    const { title, description, date, quota } = req.body;

    if(!title || !description || !date || !quota) {
        return res.status(400).json({
            message: "Input kegiatan tidak tepat"
        });
    }

    if (typeof quota !== "number" || quota <= 0){
        return res.status(400).json({
            message: "Quota harus berjumlah lebih dari 0"
        });
    }

    next();
};

module.exports = validateActivity;