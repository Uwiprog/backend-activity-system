const { get } = require("../app");

let activities = [];

const getActivities = (req, res) => {
    res.json(activities);
};

const createActivity = (req, res) => {
    const newActivity = {
        id: activities.length + 1,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        quota: req.body.quota
    };

    activities.push(newActivity);

    res.status(201).json({
        message: "kegiatan nerhasil dibuat",
        data: newActivity
    });
};

const updateActivity = (req, res) => {
    const activityId = parseInt(req.params.id);
    const activity = activities.find(a => a.id === activityId);

    if (!activity) {
        return res.status (404).json({
            message: "Kegiatan tidak ditemukan"
        });
    }

    activity.title = req.body.title;
    activity.description = req.body.description;
    activity.date = req.body.date;
    activity.quota = req.body.quota;

    res.json({
        message: "Kegiatan berhasil diperbaharui",
        data: activity
    });
};

const joinActivity = (req, res) => {
    const activityId = parseInt(req.params.id);
    const activity = activities.find(a => a.id === activityId);

    if (!activity){
        return res.status(404)({
            message: "Kegiatan tidak ditemukan"
        });
    }

    res.json({
        message: `Mahasiswa dengan ID ${req.user.id} berhasil mendaftar kegiatan`,
        activityId: activityId
    });
};

module.exports = {
    getActivities,
    createActivity,
    updateActivity,
    joinActivity
};