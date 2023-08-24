const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up a route to handle the timestamp requests
app.get('/api/timestamp/:date_string?', (req, res) => {
    const dateString = req.params.date_string;

    let date;

    if (!dateString) {
        date = new Date();
    } else if (!isNaN(dateString)) {
        date = new Date(parseInt(dateString));
    } else {
        date = new Date(dateString);
    }

    if (date.toString() === "Invalid Date") {
        return res.json({ error: "Invalid Date" });
    }

    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
