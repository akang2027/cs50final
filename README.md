# cs50final

This final project is a web-app created through React using a combination of Node.js and CSS, rendered in HTML. The app requires several other dependencies, listed in the .json files, including:
- axios, which allows the mispell function to make POST requests to retrieve misspelled text, 
- dotenv, which allows my OpenAI API key stored in a place and be hidden when posted to Github through gitignore
- os-browserify, which was necessary in order to use dotenv because adding them prevented Node from compiling properly

After downloading the .zip file or entering the codespace, cd into misspeller and type npm start in the terminal. This should automatically start up the web-app after a delay as long as React and the aforementioned dependencies are installed, and the webpack should be succesfully compiled and redirect you through a port to a black-and-white website. On the website should be a text form. As long as you input text into the form and then click submit, a brief "Loading..." button should be followed by a text box that includes the mispelled text in another, grey-outlined text box. To reload the mispelling and send another POST request to ChatGPT, click the Submit button again. 

If there is no text input——in effect, no text to be misspelled, the submit button will not appear, as the submit button is within the misspell component. One of the tested cases where the program will not work as intended is in the instance of a single question input, where the chatbot will attempt to answer the question posed rather than misspell the question. This may also occur with similar inputs that demand an answer to a posed request, such as mathematical equations. I've chosen to keep this rather than complicate my code by adding a condition in the chat completion that removes such cases fearing that these conditions may affect text misspellings that currently function normally. 

https://github.com/akang2027/cs50final
