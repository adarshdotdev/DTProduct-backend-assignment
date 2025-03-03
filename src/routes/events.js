const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getEventById,
  getLatestEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.get("/events", getEventById);
router.get("/events/latest", getLatestEvent);
router.post("/events/", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);
module.exports = router;
