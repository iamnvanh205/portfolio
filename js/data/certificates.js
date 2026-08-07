// Certificate data structure
// Replace with actual certificate data later
const defineCertificate = (certificate) => ({
  issueDate: "",
  credentialId: "",
  description: "",
  skills: [],
  image: "",
  credentialUrl: "",
  featured: false,
  order: 0,
  ...certificate
});

export const certificates = [
  // Example placeholder (commented out):
  defineCertificate({
    id: "example-cert",
    title: "Certificate Title",
    issuer: "Issuing Organization",
    issueDate: "01/2027",
    credentialId: "CERT-12345",
    description: "Description of what this certificate validates or represents.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    image: "./assets/images/certificates/cert-demo.png",
    credentialUrl: "https://verify.example.com/cert-12345",
    featured: false,
    order: 1
  })
];
