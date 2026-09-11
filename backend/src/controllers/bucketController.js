import pool from '../config/db.js';

// @desc    Get all bucket list items for user
// @route   GET /api/bucket
// @access  Private
export const getBucketList = async (req, res) => {
  try {
    const bucketList = await pool.query(
      `SELECT b.id as bucket_id, d.* 
       FROM bucket_list b 
       JOIN destinations d ON b.destination_id = d.id 
       WHERE b.user_id = $1 
       ORDER BY b.created_at DESC`,
      [req.user.id]
    );
    res.json(bucketList.rows);
  } catch (error) {
    console.error('Error fetching bucket list:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add destination to bucket list
// @route   POST /api/bucket
// @access  Private
export const addToBucketList = async (req, res) => {
  try {
    const { destination_id } = req.body;

    if (!destination_id) {
      return res.status(400).json({ message: 'Destination ID is required' });
    }

    // Check if already in bucket list
    const exists = await pool.query(
      'SELECT * FROM bucket_list WHERE user_id = $1 AND destination_id = $2',
      [req.user.id, destination_id]
    );

    if (exists.rows.length > 0) {
      return res.status(400).json({ message: 'Destination already in bucket list' });
    }

    const newItem = await pool.query(
      'INSERT INTO bucket_list (user_id, destination_id) VALUES ($1, $2) RETURNING *',
      [req.user.id, destination_id]
    );

    res.status(201).json(newItem.rows[0]);
  } catch (error) {
    console.error('Error adding to bucket list:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Remove from bucket list
// @route   DELETE /api/bucket/:id
// @access  Private
export const removeFromBucketList = async (req, res) => {
  try {
    const { id } = req.params; // This is the bucket_list id, not destination_id
    
    // Check if it belongs to user
    const item = await pool.query('SELECT * FROM bucket_list WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    
    if (item.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found or unauthorized' });
    }

    await pool.query('DELETE FROM bucket_list WHERE id = $1', [id]);
    res.json({ message: 'Item removed from bucket list' });
  } catch (error) {
    console.error('Error removing from bucket list:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
