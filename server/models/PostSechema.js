module.exports = (sequelize,DataTypes) =>{
    const PostSechema = sequelize.define("PostSchema",{
        fname: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        user: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
        },
    })
    return PostSechema;
}