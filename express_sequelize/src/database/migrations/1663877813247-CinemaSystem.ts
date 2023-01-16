import { literal, QueryInterface } from 'sequelize';
import { ModelAttributes } from 'sequelize/types/model';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('users', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: { type: 'varchar' },
      lastName: {
        type: 'varchar',
        allowNull: true,
      },
      email: {
        type: 'email',
        allowNull: false
      },
      password: {
        type: 'varchar',
        allowNull: false,
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);

    await queryInterface.createTable('movie', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: 'varchar',
        allowNull: false,
      },
      synopsis: {
        type: 'varchar',
        allowNull: true
      },
      totalTicket: {
        type: 'integer',
        allowNull: true,
        defaultValue: 0
      },
      price: {
        type: 'decimal',
        allowNull: false,
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);
    await queryInterface.createTable('showrooms', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: 'varchar',
        allowNull: false
      },
      totalSeat: {
        type: 'integer',
        allowNull: true,
        defaultValue: 0
      },
      totalRowSeat: {
        type: 'integer',
        allowNull: false,
      },
      totalColumnSeat: {
        type: 'integer',
        allowNull: false,
      },
      totalVipSeat: {
        type: 'integer',
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);

    await queryInterface.createTable('movie-time-table', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      movieId: {
        type: 'integer',
        allowNull: false,
        references: {
          model: {
            tableName: 'movie'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },
      date: {
        type: 'date',
        allowNull: false
      },
      start: {
        type: 'timestamp',
      },
      end: {
        type: 'timestamp',
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);

    await queryInterface.createTable('showroom-time-table', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      movieTimeTableId: {
        type: 'integer',
        allowNull: false,
        references: {
          model: {
            tableName: 'movie-time-table'
          },
          key: 'id',
        },
        onDelete: 'cascade'
      },
      showroomId: {
        type: 'integer',
        allowNull: false,
        references: {
          model: {
            tableName: 'showroom'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      }
    } as ModelAttributes);

    await queryInterface.createTable('booking', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: 'integer',
        allowNull: false,
        references: {
          model: {
            tableName: 'user'
          },
          key: 'id'
        }
      },
      movieTimeTableId: {
        type: 'integer',
        allowNull: false,
        references: {
          model: {
            tableName: 'movie-time-table'
          },
          key: 'id',
        },
        onDelete: 'cascade'
      },
      vipSeatId: {
        type: ''
      },
      vipType: {
        type: 'varchar',
        allowNull: true,
      },
      vip: {
        type: 'boolean',
        defaultValue: false,
        allowNull: true
      }
    } as ModelAttributes)
  },
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  down: (queryInterface: QueryInterface) => {
    // do nothing
  },
};
