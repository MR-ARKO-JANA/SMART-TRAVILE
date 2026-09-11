import pool from '../config/db.js';

// @desc    Get all trips for user
// @route   GET /api/trips
// @access  Private
export const getTrips = async (req, res) => {
  try {
    const trips = await pool.query('SELECT * FROM trips WHERE user_id = $1 ORDER BY created_at DESC', [req.user.id]);
    res.json(trips.rows);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new trip
// @route   POST /api/trips
// @access  Private
export const createTrip = async (req, res) => {
  try {
    const { origin, destination, travel_date, travel_mode, travellers, budget, notes } = req.body;

    if (!origin || !destination || !travel_date) {
      return res.status(400).json({ message: 'Please provide origin, destination, and travel date' });
    }

    const newTrip = await pool.query(
      `INSERT INTO trips 
      (user_id, origin, destination, travel_date, travel_mode, travellers, budget, notes) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [req.user.id, origin, destination, travel_date, travel_mode, travellers, budget, notes]
    );

    res.status(201).json(newTrip.rows[0]);
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a trip
// @route   DELETE /api/trips/:id
// @access  Private
export const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if trip belongs to user
    const trip = await pool.query('SELECT * FROM trips WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    
    if (trip.rows.length === 0) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }

    await pool.query('DELETE FROM trips WHERE id = $1', [id]);
    res.json({ message: 'Trip removed successfully' });
  } catch (error) {
    console.error('Error deleting trip:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
