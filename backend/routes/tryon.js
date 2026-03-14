import express from "express";
import axios from "axios";
import FormData from "form-data";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Try-on request received");
console.log(req.body);
  try {

    const { personUrl, clothUrl } = req.body;

    if (!personUrl || !clothUrl) {
      return res.status(400).json({ message: "Missing image URLs" });
    }

    // Download images
    const personImage = await axios.get(personUrl, { responseType: "arraybuffer" });
    const clothImage = await axios.get(clothUrl, { responseType: "arraybuffer" });

    const form = new FormData();

    form.append("person", personImage.data, "person.jpg");
    form.append("cloth", clothImage.data, "cloth.jpg");

    const response = await axios.post(
      "https://lakita-nongenetical-arnette.ngrok-free.dev/tryon",
      form,
      { headers: form.getHeaders() }
    );

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Try-on failed" });
  }
});

export default router;