import mongoose from "mongoose";

const MentorSchema = mongoose.Schema({
  mentor_Name: String,
  mentor_Email: String,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  
});

const Mentor = mongoose.model("Mentor", MentorSchema);

export default Mentor;