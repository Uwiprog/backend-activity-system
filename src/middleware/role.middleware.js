const isAdmin = (req, res, next)  => {
    if(!req.user || req.user.role  !== "admin") {
        return res.status(403),json({
            message: "Akses ditolak. Hanya admin yang diperbolehkan."
        });
    }
    next();
};

const isMahasiswa = (req, res, next) => {
    if(!req.user || req.user.role !=="mahasiswa") {
        return res.status(401).json({
            message: "Akses ditolak. Hanya mahasiswa yang diperbolehkan."
        });
    }
    next();
};

module.exports = {
    isAdmin,
    isMahasiswa
};