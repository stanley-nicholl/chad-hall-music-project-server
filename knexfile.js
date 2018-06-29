'use strict'

require('dotenv').load()
const path = require('path')

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/chad_hall_music_dev',
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/chad_hall_music',
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },
}