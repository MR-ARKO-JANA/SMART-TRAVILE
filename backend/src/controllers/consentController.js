import pool from '../config/db.js';

// @desc    Get user consent settings
// @route   GET /api/consent
// @access  Private
export const getConsent = async (req, res) => {
  try {
    const consent = await pool.query('SELECT * FROM consent WHERE user_id = $1', [req.user.id]);
    
    if (consent.rows.length === 0) {
      // Create default consent if it doesn't exist
      const newConsent = await pool.query(
        'INSERT INTO consent (user_id) VALUES ($1) RETURNING *',
        [req.user.id]
      );
      return res.json(newConsent.rows[0]);
    }
    
    res.json(consent.rows[0]);
  } catch (error) {
    console.error('Error fetching consent:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user consent settings
// @route   PUT /api/consent
// @access  Private
export const updateConsent = async (req, res) => {
  try {
    const { research_data_enabled, location_data_enabled } = req.body;

    const updatedConsent = await pool.query(
      `UPDATE consent 
       SET research_data_enabled = COALESCE($1, research_data_enabled), 
           location_data_enabled = COALESCE($2, location_data_enabled),
           updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $3 
       RETURNING *`,
      [research_data_enabled, location_data_enabled, req.user.id]
    );

    if (updatedConsent.rows.length === 0) {
      // If it didn't exist, create it
      const newConsent = await pool.query(
        `INSERT INTO consent (user_id, research_data_enabled, location_data_enabled) 
         VALUES ($1, $2, $3) RETURNING *`,
        [req.user.id, research_data_enabled, location_data_enabled]
      );
      return res.json(newConsent.rows[0]);
    }

    res.json(updatedConsent.rows[0]);
  } catch (error) {
    console.error('Error updating consent:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
