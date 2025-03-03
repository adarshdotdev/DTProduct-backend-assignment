const { ObjectId } = require("mongodb");
const { getDB } = require("../db/mongodb");

// Get an event by ID
exports.getEventById = async (req, res) => {
  console.log("reaced here");
  console.log(req.query.id);
  try {
    const db = getDB();
    const event = await db
      .collection("events")
      .findOne({ _id: new ObjectId(req.query.id) });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

// Get Paginated evets
exports.getLatestEvent = async (req, res) => {
  try {
    const { limit = 5, page = 1 } = req.query;
    const db = getDB();

    const events = await db
      .collection("events")
      .find()
      .sort({ schedule: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .toArray();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

// create a new event
exports.createEvent = async (req, res) => {
  try {
    const db = getDB();
    const {
      name,
      tagline,
      schedule,
      description,
      moderator,
      category,
      sub_category,
      rigor_rank,
    } = req.body;

    const newEvent = {
      name,
      tagline,
      schedule: new Date(schedule),
      description,
      files: { image: req.file ? req.file.filename : null },
      moderator,
      category,
      sub_category,
      rigor_rank: parseInt(rigor_rank),
      attendees: [],
    };

    const result = await db.collection("events").insertOne(newEvent);
    res.status(201).json({ eventId: result.insertedId });
  } catch (error) {
    return res.status(500).json({ messag: error.message, error });
  }
};

// update the new event

exports.updateEvent = async (req, res) => {
  try {
    const db = getDB();

    const eventId = req.params.id;
    const updateFields = req.body;

    if (req.file) updateFields.files = { image: req.file.filename };

    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(eventId) }, { $set: updateFields });

    res.status(200).json({ message: "Event updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message }, error);
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const db = getDB();
    const eventId = req.params.id;

    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(eventId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json({ message: "Event Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message, error });
  }
};
