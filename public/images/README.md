Place the provided images here:

- favicon-source.png  -> the image you provided as Image 1 (used to generate favicon.ico)
- cover.jpg           -> the image you provided as Image 2 (site cover / OG image)

After uploading these files, generate a favicon.ico from favicon-source.png (there are many online tools or use ImageMagick):

  convert favicon-source.png -resize 64x64 favicon.ico

Place the generated favicon.ico at repository root public/favicon.ico or in public/ and ensure it is committed.

Notes:
- I did not add the Sambnova API key or touch any chatbot/AI files, per instructions.
- Once you confirm the images are uploaded, I can update the PR to include them or generate the favicon if you prefer.
