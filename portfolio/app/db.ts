import mongoose from "mongoose";
import 'dotenv/config'
if (!process.env.DBURL) {
    throw new Error("DBURL is not defined in the environment variables");
}
mongoose.connect(process.env.DBURL);

const WorkSchema = new mongoose.Schema({
    company: String,
    position: String,
    description: String,
    joinDate: String,
    endDate: String,
    logo: String,
});
    
const EducationSchema = new mongoose.Schema({
    school: String,
    degree: String,
    fieldOfStudy: String,
    description: String,
    joinDate: String,
    endDate: String,
    logo: String,
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    startDate: String,
    endDate: String,
    technologies: [String],
    website: String,
    image: String,
});

// Define the schema for certifications
const CertificationSchema = new mongoose.Schema({
    name: String,
    authority: String,
    credentialId: String,
    url: String,
    issueDate: String,
    logo: String,
});
// Create a SkillsSchema that has an array of strings
const SkillsSchema = new mongoose.Schema({
    skills: [String],
});

// Create model for skills
export const SkillsModel = mongoose.models.Skills || mongoose.model("Skills", SkillsSchema);


// Create model for certification
// It's important to create a model for certification to store and manage certification data in the database
export const CertificationModel = mongoose.models.Certifications || mongoose.model("Certifications", CertificationSchema);

// Check if the model already exists before compiling it
export const EducationModel = mongoose.models.Educations || mongoose.model("Educations", EducationSchema);
export const WorkModel = mongoose.models.Works || mongoose.model("Works", WorkSchema);
export const ProjectModel = mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);