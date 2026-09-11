import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  try {
    console.log('Clearing existing data...');
    // Order matters because of foreign keys
    await pool.query('DELETE FROM bucket_list');
    await pool.query('DELETE FROM consent');
    await pool.query('DELETE FROM trips');
    await pool.query('DELETE FROM destinations');
    await pool.query('DELETE FROM users');
    await pool.query('DELETE FROM alerts');

    console.log('Seeding destinations...');
    const destinations = [
      {
        name: 'Taj Mahal',
        description: 'Iconic marble mausoleum in Agra, a symbol of eternal love.',
        best_season: 'Winter',
        estimated_budget: 12000,
        latitude: 27.1751,
        longitude: 78.0421
      },
      {
        name: 'Jaipur',
        description: 'The Pink City known for its majestic forts, palaces, and vibrant culture.',
        best_season: 'Autumn',
        estimated_budget: 15000,
        latitude: 26.9124,
        longitude: 75.7873
      },
      {
        name: 'Kerala Backwaters',
        description: 'Serene houseboat cruises through lush waterways and palm-lined lakes.',
        best_season: 'Winter',
        estimated_budget: 25000,
        latitude: 9.9312,
        longitude: 76.2673
      },
      {
        name: 'Goa',
        description: 'Sun, sand, and vibrant nightlife with a blend of Indian and Portuguese cultures.',
        best_season: 'Summer',
        estimated_budget: 18000,
        latitude: 15.2993,
        longitude: 74.1240
      },
      {
        name: 'Varanasi',
        description: 'Spiritual capital of India on the banks of the sacred Ganges river.',
        best_season: 'Year-round',
        estimated_budget: 10000,
        latitude: 25.3176,
        longitude: 82.9739
      },
      {
        name: 'Ladakh',
        description: 'High-altitude desert with stunning mountain passes, monasteries, and crystal-clear lakes.',
        best_season: 'Summer',
        estimated_budget: 35000,
        latitude: 34.1526,
        longitude: 77.5771
      }
    ];

    for (const dest of destinations) {
      await pool.query(
        'INSERT INTO destinations (name, description, best_season, estimated_budget, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6)',
        [dest.name, dest.description, dest.best_season, dest.estimated_budget, dest.latitude, dest.longitude]
      );
    }

    console.log('Seeding demo user...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);

    const newUser = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      ['Rahul Verma', 'rahul@example.com', hashedPassword]
    );

    const userId = newUser.rows[0].id;

    console.log('Adding bucket list items for demo user...');
    const destResult = await pool.query('SELECT id FROM destinations LIMIT 3');
    for (const dest of destResult.rows) {
      await pool.query(
        'INSERT INTO bucket_list (user_id, destination_id) VALUES ($1, $2)',
        [userId, dest.id]
      );
    }

    console.log('Adding demo trips...');
    await pool.query(
      'INSERT INTO trips (user_id, origin, destination, travel_date, travel_mode, travellers, budget, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [userId, 'Mumbai', 'Goa', '2026-10-15', 'Flight', 2, 25000, 'Anniversary trip']
    );

    console.log('Seeding alerts...');
    await pool.query(
      "INSERT INTO alerts (title, message, alert_type, location) VALUES ($1, $2, $3, $4)",
      ['Heavy Rain Warning', 'Expect heavy rainfall and potential flooding in coastal areas.', 'Weather', 'Mumbai']
    );

    console.log('✅ Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
