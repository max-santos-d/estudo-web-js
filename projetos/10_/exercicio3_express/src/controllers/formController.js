exports.index = (req, res) => {
    res.render('form');
};

exports.form = (req, res) => {
    const { name, email } = req.body;

    res.render('formData', {name, email});
};