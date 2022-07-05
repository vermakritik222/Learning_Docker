const axios = require('axios');

exports.getData = async (req, res) => {
    const data = await axios.get('https://reqres.in/api/user?page=2');
    console.log(data.data);
    res.json({ status: 'success', data: data.data });
};
