module.exports = (sequelize, dataTypes) => {
  let alias = 'Actor_movie';
  let cols = {

      id: {
        type:dataTypes.BIGINT(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      actor_id: {
        type:dataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE"
      },
      movie_id: {
        type:dataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE"
      }

  };
  let config ={
    tableName: 'actor_movie',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
  }



  const Actor_movie = sequelize.define(alias, cols, config); 
      return Actor_movie
}
