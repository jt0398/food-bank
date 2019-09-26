/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserRole', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_role_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'UserRole'
	});
};
